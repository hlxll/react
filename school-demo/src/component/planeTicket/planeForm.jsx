import {Component} from 'react'
import { Menu, Button, Form, Input, Select, Radio, DatePicker } from 'antd';
import './planeForm.less'
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
  } from '@ant-design/icons';
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
class PlaneForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: '2',
            oneRadio: 'one', //国内的行程类型
            twoRadio: 'one' //国外的行程类型
        }
        this.handleClick = this.handleClick.bind(this)
        this.OneOnFinish = this.OneOnFinish.bind(this)
        this.OneOnFinishFailed = this.OneOnFinishFailed.bind(this)
        this.oneRadioOnChange = this.oneRadioOnChange.bind(this)
        this.twoRadioOnChange = this.twoRadioOnChange.bind(this)
    }
    handleClick (e) {
        this.setState({ current: e.key });
    }
    OneOnFinish (e) {
        console.log(e)
        console.log('成功')
    }
    OneOnFinishFailed () {
        console.log('不成功')
    }
    oneRadioOnChange (e) {
        this.setState({
            oneRadio: e.target.value
        })
    }
    twoRadioOnChange (e) {
        this.setState({
            twoRadio: e.target.value
        })
    }
    render(){
        return(
            <div className="planeForm">
                <div className="head">
                    <div className="headBtn">
                        <Menu className="BtnMenu" style={{ height: 40 }} onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal">
                            <Menu.Item key="1" icon={<MailOutlined />}>
                                国内机票
                            </Menu.Item>
                            <Menu.Item key="2" icon={<AppstoreOutlined />}>
                                国外机票
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="headRight">
                        <Button type="link">出票状态查询</Button>
                        <Button type="link">退票改签</Button>
                    </div>
                </div>
                <div className="TwoForm">
                {
                    this.state.current==1?
                    <Form
                        name="basic"
                        className="InForm"
                        initialValues={{ remember: true }}
                        {...formItemLayout}
                        onFinish={this.OneOnFinish}
                        onFinishFailed={this.OneOnFinishFailed}
                        >
                        <Form.Item className="one">
                            <Radio.Group onChange={this.oneRadioOnChange} value={this.state.oneRadio}>
                                <Radio value="one">单程</Radio>
                                <Radio value="two">往返</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className="two"
                            name="start"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Select
                                placeholder="输入国家地区城市/机场"
                                allowClear
                            >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="startTime" 
                            rules={[
                                {
                                    required: true,
                                },
                                ]}
                            className="three">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="arrive"
                            className="four"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Select
                                placeholder="输入国家地区城市/机场"
                                allowClear
                            >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="arriveTime" 
                            rules={this.state.oneRadio=='one'?[]:[
                                {
                                    required: true,
                                },
                                ]}
                            className="five">
                            {
                                this.state.oneRadio=='one'?
                                <DatePicker disabled/>:<DatePicker />
                            }
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="submitOneForm">
                                立即搜索
                            </Button>
                        </Form.Item>
                    </Form>
                    :
                    <Form
                        name="basic"
                        className="OutForm"
                        initialValues={{ remember: true }}
                        {...formItemLayout}
                        onFinish={this.OneOnFinish}
                        onFinishFailed={this.OneOnFinishFailed}
                        >
                        <Form.Item className="one">
                            <Radio.Group onChange={this.twoRadioOnChange} value={this.state.twoRadio}>
                                <Radio value="one">单程</Radio>
                                <Radio value="two">往返</Radio>
                                <Radio value="three">智能搜索</Radio>
                                <Radio value="four">多程</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className="two"
                            name="start"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Select
                                placeholder="输入国家地区城市/机场"
                                allowClear
                            >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="startTime" 
                            rules={[
                                {
                                    required: true,
                                },
                                ]}
                            className="three">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="arrive"
                            className="four"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Select
                                placeholder="输入国家地区城市/机场"
                                allowClear
                            >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="arriveTime" 
                            rules={this.state.oneRadio=='one'?[]:[
                                {
                                    required: true,
                                },
                                ]}
                            className="five">
                            {
                                this.state.oneRadio=='one'?
                                <DatePicker disabled/>:<DatePicker />
                            }
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="submitOneForm">
                                立即搜索
                            </Button>
                        </Form.Item>
                    </Form>
                }
                </div>
            </div>
        )
    }
}
export default PlaneForm