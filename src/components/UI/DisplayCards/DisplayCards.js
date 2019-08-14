import React,{Component} from 'react';
import classes from './DisplayCards.module.css';

class DisplayCards extends Component{
    render(){
        return(
            <div className = {classes.DisplayCards}>
                <p><strong>Actividad: </strong>{this.props.name}</p>
                <p><strong>Categoria: </strong>{this.props.category}</p>
                <p><strong>Subcategoria: </strong>{this.props.subcategory}</p>
                <p><strong>Codigo: </strong>{this.props.code}</p>
                <p><strong>Afecto a IVA: </strong>{this.props.tax === "G" ? "Depende": this.props.tax}</p>
            </div>
        );
    }
}

export default DisplayCards;