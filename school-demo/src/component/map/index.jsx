import React, { Component } from 'react'
let BMap = window.BMap

class Hmap extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount () {
    let map = new BMap.Map('bmap')
  }
  render () {
    return <div id="bmap" />
  }
}
export default Hmap