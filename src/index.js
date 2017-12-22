import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List,ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {blue500,pink500} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ReactDOM from 'react-dom';
import './App.css';


injectTapEventPlugin();

const muiTheme = getMuiTheme({

    pallete: {
        primaryColor: blue500,
        accent1Color: pink500


    }

})

const estilos ={

    padding: '20px'

};

const textFielStyle = {
    display: 'block',
    width: '100%'

}

const buttonStyle ={

    marginTop: '20px'
}

class App extends Component{
    constructor(){
        super();
        this.state = {

            drawerOpened: false
        }

    }
    toggleDrawer(){

        this.setState({
            drawerOpened: !this.state.drawerOpened

        })
    }

    oi(){
        alert('oiii')
    }

    sendForm(e){
        e.preventDefault();
        console.log('enviar formulario');
        var data = {
             email : document.getElementById('email').value,
             password : document.getElementById('password').value
        }
        console.log(data)

    }


    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                <AppBar title='MyApp' onLeftIconButtonClick={() => this.toggleDrawer()} />
                <Drawer open={this.state.drawerOpened}   docked={false}
                     onRequestChange={() => this.toggleDrawer()}>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 1</ListItem>
                    </List>
                </Drawer>
                <div style={estilos}>
                    <form  onSubmit={(e) => this.sendForm(e)} >
                        <TextField floatingLabelText="email" type="email" id="email" style={textFielStyle}/>
                        <TextField floatingLabelText="password" style={textFielStyle} 
                            type="password" id="password" />
                        <RaisedButton fullWidth ={true} label="login" 
                            secondary={true} style={buttonStyle}
                            type="submit"/>

                    </form>
                </div>
                </div>
            </MuiThemeProvider>

        );

    };

};
//ReactDOM.render();
ReactDOM.render(<App />, document.getElementById('root'));