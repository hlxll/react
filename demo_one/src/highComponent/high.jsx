import React from 'react'
import highFeact from './index'
const Banaer = highFeact('www.baidu.com')(props =>{
    return (
        <div>
            <p>高阶组件</p>
        </div>
    )
})
export default Banaer;
