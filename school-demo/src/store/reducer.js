// 
const defaultState = {
  isLogin: false,//判断是否登录
  loginUsername: ''
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  console.log(action)
  //reducer里只能接受state，不能改变state
  if (action.type === 'changeIsLogin') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.isLogin = action.value
    return newState
  }
  if (action.type === 'changeUsername') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.loginUsername = action.value
    return newState
  }
  return state
}
//统一请求改变state格式，type和value（value是改变之后的数据）
// const action = {
//   type: '',
//   value: 'huanglin'
// }
// store.dispatch(action)