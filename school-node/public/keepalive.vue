var keepalive = {
    name: 'keep-alive',
    abstract: true, //虚拟组件，不会渲染dom但是会渲染VNode节点
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [Number, String]
    },
    created: function(){
        this.cache = Object.create(null)
        this.keys = [];//存储cache缓存组件的key
    },
    destroyed: function(){
        for(let key in this.cache){
            //清除缓存
            pruneCacheEntry(this.cache, key, this.keys)
        }
    },
    mounted: function(){
        this.watch('inclued', function(val){
            //该方法会把所有符合的组件存入cache，key存入keys，如果超过max，则会删除第一个key
            pruneCache(val)
        })
        this.watch('exclued', function(val){
            pruneCache(val)
        })
    },
    render(){
        
    }
}