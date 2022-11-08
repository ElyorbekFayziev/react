import React from 'react';
import './index.css'

let students = [
  {id:1,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:2,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:3,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:4,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:5,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
]
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data:students
      }
      this.setState({data:students})
    }
      render(){
        const id =()=>{
          return this.state.data.map((v)=>{
            return(
              <tr>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.age}</td>
            <td>{v.address}</td>
            <td>{v.status}</td>
            <td>{v.nickname}</td>
            <td>{v.univ}</td>
            <td>{v.job}</td>
            <td>delete</td>
            <td>edit</td>
          </tr>
            )
          })
        }
        // const delet =(id)=>{
        //   let ar = this.state.data.filter((v)=>id!==v.id)
        //   this.state.data = ar
        //   console.log(this.state.data);
        // }
        const edit = (id)=>{
          return this.state.data.map((v)=>{
            if(v.id == id){
            return(
              <input value={v.id}></input>,
              <input value={v.name}></input>,
              <input value={v.age}></input>,
              <input value={v.address}></input>,
              <input value={v.status}></input>,
              <input value={v.nickname}></input>,
              <input value={v.univ}></input>,
              <input value={v.job}></input>
            )
            }
          })
        }
        return(
          <table className='table'>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
              <th>NICKNAME</th>
              <th>UNIV</th>
              <th>JOB</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
            {id()}
          </table>
        )
  }
}

export default App;
