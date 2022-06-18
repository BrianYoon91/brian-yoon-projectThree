import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import Form from './Form';
import DisplayExcuses from './DisplayExcuses';

function App() {

const [finalExcuse, setFinalExcuse] = useState([]); 

const [excuseChoice, setExcuseChoice] = useState('');

const [numberOfExcuses, setNumberOfExcuses] = useState(0);

// API Call using Axios using 2 user choices of category and number of excuses

useEffect( () => {

  if (excuseChoice) {

    axios({

      baseURL: `https://excuser.herokuapp.com/v1/excuse/`,
      url: `${excuseChoice}/${numberOfExcuses}`,
      method: 'GET'
    

    }).then((apiData) => {

      setFinalExcuse(apiData.data);
    }).catch(function (){
      
      console.log('Your request could not be retrieved');
    });

  }

},[excuseChoice, numberOfExcuses]);


// Function to passdown as a prop to get user's choices.

  const selectExcuse = function(event, userChoice, numberChoice) {
    event.preventDefault(); 
    
    setExcuseChoice(userChoice);
    setNumberOfExcuses(numberChoice);
  }


  return (
    <div className="App">
      <Header />
      <Form submit={selectExcuse}  />
      <DisplayExcuses excuses={finalExcuse}/>
    </div>
  );
}

export default App;


// Pseudo Code 
// ***App Component***
// Header
// Form: 
// DisplayExcuses 
// 

// The Form component will have the following categories (these are all the options available within the api) family, office, children, college, party. And it will use an onChange function to pass another function to grab the value. The values of the options will have useState attached to them. 

// Once the value is stored in the selectValue, it will be passed onto a submit function as a parameter to be passed up to APP.js 

// Once it is passed up to app.js it will make an api call using the user's selection value and grab the data. And assign the value with useState 

// When the data is retrieved it will be passed on to DisplayExcuses component as a prop. Since the data is returned as an array of OBJECTS, the for in loop will be used to cycle through the data and to be displayed. 




