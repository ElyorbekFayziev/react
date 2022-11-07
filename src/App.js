import React from 'react';

let students = [
  {id:1,name:"sufni",surname:"jfndb"},
  {id:2,name:"sjsdn",surname:"sdfb"},
  {id:3,name:"asi",surname:"gfddb"},
  {id:4,name:"gfgi",surname:"dfhndb"},
  {id:5,name:"brei",surname:"ytdsdb"},
]
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:students
    }
  }
  // let res = students.map((v)=>this)
  render(){
  }
}

export default App;
