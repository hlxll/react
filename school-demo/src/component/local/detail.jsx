import React, { Component } from "react";
import { Image, Button, message } from "antd";
import { NavLink as Link } from "react-router-dom";
import "./detail.less";
import store from "../../store";
import * as localApi from "../../api/user";
class LocalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "【金牌】去哪儿推荐-杭州导游番小茄",
      text:
        "小番茄旅游服务团队专业、有朝气、富于创新力的服务团队，一对一的服务接待，让您轻松出游，快乐无忧。",
      location: "杭州",
      options: [
        { label: "接机站/送机站服务", value: 1 },
        { label: "私人定制包车服务", value: 2 },
        { label: "向导基础报价", value: 3 },
      ],
      radioValue: 1,
      src: "",
    };
    this.buyLocal = this.buyLocal.bind(this);
  }
  componentDidMount() {
    let data = this.props.location.data && this.props.location.data.data;
    console.log(data);

    this.setState({
      name: data.name,
      location: data.location,
      src: data.src,
      money: data.money,
      options: [
        { label: "接机站/送机站服务", value: 1 },
        { label: "私人定制包车服务", value: 2 },
        { label: "向导基础报价", value: 3 },
      ],
      radioValue: 1,
    });
    window.addEventListener("scroll", this.bindHandleScroll);
  }
  bindHandleScroll = (event) => {
    // 滚动的高度
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 判断用户当前是否进行了横向滚动，如果用户发生了横向滚动，则设置元素为static
    const scrollLeft =
      (event.srcElement
        ? event.srcElement.documentElement.scrollLeft
        : false) ||
      window.pageXOffset ||
      (event.srcElement ? event.srcElement.body.scrollLeft : 0);
    if (scrollLeft > 0) {
      this.setState({
        positionType: "static",
      });
    } else {
      this.setState({
        positionType: "fixed",
      });
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindHandleScroll);
  }
  radioChange = (e) => {
    console.log(e);
  };
  async buyLocal() {
    if (!store.getState().loginUsername) {
      message.error("请先登录");
      this.props.history.push("/login");
      return;
    }
    let obj = {
      type: 7,
      name: this.state.name,
      money: this.state.money,
      username: store.getState().loginUsername,
      time: new Date(),
    };
    let resData = await localApi.addOrderList(obj);
    message.success("购买成功");
  }
  render() {
    return (
      <div className="localDetail">
        <div className="linkHead">
          <Link to={{ pathname: "/local" }}>当地人</Link>
          {">"}产品详情
        </div>
        <div className="buyLocalHead">
          <Image src={this.state.src} className="leftLocalImg" />
          <div className="buyLocalText">
            <div className="Htitle">{this.state.name}</div>
            <div className="buyText">
              <div>
                <span>服务地区：</span>
                {this.state.location}
              </div>
              <div>
                <span>服务提供：</span>女
              </div>
              <div>
                <span>服务类型：</span>7年
              </div>
              <div className="twoType">
                <span>产品特色：</span>
                <div className="twoTypeText">二次确认</div>
              </div>
              <div className="buyBtn">
                <div className="money">¥{this.state.money}元/张起</div>
                <Button className="buyBtn" onClick={this.buyLocal}>
                  立即预订
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="setMeal">
          <div className="anchorList">
            <div className="anchorItem">服务描述</div>
            <div className="anchorItem">价格说明</div>
          </div>
          <div className="anchorText">
            <div className="item">
              <div className="itemIcon"></div>
              <div className="itemText">
                <p>服务描述</p>
                <span>
                  到海事博物馆™开始您的海洋探索，
                  寻觅辉煌灿烂的亚洲海事传奇。踏足S.E.A.海洋馆™，为奥妙多姿的海中奇境所震撼着迷。
                  海洋馆设有多达49个生态区，汇集了来自超过800个物种的100，000多只海洋生物。立即就来发掘这蓝色王国的无限奇观吧！
                </span>
              </div>
            </div>
            <div className="item">
              <div className="itemIcon2"></div>
              <div className="itemText">
                <p>价格说明</p>
                <span>
                  {this.state.name} 实体票
                  非电子票！无需兑换，直接使用！一个月有效！
                </span>
                <p>成人：¥{this.state.money}/张</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LocalDetail;
