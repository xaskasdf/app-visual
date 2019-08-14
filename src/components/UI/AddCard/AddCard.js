import React,{Component} from 'react';
import classes from '../DisplayCards/DisplayCards.module.css';
import Aux from '../../../hoc/Aux';

class addCard extends Component {
    constructor() {
        super();
        this.addCardHandler = this.addCardHandler.bind(this);
    }

    addCardHandler(event){
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data)
        fetch('http://192.168.10.80:8000/siscob/default/line_of_business_api', {
              method: 'POST',
              headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
    }

    render(){
        let ids = ["name","category","subcategory","code","tax","add_date"]

        return(
            <div className={classes.DisplayCards}>
                <form onSubmit={this.addCardHandler}>
                    {ids.map((val)=>{
                        console.log(val)
                        return(
                            <input id={val} key={val} name={val} type="text"/>
                        );
                    })}
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
};

export default addCard;