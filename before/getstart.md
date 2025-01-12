# 一些你需要知道的基本事项

本项目的目标：

- 为 PCL2 社区版联机服务器的不同实现提供统一的接口

## 基本约定

如无特殊说明

- API 使用 HTTP(S) 协议

- 其他部分使用 TCP 协议

- API 请求统一使用 JSON 格式 + UTF-8 编码

- 使用正确的 HTTP 状态码标识状态，参考 [Mozilla Developer Network#HTTP状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

- 所有鉴权接口均需要检查 `Authorization` ，其格式应当为 `Authorization: Token <访问令牌>`，应排除大小写导致认证失败问题

- 刷新令牌和访问令牌可以为任意字符串，访问令牌有效期 48 小时，刷新令牌有效期 14 天。
