import React from "react"

class InputCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }


        this.handleChange = this.handleChange.bind(this);
    }

    isNumber = (value) => {
        let intVal = Number(value)
        let result = isNaN(intVal) ? false : true
        return result
};

    handleChange = (e) => {
        let inputValue = e.target.value;
        this.isNumber(inputValue) ? this.setState({value: inputValue,}) : alert('Please type just a numbers )))')
    }


    render() {
        return(
            <form>
                <p>Just a number</p>
                <input onChange={this.handleChange} value={this.state.value}/>
            </form>
        )
    }
}

export default InputCheck;