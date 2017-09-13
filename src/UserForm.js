import React, { Component} from 'react';

export default class UserForm extends Component{
  constructor(){
    super();
    this.state = {
      name: ''
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onSave(ev){
    ev.preventDefault();
    this.props.onSave(this.state)
      .then( ()=> this.setState({ name: '' }));
  }
  onNameChange(ev){
    this.setState({ name: ev.target.value });
  }
  render(){
    const { name } = this.state;
    const { onNameChange, onSave } = this;
    return (
      <form className='well' onSubmit={ onSave }>
        <div className='form-group'>
          <label>Name</label>
          <input onChange={ onNameChange } className='form-control' value={ name }/>
        </div>
        <div className='form-group'>
          <button className='btn btn-primary'>Save</button>
        </div>
      </form>
    );
  }
}
