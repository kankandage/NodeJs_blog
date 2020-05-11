知识要点
    1.用户访问
        1.1 用户通过URL访问web应用，如： http://localhost:8081/
        1.2 web后端根据用户访问的URL处理不同的业务逻辑

    2.路由绑定
        通过app.get()或app.post()等方法可以一个url路径和N个函数进行绑定
            app.get('/',function(req,res.next){})
                req:requst对象-保存客户端请求相关的一些数据--http.requst
                res:respose对象-服务端输出对象，提供了一些服务端输出相关的一些方法--http.response
                next:方法,用于执行下一个和路径匹配的函数
    3.内容输出
        通过res.send(string)发送内容至客户端

    4.模板的使用
        后端逻辑和页面表现分离--前后端分离
    5.模板配置
        swig

    6.静态文件托管目录
        app.use('/public',express.static(__dirname + '/public'))
        在pulic目录下划分并存放好相关静态资源文件

    用户发送http请求--> url --> 解析路由 -->  找到匹配的规则 --> 指定绑定函数，返回对应的内容

    /pulic --> 静态 --> 直接读取指定目录下的文件，返回给用户

    动态 --> 处理业务逻辑 -->   加载模板，解析模板 -->   返回数据给用户

7.模块划分
    根据功能进行模块划分
        前台模块
        后台管理模块
        API模块

    使用app.use()进行模块划分
        app.use('/admin', require('./routers/admin'));
        app.use('/api', require('./routers/api'));
        app.use('/',require('./routers/main'));

8.前台路由+模板
    main模块
        /       首页
        /view   内容页

    api模块
        /               首页
        /register       用户注册
        /login          用户登录
        /comment        评论获取
        /comment/post   评论提交

    admin模块
            /               首页
        用户管理
            /user           用户列表
        分类管理
            /category       分类列表        
            /category/add   分类添加        
            /category/edit  分类修改        
            /category/delete 分类删除        
        文件内容管理
            /article        内容列表
            /article/add    内容添加
            /article/edit   内容修改
            /article/delete 内容删除
        评论内容管路
            /comment        评论列表
            /comment/delete 评论删除

9.功能开发顺序
    用户 -->   栏目 --> 内容 --> 评论
10.编码顺序
    通过Schema定义设计数据存储结构
    功能逻辑
    页面展示