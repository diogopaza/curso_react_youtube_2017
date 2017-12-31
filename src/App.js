import React, {Component} from 'react'
import {
    BrowserRouter,
    Route,
    Switch

}from 'react-router-dom'

class HelloWorld extends Component{

    render(){
        return(
            <div>Hello World!!!!</div>
        )

    }
}

class Hello extends Component{
    
        render(){
            return(
                <div>Hello </div>
            )
    
        }
}

 class World extends Component{
        
            render(){
                return(
                    <div>World </div>
                )
        
            }
    }

        class Error extends Component{
            
                render(){
                    return(
                        <div>404 </div>
                    )
            
                }
            }
    
        




export default class extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HelloWorld} exact/>
                    <Route path="/hello" component={Hello} />
                    <Route path="/world" component={World} />
                    <Route  component={Error} />
                </Switch>
            </BrowserRouter>
        )

    }
}