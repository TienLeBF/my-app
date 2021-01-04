import React from 'react'
class Square extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    componentDidUpdate(){
       // console.log("did update LOL")
        //console.log(this.props)
    }
    componentDidMount(){
        // console.log("did mount LOL")
        // console.log(this.props)
    }
    componentWillReceiveProps(){
        // console.log("VCLLLLLLLLLLLLLLLL")
    }
    render() {
        
        return (
            <button className="square" onClick={this.props.onclick}>
                {this.props.value}

            </button>
        );
    }
}

export default Square;