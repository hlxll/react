import React, { Component } from "react";
import { Tabs } from "antd";
import store from "../../store";
import UserConfig from "./UserConfig";
import PlaneConfig from "./PlaneConfig";
import HotelConfig from "./HotelConfig";
import "./index.less";
import { NavLink as Link } from "react-router-dom";
const { TabPane } = Tabs;
class Config extends Component {
  render() {
    return (
      <div className="config">
        <div className="headRouter">
          <Link to={{ pathname: "/main" }}>返回</Link>
        </div>
        <Tabs defaultActiveKey="1">
          {store.getState().admin ? (
            <TabPane tab="用户管理" key="1">
              <UserConfig />
            </TabPane>
          ) : (
            <></>
          )}

          <TabPane tab="商家管理" key="2">
            {+store.getState().jurisdiction == 1 ? <PlaneConfig /> : ""}
            {+store.getState().jurisdiction == 2 ? <HotelConfig /> : ""}
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Config;
