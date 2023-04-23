import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import 'tachyons'; seems to not matter if placed here or index.js, so far..
import ParticlesBg from 'particles-bg'

class App extends Component {
  state = { input: '' };
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {console.log('click')}

  render = () => {
  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} />
      <Navigation/>
       <Logo/>
      <ImageLinkForm onInputChange={this.onInputChange} />
      {/* <FaceRecognition/> */}
    </div>
  );
  };
}

export default App;
