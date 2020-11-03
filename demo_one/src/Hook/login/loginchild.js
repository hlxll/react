import React, { useContext } from 'react'
import {AppContext} from './index.js'
import { globalContext } from './qlabel.js'
function ChildIndex(){
    const {username} = useContext(AppContext)
    console.log(this)
    return (
        <div>
            <p>login孙路由{username}</p>
        </div>
    )
}
export default ChildIndex
ChildIndex.contextType = globalContext