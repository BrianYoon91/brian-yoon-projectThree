import { useState } from "react";

const Form = (props) => {

    const [userValue, setUserValue] = useState(""); 

    const [numberSelected, setNumberSelected] = useState("");

    const changeHandler = (event) => {

        setUserValue(event.target.value);

    }

    const changeHandlerNumber = (event) => {

        setNumberSelected(event.target.value);
    }

    return (
        <form action=""
        onSubmit={(event)=>{props.submit(event, userValue, numberSelected)}}>
            <label htmlFor="excusesOption">So what will it be this time?</label>
            <select name="" id="excusesOptions"
            onChange={changeHandler}
            value={userValue}>

                <option value="" default disabled>Pick a category!</option>
                <option value="family">Family</option>
                <option value="office">Office</option>
                <option value="children">Children</option>
                <option value="party">Party</option>
                <option value="college">College</option>

            </select>

            <label htmlFor="numberOfExcuse">How many excuses?</label>
            <select name="" id="numberOfExcuse"
            onChange={changeHandlerNumber}
            value={numberSelected}>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

            </select>

            <button>Give Me My Excuse!</button>

        </form>
    )
}

export default Form; 