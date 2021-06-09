import './App.css';
import Button from './lib/components/Button/Button';
import Progress from './lib/components/TopProgressBar';

function App() {
  return (
    <div className="App">
      <Progress />
      <Button bgColor={"#b333d3"} color={"#65426e"} padding={'1rem'}>Test</Button>
    </div>
  );
}

export default App;
