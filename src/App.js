import EnhancedLikes from "./Components/HOC/LikesComp";
import EnhancedComments from "./Components/HOC/CommentsComp";

function App() {
  return (
    <div className="App">
      {/* <LikesComp /> */}
      {/* <CommentsComp /> */}
      <EnhancedLikes />
      <EnhancedComments />
    </div>
  );
}

export default App;
