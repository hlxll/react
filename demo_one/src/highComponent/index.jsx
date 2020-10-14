import react,{Component} from 'react'

const highFeact = (url) => (View)=>{
    return class extends Component {
        constructor(){
            super();
            this.state = {
                loading: true,
                data: null
            }
        }
        render(){
            return <View></View>
        }
    }
}
export default highFeact;