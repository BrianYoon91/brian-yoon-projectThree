import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import Form from './Form';
import DisplayExcuses from './DisplayExcuses';
import Footer from './Footer';

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
      <Footer />
    </div>
  );
}

export default App;







