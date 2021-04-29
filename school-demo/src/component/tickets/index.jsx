import { Component } from "react";
import { Image, Input } from "antd";
import "./index.less";
import CityList from "./common/CityList.jsx";
import Scienco from "./common/scienco.jsx";
import { DownOutlined } from "@ant-design/icons";
const { Search } = Input;
class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRotate: true, //控制按钮旋转
      city: "厦门",
      openCity: false,
      hotCity: ["鼓浪屿", "南昌"],
      colData: [
        { name: "鼓浪屿", text: "详细介绍", money: "66", type: 4, location: '江西省上饶市婺源县江湾镇黄陵村', number: 5.0 },
        { name: "鼓浪屿", text: "详细介绍", money: "66", type: 4, location: '江西省上饶市婺源县江湾镇黄陵村', number: 5.0 },
      ],
    };
    this.openCityDiv = this.openCityDiv.bind(this);
  }
  openCityDiv () {
    this.setState((state, props) => {
      return {
        openCity: !state.openCity,
        isRotate: !state.isRotate,
      };
    });
  }
  render () {
    const hotScenic = [];
    this.state.hotCity.forEach((item, index) => {
      hotScenic.push(<div key={index}>{item}</div>);
    });
    return (
      <div className="tickets">
        <div className="headSearch">
          <div className="searchCity">
            <Image src="" />
            <span>{this.state.city}</span>
            <div className="rotateDiv">
              切换目的地
              <DownOutlined
                className={this.state.isRotate ? "rotateIcon" : "iconRotate"}
                onClick={this.openCityDiv}
              />
            </div>
            {this.state.openCity ? (
              <div className="searchCityList">
                <CityList />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="rightSearch">
            <Search
              className="searchInput"
              placeholder="请输入目的地，主题，景点"
              onSearch={this.groupCitySearch}
              enterButton
              size="large"
            />
          </div>
        </div>
        <div className="centerCity">
          <div className="scenicSpot">
            <div className="allCity">
              <CityList />
            </div>
            <div className="hotCity">
              <p>厦门一周热游榜</p>
              {hotScenic}
            </div>
          </div>
          <div className="searchImg">
            <Image src="./img/tickets/searchGo.jpeg" />
          </div>
        </div>
        <div className="ticketMain">
          <Scienco name={"厦门"} data={this.state.colData} />
          <Scienco name={"热门"} data={this.state.colData} />
        </div>
      </div>
    );
  }
}
export default Tickets;
