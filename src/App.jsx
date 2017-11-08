import React, {Component} from 'react';


class App extends Component {
  show(json){
    if (json.hasOwnProperty('adjective')) {
      this.setState({description: json.adjective.syn + " "})
    } else if (json.hasOwnProperty('noun')) {
      this.setState({description: json.noun.syn+" "})
    } else if (json.hasOwnProperty('verb')) {
      this.setState({description: json.verd.syn +" "})
    } else {this.setState({description:"404 Not Found"})}
    console.log(this.state);
  }

  constructor(props){
    super(props);
    this.state={
      word:"",
      description:""
    }
  }

  call(word){
    fetch(`http://words.bighugelabs.com/api/2/53ffd46ebac03632a4179401a3cae48b/${word}&/json`)
    .then(response => response.json())
    .then(json => {this.show(json)
      })
    }

  render(){
    return(
      <div className="form-group">
        <input
          id="input"
          type="text"
          placeholder="your word..."
          onChange={event => this.setState({word: event.target.value})}
        />
        <button className="btn btn-success"
          type="button"
          onClick={() =>this.call(this.state.word)}
          >
          submit
        </button>
        <div>
          <h1>Synonym of {this.state.word} is</h1><h2>{this.state.description}</h2>
        </div>
      </div>
    )
  }
}

export default App;
