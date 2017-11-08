import React, {Component} from 'react';

const key = 'ac0d96b02dd61f43d4fdcc0c9f2ccf5c';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      city:"",
      description:""
    }
  }


  weather(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${key}&q=${city}`)
    .then(response => response.json())
    .then(json => {
      this.setState({description: json.weather[0].description})
      })
    }

  render(){
    return(
      <div className="form-group">
        <input
          id="input"
          type="text"
          placeholder="your city..."
          onChange={event => this.setState({city: event.target.value})}
        />
        <button className="btn btn-success"
          type="button"
          onClick={() =>this.weather(this.state.city)}
          >
          submit
        </button>
        <div>
          <h1>Weather in {this.state.city} is</h1><h2>{this.state.description}</h2>
        </div>

      </div>
    )
  }
}
export default App;
