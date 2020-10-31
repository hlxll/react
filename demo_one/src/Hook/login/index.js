import React, {useState, useEffect} from 'react'
import { useHistory, useLocation, useParams } from "react-router-dom"
import ChildIndex from './childIndex.js'
export const AppContext = React.createContext({});
//共享对于组件树而言是全局的数据
function HomeButton() {
  let history = useHistory();
  let location = useLocation();
  let slug = useParams();
  function handleClick() {
    history.push("/home");
    console.log(location)
    console.log(slug)
  }
  //========

  //========Hook
  // Hook钩子使用，，不能在class组件中使用
  // 在不使用class组件时候，让组件也能使用state以及其他React特性
  const [buttonText, setButtonText] = useState("click me, please");
  //==useState返回一个数组，第一个是数据，第二个是改变的函数
  function changeState(){
    return setButtonText("Thanks, been clicked!");
  }
  //可以把 useEffect Hook 看做 componentDidMount，
  //componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  //默认情况下，会在渲染后和每次更新后执行
  const [count, setCount] = useState(0)
  // Effect是执行时候，DOM都已经更新完毕，在函数组件中执行副作用
  //不清除的effect
  useEffect(()=> {
    document.title = `you click ${count} times`
  })
  const [nameArr, setnameArr] = useState(['huanglin','xulinlin']);

  function setArrName(){
    return setnameArr(['huanglin','123'])
  }
  //清除的effect，返回一个函数，就会在执行清除操作时调用他
  // useEffect(()=>{
  //   function handle(){
  //     console.log('不清除的')
  //   }
  //   ChatAPI.subscribeToFriendStatus(1,handle)
  //   return function cleanup(){
  //     ChatAPI.unsubscribeFromFriendStatus(1,handle)
  //   }
  // })
  // 自定义hook
  function useOwnHook(item){
    const [count, setCount] = useState(null);
    useEffect(()=>{

    })
    return count;
  }
  return (
    <div>
      <p>{nameArr[1]}</p>
      <button onClick={setArrName}>改变数组</button>
      <p>改变title{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <button type="button" onClick={changeState}>{buttonText}</button>
      
      {/* 在引入的组件件互享数据，使用这个 */}
      <AppContext.Provider value={{
        username: '互享数据'
      }}>
        <div>
          <ChildIndex/>
        </div>
      </AppContext.Provider>
      <AppContext.Consumer>
        {theme=>(
          <ChildIndex theme={theme}/>
        )}
      </AppContext.Consumer>
    </div>
    
  );
}
export default HomeButton