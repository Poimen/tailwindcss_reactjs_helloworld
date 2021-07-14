import './App.css';
import HelloWorld from './components/HelloWorld';
import TW from './components/TailwindJIT';

function App() {
  return (
    <div className="flex flex-col gap-8 App">
      <HelloWorld msg="Hello from Tailwind inside ReactJS"></HelloWorld>
      <TW />
    </div>
  );
}

export default App;
