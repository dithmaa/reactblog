import React from "react";


class Login extends React.Component{
    state = {
        loginValue: '',
        emailValue: '',
        passwordValue: ''
    }
    changeLoginValue = (e) =>{
        this.setState({
            loginValue: e.target.value
        })
    }
    changeEmailValue = (e) =>{
        this.setState({
            emailValue: e.target.value
        })
    }
    changePasswordValue = (e) => {
        this.setState({
            passwordValue: e.target.value
        })
    }
    createUser = (e) =>{
        e.preventDefault();
        const user = {
            id: 1,
            login: this.state.loginValue,
            email: this.state.emailValue,
            password: this.state.passwordValue
        }

        localStorage.setItem('loginData', JSON.stringify(user));
        console.log(user);

    }
    render(){
        return(
            <div style={{"minHeight": "522px"}} className="tac">
                <h2 style={{"marginTop": "100px"}}>Войдите в аккаунт, чтобы создавать посты</h2>

                <form className="mainForm" onSubmit={this.createUser}>

                    <input type="text" placeholder="Логин" name={"userName"}
                    value={this.state.loginValue}
                    onChange={this.changeLoginValue}
                    required
                    ></input>

                    <input type="email" 
                    placeholder="E-mail"
                    value={this.state.emailValue}
                    onChange={this.changeEmailValue}
                    />


                    <input type="text" placeholder="Пароль" name={"userPassword"}
                    value={this.state.passwordValue}
                    onChange={this.changePasswordValue}
                    required
                    />

                    <button className="blackBtn" type="submit">Войти</button>
                </form> 
            </div>
        )
    }
}
export default Login;