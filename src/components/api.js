import axios from "axios";
import { useEffect,useState } from "react";
const API_KEY = "3USQ5SJ_PBYLP6BsO_6zwzddLUi0ifhh9yudIZMufn0";
function LoadImages(){
    const [state, setState] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
        .then((data) => {
            setState(data.data);
        });
    } , []);
    return state;
}
function SearchImages(params) {
    const [query, setQuery] = useState();
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query="+params+"&client_id=" + API_KEY)
        .then((data) => {
            setQuery(data.data.results);
            // console.log(data.data.results);
        });
    }, [params]);
    return query;
}
export {LoadImages, SearchImages};