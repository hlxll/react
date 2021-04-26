import { Component } from 'react'
import { Select, DatePicker, Button } from 'antd';
import './multipass.less'
const { Option } = Select;
class Multipass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            multipassList: [
                {
                    start: '1',
                    arriver: '1',
                    time: '1'
                },
                {
                    start: '2',
                    arriver: '3',
                    time: ''
                },
                {
                    start: '',
                    arriver: '',
                    time: ''
                }
            ]
        }
        this.addMultipass = this.addMultipass.bind(this)
        this.searchMultipass = this.searchMultipass.bind(this)
    }
    // 添加行程
    addMultipass () {
        let mulList = this.state.multipassList
        mulList.push({
            start: '',
            arriver: '',
            time: ''
        })
        this.setState({
            multipassList: mulList
        })
    }
    searchMultipass () {
        console.log(this.state.multipassList)
    }
    render () {
        return (
            <div className="multipassComponent">
                {
                    this.state.multipassList.map((d, index) => {
                        return (
                            <div className="listData" key={index}>
                                <span>第{index + 1}程</span>
                                <Select
                                    showSearch
                                    style={{ width: 150, marginLeft: 10 }}
                                    placeholder="出发城市"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select
                                    showSearch
                                    style={{ width: 150, marginLeft: 10 }}
                                    placeholder="到达城市"
                                    optionFilterProp="children"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <DatePicker placeholder="日期" style={{ width: 150, marginLeft: 10 }} />
                            </div>
                        )
                    })
                }
                <Button type="text" className="addMultipassBtn" onClick={this.addMultipass}>添加更多航程</Button>
                <Button type="primary" onClick={this.searchMultipass}>立即搜索</Button>
            </div>
        )
    }
}
export default Multipass