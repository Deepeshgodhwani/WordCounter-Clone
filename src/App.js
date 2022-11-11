import "./App.css";

import Navbar from "./components/Navbar";
import Textarea from "./components/textarea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="my-3">
        <Textarea />
      </div>
    </>
  );
}

export default App;
