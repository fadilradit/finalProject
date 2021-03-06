import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {onLoginAdmin} from '../../action/index'

import HeaderAdmin from './HeaderAdmin'
import background from '../../Image/BW.jpg'


class LoginAdmin extends Component{

    onButtonClick = () => {
        const username = this.username.value
        const password = this.password.value

        console.log(username);
        console.log(password);

        this.props.onLoginAdmin(username,password)
        
        
    }

    render(){
        if(this.props.admin.username === ''){
            return(
                <div>
                        <div className = 'mt-5 pt-5 justify-content-center row' style = {{marginLeft: 50 , marginRight:50}}>
                        <div className = ' col-sm-4  card' style = {{backgroundImage: `url(${background})`}}>
                            <div className = 'card-body'>
                                
                                <div className = 'border-bottom border-light card-title'>
                                    <h1 className = "text-light">Login Admin</h1>
                                </div>
        
                                <form className = 'input-group mt-5 '>
                                    <input type = 'text' class = 'form-control' placeholder = 'username'
                                        ref = {(input) => {this.username = input}} />
                                </form>
        
                                <form className = 'input-group mt-3'>
                                    <input type = 'password' class = 'form-control' placeholder = 'password'
                                        ref = {(input) => {this.password = input}}/>
                                </form>
        
                                <button onClick = {this.onButtonClick} className = 'btn btn-light btn-outline-dark mt-5 '>Click For Login</button>
                                
                    
                            </div>
                        </div>
                    </div>
                    </div>
            )
        }
        return <Redirect to = '/HomeAdmin' />
    }
}

const mapStateToProps = state => {
    return{
        admin : state.authAdmin
    }
}

export default connect(mapStateToProps, {onLoginAdmin}) (LoginAdmin);