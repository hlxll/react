import {Component} from 'react'
import { Form, Radio, Select, Button, DatePicker } from 'antd'
import './freeForm.less'
const { Option } = Select
class FreeForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            oneRadio: 'one'
        }
        this.OneOnFinish = this.OneOnFinish.bind(this)
        this.OneOnFinishFailed = this.OneOnFinishFailed.bind(this)
        this.oneRadioOnChange = this.oneRadioOnChange.bind(this)
    }
    OneOnFinish(){}
    OneOnFinishFailed(){}
    oneRadioOnChange(e){
        console.log(e)
        this.setState({
            oneRadio: e.target.value
        })
    }
    render(){
        return(
            <div className="freeForm">
                <Form
                    name="basic"
                    className="freeF"
                    initialValues={{ remember: true }}
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
                            <></> :<DatePicker />
                        }
                        
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submitOneForm">
                            立即搜索
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default FreeForm