import * as constants from './actionTypes'

// 默认的数据
const defaultState = {
    homeData: {},
    sowingData: [],
    sendData: [],
    nameAndAge: []
};

//第二步，处理dispatch传递过来的数据
export default (state = defaultState, action)=>{
    if(action.type === constants.INIT_HOME_DATA){
        const newState = JSON.parse(JSON.stringify(state));
        newState.homeData = action.homeData;
        return newState;
    }else if(action.type === constants.INIT_SOWING_DATA){
        const newState = JSON.parse(JSON.stringify(state));
        newState.sowingData = action.sowingData;
        return newState;
    }else if(action.type === constants.SEND_TYPE){
        //state旧的state，action新数据
        const newState = JSON.parse(JSON.stringify(state));
        // newState.sendData = action.sendData;
        return Object.assign(newState, action)
        // return newState;
    }else if(action.type == constants.NAME_AGE){
        const newState = JSON.parse(JSON.stringify(state))
        return Object.assign(newState, action)
    }
    return state;
}