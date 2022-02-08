import "./App.css";
import Card from "./components/Card";
import data from "./info";

function App() {
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            name={item.name}
            restaurant={item.restaurant}
            address={item.address}
            zipcode={item.zipcode}
            country={item.country}
          />
        );
      })}
    </div>
  );
}

export default App;
