import { Component } from "react";
import { Image, Input } from "antd";
import "./index.less";
import CityList from "./common/CityList.jsx";
import Scienco from "./common/scienco.jsx";
const { Search } = Input;
class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "厦门",
      openCity: false,
      hotCity: ["鼓浪屿", "南昌"],
    };
    this.openCityDiv = this.openCityDiv.bind(this);
  }
  openCityDiv() {
    this.setState((state, props) => {
      return {
        openCity: !state.openCity,
      };
    });
  }
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
              <i className="rotateIcon" onClick={this.openCityDiv}>
                ^
              </i>
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
          <Scienco name={"厦门"} />
        </div>
      </div>
    );
  }
}
export default Tickets;
