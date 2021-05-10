import { Component } from "react";
import { Image, Input, message } from "antd";
import "./index.less";
import CityList from "./common/CityList.jsx";
import Scienco from "./common/scienco.jsx";
import * as ticketApi from "../../api/ticket";
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
        {
          name: "鼓浪屿",
          text: "详细介绍",
          money: "66",
          type: 4,
          location: "江西省上饶市婺源县江湾镇黄陵村",
          number: 5.0,
        },
        {
          name: "鼓浪屿",
          text: "详细介绍",
          money: "66",
          type: 4,
          location: "江西省上饶市婺源县江湾镇黄陵村",
          number: 5.0,
        },
      ],
    };
    this.openCityDiv = this.openCityDiv.bind(this);
    this.searchTicketByCity = this.searchTicketByCity.bind(this);
  }
  componentDidMount() {
    this.searchTicketByCity();
  }
  async searchTicketByCity(name) {
    let resData = await ticketApi.searchTicket(name);
    if (resData.data.data.length > 0) {
      this.setState({
        colData: resData.data.data,
        city: resData.data.data[0].city,
      });
    } else {
      message.error("数据为空");
    }
  }
  openCityDiv() {
    this.setState((state, props) => {
      return {
        openCity: !state.openCity,
        isRotate: !state.isRotate,
      };
    });
  }
  getChildCity = (e) => {
    this.searchTicketByCity(e);
    this.openCityDiv();
  };
  groupCitySearch = (e) => {
    this.searchTicketByCity(e);
  };
  render() {
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
                <CityList getCity={this.getChildCity} />
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
              <CityList getCity={this.searchTicketByCity} />
            </div>
            <div className="hotCity">
              <p>{this.state.city}一周热游榜</p>
              {hotScenic}
            </div>
          </div>
          <div className="searchImg">
            <Image src="./img/tickets/searchGo.jpeg" />
          </div>
        </div>
        <div className="ticketMain">
          <Scienco name={this.state.city} data={this.state.colData} />
          <Scienco name={"热门"} data={this.state.colData} />
        </div>
      </div>
    );
  }
}
export default Tickets;
