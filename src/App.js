import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.png"
function App() {
  return (
    <div className="App">
      <div style={{"border":"solid 1px black","max-width":"100vw"}}>
      <h1 className="title red">Ben Hammed Alaeddin</h1>
      <br />
      <img src={imageInSrc} alt="imageInSrc"/>
      <br />
      <img src="/imageInPublic.png" alt="imageInPublic"/>
      </div>
      <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
