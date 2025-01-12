import { useEffect, useState } from "react";

//function name kichi bhi de toh hisab re
function useCurrencyInfo(currency) {
    const [data, SetData] = useState({})
    useEffect(() => {
        //fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json()) //data ta json format re change hela
        .then((res) => SetData(res[currency]))
    }, [currency])
    console.log(data)
    return data
    
}

export default useCurrencyInfo