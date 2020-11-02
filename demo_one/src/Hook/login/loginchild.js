import React, { useContext } from 'react'
import {AppContext} from './index.js'
function ChildIndex(){
    const {username} = useContext(AppContext)
    
    return (
        <div>
            <p>login孙路由{username}</p>
        </div>
    )
}
export default ChildIndex