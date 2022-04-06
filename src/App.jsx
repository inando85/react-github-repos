import { useEffect, useState } from "react";
import Repository from "./components/Repository";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/fcbergmann/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return <Repository repositories={repositories} />;
}

export default App;
