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
- Decide what kind of event you want to watch for (search more used in the React documentation)
- Create a function. Usually called an event handler or callback function.
- Name the function as a prop to a plain element.
- Make sure you pass the function using a valid event name (onClick, onMouseOver, etc)
- Make sure you pass a reference to the function.

https://github.com/JessicaRodriguesFelix/udemy-modern-react-with-redux/assets/40796998/55c761b9-cc60-425d-a00d-95a3c7562165

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

