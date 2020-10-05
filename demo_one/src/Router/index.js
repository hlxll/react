import Home from '../Page/Home/index'
import Hook from '../Hook/login/index'
import Right from '../login/LoginRight'
let routes = [
    {path: '/home', component: Home, exact: true},
    {path:'/hook',component:Hook},
    {path: '/right',component:Right}
]
export default routes;