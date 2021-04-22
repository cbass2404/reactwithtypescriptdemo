import ReactDOM from "react-dom";

// local files
import UserSearch from "./refs/UserSearch";

const App = () => {
    return (
        <div>
            <UserSearch />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
