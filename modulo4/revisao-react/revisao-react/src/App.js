import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DetailsPage';
import { HomePage } from './pages/HomePage/Homepage';




function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage/>
      {/* <DetailsPage/> */}
    </div>
  );
}

export default App;
