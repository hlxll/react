import React, { useContext, useEffect } from 'react'
import {AppContext} from './index.js'
import LoginChild from './loginchild.js'
function ChildIndex(){
    // 这个是组件互享的数据，使用这个钩子获得互享数据
    const { username } = useContext(AppContext)
    // 异步钩子，大多在异步任务时候使用，两个参数，第一个是异步函数，第二个是监听数据，
    //当第二个数组数据改变，就会执行异步任务，初始化时候也会执行异步
    // useEffect(()=>{
    //     console.log('改变')
    // },[username])
    return (
        <div>
            childIndex组件
            <p>{username}</p>
    <p>{}</p>
            <LoginChild />
        </div>
    )
}
export default ChildIndex