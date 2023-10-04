import { Controller, Get, Req, Post, Patch, Delete, Put, HttpCode, HttpStatus, Res, Header, Redirect } from "@nestjs/common";
import { Request, Response } from "express";

// iska mtlb it will run on /users path
@Controller('/users') // (Decorator) telling nest js that this is controller class
export class UsersController {

    @Get() // This decorator will handle requests to /users
    // @Redirect("/users/profile", 201) //To redirect to other router
    getUsers() {
        return {
            message: "List of all users"
            // url: '/users/profile', //to redirect dynamically based on some calc
        };
    }


    @Get("/profile")
    getProfile(@Req() req: Request) {

        return {
            name: "tanzeel's  profile",
        };
    }

    @Post("/profile")
    // @HttpCode(200) //nest js deals with status code by default but we can user custom like this
    @HttpCode(HttpStatus.CREATED) //Or we can user enums like this provided by nest js itself
    @Header('Cache-Control', 'none')
    createProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        // res.status(201); //optional (overrides oper wala code)
        //we have to send "res" if arg passed
        // res.json({
        //     success: true,
        //     message: "Profile created"
        // })

        return {
            success: true,
            message: "Profile created"
        }
    }

}