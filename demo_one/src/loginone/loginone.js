import React from 'react'
class loginone extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date()
            date: 'state数据'
        };
    }
    componentDidMount(){
        console.log(this.context); //{}
      }
    render(){
        return(
                <ThemeContext.Consumer>
                    {
                        battery => <h1>Battery : {battery}</h1>
                    }
                </ThemeContext.Consumer>
        ) 
        
    }
}
export default loginone