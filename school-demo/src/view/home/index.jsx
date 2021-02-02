import React,{ Component } from "react"
import { Input, Image, Button } from 'antd';
import { BrowserRouter as Router, NavLink as Link, Route } from 'react-router-dom'
import './index.less'
import Head from '../../component/head'
import LeftFixed from '../../component/leftFixed'
import Main from '../../component/main'
import PlaneTicket from '../../component/planeTicket'
import Hotel from '../../component/hotel'
import TrainTickets from '../../component/trainTickets'
import Holiday from '../../component/holiday'
import GroupBuying from '../../component/groupBuying'
import Tickets from '../../component/tickets'
import Local from '../../component/local'
const { Search } = Input;
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            componentNum: 1
        }
        this.onSearch = this.onSearch.bind(this)
        this.toHomeChildRouter = this.toHomeChildRouter.bind(this)
    }
    onSearch() {}
    toHomeChildRouter (index) {
        console.log(index)
        this.props.history.push("/home/planeTicket")
        this.setState({
            componentNum: index
        })
        
    }
    render () {
        return (
            <div className="home">
                <Head />
                <div className="goWhereInput">
                    <div className="leftImg">
                        <Image />
                    </div>
                    <div className="input">
                        <Search placeholder="搜索目的地" onSearch={this.onSearch} enterButton />
                    </div>
                    <div className="telePeople">
                        <Image className="img"/>
                        <div className="content">
                            <p><span>国内客服</span>95117</p>
                            <p><span>国外客服</span>1234567</p>
                        </div>
                    </div>
                </div>
                <div className="ComponentRouter">
                    <Button type="text" size="large" className={this.state.componentNum==0?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '0')}>首页</Button>
                    <Button type="text" size="large" className={this.state.componentNum==1?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '1')}>机票</Button>
                    <Button type="text" size="large" className={this.state.componentNum==2?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '2')}>酒店</Button>
                    <Button type="text" size="large" className={this.state.componentNum==3?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '3')}>火车票</Button>
                    <Button type="text" size="large" className={this.state.componentNum==4?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '4')}>度假</Button>
                    <Button type="text" size="large" className={this.state.componentNum==5?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '5')}>团购</Button>
                    <Button type="text" size="large" className={this.state.componentNum==6?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '6')}>门票</Button>
                    <Button type="text" size="large" className={this.state.componentNum===7?'clickEd':''} onClick={this.toHomeChildRouter.bind(this, '7')}>当地人</Button>
                    <Router>
                        <Route path="/home/main" component={Main} />
                        <Route path="/home/planeTicket" component={PlaneTicket} />
                        <Route path="/home/hotel" component={Hotel} />
                        <Route path="/home/trainTickets" component={TrainTickets} />
                        <Route path="/home/holiday" component={Holiday} />
                        <Route path="/home/groupBuying" component={GroupBuying} />
                        <Route path="/home/tickets" component={Tickets} />
                        <Route path="/home/local" component={Local} />
                    </Router>
                </div>
                <div className="fixedFixed">
                    <LeftFixed />
                </div>
            </div>
        )
    }
}
export default Home