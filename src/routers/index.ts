/*
 * @Author: wuJunJie
 * @Date: 2023-02-06 14:56:36
 * @LastEditTime: 2023-02-06 15:12:19
 * @LastEditors: wuJunJie
 * @Description:
 * @FilePath: /serve/src/routers/index.ts
 */
"use strict";
import Router from "koa-router";
import controllers from "../controllers";

// -------------公共路由(无需token校验)-----------------------
const publicRouter = new Router();
publicRouter.prefix("/api");
publicRouter.get("/", controllers.test.testGet);

// --------------私有路由(需token校验)----------------------
const privateRouter = new Router();
privateRouter.prefix("/api");
privateRouter.post("/", controllers.test.testPost);

// export default {
//     privateRouter,
//     publicRouter
// };

module.exports = {
    privateRouter,
    publicRouter
};
