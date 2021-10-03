import { useState } from "react"

const useStorage = (initialState, key) => {
    const [state, setState] = useState(initialState);
    window.localStorage.setItem(key, JSON.stringify(state));
    const setStateAndStorage = (newState) => {
        if (state !== newState) {
            window.localStorage.setItem(key, JSON.stringify(newState));
            setState(newState);
        }
    }

    return [state, setStateAndStorage];
}

export default useStorage;