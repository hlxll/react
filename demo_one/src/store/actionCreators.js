import * as constants from './actionTypes'
// import {getHomeData, getSowingData} from './../Api/index'

// 0. 获取首页数据
// export const getHomeDataAction = () => {
//     return (dispatch)=>{
//         // 请求网络数据
//         getHomeData().then((res)=>{
//             if(res.status_code === 200){
//                 const homeData = res.result[0];
//                 dispatch({
//                     type: constants.INIT_HOME_DATA,
//                     homeData
//                 })
//             }
//         }).catch(()=>{
//             alert('首页数据请求失败！')
//         })
//     }
// };

// 0. 获取轮播图列表数据
export const getSowingDataAction = () => {
    return (dispatch)=>{
        // 请求网络数据
        // getSowingData().then((res)=>{
        //     if(res.status_code === 200){
        //         const sowingData = res.result;
        //         dispatch({
        //             type: constants.INIT_SOWING_DATA,
        //             sowingData
        //         })
        //     }
        // }).catch(()=>{
        //     alert('首页数据请求失败！')
        // })
        const sowingData = {name:'dingyi'};
        dispatch({
            type: constants.INIT_SOWING_DATA,
            sowingData
        })
    }
};
//第一步
 export const sendAction = (data)=>{
     return (dispatch)=>{
         const sendData = data
         dispatch({
            type: constants.SEND_TYPE,
            sendData
         })
         
     }
 }
 export const pushNameAge = (data)=>{
     return (dispatch)=>{
         const action = data;
         dispatch({
             type: constants.NAME_AGE,
             action
         })
     }
 }