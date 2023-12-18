import { useEffect, useState } from "react";
const useFetch = (url) => {

    const [data, datachange] = useState(null);
    const [isloaded, changeload] = useState(true);
    const [errorinfo, SetError] = useState(null);

    useEffect(() => {

        fetch(url).then(res => {
            console.log(res);
            if (!res.ok) {
                throw Error('Failed to fatch the data');
            }
            return res.json();
        }).then(result => {
            setTimeout(() => {
                datachange(result);
                changeload(false);
            }, 200);
        }).catch(res => {
            SetError(res.message);
            changeload(false);
        })

    }, [url])
    return { data, isloaded, errorinfo };

}
export default useFetch;