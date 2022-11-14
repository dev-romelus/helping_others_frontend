import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(link) {
    const [state, setState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(link);
            setState(data);
        }
        fetchData();
    }, [link]);

    return state;
}

export default useFetch;
