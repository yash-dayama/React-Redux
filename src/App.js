import {useSelector} from "react-redux";

const App = () => {
    const movies = useSelector((state) => state.movies.list);
    return (
        <>
            <h2> Movies</h2>
            <ul>{movies ? movies.map((movies) => <li key={movies.id}>{movies.title}</li>) : null}</ul>
        </>
    );
};
export default App;
