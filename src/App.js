
import './App.css';
import DisplayEmployee from "./components/DisplayEmployee";
import {useState} from "react";
import axios from "axios"; // necessaire à l'utilisation d'axios Faire npm install axios pour installer les dépendances
const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    /*
    .then allows you to specify, inside parentheses, what should be done once we receive the requested data, thanks to a
     callback function (often in arrow form for a more concise code).
    The response is an object containing several attributes: among them, we're only interested in data. The callback
     function given to the first .then refers to response.data which will be retrieved as data in the parameter of the
      function given to the second .then. The value of employee is then replaced in the state by data.results[0].
    */

    //send the request
    axios.get('https://randomuser.me/api?nat=en')
    // Extract the DATA from the received response
        .then((response) => response.data)
    // Use this data to update the state
        .then((data) => {
          setEmployee(data.results[0]);
        })
  }

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type='button' onClick={getEmployee}> Get employee</button>
    </div>
  );
}

export default App;
