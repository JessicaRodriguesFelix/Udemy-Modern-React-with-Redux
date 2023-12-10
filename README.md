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


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

