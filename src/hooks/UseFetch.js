import axios from "axios";
import { useState } from "react";

const UseFetch = () => {
    const [isLoading, setisLoading] = useState();
    const [hasError, sethasError] = useState();
    const [apiData, setApiData] = useState();

    const getApi = url =>{
        setisLoading(true);
        axios.get(url)
            .then(res => {
                sethasError(false);
                setApiData(res.data);
            })
            .catch(err =>
                {
                    sethasError(true);
                    console.log(err);
                })
            .finally(() => {
                setTimeout(() =>{
                    setisLoading(false); 
                },1500)
            })
        
    }
    return [apiData, getApi, isLoading, hasError]     
}

export default UseFetch;