import { Component } from "react";
import { Row, Col, Image, Button } from "antd";
import ColMainComponent from "./ColMainComponent";
import "./scienco.less";
import Modal from "antd/lib/modal/Modal";
class Scienco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      colData: this.props.data,
      ticketModal: false,
      modalTicketDetail: {}
    };
  }
  ticketDetail = (item) => {
    console.log(item);
    this.setState({
      ticketModal: true,
      modalTicketDetail: item
    })
  }
  handleCancel = () => {
    this.setState({
      ticketModal: false
    })
  }
  render () {
    const ColMain = [];
    this.state.colData.forEach((item, index) => {
      ColMain.push(
        <Col span={6} onClick={this.ticketDetail.bind(this, item)}>
          <ColMainComponent data={item} />
        </Col>
      );
    });
    return (
      <div className="sciencoDiv">
        <div className="sciencoHead">{this.state.name}必游景点</div>
        <div>
          <Row>{ColMain}</Row>
        </div>
        <Modal width={1000} title="门票预定" footer={null} visible={this.state.ticketModal} onCancel={this.handleCancel}>
          <div className="headMain">
            <Image preview={false} src="https://imgs.qunarzz.com/sight/p0/1904/ad/ad852cd6480654d3a3.img.jpg_710x360_4ef588d1.jpg" />
            <div className="headRight">
              <div className="headRightName">
                <span className="headRightNameName">{this.state.modalTicketDetail.name}</span>
                <span className="headRightNameType">{this.state.modalTicketDetail.type}A景区</span>
              </div>
              <div>自游行的绝佳选择</div>
              <div>位置：{this.state.modalTicketDetail.location}<Button style={{ marginLeft: '10px' }}>查看地图</Button></div>
              <div>用户点评：<span style={{ color: '#f60' }}>{this.state.modalTicketDetail.number}</span>/5分</div>
              <div className="headRightFooterBtn"><span style={{ color: '#f60' }}>￥{this.state.modalTicketDetail.money}</span>起<Button type="primary">立刻预订</Button></div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Scienco;
