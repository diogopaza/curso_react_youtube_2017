import React, {Component} from 'react'
import axios from 'axios'

export default class extends Component{
    
    constructor(){

        super()
        this.state ={
            posts:[]
        }
    }


    componentDidMount(){
        /*
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => { 
                this.setState({
                    posts: res.data
                })
        })
            .catch(err => {
                console.log(err)
            })
        */
        axios.post('https://jsonplaceholder.typicode.com/posts', {valor:3})
            .then(res => {
                console.log(res)
            })

    }
    login(){
        axios.post('https://jsonplaceholder.typicode.com/posts', {valor:1})
        .then(res => {
            console.log(res)
        })
        
    }
    
    render(){
        //posso usar .map(post, i)o i é a posição do elemento dai no key vc coloca o i 
        const posts = this.state.posts.map(post => {
            return(
                <p key={post.id} >{post.title}</p>
            )
        })
        return(
            <div>
                <button onClick={() => this.login}>Login</button>
            </div>
           
        )
    }

}