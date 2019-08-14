import React, {Component} from 'react';
import './App.css';
//import Req from './controller/Req';
import DisplayCards from './components/UI/DisplayCards/DisplayCards';
import AddCard from './components/UI/AddCard/AddCard';

class App extends Component {
  state={
    linesOfBusiness: []
  }

  componentDidMount(){
    fetch("http://192.168.10.80:8000/siscob/default/line_of_business_api.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        this.setState({linesOfBusiness:data.giros})
    })
}

  render(){

    let lines = (
      <div>
        {this.state.linesOfBusiness.map((line_of_business)=>{
          return <DisplayCards
            name={line_of_business.name}
            category={line_of_business.category}
            subcategory={line_of_business.subcategory}
            code={line_of_business.code}
            key={line_of_business.code}
            tax={line_of_business.tax_subject}
          />
        })}
      </div>
    );

    return (
       <div className="App">
         <header className="App-header">
           <AddCard></AddCard>
         </header>
       </div>
     );
  }
}

export default App;
