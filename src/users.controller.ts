import { Controller, Get, Param, Post, Body, Put, Delete, Res } from "@nestjs/common";
import { Response } from "express";

interface VidParams {
    id: number,
    name: string
}

interface CreateUserOtd {
    id: number,
    name: string,
    age: number,
}

let users: CreateUserOtd[] = [];

@Controller('/users')
export class UsersController {
    //! ROUTE PARAMS
    @Get('/videos/:id/:name')
    // getUsers(@Param('id') param:number)  //If single param, We can extract like this
    getUsers(@Param() param: VidParams) { //Same for @Query and @Headers 
        console.log(param.id, param.name);
        return {
            message: "List of all users"
        };
    }


    @Post('/profile')
    updateProfile(@Body() body: string) { //FOR specific Key, updateProfile(@Body('name') body 
        console.log("Body Recieved", body)
        return {
            success: true,
            message: "Profile updated"
        }
    }

    // CRUD OP IN NEST JS
    @Post("/profileData")
    updateProfileData(@Body() body: CreateUserOtd) {
        users.push(body);
        return {
            success: true,
            message: "Profile updated"
        }
    }

    @Get()
    getAllUsers() {
        return users
    }

    @Get(":id")
    getUserById(@Param('id') id: number) {
        // console.log("id", typeof (id));
        return users.find((user) => +user.id === +id)
    }


    @Put(":id")
    updateUserById(@Param('id') id: number, @Body() body: CreateUserOtd, @Res({ passthrough: true }) res: Response) {
        // console.log("id", typeof (id));
        const userId = users.findIndex((user) => +user.id === +id)
        if (userId === -1) {
            res.status(404)
            return {
                success: false,
                message: "User not found"
            }
        }
        users[userId] = body
        return {
            success: true,
            message: "updated user"
        }
    }


    @Delete(":id")
    deleteUserById(@Param('id') id: number, @Body() body: CreateUserOtd) {
        // console.log("id", typeof (id));
        users = users.filter((user) => +user.id !== +id)
        
        return {
            success: true,
            message: "user deleted"
        }
    }
}