import React, {useState} from "react"

 const InputCheck = () => {

    const [value, setValue] = useState()
    const isNumber = (value) => {
        let intVal = Number(value)
        let result = isNaN(intVal) ? false : true
        return result
};

    const handleChange = (e) => {
        let inputValue = e.target.value;
        isNumber(inputValue) ? setValue(inputValue) : alert('Please type just a numbers )))')
    }



        return(
            <form>
                <p>Just a number</p>
                <input onChange={handleChange} value={value}/>
            </form>
        )

}

export default InputCheck;