import './MainPage.scss';

function App() {
  return (
    <div className="MainPage">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Game</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About me</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">My Skills</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="Aboutme">
        <h1>Violetta Skrynnikova</h1>
        <h2>Frontend developer</h2>
        <div className="Button_main">
          <button className="Button">
            My Skills
          </button>
          <button className="Button">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
