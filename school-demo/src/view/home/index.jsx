import React, { Component } from "react";
import { Input, Image, Button } from "antd";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./index.less";
import Head from "../../component/head";
import LeftFixed from "../../component/leftFixed";
import Main from "../../component/main";
import PlaneTicket from "../../component/planeTicket";
import Hotel from "../../component/hotel";
import TrainTickets from "../../component/trainTickets";
import Holiday from "../../component/holiday";
import GroupBuying from "../../component/groupBuying";
import Tickets from "../../component/tickets";
import Local from "../../component/local";
const { Search } = Input;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentNum: "",
    };
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    console.log(this.props.location.pathname);
    let pathName = this.props.location.pathname;
    let index = "0";
    if (pathName === "/main") {
      index = "0";
    }
    if (pathName === "/planeTicket") {
      index = "1";
    }
    if (pathName === "/hotel") {
      index = "2";
    }
    if (pathName === "/trainTickets") {
      index = "3";
    }
    if (pathName === "/holiday") {
      index = "4";
    }
    if (pathName === "/groupBuying") {
      index = "5";
    }
    if (pathName === "/tickets") {
      index = "6";
    }
    if (pathName === "/local") {
      index = "7";
    }
    this.setState({
      componentNum: index,
    });
  }
  onSearch() {}
  toHomeChildRouter(index) {
    this.setState({
      componentNum: index,
    });
    if (index == 0) {
      this.props.history.replace("/main");
    }
    if (index == 1) {
      this.props.history.replace("/planeTicket");
    }
    if (index == 2) {
      this.props.history.replace("/hotel");
    }
    if (index == 3) {
      this.props.history.replace("/trainTickets");
    }
    if (index == 4) {
      this.props.history.replace("/holiday");
    }
    if (index == 5) {
      this.props.history.replace("/groupBuying");
    }
    if (index == 6) {
      this.props.history.replace("/tickets");
    }
    if (index == 7) {
      this.props.history.replace("/local");
    }
  }
  render() {
    return (
      <div className="home">
        <Head />
        {this.state.componentNum === 0 ? (
          <div className="goWhereInput">
            <div className="leftImg">
              <Image
                style={{ width: 100, height: 40 }}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
            </div>
            <div className="input">
              <Search
                placeholder="搜索目的地"
                onSearch={this.onSearch}
                enterButton
              />
            </div>
            <div className="telePeople">
              <Image
                style={{ width: 100, height: 40 }}
                className="img"
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <div className="content">
                <p>
                  <span>国内客服</span>95117
                </p>
                <p>
                  <span>国外客服</span>1234567
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="ComponentRouter">
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 0 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "0")}
          >
            首页
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 1 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "1")}
          >
            机票
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 2 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "2")}
          >
            酒店
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 3 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "3")}
          >
            火车票
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 4 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "4")}
          >
            度假
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 5 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "5")}
          >
            团购
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 6 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "6")}
          >
            门票
          </Button>
          <Button
            type="text"
            size="large"
            className={this.state.componentNum === 7 ? "clickEd" : "Noclick"}
            onClick={this.toHomeChildRouter.bind(this, "7")}
          >
            当地人
          </Button>
        </div>
        <Router>
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/planeTicket" component={PlaneTicket} />
            <Route path="/hotel" component={Hotel} />
            <Route path="/trainTickets" component={TrainTickets} />
            <Route path="/holiday" component={Holiday} />
            <Route path="/groupBuying" component={GroupBuying} />
            <Route path="/tickets" component={Tickets} />
            <Route path="/local" component={Local} />
            <Route path="/" exact component={Main} />
          </Switch>
        </Router>
        <div className="fixedFixed">
          <LeftFixed />
        </div>
        <div className="allFooter">
          <p>
            关于Qunar.com|业务合作|加入我们|"严重违规失信"专项整治举报|安全中心|星骆驼公益|About
            Us
          </p>
          <p>
            Copyright ©2021
            Qunar.com京公网安备11010802030542京ICP备05021087号京ICP证060856号营业执照信息(京)-非经营性-2016-0110去哪儿网客服电话95117
          </p>
          <p>
            违法和不良信息举报电话：010-59606977违法和不良信息举报邮箱：tousu@qunar.com
          </p>
          <Image src="./img/footer_v10.png" />
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
