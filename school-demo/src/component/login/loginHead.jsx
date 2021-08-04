import { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { Button } from "antd";
class loginHead extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  register() {
    if (this.props && this.props.checkLoginRegister) {
      this.props.checkLoginRegister(false);
    } else {
    }
  }
  login() {
    if (this.props && this.props.checkLoginRegister) {
      this.props.checkLoginRegister(true);
    } else {
    }
  }
  render() {
    return (
      <div
        style={{
          textAlign: "right",
          backgroundColor: "#ddd",
          paddingRight: "10%",
        }}
      >
        <Button type="link" onClick={this.login}>
          登录
        </Button>
        <Button type="link" onClick={this.register}>
          注册
        </Button>
        |
        <Link
          to={{ pathname: "/" }}
          style={{ color: "#ff7c00", margin: "0 10px 0 10px" }}
        >
          首页
        </Link>
        |<Button type="link">联系客服</Button>
      </div>
    );
  }
}
export default loginHead;
