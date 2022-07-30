# 注意事项

* traefik的路由服务信息存在consul的kv里面，当dev的时候，不要直接拷贝kv.snap到test的consul里面，两边的数据不相通
* 这种部署开发时候非常好