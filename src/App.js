import "./styles.css";
import "./Timer/Timer.jsx";
import Timer from "./Timer/Timer.jsx";

export default function App() {
  return (
    <div className="App">
      <Timer start={1} end={20} />
    </div>
  );
}
