/*
 * @Author: wuJunJie
 * @Date: 2023-02-06 15:40:00
 * @LastEditTime: 2023-02-06 16:09:16
 * @LastEditors: wuJunJie
 * @Description:
 * @FilePath: /serve/src/models/User.ts
 */
import sequelize from "../services/pool";
import { Model, DataTypes } from "sequelize";
import moment from "moment";

// 定义管理员模型
class User extends Model {}

// 初始管理员模型
User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键ID"
        },

        nick_name: {
            type: DataTypes.STRING,
            comment: "微信昵称"
        },

        consumption_times: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "消费次数"
        },

        consumption_amount: {
            type: DataTypes.DECIMAL(2),
            defaultValue: 0,
            comment: "消费金额"
        },

        token: {
            type: DataTypes.STRING,
            comment: "用户token"
        },

        avatar: {
            type: DataTypes.STRING,
            comment: "微信头像"
        },

        wx_openid: {
            type: DataTypes.STRING,
            comment: "微信openid"
        },

        wx_unionid: {
            type: DataTypes.STRING,
            comment: "微信生态唯一id"
        },

        project: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "game",
            comment: "项目标识,game(game小程序) wallpaper(壁纸小程序) admin(运营后台) game-h5(game公众号端) wallpaper-h5(壁纸公众号端) web(pc官网) app(app端)"
        },

        mobile: {
            type: DataTypes.STRING,
            comment: "手机号"
        },

        password: {
            type: DataTypes.STRING,
            comment: "账号密码",
            defaultValue: "123456"
        },

        email: {
            type: DataTypes.STRING,
            comment: "邮箱"
        }
    },
    {
        sequelize,
        modelName: "user",
        freezeTableName: true
    }
);

export default User;
