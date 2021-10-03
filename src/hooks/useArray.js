import { useState } from "react"

const useArray = (initialArray = []) => {
    const [array, setArray] = useState(initialArray);
    const pushToArray = (...elements) => {
        console.log(elements);
        array.push(...elements);
        setArray(array);
    }

    return [array, setArray, pushToArray];
}

export default useArray;