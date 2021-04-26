import { Component } from "react";
import TrainForm from "./trainForm";
import "./index.less";
import { Image } from "antd";
class TrainTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div className="trainTicket">
        <div className="trainTicketForm">
          <Image src="./img/train/formBack.jpg" />
          <div
            style={{ width: 600, border: "3px solid blue", marginLeft: "10%" }}
            className="form"
          >
            <TrainForm />
          </div>
        </div>
        <div className="trainTicketSpeak">
          <Image src="./img/train/white.png" />
        </div>
      </div>
    );
  }
}
export default TrainTickets;
