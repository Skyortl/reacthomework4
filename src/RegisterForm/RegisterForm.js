import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor () {
        super()
        this.state = {
            isHiddenSexInput: true,
            inputUsernameValue: '',
            inputEmailValue: '',
            inputSexValue: '',
            selectSexValue: 'Male',
            errorMessage: '',
        }
      }
     emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    render() {
        const getSexValue = () => {
            if(this.state.selectSexValue.toLocaleLowerCase() === 'other')
                return this.state.inputSexValue;
            return this.state.selectSexValue;
        };
        const onSubmitHandle = (e) => {
            const MAX_USERNAME_LENGTH = 15;
            const MIN_USERNAME_LENGTH = 5;
            let errorMessage = '';
            e.preventDefault();
            if(this.state.inputUsernameValue.length > MAX_USERNAME_LENGTH || this.state.inputUsernameValue.length < MIN_USERNAME_LENGTH)
                errorMessage = 'Not valid username';
            else if(!this.state.inputEmailValue.length || !this.emailIsValid(this.state.inputEmailValue))
                errorMessage =  'Not valid e-mail';
            else if(!getSexValue())
                errorMessage =  'Not valid sex';

            if(errorMessage.length)
            {
                this.setState({errorMessage});
                return;
            }
            else
                this.setState({errorMessage: ''});
            
            // const infoString = `Username: ${this.state.inputUsernameValue} \nE-mail: ${this.state.inputEmailValue}\nSex: ${getSexValue()}`;
            // alert(infoString);
            this.props.addCard({
                username: this.state.inputUsernameValue,
                email: this.state.inputEmailValue,
                sex: getSexValue() 
            });
            this.setState({
                isHiddenSexInput: true,
                inputUsernameValue: '',
                inputEmailValue: '',
                inputSexValue: '',
                selectSexValue: 'Male',
            });            
        }
        const onSelectSexHandle = (e) => {
            this.setState({
                isHiddenSexInput: !(e.target.value.toLowerCase() === 'other'),
                selectSexValue: e.target.value 
            });
        } 
        const onInputUsernameHandle = (e) => {
            this.setState({
                inputUsernameValue: e.target.value 
            });
        }
        const onInputEmailHandle = (e) => {
            this.setState({
                inputEmailValue: e.target.value 
            });
        }
        const onInputSexHandle = (e) => {
            this.setState({
                inputSexValue: e.target.value 
            });
        }
        return (
            <div>
                <form className="w-25 m-3 p-5 bg-light ">
                    <input className="form-control" type="text" placeholder="Username" value={this.state.inputUsernameValue} onChange={onInputUsernameHandle}/>
                    <br/>
                    <input className="form-control" type="email" placeholder="E-mail" value={this.state.inputEmailValue} onChange={onInputEmailHandle} />
                    <br/>
                    <div style={{height: '97px'}}>
                        <select className="form-control" onChange={onSelectSexHandle} value={this.state.selectSexValue}>
                           <option>Male</option>
                           <option>Female</option>
                           <option>Other</option>
                        </select>
                        <br/>
                        {!this.state.isHiddenSexInput && <input className="form-control" type="text" placeholder="Sex" value={this.state.inputSexValue} onChange={onInputSexHandle} />}
                    </div>
                   
                    <br/>
                    <input className ="btn btn-primary col-md-12 text-center" type="submit" value="Send" onClick={onSubmitHandle}/>
                    <p className="m-0 text-danger">{this.state.errorMessage}</p>
                </form>
            </div>
        );
    }
}

export default RegisterForm;