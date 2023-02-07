/*
 * @Author: wuJunJie
 * @Date: 2023-02-06 15:00:51
 * @LastEditTime: 2023-02-07 16:14:20
 * @LastEditors: wuJunJie
 * @Description:
 * @FilePath: /serve/src/controllers/test.ts
 */

import { getUserList } from "../services/user";

export const testGet = async (ctx: any, next: any) => {
    // ctx.body = process.env.NODE_ENV;
    let list = await getUserList({ project: "app" });
    ctx.body = {
        count: list.count,
        list: list.rows || []
    };
    return next();
};

export const testPost = (ctx: any, next: any) => {
    ctx.body = "testPost";
    return next();
};
