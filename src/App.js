import React from "react";
import "./App.css";
import MediaCard from "./MediaCard";
import Gate from "./Gate";

function App() {
  return (
    <div className="App">
      <h1>Your Turn Practice</h1>
      <p>
        Hi I'm <strong>Arif</strong>!
      </p>
      <h2>Heading 2</h2>
      <p>
        JS inside JSX: <i>5 + 10</i> = <strong>{5 + 10}</strong>
      </p>
      <hr />
      <MediaCard
        title="Media Card"
        body="Loop"
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb8%2Fa4%2F83%2Fb8a4832a8e5877b87e8e714f01991b6c.gif&f=1&nofb=1"
      />
      <hr />
      <Gate isOpen={false} />
    </div>
  );
}

export default App;
