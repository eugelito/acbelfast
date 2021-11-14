import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import Results from "./components/Results";
import Fixtures from "./components/Fixtures";
import League from "./components/League";
import FacebookNewsFeed from "./components/FacebookNewsFeed";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="row">
          <div className="column__one">
            <News />
            <div class="column__results__fixtures">
              <Results />
              <Fixtures />
              </div>
              <League />
            
            {/** Components still to create 
        <Gallery/>
        */}
          </div>
          <div className="column__two">
            <FacebookNewsFeed />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
