import {useSelector, useDispatch} from "react-redux";
import {addMovie} from "./store/movies";
import {setType, fetchUsers} from "./store/users";
const App = () => {
    const movies = useSelector((state) => state.movies.list);
    const user = useSelector((state) => state.users);
    const dispatch = useDispatch();
    return (
        <>
            <h2> Movies</h2>
            <ul>{movies ? movies.map((movies) => <li key={movies.id}>{movies.title}</li>) : null}</ul>
            <hr />
            <button onClick={() => dispatch(addMovie({id: 3, title: "3 Idoits"}))}>Add Movie</button>
            <hr />
            <h3>User Type: {user.type}</h3>
            <button onClick={() => dispatch(setType("Admin"))}>Set Type</button>
            <hr />
            <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
        </>
    );
};
export default App;
