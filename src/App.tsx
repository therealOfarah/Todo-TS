import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className="inputContainer">
        <input type="text" placeholder='Task name' />
        <input type="text" placeholder='Due by' />
        </div>
        <button>Add Task</button>
      </div>
      <div className='todo'>
      </div>
    </div>
  );
}

export default App;
