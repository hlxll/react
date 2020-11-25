import Home from '../Page/Home/index.jsx'
import Hook from '../Hook/login/index'
import Right from '../login/LoginRight'
import Refs from '../Ref/index'
let routes = [
    //exact精准匹配，strict更精准匹配，斜杠都是会匹配到
    {path: '/home', component: Home},
    {path:'/hook', component: Hook},
    {path: '/right',component:Right},
    {path: '/refs', component: Refs}
]
export default routes;