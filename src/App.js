/*prettier*/
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
state =
	 {
	     persons: [
	         { id: "ad1", name: "Preeti", age: 28 },
	         { id: "p12", name: "Stephan", age: 31 }
	     ],
	     otherState: "some other value",
	     showPersons: false
	 }


	switchNameHandler = (newName) => {
	    this.setState({
	        persons: [
	            { name: newName, age: 28 },
	            { name: "Stephan", age: 30 }
	        ]
	 });
	}

deletePersonHandler = (personIndex) => {
    //better to use spread as the the original array gets manipulated
//const persons = this.state.persons;
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
}

 nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
     });

     const person = {
         ...this.state.persons[personIndex]
     };

     person.name = event.target.value;
     const newPersons = [...this.state.persons];
     newPersons[personIndex] = person;//updated person

     this.setState({ persons: newPersons });
     //  console.log("this.state.persons", this.state.persons);

     // this.setState ({
     //   persons : [
     //     {name : "Preeti", age : 28},
     //     {name : event.target.value , age : 31}
     //   ]
     //  } )
 }

 togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons });

 render () {
     const style = {
				 backgroundColor: "green",
				 color: "white",
         font: "inherit",
         border: "1px solid blue",
         padding: "8px",
         cursor: "pointer"
     };

     let persons = null;
     if (this.state.showPersons) {
			 //here the persons in this.state.persons is the array we used above
         // and we are mapping an array into an array with JSX.common pattern of outputting list in react
         persons = (
             <div>

                 {this.state.persons.map((person, index) => {
					 return (<Person
					 click={() => this.deletePersonHandler(index)}
                         name={person.name}
                         age={person.age}
                         key={person.id}
                         changed={(event) => this.nameChangedHandler(event, person.id)} />);
                 }
                 )}
                 {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} changed={this.nameChangedHandler}>Hobbies:Racing</Person>
				<Person name="Rohit" age="31" /> */}
             </div>
				 );

				 style.backgroundColor = "red";
     }

     return (
	 <div className="App">
	 <h1>Hi, I am Preeti React App</h1>
	 <button style={style}
                 onClick={this.togglePersonsHandler}>Click Me to switch</button>
             {persons}
	 </div>

     );
 }
}

export default App;


