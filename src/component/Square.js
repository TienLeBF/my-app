import React from 'react'
class Square extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    componentDidUpdate() {
        console.log("in update");
    }
    componentDidMount() {
        // console.log("did mount LOL")
        // console.log(this.props)
    }
    componentWillReceiveProps() {
        // console.log("VCLLLLLLLLLLLLLLLL")
    }
    render() {

        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}

            </button>
        );
    }
}

export default Square;