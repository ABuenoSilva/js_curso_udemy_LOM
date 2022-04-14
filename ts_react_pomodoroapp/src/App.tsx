import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={7}
        longRestTime={9}
        cycles={4}
      />
    </div>
  );
}

export default App;
