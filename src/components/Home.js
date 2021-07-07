import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import vid from '../images/jfcvid.mp4';


class Home extends Component {
  

  render() {

    return (
        <div>
            <div className="a">
                <video autoPlay={true} playsInline autostart="true" loop={true} muted={true} preload="true" id="background" width="100%" className="video">
                    <source src={vid} type="video/mp4" id="vid"></source>
                </video>
                <h1 className="bigtitle">Empowering All Generations</h1>
                <div className="triplebox">
                    <div className="boxes b1"></div>
                    <div className="boxes b2"></div>
                    <div className="boxes b3"></div>
                </div>
                <div className="bottomlogo"></div>
            </div>
        </div>
    );
  }
}

export default Home;