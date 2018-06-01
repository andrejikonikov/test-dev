import React, { Component } from 'react';

import './Form.css';
// import './Dropdown.css';

const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
</div>

class CustomForm extends Component {

    constructor (props) {
        super(props);

        this.state = {
            name: '',
            surename: '',
            message: '',
            formErrors: {name: '', surename: '', message: ''},
            nameValid: false,
            surenameValid: false,
            messageValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let surenameValid = this.state.surenameValid;
        let messageValid = this.state.messageValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length > 2 ? true : false;
                fieldValidationErrors.name = value.length > 2 ? '' : ' has not enough characters (min - 3)';

                break;
            case 'surename':
                surenameValid = value.length >= 6;
                fieldValidationErrors.surename = surenameValid ? '': ' is too short (min - 6)';

                break;

            case 'message':
                messageValid = value.match(/^[a-zA-Z]{2}\d{6}/);
                fieldValidationErrors.message = messageValid ? '' : ' is invalid, should contain both two letters and six numbers';

                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            nameValid: nameValid,
            surenameValid: surenameValid,
            messageValid: messageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.surenameValid && this.state.messageValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render () {
        return (
            <form className="demoForm">
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={'form-group ${this.errorClass(this.state.formErrors.name)}'}>
                    <label htmlFor="name">First name</label>
                    <input type="text" className="form-control" name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleUserInput}  />
                </div>
                <div className={'form-group ${this.errorClass(this.state.formErrors.surename)}'}>
                    <label htmlFor="surename">Last name:</label>
                    <input type="text" className="form-control" name="surename"
                        placeholder="surename"
                        value={this.state.surename}
                        onChange={this.handleUserInput}  />
                </div>
                <div className={'form-group ${this.errorClass(this.state.formErrors.message)}'}>
                    <label htmlFor="message">Message:</label>
                    <textarea  className="form-control" name="message"
                        placeholder="message"
                        value={this.state.message}
                        onChange={this.handleUserInput} />
                </div>
            <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
            </form>
        )
    }
}

    export default CustomForm;
