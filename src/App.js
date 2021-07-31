import './App.css';
import React, {useState} from 'react';
import data from './data'
import List from './List'


function App() {
  const [people, setPeople] = useState(data)

  function clearAll (people) {
    setPeople([]) 
    console.log(people)
  }

  return (
    <div className="App">
    <main>
      <section className="container">
      {people.length == 1 ? 
      <h3>{people.length} birthday today</h3>
      :
      <h3>{people.length} birthdays today</h3>
      }
        <List people={people} setPeople={setPeople} />
        <button className="clear-all-btn" onClick={() => clearAll()}>Clear All</button>
      </section> 
    </main>
    </div>
  );
}

export default App;
