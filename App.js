import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:'React Simple CRUD Application',
      act:0,
      index:'',
      datas:[]
     }
  }

  componentDidMount(){
    this.refs.name.focus();
  }
  onSubmit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0)
    {
      let data ={
        name,address
      }
  
      datas.push(data);
    }
    else{
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;

    }
   

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  onEdit =(i) =>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act:1,
      index:i
    });
    this.refs.name.focus();
  }
  onDelete =(i)=>
  {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  render() { 
    let datas = this.state.datas;
    return ( 
      <div className="App">
        <h1>{this.state.title}</h1>
        <form ref="myForm" className="myForm">
        <input type="text" ref="name" placeholder="your name" className="formField"/>
        <input type="text" ref="address" placeholder="your address" className="formField"/>
        <button onClick={(e) => this.onSubmit(e)} className="myButton">Submit</button>

        </form>
        <pre>
          { datas.map((data, i) =>
          <li key={i} className="myList">
            {i+1}. {data.name}, {data.address}
            <button onClick={() => this.onDelete(i)} className="myButton">Delete</button>
            <button onClick={() => this.onEdit(i)} className="myButton">Edit</button>
          </li>
            )}
        </pre>
      </div>
     );
  }
}
 

export default App;
