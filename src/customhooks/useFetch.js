import {useEffect, useState} from 'react'

const useFetch = (url,options) => {
    const [responses, setResponses] = useState([]);

    useEffect(()=>{
        fetch(url,options)
            .then(res => res.json())
            .then(res => setResponses(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    return responses;
}

export default useFetch