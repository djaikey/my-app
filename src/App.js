import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="App-banner">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Johanna.K</h1>
          <nav>
            <ul>
              <li>À Propos de moi</li>
              <li>Mon profile</li>
              <li>Mes compétences</li>
              <li>Mes réalisations</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
