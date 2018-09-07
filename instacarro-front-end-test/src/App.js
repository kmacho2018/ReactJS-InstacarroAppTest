import React, { Component } from 'react';
import { Button, Label } from 'vanilla-framework-react';
import logo from './assets/logo.png'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }



  componentDidMount() {
    fetch("https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (

        <div>

          <div id="main">
            {

              items.slice(0).sort(function (a, b) {
                return a.remainingTime - b.remainingTime;
              }).map(item => (
                <div>
                  <Button brand value="Fazer Oferta" />

                  <img src={item.imageUrl}></img>
                  <input id="timeElapsed" type="hidden" value={item.remainingTime}></input>
                  <span>{item.remainingTime}</span>
                  {/* <span id="timeElapsed">{item.remainingTime}</span> */}
                  {/* <br></br> */}
                  {/* <span>{this.millisToMinutesAndSeconds(item.remainingTime)}</span> */}

                </div>
              ))
            }
          </div>
        </div>
      );
    }
  }
}

export default App;
