import { Component } from "react";
import Hmap from "../../map";
class TicketsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlon: {
        latitude: "",
        longitude: "",
      },
    };
  }
  componentDidMount() {
    let obj = {
      latitude: this.props.location.query.latlon[0],
      longitude: this.props.location.query.latlon[1],
      label: this.props.location.query.name,
    };
    this.setState({
      latlon: obj,
    });
  }
  render() {
    return (
      <Hmap
        pointCity={this.props.location.query.city}
        point={this.state.latlon}
      />
    );
  }
}
export default TicketsMap;
