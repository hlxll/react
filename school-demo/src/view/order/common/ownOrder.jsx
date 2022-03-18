import { Component } from "react";
import { Select, DatePicker, Table, Button } from "antd";
import { searchOrder, deleteOrder } from "../../../api/user";
import "./ownOrder.less";
let { Option } = Select;
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: ["机票", "酒店", "火车票", "度假", "团购", "门票", "当地人"],
      dataSource: [
        {
          key: "1",
          username: "胡彦斌",
          money: 32,
        },
      ],
    };
    this.searchOrderList = this.searchOrderList.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
  }
  async componentDidMount() {
    this.searchOrderList();
  }
  async searchOrderList() {
    let resData = await searchOrder();
    let dataSource = [];
    resData.data.forEach((item, index) => {
      item.key = index + 1;
      dataSource.push(item);
    });
    this.setState({
      dataSource: dataSource,
    });
  }
  async deleteItem(item) {
    await deleteOrder(item._id);
    this.searchOrderList();
  }
  render() {
    const columns = [
      {
        title: "序号",
        dataIndex: "key",
        key: "key",
      },
      {
        title: "姓名",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "价格",
        dataIndex: "money",
        key: "money",
      },
      {
        title: "类型",
        dataIndex: "type",
        key: "type",
        render: (text) => <div>{this.state.typeList[text - 1]}</div>,
      },
      {
        title: "操作",
        dataIndex: "",
        key: "",
        render: (text, item) => (
          <div>
            <Button type="primary" onClick={this.deleteItem(item)}>
              删除订单
            </Button>
          </div>
        ),
      },
    ];
    let selectOp = [];
    this.state.typeList.forEach((item, index) => {
      selectOp.push(
        <Option value={index + 1} key={index}>
          {item}
        </Option>
      );
    });
    return (
      <div className="ownOrderComponent">
        <div className="ownOrderType">
          订单类型
          <Select placeholder="全部" allowClear>
            {selectOp}
          </Select>
        </div>
        <div className="orderTime">
          订单时间
          <DatePicker />
          <DatePicker />
        </div>
        <div className="orderTable">
          <Table dataSource={this.state.dataSource} columns={columns} />
        </div>
      </div>
    );
  }
}
