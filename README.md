基于nodejs的博客系统
    1.功能分析
        1.1 前台---
                |--首页内容聚合
                |---列表页---分类列表
                |---内容页---评论
                |---注册
                |---登录
        1.2 后台---
                |---登录
                |---分类管理
                    |---分类列表
                    |---添加分类
                    |---修改分类
                    |---删除分类
                    |---查看分类下所有博文
                |---内容管理
                    |---内容列表
                        |---所有内容
                        |---按分类查看
                    |---添加内容
                    |---修改内容
                    |---删除内容
                    |---查看内容
                |---评论管理
                    |---评论列表
                        |---所有评论
                        |---查看指定博文评论
                    |---删除评论
    
    2.项目创建 安装初始化 第一个请求的实现
        2.1 框架实现
            NodeJS
            Express 一个简介的node.js Web应用框架,提供一系列强大的特性帮助我们创建各种web应用
            Mongodb 数据库
            第三方模块&中间件
                bodyParser:解析post请求数据
                cookies:读/写cookie
                swig:模板解析引擎
                mongoose：操作mongodb数据
                markdown:markdown语法解析生成模块
                ......
            
        2.2文件目录
            |---db  数据库存储目录  
            |---models  数据库模型文件目录
            |---public  公共文件目录(css、js、image......)
            |---routers 路由文件目录
            |---schemas 数据库结构文案(schema)目录
            |---view    应用(启动)入口文件


                        