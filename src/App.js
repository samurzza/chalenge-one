import "./azoz.css";
import TitleOne from "./titleOne.js";
import PostBody from "./PostBody.js";
import TagBody from "./TagBody.js";

function App() {
  return (
    <div>
      <TitleOne />
      <div className={"body"}>
        <PostBody />
        <TagBody />
      </div>
    </div>
  );
}

export default App;
