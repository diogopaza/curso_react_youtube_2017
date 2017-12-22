import ReactDOM from 'react-dom';
import react, {Component} from 'react';
import Formulario from './Formulario';




class App extends Component{

   render(){
        return(
            <Formulario />

        );

   };
};







ReactDOM.render(<App />, document.getElementById('root'));