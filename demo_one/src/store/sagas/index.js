import {takeEvery, takeLatest, throttle, select, call,take, put} from 'redux-saga/effects'
// import axios from 'axios'
export function* defSaga(){
    //三种方法发起异步区别
    /**
     * 如果发起多次请求，第一种是请求多次，第二种是只保存最后一次，取消上一次正在运行中的异步
     * 第三中方法多了一个毫秒值参数，先执行第一个，把第二个保存在buffer中，然后在毫秒值内不会再保存异步任务在buffer
     * 中，保存在buffer的等前面的执行完再执行
     * **/
    yield takeEvery ('takeEvery',function* (){
        //这里的select可以加参数，获取reducer返回数据的筛选
        const user = yield select(state => state.user)
        // console.log('takeEvery1', user)
        //call是调用函数的API
        // const res = yield call(axios.post,请求路径,{
            // ...user
        // })
        //put发送数据到reduce
        const data = {
            data: 'huanglin'
        }
        yield put({
            type: 'login_success',
            data
            // ...res.data 数据
        })
    })
    yield takeLatest ('takeLatest',function* (){
        console.log('takeLatest')
    })
    yield throttle (0,'throttle',function* (){
        console.log('throttle')
    })

    //d当有type是take就执行下面，执行之后释放，第二次再发起就没有了
    yield take('take')
    console.log('take')

   
}