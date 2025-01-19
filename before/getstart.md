# 一些你需要知道的基本事项

本项目的目标：

- 为 PCL2 社区版联机服务器的不同实现提供统一的接口。

## 基本约定

如无特殊说明，

- API 使用 HTTP(S) 协议；
- API 请求统一使用 JSON 格式 + UTF-8 编码；
- 使用正确的 HTTP 状态码标识状态，参考 [Mozilla Developer Network#HTTP状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)；
- 其他部分使用 TCP 协议；
- 使用时间戳进行校验的部分统一使用 UTC+0 时区进行计算；
- 通用错误格式：

```jsonc
{
  "status": 400, // HTTP 状态码
  "message": "人类可读文本"
}
```

## 鉴权

- 所有鉴权接口均需要检查 `Authorization` ，其格式应当为 `Authorization: Token <访问令牌>`，大小写均可。
- 访问令牌可以为任意字符串，访问令牌有效期 48 小时。

## 国际化

- 服务端如果实现了国际化，则所有人类可读文本应被翻译为 [Accept-Language](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language) 指定的语言，若未指定或指定的语言不存在，回落语言为：`简体中文（zh-CN）` + `英文 （en-US）` （若只支持其中一种则返回相对应的语言文本）
