import React, { Component } from "react";
import PlaneTicketdetail from "./ticketDetail";
import { withRouter } from "react-router-dom";
import BuyTicket from "./buyTicket";
class BuyChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyAndDetail: true,
      childData: {},
    };
    this.childData = this.childData.bind(this);
  }
  componentDidMount() {
    let data = this.props.history.location.pathname;
    this.setState({
      buyAndDetail: true,
    });
    if (data.split("/").length > 2) {
      this.setState({
        buyAndDetail: false,
      });
    }
  }
  childData(e) {
    this.setState({
      childData: e[0],
    });
  }
  render() {
    const sure = this.props.history.location.pathname.split("/").length;
    return (
      <div id="buyChild">
        {/* <React.StrictMode>
          <Router>
            <Switch>
              <Route path="/" component={PlaneTicketdetail} />
              <Route path="/detail" component={BuyTicket} />
            </Switch>
          </Router>
        </React.StrictMode> */}

        {sure == 2 ? (
          <PlaneTicketdetail childData={this.childData} />
        ) : (
          <BuyTicket childData={this.state.childData} />
        )}
      </div>
    );
  }
}
export default withRouter(BuyChild);
