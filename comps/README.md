# Section 10: Custom Navigating and Routing Systems

- Enforcing a very consistent set of styling rules accross our entire application.
- It is very important for companies that the fook and feel of applications you work on is xtremely consistent.

159 - props-types
- JS library to validate the props that get passed into your component.

166- classnames
- JS library for building up a className string based on different values.
* Library is called classname but prop is className.

Library to add icons: https://react-icons.github.io/react-icons/icons/go/
lesson 170

## Section 11

- Project Organization example:
<img width="283" alt="Screenshot 2024-02-10 at 6 21 55 PM" src="https://github.com/JessicaRodriguesFelix/udemy-modern-react-with-redux/assets/40796998/ca43d7f4-3445-4e9b-8c34-11158904518a">

## Design Process 

## Events + State Design Process
### What state event handlers ate there(1, 2, 3)
### What name and type? (4, 5, 6, 7)
### Where's it defined? (8)

1) List out what a use will **do and changes** they will *see* while using your app.
2) Categorize each step as "state" or "event handler".
3) Group common steps. Remove duplicates. Rewrite descriptions.
4) Look at mockup. Remove or simplify parts that aren't descriptions.
5) Replace remaining elements with text descriptions.
6) Repeat #4 and #5 with a different variation.
7) Imagine you have to write a function that returns the text of steps #5 and #6.In addition to your component props, what other arguments would you need?
8) Decide where each event handler + state will be defined.


--------- What state event handlers ate there(1, 2, 3) ---------
**Accordion Component**
How would a user describe using this app step by step?
- Clicked on third section while section one is currently expanded (event handler)
- First section collapsed (state)
- Third section expandes (state)

State: open/close accordions
Event handler: click on accordion.

## Preliminary Design
- Clicked on a section header. (event handler). 
- One section expanded, all others collapsed. (changing content on screen, means state)

--------- What name and type? (4, 5, 6, 7) ---------
Types of State
- number?, boolean?, string?, array?, object?

_Ideally , avoid arrays, objects_

**One text section is visible** -> **state** -> number (index id)!!

state will be called = *expandedIndex*

--------- ### Where's it defined? (8) ---------
Question to ask yourself:

Does any component besides Accordion reasonable need to know which item is expanded?

If YES - Define in *APP*
If NO - Define in *Accordion*

Key things to keep in mind when defining and using STATES:
- event handler should be **defined** in the same component as the state it modifies.
- it might be used in different components.

REACT AND JS rules
React does not print booleans, nulls, undefined
JS Boolean Expressions
- || gives back the first value that is truphy
- && gives back the first falsy value or the last truthy value OR the last truphy value

- window.history.pushstate()

window emits a popstate event IF the user current url was added by pushstate()

## Section 15

Requirements
Variable number of rows.
Variable number of columns.
# columns doesnot have to match # of properties in object.
Some columns are sortable.
Sortable columns can sort different kinds of values.
Cells can be calculated using multiple properties.
Cells can display arbitrary data.

## Section 16 Data sorting
.localeCompare() built in function to compare strings in js
NEVER directly modify an array inside react if that array is part of the prop system 
make a copy of the prop array to modiy