import React,{Component} from 'react';
import classes from '../DisplayCards/DisplayCards.module.css';
import Aux from '../../../hoc/Aux';
import axios from 'axios';

class AddCard extends Component {
    state={
        ids: []
    }

    constructor(props) {
        super(props);
        this.addCardHandler = this.addCardHandler.bind(this);
        //console.log(this.props.ids)
    }

    addCardHandler(event){
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://localhost:8000/controller/endpoint', data);
    }

    deleteHanlder(){
        console.log('tryin to dilit')
        axios.delete('http://localhost:8000/controller/endpoint',
        {   
            data:{
                '_id':'5d56d0cb2356c2f2f3cf2af1'
          }});
    }

    render(){

        return(
            <div className={classes.DisplayCards}>
                <form onSubmit={this.addCardHandler}>
                    {this.props.ids.map((val)=>{
                        return(
                            <Aux key={val}>
                                <label>{val} </label>
                                <input id={val} key={val} name={val} type="text"/>
                                <br/>
                            </Aux>
                        );
                    })}
                    <button>Enviar</button>
                </form>
                <button onClick={this.deleteHanlder}>Borrar</button>
            </div>
        );
    }
};

export default AddCard;
