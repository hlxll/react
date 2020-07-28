import React, {useState} from 'react'
import { useHistory, useLocation, useParams } from "react-router-dom"
import ChildIndex from './childIndex.js'

export const AppContext = React.createContext({});
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
  // Hook钩子使用，
  const [buttonText, setButtonText] = useState("click me, please");
  //==useState返回一个数组，第一个是数据，第二个是改变的函数
  function changeState(){
    return setButtonText("Thanks, been clicked!");
  }
  return (
    <div>
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
      
    </div>
    
  );
}
export default HomeButton