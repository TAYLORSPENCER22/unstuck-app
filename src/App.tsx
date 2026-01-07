import Button from './components/Button';
import './App.css'
import Header from './components/Header';

function App() {
 
  const options = ['start', 'middle', 'end']
  return (
    <>
      <Header />
      {options.map((label) => (
        <Button key={label} label={label} />
      ))}

    </>
  );
    
}

export default App
