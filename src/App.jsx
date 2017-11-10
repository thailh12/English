import React, {Component} from 'react';

class App extends Component {
  show(json) {
    if (json.hasOwnProperty('adjective')) {
      this.setState({
        synonym: json.adjective.syn + " "
      })
      this.setState({
        antonym: json.adjective.ant + " "
      })
      this.setState({
        synonym: json.adjective.sim + " "
      })
    } else if (json.hasOwnProperty('noun')) {
      this.setState({
        synonym: json.noun.syn + " "
      })
    } else if (json.hasOwnProperty('verb')) {
      this.setState({
        synonym: json.verb.syn + " "
      })
    } else {
      this.setState({description: "404 Not Found"})
    }
    console.log(this.state);
  }

  constructor(props) {
    super(props);
    this.state = {
      word: "",
      synonym: "",
      antonym: ""
    }
  }

  call(word) {
    this.setState({word: "", synonym: "", antonym: ""});
    fetch(`http://words.bighugelabs.com/api/2/53ffd46ebac03632a4179401a3cae48b/${word}&/json`).then(response => response.json()).then(json => {
      this.show(json)
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Find synonym and antonym</h1>
      <div className="form-inline">
          <div className="form-group">
          <input className="form-control" type="text" placeholder="your word..." onChange={event => this.setState({word: event.target.value})}/>
          <button className="btn btn-success" type="button" onClick={() => this.call(this.state.word)}>
            SUBMIT
          </button>
        </div>
      </div>
      <div className="output">
        <div className="syn">
          <h1>Synonym of {this.state.word} is</h1>
          <h2 id="out">{this.state.synonym}</h2>
        </div>
        <div className="ant">
          <h1>Antonym of {this.state.word} is</h1>
          <h2 id="out">{this.state.antonym}</h2>
        </div>
      </div>
      <div className="footer">
        <span>Power by React <br /> Develop by Thai Lam Ha <br /> Design by jiichu</span>
      </div>
    </div>)
  }
}

export default App;
