import React,{ Component } from "react"
import { Input, Image, Button } from 'antd';
// import { BrowserRouter as Router, NavLink as Link , Route, Switch } from 'react-router-dom'
import { HashRouter as Router, NavLink as Link , Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from "react-router"
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
            componentNum: 0
        }
        this.onSearch = this.onSearch.bind(this)
    }
    onSearch() {}
    toHomeChildRouter (index) {
        this.setState({
            componentNum: index
        })
        if(index == 0){
            this.props.history.replace('/main')
        }
        if(index == 1){
            this.props.history.replace('/planeTicket')
        }
        if(index == 2){
            this.props.history.replace('/hotel')
        }
        if(index == 3){
            this.props.history.replace('/trainTickets')
        }
        if(index == 4){
            this.props.history.replace('/holiday')
        }
        if(index == 5){
            this.props.history.replace('/groupBuying')
        }
        if(index == 6){
            this.props.history.replace('/tickets')
        }
        if(index == 7){
            this.props.history.replace('/local')
        }
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
                        <Image className="img" />
                        <div className="content">
                            <p><span>国内客服</span>95117</p>
                            <p><span>国外客服</span>1234567</p>
                        </div>
                    </div>
                </div>
                <div className="ComponentRouter">
                    <Button type="text" size="large" className={this.state.componentNum==0?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '0')}>首页</Button>
                    <Button type="text" size="large" className={this.state.componentNum==1?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '1')}>机票</Button>
                    <Button type="text" size="large" className={this.state.componentNum==2?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '2')}>酒店</Button>
                    <Button type="text" size="large" className={this.state.componentNum==3?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '3')}>火车票</Button>
                    <Button type="text" size="large" className={this.state.componentNum==4?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '4')}>度假</Button>
                    <Button type="text" size="large" className={this.state.componentNum==5?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '5')}>团购</Button>
                    <Button type="text" size="large" className={this.state.componentNum==6?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '6')}>门票</Button>
                    <Button type="text" size="large" className={this.state.componentNum==7?'clickEd':'Noclick'} onClick={this.toHomeChildRouter.bind(this, '7')}>当地人</Button>
                    <Router>
                        <Switch>
                            <Route path="/main" component={Main} />
                            <Route path="/planeTicket" component={PlaneTicket} />
                            <Route path="/hotel" component={Hotel} />
                            <Route path="/trainTickets" component={TrainTickets} />
                            <Route path="/holiday" component={Holiday} />
                            <Route path="/groupBuying" component={GroupBuying} />
                            <Route path="/tickets" component={Tickets} />
                            <Route path="/local" component={Local} />
                            <Route path="/" exact component={Main} />
                        </Switch>
                    </Router>
                </div>
                <div className="fixedFixed">
                    <LeftFixed />
                </div>
            </div>
        )
    }
}
export default withRouter(Home)