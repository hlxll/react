import React, { Component } from 'react'
import { Image, Carousel, DatePicker, Form } from 'antd'
import './index.less'
class HolidayDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselList: ['https://imgs.qunarzz.com/vs_ceph_b2c_001/01f2c207-11d0-4964-935e-a9d9daa10f88.jpg_r_390x260x95_3c8281e1.jpg', 'https://imgs.qunarzz.com/vs_ceph_b2c_001/208d4953-e059-44a4-955a-f435aabb27d5.jpg_r_390x260x95_7d3d0037.jpg'],
      detailData: {
        name: '【跟团游】含机票丨下单立减600丨昆明大理丽江泸沽湖/香格里拉6-14天任选丨雪山温泉',
        money: 1568,
        childMoney: 2287,
        productNum: 2406647408,
        moveGroup: ['丽江', '大理', '昆明'],
        productCharac: ['玉龙雪山', '网红打卡点', '洱海私人游艇', '赠送大型晚会']
      }
    }
  }
  componentDidMount () {
    //度假跳转传递的标题参数，在这个生命周期获取数据
    // console.log(this.props.location.state.title);
  }
  render () {
    return (
      <div id="holidayDetail">
        <div className="holidayHead">
          <div className="holidayCarousel">
            <Carousel>
              {
                this.state.carouselList.map((item, index) =>
                  <div key={index}>
                    <Image src={item} />
                  </div>)
              }
            </Carousel>
          </div>
          <div className="holidayText">
            <div className="HTName">{this.state.detailData.name}</div>
            <div className="HTMoney">
              <span className="people">￥{this.state.detailData.money}起/人</span><span>(儿童￥{this.state.detailData.childMoney})</span>
            </div>
            <div className="holidayProduct">
              <span className="productTitle">产品编号</span><span>{this.state.detailData.productNum}</span>
            </div>
            <div className="holidayProduct">
              <span className="productTitle">浏览城市</span>{this.state.detailData.moveGroup.map(item => <span>{item},</span>)}
            </div>
            <div className="holidayProduct">
              <span className="productTitle">产品特色</span>{this.state.detailData.productCharac.map(item => <div className="characList">{item}</div>)}
            </div>
            <div className="holidayProduct">
              <span className="productTitle">产品编号</span><div className="fuwuList"><div className="iconBg" />认证商家</div>
            </div>
          </div>
        </div>
        <div className="holidayBuy">
          <Form name="basic"
            initialValues={{ remember: true }}
            onFinish={this.buySuccess}
            onFinishFailed={this.buyFailed}
          >
            <Form.Item label="">
              <DatePicker />
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default HolidayDetail;