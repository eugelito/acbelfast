import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import FacebookNewsFeed from "./components/FacebookNewsFeed";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div class="row">
          <div class="column__one">
            <News />
            {/** Components still to create 
        <Results/>
        <Fixtures/>
        <League/>
        <Gallery/>
        */}
          </div>
          <div class="column__two">
            <FacebookNewsFeed />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
