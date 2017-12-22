import React, {Component} from 'react';


export default class extends Component{

    constructor(){
        super();
        this.state ={
            valorDoBotao : "Enviar Formulario"

        };

    };

    mudarValorDoBorao(){

        this.setState({
            valorDoBotao: "Não enviar Formulario"
        })
    }
    voltarValorDoBotao(){
        
                this.setState({
                    valorDoBotao: "Enviar Formulario"
                })
            }

    render(){
        //console.log(this.props)
        return(
            
            <form>
                <input type="text" placeholder={this.props.placeholderDoInput} />
                <button onMouseOver = {() => this.mudarValorDoBorao()}
                     onMouseOut = {() => this.voltarValorDoBotao()}>{this.state.valorDoBotao}</button>
            </form>

        );
    };

};