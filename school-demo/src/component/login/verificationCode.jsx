import React from "react"
import {Input, Button} from 'antd'
import './verfication.less'
class VerificationCode extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options: { //默认options参数值
                id: "VerificationCode", //容器Id
                canvasId: "verifyCanvas", //canvas的ID
                width: "80", //默认canvas宽度
                height: "30", //默认canvas高度
                type: "number", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
                numArr: "0,1,2,3,4,5,6,7,8,9".split(",")
            },
            code: "",
            numCode: [],// 验证码数据
            size: 4
        }
        this.CreateVerification = this.CreateVerification.bind(this)
        this.randomNum = this.randomNum.bind(this)
        this.randomColor = this.randomColor.bind(this)
        this.refresh = this.refresh.bind(this)
    }
    componentDidMount () {
        this.CreateVerification()
        this.refresh()
    }
    // 创建验证码
    CreateVerification () {
        var con = document.getElementById(this.state.options.id);
        var canvas = document.createElement("canvas");
        this.setState({
            width: con.offsetWidth > 0 ? con.offsetWidth : "100",
            height: con.offsetHeight > 0 ? con.offsetHeight : "40"
        })
        canvas.id = this.state.options.canvasId;
        canvas.width = this.state.options.width;
        canvas.height = this.state.options.height;
        canvas.style.cursor = "pointer";
        canvas.innerHTML = "您的浏览器版本不支持canvas";
        con.appendChild(canvas);
        var parent = this;
        canvas.onclick = function () {
            parent.refresh();
        }
    }
    randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**生成一个随机色**/
    randomColor (min, max) {
        let r = this.randomNum(min, max);
        let g = this.randomNum(min, max);
        let b = this.randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    refresh () {
        this.setState({
            code: ''
        })
        this.setState({
            numCode: []
        })
        var canvas = document.getElementById(this.state.options.canvasId);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
        } else {
            return;
        }
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.randomColor(180, 240);
        ctx.fillRect(0, 0, this.state.options.width, this.state.options.height);
        var txtArr = this.state.options.numArr;
        for (var i = 1; i <= this.state.size; i++) {
            if (i === 2) {
                this.setState((state) => {
                    return {
                        code: state + '+'
                    }
                })
                ctx.font = this.randomNum(this.state.options.height / 2, this.state.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);//阴影与字体垂直距离
                ctx.shadowBlur = this.randomNum(-3, 3);//阴影模糊级别
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                let x = this.state.options.width / (this.state.size + 1) * i;
                let y = this.state.options.height / 2;
                let deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText('+', 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            } else if (i === 4) {
                this.setState((state) => {
                    return {
                        code: state + '='
                    }
                })
                ctx.font = this.randomNum(this.state.options.height / 2, this.state.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);
                ctx.shadowBlur = this.randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                let x = this.state.options.width / (this.state.size + 1) * i;
                let y = this.state.options.height / 2;
                let deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText('=', 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            } else {
                let txt = txtArr[this.randomNum(0, txtArr.length)];
                this.setState((state) => {
                    return {
                        code: state + txt
                    }
                })
                this.setState((state) => {
                    return {
                        numCode: [...state.numCode, txt]
                    }
                })
                ctx.font = this.randomNum(this.state.options.height / 2, this.state.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);
                ctx.shadowBlur = this.randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.state.options.width / (this.state.size + 1) * i;
                var y = this.state.options.height / 2;
                var deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }

        }
        /**绘制干扰点**/
        for (let i = 0; i < this.state.options.width / 4; i++) {
            ctx.fillStyle = this.randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(this.randomNum(0, this.state.options.width), this.randomNum(0, this.state.options.height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    render(){
        return(
            <div className="verfication">
                <div className="VerificationMain">
                    <Input placeholder="请输入验证码" />
                    <div className="verficationInput" id="VerificationCode" />
                </div>
                <Button type="text" className="VerificationBtn" onClick={this.refresh}>换一张</Button>
            </div>
        )
    }
}
export default VerificationCode