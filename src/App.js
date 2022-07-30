// import EnhancedLikes from "./Components/HOC/LikesComp";
// import EnhancedComments from "./Components/HOC/CommentsComp";
// import RefDemo from "./Components/RefDemo";

import ErrorBoundaries from "./Components/ErrorBoundaries";
import ErrorDemo from "./Components/ErrorBoundaries/ErrorDemo"
import CounterDemo from "./Components/ErrorBoundaries/CounterDemo"

function App() {
  return (
    <div className="App">
      {/* <EnhancedLikes />
      <EnhancedComments />
      <RefDemo /> */}
      <ErrorBoundaries>
        <ErrorDemo name='test' />
        {/* <CounterDemo /> */}
      </ErrorBoundaries>
      <ErrorBoundaries>
        {/* <ErrorDemo name='test1' /> */}
        <CounterDemo />
      </ErrorBoundaries>
    </div>
  );
}

export default App;
