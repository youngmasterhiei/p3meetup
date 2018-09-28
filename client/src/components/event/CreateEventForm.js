import React, { Component } from 'react';
import axios from 'axios';
class CreateEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {
             
             title: "",
             description: "",
             date: "",
             time: "",
             address: "",
             name: ""
      
            

            }
 };
 
    
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.onClick = this.onClick.bind(this);


  }
  //handles input values of form
  handleEventChange = event => {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  //Form submit and axios post to DB
  handleEventSubmit = event => {
    event.preventDefault();
    
    let eventInfo = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time,
      address: this.state.address,
      name: this.state.name,
      image: this.state.image

    };
    console.log(eventInfo);
    axios({
      method: 'post',
      url: '/api/events',
      data: eventInfo,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);

      });
      this.props.toggleList();
      this.onClick();
  };


  onClick() {
    const { updateEventList } = this.props
  
    updateEventList();
  }


  render() {
 

    return (
      <div className="app-form-container">
  

        <form onSubmit={this.handleEventSubmit} >
          <h1>Create an Event</h1>
          <label>Title: </label>
          <input className="InputField" type="text" name="title" value={this.state.email} onChange={this.handleEventChange} placeholder="hello"></input>

          <label>Description: </label>
          <input className="InputField" type="text" name="description" value={this.state.description} onChange={this.handleEventChange}></input>

          <label>Date: </label>
          <input className="InputField" type="text" name="date" value={this.state.date} onChange={this.handleEventChange}></input>


          <label>Time: </label>
          <input className="InputField" type="text" name="time" value={this.state.time} onChange={this.handleEventChange}></input>


          <label>Address: </label>
          <input className="InputField" type="text" name="address" value={this.state.address} onChange={this.handleEventChange}></input>


          <label>Name: </label>
          <input className="InputField" type="text" name="name" value={this.state.name} onChange={this.handleEventChange}></input>


          <label>image: </label>
          <input className="InputField" type="text" name="image" value={this.state.image} onChange={this.handleEventChange}></input>


       

          <button type="submit" >Submit</button>
        </form>
      </div>
      

    );
  }
}

export default CreateEventForm;