import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({children}) {
    const [count, setCount] = useState(5);

    //creates an object to share state and function to change state
    const valueToShare = {
        count : count,
        incrementCount: () => {
            setCount(count + 1)
        }
    }
    return <BooksContext.Provider value={valueToShare}>
            {children}
    </BooksContext.Provider>
}
export { Provider }
export default BooksContext;