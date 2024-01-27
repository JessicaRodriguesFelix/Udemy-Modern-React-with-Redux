## Notes from Section 6: How to handle forms

State location:
- Rerender the component it is defined in + all that components children
- Find all the components that need to use this state
- Define the state in the lowest common parent

- EVENT HANDLER
Plain functions that modified our piece of state in some way.

- DO NOT DIRECTLY MUTATE/CHANGE/MODIFY arrays or objects, when they are used/managed by the state system.
- **REMINDER**: React treats numbers, string, booleans, undefined and null DIFFERENTLY than objects and arrays.
- State Updates - Cheat Sheet (https://state-updates.vercel.app/)

  - Adding elements to the start or end
```
// add to start
const [colors, setColors] = useState([]);

const addColor = (newColor) => {
  const updatedColors = [ newColor, ...colors ];
  setColors(updatedColors);
}

```

Variations using filter function (FKT - Filter keeps true)

- First variation remove element with a particular value
```
  const [colors, setColors] = useState(['red','green', 'blue]);

  const removeColor = (colorToRemove) => {
    const updatedColor = colors.filter((color)=>
       color !== colorToRemove)
  }
  setColors(updatedColor)
```
- Second variation: Remove element at an specific element

```
  const [colors, setColors] = useState([]);
  const removeColorAtIndex = (indexToRemove) => {
    const updatedColors = colors.filter((color, index) => {
      return indexToRemove !== index;
    })
  }
  setColors(updatedColors);
```

- Third variation: Remove element with a particular property

const [books, setBooks] = useState([
  {id: 1, title: 'harry'},
  {id: 2, title: 'dark'}
]);

const removeBookById = (id) => {
 const updatedBooks = books.filter((book) => {
    return book.id !== id;
  })
  setBooks(updatedBooks)
}

- Modify an element based on property
```
const [books, setBooks] = useState([
  {id: 1, title: 'harry'},
  {id: 2, title: 'dark'}
]);

const updateBookId = (id, newTitle) => {
  const update = books.map((book) => {
    if (book.id == id) {
      return {...book, title: newTitle};
    }
    return book;
  });
  setBooks(updateBookId);
}
```

- Add elemtn to the middle of an array using .slice function

```
const [colors, setColors] = useState([]);

const addColorAtIndex = (newColor, index) => {
   const updatedColors = [
//gives back everything that was included in the array colors from index 0 up to index you want to insert new element
   ...colors.slice(0, index),
    newColor,
   ... colors.slice(index)
]
}
```
- Add or change properties to an object
```
const [fruit, setFruit] = useState({
  color: 'red',
  name: 'apple'
})

const changeColor = (color) => {
   const updatedFruit = {
    // this line copies all properties from existing object
      ...fruit, 
      color: color;
    };
    setFruit(updatedFruit);
}
```

Removing properties from an object

const [fruit, setFruit] = useState({
  color:'red',
  name: 'apple
})

const removeColor = () => {
  const {color, ...rest } = fruit;
  setFruit(rest)
}

