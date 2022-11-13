import React from 'react';
import './index.css'
let students = [
  {id:1,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:2,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:3,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:4,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
  {id:5,name:"Elyorbek Fayziev",age:16,address:"Samarqand",status:"Student",nickname:"deWebON",univ:"...",job:"Developer"},
]
let change = false
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data:students,
        name:"",
        age:"",
        address:"",
        status:"",
        nickname:"",
        univ:"",
        job:"",
        what:null
      }
      this.setState({data:students})
    }
      render(){
        const onChange =(e)=>{
          this.setState({[e.target.name]:e.target.value})
        }
        const id =()=>{
          return this.state.data.map((v)=>{
            return(
              <tbody key={v.id}>
              <tr>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.age}</td>
            <td>{v.address}</td>
            <td>{v.status}</td>
            <td>{v.nickname}</td>
            <td>{v.univ}</td>
            <td>{v.job}</td>
            {change? 
            <>
            <td><button onClick={()=>cancel(v.id)}>cancel</button></td>
            <td><button onClick={()=>save(v.id)}>save</button></td>
            </>
            :
            <>
            <td><button onClick={()=>delet(v.id)}>delete</button></td>
            <td><button onClick={()=>edit(v.id)}>edit</button></td>
            </>
            }
              </tr>
              </tbody>
            )
          })
        }
        const push = ()=>{
          return (
            this.state.data.push({id:this.state.data.length+1,name:this.state.name,age:this.state.age,address:this.state.address,status:this.state.status,nickname:this.state.nickname,univ:this.state.univ,job:this.state.job},()=>{this.setState({data:students})})
          )
        }
        const delet =(id)=>{
          let ar = this.state.data.filter((v)=>v.id!==id)
          this.setState({data:ar})
        }
        const edit = (id)=>{
          change = true
          return(
          this.state.data.filter((v)=>{
            if(v.id === id){
              this.setState({what: v})
              this.setState({id:v.id,name:v.name,age:v.age,address:v.address,status:v.status,nickname:v.nickname,univ:v.univ,job:v.job})
            }
          }) 
          )        
        }
        const cancel = ()=>{
          this.setState({what:null})
        }
        const save = (id)=>{
          this.state.data.filter((v)=>{
            if(v.id === id){
              this.state.data.push({id:v.id,name:this.state.name,age:this.state.age,address:this.state.address,status:this.state.status,nickname:this.state.nickname,univ:this.state.univ,job:this.state.job})
            }
            return this.setState({data:students})
          })
        }
        return(
          <div>
          <table className='table'>
            <thead>
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
            </thead>
            {id()}
          </table>
          <div>
              <input value={this.state.name} name='name' onChange={onChange} type="text" placeholder='name'/>
              <input value={this.state.age} name='age' onChange={onChange} type="text" placeholder='age'/>
              <input value={this.state.address} name='address' onChange={onChange} type="text"  placeholder='address'/>
              <input value={this.state.status} name='status' onChange={onChange} type="text" placeholder='status'/>
              <input value={this.state.nickname} name='nickname' onChange={onChange} type="text" placeholder='nickname'/>
              <input value={this.state.univ} name='univ' onChange={onChange} type="text" placeholder='univ'/>
              <input value={this.state.job} name='job' onChange={onChange} type="text" placeholder='job'/>
              <button onClick={push}>Save</button>
            </div>
          </div>
        )
  }
}

export default App;
