import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import { Navigation } from './components/Navigation/Navigation.component';
import { Logo } from './components/Logo/Logo.component';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm.component';
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition';
import { InfoShow } from './components/InfoShow/InfoShow.component';


import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ImageLink: "",
      InputImage: "",
      box: {},
      dataColor: [],
      ShowButton: false
    }
  }

  handleChange = (e) => {
    this.setState({ ImageLink: e.target.value });

  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayBox = (box) => {

    this.setState({ box: box });

  }
  OnElementClicked = () => {
    if (this.state.ImageLink === "") {
      alert("Please fill the blank .")
    } else {
      this.setState({ InputImage: this.state.ImageLink })
      const app = new Clarifai.App({
        apiKey: 'acd573ddf7df4d409a06eb22e1768f6b'
      });
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.ImageLink)
        .then(response => this.displayBox(this.calculateFaceLocation(response)))
        .catch(e => alert(e))
      this.setState({ ShowButton: true });




    }
  }
  display = (dataColor) => {
    this.setState({ dataColor: dataColor.outputs[0].data.colors });


  }







  render() {

    return (

      <div className="Apps">
        <Particles className="fix-background"
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800
                }
              }
            }
          }}

        />

        <Logo />
        <ImageLinkForm handleChange={this.handleChange} OnElementClicked={this.OnElementClicked} />
        <FaceRecognition box={this.state.box} InputImage={this.state.InputImage} />


      </div>

    )
  }
}

export default App;
