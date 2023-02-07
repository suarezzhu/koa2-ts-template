/*
 * @Author: wuJunJie
 * @Date: 2023-02-06 16:48:24
 * @LastEditTime: 2023-02-07 16:14:43
 * @LastEditors: wuJunJie
 * @Description:
 * @FilePath: /serve/src/services/user.ts
 */
import User from "../models/User";

// 获取用户列表
interface getUserList {
    offset?: number;
    limit?: number;
    project?: string;
}
export const getUserList = async (params: getUserList) => {
    const { offset = 0, limit = 10, project = "" } = params;
    const findParams = {
        project
    } as {
        project?: string;
    };

    if (!findParams.project) delete findParams["project"];

    return await User.findAndCountAll({
        limit,
        offset,
        order: [["id", "desc"]],
        where: findParams
    });
};
