import Infinite from "./components/Infinite";

function App() {
  return (
    <>
      <div className="infinite-query-heading">
        <h1>Infinite Query & Scroll</h1>
        <h2>Try scrolling till the bottom of the scroll bar</h2>
      </div>

      <div className="infinite-wrapper">
        <Infinite />
      </div>
    </>
  );
}

export default App;
