### pm2 常用命令

```bash
# 启动
pm2 start ...
# 查看
pm2 list
# 重启
pm2 restart <AppName>/<id>
# 停止
pm2 stop <AppName>/<id>
#删除
pm2 delete <AppName>/<id>
# 信息
pm2 info <AppName>/<id>
# log
pm2 log <AppName>/<id>
# monit
pm2 monit <AppName>/<id>
```

### 进程守护
在遇到程序崩溃时，使用 `node app.js` 或 `nodemon app.js` 会直接报错崩溃，但是不会自动重启。但是 `pm2` 会帮助我们自动重启。

### pm2 配置
pm2.config.json
```json
{
  "apps": {
    "name": "pm2-test-server",
    "script": "app.js",
    "watch": true,
    "ignore_watch": [
      "node_modules",
      "logs"
    ],
    "error_file": "logs/err.log",
    "out_file": "logs/out.log",
    "log_data_format": "YYYY-MM-DD HH:mm:ss"
  }
}
```
### pm2 核心价值
进程守护、日志记录、多进程
