
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner  from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner/>

    <Row title ="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
 /* <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
  <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
  <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
  <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
  <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
  <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
 */
}

export default App;
