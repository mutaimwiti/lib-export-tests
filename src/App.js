import "./styles.css";
import { Car, Foo, Person } from "./components";

export default function App() {
  return (
    <div className="App">
      <h1>Acme</h1>
      <Car />
      <Foo />
      <Person />
    </div>
  );
}
