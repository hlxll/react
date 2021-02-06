import {Component} from 'react'
import { Menu, Select, Input, Form, Button } from 'antd'
import { NavLink as Link } from 'react-router-dom'
import {
    MailOutlined,
    CalendarOutlined
  } from '@ant-design/icons';
import './holidayForm.less'
const { Option } = Select
class HolidayForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme: '1',
            formType: '',
            countryOptions: [],
            timeout: null,
            visaType: '查看全部类型'
        }
        this.selectForm = this.selectForm.bind(this)
        this.CountrySearch = this.CountrySearch.bind(this)
        this.CountryChange = this.CountryChange.bind(this)
        this.fetch = this.fetch.bind(this)
        this.OnFinish = this.OnFinish.bind(this)
        this.OnFinishFailed = this.OnFinishFailed.bind(this)
        this.TicketSearch = this.TicketSearch.bind(this)
        this.TicketChange = this.TicketChange.bind(this)
    }
    OnFinish (e) {
        console.log(e)
    }
    OnFinishFailed(){

    }
    selectForm (item) {
        this.setState({
            theme: item.key
        })
    }
    fetch(value, callback) {
        // if (this.state.timeout) {
        //   clearTimeout(this.state.timeout);
        //   this.setState({
        //       timeout: null
        //   })
        // }
        // currentValue = value;
      
        // function fake() {
        //   const str = querystring.encode({
        //     code: 'utf-8',
        //     q: value,
        //   });
        //   jsonp(`https://suggest.taobao.com/sug?${str}`)
        //     .then(response => response.json())
        //     .then(d => {
        //       if (currentValue === value) {
        //         const { result } = d;
        //         const data = [];
        //         result.forEach(r => {
        //           data.push({
        //             value: r[0],
        //             text: r[0],
        //           });
        //         });
        //         callback(data);
        //       }
        //     });
        // }
        // timeout = setTimeout(fake, 300);
    }
    CountrySearch (value) {
        if (value) {
            this.fetch(value, data => this.setState({ data }));
          } else {
            this.setState({ data: [] });
          }
    }
    CountryChange(value) {
        this.setState({ value });
    }
    TicketSearch(){}
    TicketChange(){}
    render(){
        const countryOptions = this.state.countryOptions.map(d => <Option key={d.value}>{d.text}</Option>)
        return(
            <div className="holidayForm">
                <div className="head">
                    <Menu
                        className="holidayMenu"
                        defaultSelectedKeys={['1']}
                        mode="horizontal"
                        theme={this.state.theme}
                        initialValues={{ remember: true }}
                        onSelect={this.selectForm}
                    >
                        <Menu.Item key="1" icon={<MailOutlined />}>
                        度假搜索
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CalendarOutlined />}>
                        邮轮
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CalendarOutlined />}>
                        签证
                        </Menu.Item>
                        <Menu.Item key="4" icon={<CalendarOutlined />}>
                            <Link to={{pathname: '/login'}}>包团定制</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CalendarOutlined />}>
                        门票
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="holidayContent">
                    <Form className="vacation"
                    initialValues={{ remember: true }}
                    onFinish={this.OnFinish}
                    onFinishFailed={this.OnFinishFailed}>
                    {
                        this.state.theme == '1'?
                        <>
                            <Form.Item className="start"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    ]}
                                    name="startCity">
                                <Select
                                    placeholder="输入国家地区城市/机场"
                                    allowClear
                                >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="query" className="query">
                                <Input placeholder="请输入关键字" />
                            </Form.Item>
                        </>
                        :''
                    }
                    {
                        this.state.theme == '2'?
                        <>
                            <Form.Item className="arriverCity"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    ]}
                                    name="arriverCity">
                                <Select
                                    placeholder="航线/目的地"
                                    allowClear
                                >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className="day"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    ]}
                                    name="day">
                                <Select
                                    placeholder="出行日期"
                                    allowClear
                                >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className="brand"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    ]}
                                    name="brand">
                                <Select
                                    placeholder="输入国家地区城市/机场"
                                    allowClear
                                >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className="liner"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    ]}
                                    name="liner">
                                <Select
                                    placeholder="邮轮"
                                    allowClear
                                >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                                </Select>
                            </Form.Item>

                        </>:''
                    }
                    {
                        this.state.theme == '3'?
                        <>
                        <Form.Item name="country">
                            <Select
                                showSearch
                                style={{width: 200, paddingRight: 10}}
                                value={this.state.country}
                                placeholder="国家"
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={false}
                                onSearch={this.CountrySearch}
                                onChange={this.CountryChange}
                                notFoundContent={null}
                            >
                                {countryOptions}
                            </Select>
                        </Form.Item>
                        <Form.Item name="visaType">
                        <Select
                            showSearch
                            value={this.state.visaType}
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">查看全部类型</Option>
                            <Option value="lucy">旅游签证</Option>
                            <Option value="tom">商务签证</Option>
                        </Select>
                        </Form.Item>
                        </>
                        :''
                    }
                    {
                        this.state.theme == '5'?
                        <>
                        <Form.Item name="ticket" className="ticket">
                            <Select
                                showSearch
                                style={{width: 495, paddingRight: 10}}
                                value={this.state.ticket}
                                placeholder="景点"
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={false}
                                onSearch={this.TicketSearch}
                                onChange={this.TicketChange}
                                notFoundContent={null}
                            >
                                {countryOptions}
                            </Select>
                        </Form.Item>
                        </>
                        :''
                    }
                        <Form.Item className="submitHolidayForm">
                            <Button type="primary" htmlType="submit">
                                立即搜索
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default HolidayForm