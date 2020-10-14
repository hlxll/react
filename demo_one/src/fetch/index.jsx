import React,{Component} from 'react';
export default class App extends Component{
    componentDidMount(){
        //get方法，参数可以直接在url后面加
        fetch('url')
        .then(res=>res.json())
        .then(data=>{
            
        })
        fetch('url',{
            method: 'POST',
            body: {
                name: '1',
                age: '2'
            }
        })
        //跨域：开发模式下利用环境解决，生产模式下使用jsonp等
        //打包之后是生产模式，平时是开发模式
        // 使用http-proxy-middleware跨域,在src下创建setupProxy.js文件
        //参数可以利用querystring，利用qs.stringify(params),当传入params是json数据，会转化为name='123'格式参数
    }
    render(){
        return{

        }
    }
}