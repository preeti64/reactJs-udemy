import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state =
   {
    persons : [
      {id : 'ad1', name : "Preeti", age : 28},
      {id: 'p12' , name : "Stephan" , age : 31},
      {id : 'ad21', name : "Preeti", age : 28},
      {id: 'p122' , name : "Stephan" , age : 31}
    ] ,
    otherState :'some other value',
    showPersons : false
   }
 

//   switchNameHandler = (newName) => {
//   console.log("was clicked!!!");
//   this.setState ({
//     persons : [
//       {name : newName, age : 28},
//       {name : "Stephan" , age : 30}
//     ]
//    } )
//  }

deletePersonHandler = (personIndex) => {
  //better to use spread as the the original array gets manipulated
//const persons = this.state.persons; 
const persons = [...this.state.persons];
persons.splice(personIndex, 1);
this.setState({persons : persons});
}

 nameChangedHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons.personIndex = person;//updated person

      this.setState = ({persons : persons} );

      // this.setState ({
      //   persons : [
      //     {name : "Preeti", age : 28},
      //     {name : event.target.value , age : 31}
      //   ]
      //  } )
 }

 togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 }
  render(){
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;
    if(this.state.showPersons)
    {
       //here the persons in this.state.persons is the array we used above
      // and we are mapping an array into an array with JSX.common pattern of outputting list in react
      persons=(
        <div>
         
          {this.state.persons.map((person, index) =>{
           return <Person 
           click={() => this.deletePersonHandler(index)} 
            name={persons.name} 
            age={persons.age}
            key={persons.id}
            changed={(event) => this.nameChangedHandler(event,  persons.id)} />
          }
)}
        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} changed={this.nameChangedHandler}>Hobbies:Racing</Person>
        <Person name="Rohit" age="31" /> */}
        </div>
      );
    }

  return (
   <div className="App">
   <h1>Hi, I am Preeti React App</h1>
   <button style={style}
   onClick={this.togglePersonsHandler}>Toggle Me </button>
  {/* onClick={this.switchNameHandler.bind(this,'Maximailian!!')}>Click Me</button> */}
  {persons}
   </div>

  );

}
}

export default App;


