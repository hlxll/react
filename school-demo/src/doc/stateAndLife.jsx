import { Component } from "react";

class StateAndLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "huanglin",
      list: [1, 2, 3, 4],
    };
    this.change = this.change.bind(this);
  }
  //方法中阻止默认行为，不能用返回false，必须用preventDefault
  change() {
    //不能直接修改state。react可能会把多个setState合并一个调用。
    //props和state可能异步更新，不要依赖他们更新下一个状态,可以给setState传方法利用旧state和props改数据
    // this.setState({
    //   name: "xulinlin",
    // });
    this.setState((state, props) => ({
      name: state.name + "22",
    }));
  }
  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <button onClick={this.change}>改变name</button>
        <p>列表展示和key</p>
        {this.state.list.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    );
  }
}
export default StateAndLife;
