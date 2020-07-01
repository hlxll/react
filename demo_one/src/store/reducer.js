const defaultState = {
    inputValue : 'xll',
    reducerData: [
        'huanglin'
    ],
    ThunkNum: 0
}
export default (state = defaultState, action) => {
    //reducer里只能接收state，不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.reducerData.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'addAll'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.reducerData.push('默认值')
        return newState
    }
    if(action.type === 'AddOne'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.ThunkNum += action.value
        return newState
    }
    if(action.type === 'takeEvery'){
        console.log('initsaga')
        //saga的select获取的数据是这里返回的
        return Object.assign({}, state, action)
    }
    if(action.type === 'login_success'){
        console.log(action)
        return action
    }
    return state
}