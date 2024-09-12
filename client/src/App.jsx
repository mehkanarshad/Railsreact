import PostList from './features/posts/PostList'
import "./App.css";

function App() {

  return(
    <>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <PostList />
      </div>
    </>
  );
  
}

export default App;
