import { Component } from "react";
import { Image } from "antd";
import "./cityList.less";
class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendCity: ["北京", "上海", "成都"],
    };
  }
  changeCity(city) {
    console.log(city);
  }
  render() {
    const recommendCityList = [];
    this.state.recommendCity.forEach((item, index) => {
      recommendCityList.push(
        <div key={index} onClick={this.changeCity.bind(this, item)}>
          {item}
        </div>
      );
    });
    return (
      <div className="cityList">
        <p>推荐城市</p>
        <div className="cityData">{recommendCityList}</div>
      </div>
    );
  }
}
export default Tickets;
