import React, { Component } from 'react'
import { Image, Radio } from 'antd'
import './detail.less'
class LocalDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '【金牌】去哪儿推荐-杭州导游番小茄',
      text: '小番茄旅游服务团队专业、有朝气、富于创新力的服务团队，一对一的服务接待，让您轻松出游，快乐无忧。',
      location: '杭州',
      options: [
        { label: '接机站/送机站服务', value: 1 },
        { label: '私人定制包车服务', value: 2 },
        { label: '向导基础报价', value: 3 },
      ],
      radioValue: 1
    }

  }
  radioChange = (e) => {
    console.log(e);
  }
  render () {
    return <div className="localDetail">
      <div className="buyLocalHead">
        <Image src="" />
        <div className="buyLocalText">
          <div className="imageHead">
            <div><Image src="" /></div>
            <div className="headTitleText">
              <div className="Htitle">{this.state.title}</div>
              <div className="Htext">{this.state.text}</div>
            </div>
          </div>
          <div className="buyText">
            <div><span>地区：</span>{this.state.location}</div>
            <div><span>性别：</span>女</div>
            <div><span>从业年限：</span>7年</div>
            <div><span>擅长语言：</span>普通话,英语</div>
            <div className="twoType"><span>产品特色：</span><div className="twoTypeText">二次确认</div></div>
          </div>
          <div className="setMeal">
            <span>可选套餐</span>
            <div className="threeMeal">
              <Radio.Group
                options={this.state.options}
                onChange={this.radioChange}
                value={this.state.radioValue}
                optionType="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default LocalDetail
