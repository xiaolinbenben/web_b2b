### 准备环境

安装 mysql
安装 python
安装 node
安装 nginx

放开防火墙端口/telnet 检查
需要客户提供邮箱、域名、logo

### 运行说明

清空日志
导出 sql
复制 sql 到远程服务器
远程服务器建库并恢复 sql
server 文件夹主要内容复制到服务器
修改 settings.py 中的 Debug/ALLOWED_HOSTS
修改 settings.py 中的 BASE_HOST_URL (https 格式)
修改 settings.py 中的上传文件大小限制
修改 settings.py 中的 smtp 设置
修改 settings.py 中的数据库名称/用户名/密码
pip 安装依赖
管理员权限运行: python manage.py runserver 0.0.0.0:port(指定端口)

### linux 端启动命令：

sudo nohup python3 manage.py runserver 0.0.0.0:8000 >> django.log 2>&1 &

查看端口状态
netstat -pln | grep 8000

停止服务

用 ps aux | grep runserver 查出进程号，再执行 kill 进程号 即可。

### 常见问题

建库语句

CREATE DATABASE IF NOT EXISTS python_db DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_general_ci;

接口请求频次限制

### 登录接口

调 login -> 生成 token

### 注意

update 接口的时候，如果 model 里面存在多对多字段，则需要设置 explode
