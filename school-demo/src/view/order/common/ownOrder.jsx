import { Component } from "react";
import { Select, DatePicker } from "antd";
import "./ownOrder.less";
let { Option } = Select;
export default class Order extends Component {
  render () {
    return (
      <div className="ownOrderComponent">
        <div className="ownOrderType">
          订单类型
          <Select placeholder="全部" allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </div>
        <div className="orderTime">
          订单时间
          <DatePicker />
          <DatePicker />
        </div>
      </div>
    );
  }
}
