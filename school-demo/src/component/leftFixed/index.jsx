import { Component } from "react";
import "./index.less";
import {
  CloseOutlined,
  UserOutlined,
  MailOutlined,
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import store from "../../store";
import { withRouter } from "react-router-dom";
import { Tooltip, Image } from "antd";
import SmallLogin from "../login";
import { LoginContext } from "../../view/home/index";
class LeftFixed extends Component {
  constructor() {
    super();
    this.state = {
      SureClose: false,
      openLogin: false,
      orderLogin: false,
      moneyLogin: false,
      erCode: false,
    };
    this.closeLeft = this.closeLeft.bind(this);
    this.openLeft = this.openLeft.bind(this);
    this.closeMailLogin = this.closeMailLogin.bind(this);
    this.closeOrderLogin = this.closeOrderLogin.bind(this);
    this.closeMoneyLogin = this.closeMoneyLogin.bind(this);
    this.userOutRouter = this.userOutRouter.bind(this);
    this.openErCode = this.openErCode.bind(this);
  }
  openErCode() {
    let ercode = this.state.erCode;
    this.setState({
      erCode: !ercode,
    });
  }
  userOutRouter() {
    if (store.getState().isLogin) {
      //   this.props.history.push("/order");
      return;
    }
    this.props.history.push("/login");
  }
  closeLeft() {
    this.setState({
      SureClose: false,
    });
    console.log(LoginContext.Consumer);
  }
  openLeft() {
    this.setState({
      SureClose: true,
    });
  }
  closeMailLogin() {
    if (store.getState().isLogin) {
      //   this.props.history.push("/order");
      return;
    }
    this.setState((state) => {
      return {
        openLogin: !state.openLogin,
        orderLogin: false,
        moneyLogin: false,
      };
    });
  }
  closeOrderLogin() {
    if (store.getState().isLogin) {
      this.props.history.push("/order");
    } else {
      this.setState((state) => {
        return {
          orderLogin: !state.orderLogin,
          moneyLogin: false,
          openLogin: false,
        };
      });
    }
  }
  closeMoneyLogin() {
    if (store.getState().isLogin) {
      this.props.history.push("/order");
      return;
    }
    this.setState((state) => {
      return {
        moneyLogin: !state.moneyLogin,
        orderLogin: false,
        openLogin: false,
      };
    });
  }
  render() {
    return (
      <div className="leftMain">
        <div
          className={
            this.state.SureClose ? "leftMainContent" : "leftMainContentClosed"
          }
        >
          <div className="closeIcon">
            <Tooltip title="关闭">
              <CloseOutlined className="closeClick" onClick={this.closeLeft} />
            </Tooltip>
          </div>
          <div className="peopleIcon">
            <div className="peopleLong">
              <Tooltip title="用户">
                <UserOutlined
                  style={{ fontSize: "24px" }}
                  onClick={this.userOutRouter}
                />
                <MailOutlined
                  style={{
                    fontSize: "24px",
                    marginLeft: "9px",
                    marginRight: "9px",
                  }}
                />
                <span>加入会员，立即开始精彩旅程</span>
                {/* <LoginContext.Consumer>
                                    {
                                        (name) => <p>{name}</p>
                                    }
                                </LoginContext.Consumer> */}
              </Tooltip>
            </div>
          </div>
          <div className={this.state.openLogin ? "whiteMailIcon" : "mailIcon"}>
            <MailOutlined onClick={this.closeMailLogin} />
            <div onClick={this.closeMailLogin}>消息</div>
            <div className={this.state.openLogin ? "smallLogin" : "closeLogin"}>
              <SmallLogin openLogin={this.closeMailLogin} toRouter="order" />
            </div>
          </div>
          <div className={this.state.orderLogin ? "whiteMailIcon" : "mailIcon"}>
            <MedicineBoxOutlined onClick={this.closeOrderLogin} />
            <div onClick={this.closeOrderLogin}>订单</div>
            <div
              className={this.state.orderLogin ? "smallLogin" : "closeLogin"}
            >
              <SmallLogin openLogin={this.closeOrderLogin} toRouter="order" />
            </div>
          </div>
          <div
            className={this.state.moneyLogin ? "whiteMailIcon" : "moneyIcon"}
          >
            <MoneyCollectOutlined onClick={this.closeMoneyLogin} />
            <div onClick={this.closeMoneyLogin}>账户</div>
            <div
              className={this.state.moneyLogin ? "smallLogin" : "closeLogin"}
            >
              <SmallLogin openLogin={this.closeMoneyLogin} toRouter="order" />
            </div>
          </div>
          <div className="qrCodeIcon">
            <QrcodeOutlined onClick={this.openErCode} />
            <div onClick={this.openErCode}>扫码</div>
            <div className={this.state.erCode ? "smallqrLogin" : "closeLogin"}>
              <Image src="./img/chitu_qrcode.png" preview={false} />
              <p>扫描下载</p>
            </div>
          </div>
        </div>
        <div
          className={this.state.SureClose ? "leftMainImgClosed" : "leftMainImg"}
        >
          <div className="openRadius">
            <div className="radius" onClick={this.openLeft}>
              <UserOutlined />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LeftFixed);
