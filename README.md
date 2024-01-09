## Udemy Modern React with Redux
Course: https://www.udemy.com/course/react-redux/

## Notes from Section 2: Creating Content with JSX

### Add screenshot for Rule #1 converting HTML vs JSX
 1) All prop names follow camelCase
 2) Number attribute uses curly braces
 3) Boolean true can be written with just the property name.'False' should be written with curly braces.
 4) The class attribute  is written as 'className'
 5) In-line styles are provided as objects

*ALWAYS check the console for warnings related to attribute names.*.

### MODULE Systems Overview

Cheatsheet for JSX: https://jsx-notes.vercel.app/

## Notes from Section 3: Building with Reusable Components

Introduction to Props System
- Pass data from a parent to a child component
- Allows a parent to configure each child differently (show different text, styles, etc)
- One way flow of data. Child cant push props back up
- Like 25 % of understanding React

- Destructuring from object (examples)
```javascript
function ProfileCard({ title, handle }) {
    return (
      <div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
      </div>
    );
}

function ProfileCard(props) {
const {title, handle} = props
    return (
      <div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
      </div>
    );
}
```

## Notes from Section 4: State: How to Change Your App
Introducting the Event System
- Detect a user clicking the button: Event System
- Update content on screen: State Systems

Using Events
1) Decide what kind of event you want to **watch** for. (ex: detect user clicking on something, double clicking, right clicking, dragging, typing, etc)
2) Create a function. Usually called an **event handler or callback function.**.
3) Name the function using pattern of handle + EventName (not required, but community convention).
4) Pass the function as a prop to a plain element.
5) Make sure you pass the function using a valid event name ('onClick', 'onMouseOver', etc).
6) Make sure you pass a reference to the function, (**do not call it!!**)

List of event names:
https://legacy.reactjs.org/docs/events.html
https://react.dev/reference/react-dom/components/common

Event system (get a notification) only tells us the user did something.
State system changes the content in the screen.

Definition of State:
- Data that changes as the user interacts with our app.
- When this data changes, React will update content on the screen automatically.
- This is the one-and-only way we can change what content React shows.
Even other libs that appear to update content use the state system behind the scenes.

MAJOR TAKEAWAYS FROM SECTION 4:
- Use the state system when you want to upate content on the screen.
- Calling 'useState' defines a new piece of state.
- The first argument to 'useState' is used as the initial value.
- Updating state is done ONLY using the setter function.
- Calling the setter function causes React to rerender the component.

https://github.com/JessicaRodriguesFelix/udemy-modern-react-with-redux/assets/40796998/55c761b9-cc60-425d-a00d-95a3c7562165

## Notes from Section 5: Using an API with React

- Review of HTTP requests
- HTTP Request (Request Line, headers and body (optionally))
- HTTP Response (Status Line, Headers, Body)
- Some HTTP Status Codes
  - 200 Request was successful, here's the data you were looking for
  - 201 Record was created
  - 204 Record was deleted
  
  - 301 URL you made request to has changed

  - 400 Something about your request is bad (incorrect syntax or similar)
  - 401 Unauthorized. You must provide authentication details.
  - 403 Forbidden. You aren't allowed to access this.
  - 404 Not Found. The thing you were looking for wasn't found.

  - 500 Internal Server Error. Something on the server went wrong.

- Import axios library
  - axios object has some built-in functions for fetching data.

- Data flow -> To share info between sibling components, we have to involve the parent component.
- Use props to communicate from parent to child component.
- To pass data from a child to a parent component 
  - Communicate from Child up to parent.
  - **Treat it like a normal event**.
  - Pass an event handler down.
  - Call handler when something interesting happens.
  - Questions:
    - Where do we do the data fetching?
    - Where do we define state?
    - How do we share info between components?
  - Revist the lessomn 68 (Child to Parent communication)

  In the SearchBat component:
  ```javascript
  function SearchBar({ onSubmit }) {
  return (
    <div>
      <input />
      <button onClick={()=> onSubmit()}>Click here</button>
    </div>
  );
}
```
OR we can:
```javascript
function SearchBar({ onSubmit }) {
    const handleClick = () => {
        //hard coded the term 'cars'for now
        onSubmit('cars')
    }
  return (
    <div>
      <input />
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
export default SearchBar;
```

KEEP IN MIND: The event object is ALWAYS passed automatically into every event handler that we assign to a plain HTML.
71 - Handling Input Elements
NEVER EVER try to get the input value by doing plain JS/HTML (ex: document.querySelector('input').value)

Correct way in REACT:
Step 1: Create a new piece of state (import 'useState' and give a meaningful name for this state)
Step 2: Create an event handler to watch for the 'onChange' event
Step 3: When the 'onChange' event fires, get the value from the input
  - for example: event.target.value (console log the event object and expand the property target)
Step 4: Take that value from the input and use it to update your state
Step 5: Pass your state to the input element as the *value* prop
  - Recommendation:
Using the value prop ensures that the value passed to onSubmit is always the latest one, avoiding any potential delays caused by asynchronous state updates. It's a safer approach, especially in scenarios where the user might submit the form rapidly.

So, it's generally recommended to use the value prop for controlled components to ensure synchronization between the input value and the component state

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

