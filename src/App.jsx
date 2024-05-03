import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <div className="card-container">
      <Card
          themeColor= {{primary: "#ffffff", secondary: "#555c66", textColor: "#ffffff"}}
          type= {"Basic"}
          price= {29}
          users= {10}
          noEmail= {`2,000`}
          noContacts= {10}
          noCoffee= {10}
      />

      <Card
        themeColor= {{primary: "#ccbaa9", secondary: "#ffffff", textColor: "#111111"}}
          type= {"Standart"}
          price= {59}
          users= {100}
          noEmail= {`7,000`}
          noContacts= {100}
          noCoffee= {10}
      />

      <Card
          themeColor= {{primary: "#D7256D", secondary: "#ffffff", textColor: "#111111"}}
          type= {"Pro"}
          price= {100}
          users= {500}
          noEmail= {`10,000`}
          noContacts= {100}
          noCoffee= {100}
      />
    </div>
  );
}

export default App;
