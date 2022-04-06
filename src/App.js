import "./App.css";
import DataList from "./components/DataList";

function App() {
  return (
    <div>
      <div className="heading">DATA-TABLE</div>
      <div className="App">
        <DataList /> {/*The DATA-LIST component */}
      </div>
    </div>
  );
}
export default App;
