import React,{Component} from 'react';
import classes from '../DisplayCards/DisplayCards.module.css';
import Aux from '../../../hoc/Aux';
import axios from 'axios';

class addCard extends Component {
    constructor() {
        super();
        this.addCardHandler = this.addCardHandler.bind(this);
    }

    addCardHandler(event){
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://192.168.10.80:8000/siscob/default/line_of_business_api', data);
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