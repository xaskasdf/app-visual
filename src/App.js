import React, {Component} from 'react';
import './App.css';
//import Req from './controller/Req';
//import DisplayCards from './components/UI/DisplayCards/DisplayCards';
import AddCard from './components/UI/AddCard/AddCard';

class App extends Component {

  state={
    linesOfBusiness: [],
    entityKey: "clients",
    ids: []
  }
  

  componentDidMount(){
    /*fetch("http://localhost:8000/controller/endpoint")
    .then(response => {
        return response.json()
    })
    .then(data => {
        this.setState({linesOfBusiness:data.giros})
    })*/

    fetch("http://localhost:8000/controller/endpoint/schema/"+this.state.entityKey+".json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        this.setState({ids:data.fields})
    })
}

  render(){
    
    //let props=(
    //  this.state.ids.map((getAttr)=>{
    //    return(
    //      getAttr.field
    //    )}));

    //console.log(props)

    /*let lines = (
      <div>
        {this.state.entitySchema.map((entity)=>{
          return <DisplayCards
            name={entity.name}
            category={entity.category}
            subcategory={entity.subcategory}
            code={entity.code}
            key={entity.code}
            tax={entity.tax_subject}
          />
        })}
      </div>
    );*/
    
    return (
       <div className="App">
         <header className="App-header">
            {this.state.ids.length>0 ? <AddCard ids={this.state.ids.map((getAttr)=>{return(getAttr.field)})}/> :  null }
         </header>
       </div>
     );
  }
}
export default App;
