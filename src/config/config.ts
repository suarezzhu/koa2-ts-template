export const FIXED_KEY = {
    port: 3232, //项目端口
    testEnv: "development", // process.env.NODE_ENV 测试环境值
    prodEnv: "production", // process.env.NODE_ENV 生产值

    projectList: ["game", "wallpaper", "admin", "game-h5", "wallpaper-h5", "web", "app"], //项目标识列表

    databaseOfTest: {
        dbName: "store",
        host: "101.132.68.244",
        user: "root",
        password: "980225.wjj",
        port: 3306
    }, //测试环境数据库-阿里云

    database: {
        dbName: "store",
        host: "81.69.234.164",
        user: "root",
        password: "980225.wjj",
        port: 3306
    } //正式环境数据库-腾讯云
};
