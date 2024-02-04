import NavBar from "./components/NavBar";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [v1, setV1] = useState("");

  useEffect(() => {
    console.log(v1);
  });

  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <NavBar />
          </Route>
        </Switch>

        <Switch>
          <Route path="/update">
            <Form v1={v1} setV1={setV1} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
