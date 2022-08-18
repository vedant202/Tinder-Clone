// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TinderCard from './TinderCard'
import SwipeButtons from './SwipeButtons';



function App() {
  return (
    <div className="app">

      <Header />
      {/* <h1>First Mern Tinder Clone</h1> */}
      <TinderCard />

      <SwipeButtons />
    </div>
  );
}

export default App;
