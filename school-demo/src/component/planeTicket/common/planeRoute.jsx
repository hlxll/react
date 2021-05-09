import { Component } from "react";
import { Select, Image, Space } from "antd";
import "./planeRoute.less";
import { SwapOutlined, SwapRightOutlined } from "@ant-design/icons";
import ChinaJson from "../../china.json";
const { Option } = Select;
class PlaneRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chinaCity: [],
    };
    this.startCityChange = this.startCityChange.bind(this);
    this.startTimeChange = this.startTimeChange.bind(this);
  }
  componentDidMount() {
    let resCity = [];
    ChinaJson.forEach((item) => {
      if (item.province.split("")[2] === "市") {
        resCity.push(item.province);
      } else {
        item.city.map((cityItem) => resCity.push(cityItem.name));
      }
    });
    this.setState({
      chinaCity: resCity,
    });
  }
  startCityChange() {}
  startTimeChange(e) {
    console.log(e);
  }
  render() {
    const routeList = this.props.routeList;
    return (
      <div className="planeRoute">
        <div className="planeRouteHead">
          <span className="word">国际港澳台·低价航线</span>
          <div className="planeRouteImg">
            {this.props.type === "one" ? (
              <Image
                src="./img/plane/bg_flyhd.png"
                style={{ width: 200, height: 120, marginTop: -60 }}
              />
            ) : (
              <Image
                src="./img/plane/bg_flyhd.png"
                style={{ width: 200, height: 120 }}
              />
            )}
          </div>
          <div className="selectStartCity">
            <Space>
              <Select style={{ width: 120 }} onChange={this.startCityChange}>
                {this.props.type === "one"
                  ? this.state.chinaCity.map((item) => (
                      <Option value={item}>{item + "出发"}</Option>
                    ))
                  : this.state.chinaCity.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
              </Select>
              <Select style={{ width: 120 }} onChange={this.startTimeChange}>
                <Option value="2.3">2月/3月</Option>
                <Option value="4.5">4月/5月</Option>
              </Select>
            </Space>
          </div>
        </div>
        <div className="planeRouteMain">
          {routeList.map((d, index) => {
            return (
              <div className="RouteMainChild">
                <p className="left">
                  <p style={{ fontSize: 14, margin: 0 }}>{d.start}</p>
                  {this.props.type === "one" ? (
                    <SwapRightOutlined />
                  ) : (
                    <SwapOutlined />
                  )}
                  <p style={{ fontSize: 14, margin: 0 }}>{d.arriver}</p>
                </p>
                <p className="right">
                  {this.props.type === "one" ? (
                    <p style={{ fontSize: 14, margin: 0, marginLeft: 10 }}>
                      {d.startTime}
                    </p>
                  ) : (
                    <>
                      <p style={{ fontSize: 14, margin: 0, marginLeft: 10 }}>
                        {d.startTime}
                      </p>
                      <SwapOutlined />
                      <p style={{ fontSize: 14, margin: 0 }}>{d.arriverTime}</p>
                    </>
                  )}
                </p>

                <div className="money">
                  ¥
                  <p className="p">
                    {this.props.type === "one" ? d.money : d.money * 2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default PlaneRoute;
