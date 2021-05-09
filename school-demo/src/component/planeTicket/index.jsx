import { Component } from "react";
import PlaneTicketForm from "./planeForm";
import "./index.less";
import { Image, Carousel } from "antd";
import PlaneRoute from "./common/planeRoute";
import * as planeApi from "../../api/planeTicket";
class PlaneTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
      twoRouteList: [],
    };
  }
  async componentDidMount() {
    let resData = await planeApi.searchPlate();
    let resArr = resData.data.data;
    let resArr2 = [];
    resArr.forEach((item) => {
      resArr2.push(item);
    });
    let resTwoArr = [];
    for (let i = 0; i < resArr2.length; i++) {
      for (let j = i + 1; j < resArr2.length; j++) {
        if (
          resArr2[i].start == resArr2[j].arriver &&
          resArr2[i].arriver == resArr2[j].start
        ) {
          resTwoArr.push(resArr2[i]);
        }
      }
    }
    this.setState({
      routeList: resArr,
      twoRouteList: resTwoArr,
    });
  }
  render() {
    return (
      <div className="planeTicket">
        <div className="formBackground">
          <Image src="./img/plane/formBack.jpg" style={{ height: 312 }} />
          <div className="backgroundOpacity">
            <div className="planeTicketForm">
              <p className="title">机票预订</p>
              <PlaneTicketForm plane="plane" />
            </div>
          </div>
        </div>
        <div className="planeContent">
          <div className="imgCarousel">
            <Carousel autoplay>
              <div>
                <Image src="./img/plane/carouselOne.jpg" preview={false} />
              </div>
              <div>
                <Image src="./img/plane/carouselTwo.jpg" preview={false} />
              </div>
            </Carousel>
            <PlaneRoute type="one" routeList={this.state.routeList} />
            <PlaneRoute type="two" routeList={this.state.twoRouteList} />
          </div>
          <div className="text">
            <Image style={{}} src="./img/plane/home_link.png" />
            <p className="speak">服务平台公告</p>
            <li>
              提醒旅美中国公民注意美国边境执法部门查验入、出境旅客电子设备
            </li>
          </div>
        </div>
      </div>
    );
  }
}
export default PlaneTicket;
