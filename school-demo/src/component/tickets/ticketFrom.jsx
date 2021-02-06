import {Component} from 'react'
import { Menu, Form, Select, Button, Row, Col, Image } from 'antd'
import {
    MailOutlined,
    AppstoreOutlined
  } from '@ant-design/icons';
import './ticketForm.less'
const { Option } = Select
class TicketForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: '1',
            country: '',
            cityOptions: [],
            hotCity: [{text: '杭州'},{text: '上海'}],
            localHot: [{text: '三轻松'},{text: '西湖'}],
            mustScenic: [{text: '三清山'},{text: '西湖'}]
        }
        this.handleClick = this.handleClick.bind(this)
        this.CitySearch = this.CitySearch.bind(this)
        this.CityChange = this.CityChange.bind(this)
        this.OnFinish = this.OnFinish.bind(this)
        this.OnFinishFailed = this.OnFinishFailed.bind(this)
    }
    handleClick(e){
        this.setState({
            current: e.key
        })
    }
    CitySearch(){

    }
    CityChange(){

    }
    OnFinish(){

    }
    OnFinishFailed(){

    }
    render(){
        const cityOptions = this.state.cityOptions.map(d => <Option key={d.value}>{d.text}</Option>)
        const hotCity = this.state.hotCity.map((d, index) => <Button type="text" key={d.text}>{d.text}</Button>)
        const localHot = this.state.localHot.map(d => <Button type="text" key={d.text}>{d.text}</Button>)
        const mustScenic = this.state.mustScenic.map(d => <Button type="text" key={d.text}>{d.text}</Button>)
        return(
            <div className="TicketForm">
                <div className="ticketHead">
                    <div className="headBtn">
                        <Menu className="BtnMenu" style={{ height: 40 }} onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal">
                            <Menu.Item key="1" icon={<MailOutlined />}>
                                门票
                            </Menu.Item>
                            <Menu.Item key="2" icon={<AppstoreOutlined />}>
                                一日游
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="ticketContent">
                    <Form className="ticket"
                    initialValues={{ remember: true }}
                    onFinish={this.OnFinish}
                    onFinishFailed={this.OnFinishFailed}>
                        <Form.Item name="city" className="city">
                            <Select
                                showSearch
                                style={{width: 350, paddingRight: 10}}
                                value={this.state.country}
                                placeholder="国家"
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={false}
                                onSearch={this.CitySearch}
                                onChange={this.CityChange}
                                notFoundContent={null}
                            >
                                {cityOptions}
                            </Select>
                        </Form.Item>
                        <Form.Item className="submitTicketForm">
                            <Button type="primary" htmlType="submit">
                                立即搜索
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="footName">
                    <div className="hotTitle">热门城市</div>
                    <div className="hotCity">
                        {hotCity}<Button type="text">全部></Button>
                    </div>
                </div>
                {
                    this.state.current==1?
                    <div className="footName">
                        <div className="hotTitle">本地最热</div>
                        <div className="hotCity">
                            {localHot}<Button type="text">全部></Button>
                        </div>
                    </div>
                    :
                    <div className="footName">
                        <div className="hotTitle">必游景点</div>
                        <div className="hotCity">
                            {mustScenic}<Button type="text">全部></Button>
                        </div>
                    </div>
                }
                <div className="footTitle">
                <Row>
                    <Col span={6}>
                        <div className="fourTitle">
                            <div className="footImg">
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
                            </div>
                            <p>超值低价</p>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="fourTitle">
                            <div className="footImg">
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
                            </div>
                            <p>全网覆盖</p>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="fourTitle">
                            <div className="footImg">
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
                            </div>
                            <p>购票便捷</p>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="fourTitle">
                            <div className="footImg">
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
                            </div>
                            <p>保障计划</p>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}
export default TicketForm