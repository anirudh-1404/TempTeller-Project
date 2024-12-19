import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
// import './App.css'
// import './index.css'
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {

  function handleClick () {
    console.log('button was clicked!')
  }

  return (
    <>
    <div>
    {/* <SearchBox />
    <InfoBox /> */}
    <WeatherApp />

    {/* <h1>Material UI Practice</h1>
    <Button variant='contained' onClick={handleClick}>Click Me</Button> */}
    </div>
    </>
  )
}

export default App
