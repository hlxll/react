import {Component} from 'react'
import { Select, DatePicker, Button } from 'antd';
import './multipass.less'
const { Option } = Select;
class Multipass extends Component {
    constructor(props){
        super(props)
        this.state = {
            multipassList: [
                {
                    start: '',
                    arriver: '',
                    time: ''
                },
                {
                    start: '',
                    arriver: '',
                    time: ''
                },
                {
                    start: '',
                    arriver: '',
                    time: ''
                }
            ]
        }
        this.onstartCityChange = this.onstartCityChange.bind(this)
        this.onstartCitySearch = this.onstartCitySearch.bind(this)
        this.onarriverCityChange = this.onarriverCityChange.bind(this)
        this.onarriverCitySearch = this.onarriverCitySearch.bind(this)
        this.addMultipass = this.addMultipass.bind(this)
        this.searchMultipass = this.searchMultipass.bind(this)
    }
    onstartCityChange (index){
        console.log(index)
        this.setState((state)=>{
            return{
                multipassList: {}
            }
        })
    }
    onstartCitySearch () {

    }
    onarriverCityChange () {

    }
    onarriverCitySearch () {

    }
    // 添加行程
    addMultipass () {
        let mulList = this.state.multipassList
        mulList.push({
            start: '',
            arriver: '',
            time: ''
        })
        // this.setState({
        //     multipassList: mulList
        // })
    }
    searchMultipass(){
        console.log(this.state.multipassList)
    }
    render(){
        return(
            <div className="multipassComponent">
                {
                    this.state.multipassList.forEach((item, index)=>
                        <div className="listData" key={index}>
                            <span>第{index+1}程</span>
                            <Select
                                value={item.start}
                                showSearch
                                style={{ width: 150, marginLeft: 10 }}
                                placeholder="出发城市"
                                optionFilterProp="children"
                                onChange={this.onstartCityChange(index)}
                                onSearch={this.onstartCitySearch}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
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
                                onChange={this.onarriverCityChange}
                                onSearch={this.onarriverCitySearch}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            <DatePicker placeholder="日期" style={{ width: 150, marginLeft: 10 }}/>
                        </div>
                    )
                }
                <Button type="text" className="addMultipassBtn" onClick={this.addMultipass}>添加更多航程</Button>
                <Button type="primary" onClick={this.searchMultipass}>立即搜索</Button>
            </div>
        )
    }
}
export default Multipass