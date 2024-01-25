import "./App.css";
import TimerDisplay from "./components/TimerDisplay/timerDisplay";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <TimerDisplay time={1500} />
    </div>
  );
}

export default App;
