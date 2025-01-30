# 1.3 管理接口文档

## 封禁账户

API 接口地址：

```

PUT /api/user/<identifier>/lock

```

需提交的数据为:


```

{
    "reason":"封禁理由" //可选，默认为你已被联机服务器管理员封禁
}

```


## 解封账户

```

DELETE /api/user/<identifier>/lock

```