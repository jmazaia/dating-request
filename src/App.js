import { Component, React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Sound from "react-sound";
import Champion from "./Pages/Champion";
import Congratulations from "./Pages/Congratulations";
import Dashboard from "./Pages/Dashboard/index";
import Entra from "./Pages/Entra";
export default class App extends Component {
  constructor(props) {
    super(props);
    const path = "http://localhost/public/assets/";
    const images = [
      `${path}/299738954_625486022415416_3985827845209104212_n.jpg`,
      `${path}/300261350_1399210487245547_5782722407586582506_n.jpg`,
      `${path}/300780964_790324752096426_4904488616410315178_n.jpg`,
      `${path}/300802524_3340917829454871_2729094915848354865_n.jpg`,
      `${path}/301683028_514802383739461_6676483596507227932_n.jpg`,
    ];

    this.state = {
      images,
      currentImg: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  render() {
    const { images, currentImg } = this.state;
    const urlString = `url('${images[currentImg]}')`;

    return (
      <div
        className="App"
        style={{
          backgroundImage: urlString,
          backgroundSize: "contain",
        }}
      >
        <Sound url="cool_sound.mp3" playStatus={Sound.status.PLAYING} />
        <Router>
          <Switch>
            <Route exact path="/" component={Entra} />
            <Route exact path="/Congratulations" component={Congratulations} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Champion" component={Champion} />
          </Switch>
        </Router>
      </div>
    );
  }
}
