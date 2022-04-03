import logo from './logo.svg';
import './App.css';
import Pad from './components/pad.js';
import sample1 from './sounds/PunchierKick_849.wav'
import sample2 from './sounds/D#_PercussiveSynth_849.wav'
import sample3 from './sounds/100_F#_WobbleArpBass_03_849.wav'
import sample4 from './sounds/SmackSnare_849.wav'
import Shape from './components/shape.js';

const musicArray = [sample1, sample2, sample3, sample4];

function App() {
    return (
        <div className="container">
            <div id="panel">
            {/*pad component*/}
                <h4>4note Chao Generator</h4>
                <Pad samples={musicArray} width={200} height={200}/>
                <Pad samples={musicArray} width={200} height={200}/>
                <Pad samples={musicArray} width={200} height={200}/>
                <Pad samples={musicArray} width={200} height={200}/>
            </div>

            {/*//canvas element and react three fiber stuff*/}
            {/*<Shape/>*/}
        </div>
    );
}

export default App;
