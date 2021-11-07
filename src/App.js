import "./App.css";
import Header from "./components/Header";
import News from "./components/News";

function App() {
  return (
    <div className="App container">
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
            {/** Components still to create 
        <FacebookNewsFeed/>
        <Sponsors/>
        */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
