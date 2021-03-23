import { Component } from "react";
import { Menu, Image } from "antd";
import { MailOutlined, CalendarOutlined } from "@ant-design/icons";
import LocalForm from "./common/LocalForm.jsx";
import "./index.less";
class Local extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="local">
        <div className="localform">
          <div className="formContent">
            <Menu
              className="leftMenu"
              style={{ width: 115, height: 240 }}
              defaultSelectedKeys={["1"]}
              onSelect={this.selectForm}
            >
              <Menu.Item key="1" icon={<MailOutlined />}>
                目的地
              </Menu.Item>
              <Menu.Item key="2" icon={<CalendarOutlined />}>
                WIFI租赁
              </Menu.Item>
              <Menu.Item key="3" icon={<CalendarOutlined />}>
                包车游览
              </Menu.Item>
              <Menu.Item key="4" icon={<CalendarOutlined />}>
                接送机
              </Menu.Item>
              <Menu.Item key="5" icon={<CalendarOutlined />}>
                当地顾问
              </Menu.Item>
            </Menu>
            <div className="dataForm">
              <LocalForm />
            </div>
          </div>
          <div className="img">
            <Image src="./img/formRight.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default Local;
