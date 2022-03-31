import { useState, useEffect, useContext } from "react";
import { MyContext } from '../hostComponent/createContext.js'

// 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
// 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用
//执行过数据获取、订阅或者手动修改过 DOM统一称为副作用
function HookIndex() {
  //返回的修改函数，和setState差不多，但是不会合并新旧state，而且初始state不一定需要对象
  const [name, setName] = useState("hl");
  // 相当于 componentDidMount，componentDidUpdate 和 componentWillUnmount 多个effect，按照声明顺序执行
  //effect会生成新的effect，替换之前的，不会阻塞浏览器更新，响应更快，大多数effect不需要同步执行
  useEffect(
    () => {
      document.title = "新标题";
      console.log(1);
      //可以返回一个函数用来清除副作用，在组件销毁时候执行,首次渲染不会执行，重新渲染的时候，会在副作用前执行
      return () => {
        console.log(2);
        document.title = "旧标题";
      };
    },
    //第二个参数，类型class组件的componentDidUpdate，比较数据更新，判断是否执行，当第二个参数数据不变时候，effect函数不会执行
    //如果传入空数组，就实现只执行一次初始化的
    [name]
  );

  //useContext,获取最近的父组件provider的value值
  const theme = useContext(MyContext)

  return (
    <div>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("xll");
        }}
      >
        改变名称
      </button>
    </div>
  );
}
export default HookIndex;
