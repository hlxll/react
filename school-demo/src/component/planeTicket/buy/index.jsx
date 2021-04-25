import React, { Component } from 'react'
import PlaneTicketdetail from './ticketDetail'
import { HashRouter as Router, withRouter, Route, Switch } from "react-router-dom";
import BuyTicket from './buyTicket'
class BuyChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyAndDetail: true
    }
  }
  componentDidMount () {
    let data = this.props.history.location.pathname
    console.log(data.split('/'));
    this.setState({
      buyAndDetail: true
    })
    if (data.split('/').length > 2) {
      this.setState({
        buyAndDetail: false
      })
    }
  }
  render () {
    const sure = this.props.history.location.pathname.split('/').length
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

        {
          sure == 2 ?
            <PlaneTicketdetail /> : <BuyTicket />
        }
      </div>
    )
  }
}
export default withRouter(BuyChild);