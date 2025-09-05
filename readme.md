1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById:
getElementById select a single element by its unique id. It returns a single element object or null if no element with the specified ID is found.

get ElementsByClassName:
getElementsByClassName selects multiple elements that share a specific class name. It returns a live HTMLCollection.

querySelector and querySelectorAll:
Both are CSS selectors.
querySelector returns the first element that matches the specified CSS selector, while querySelectorAll returns a static nodelist of all matching elements.

2. How do you **create and insert a new element into the DOM**?
   const newElement = document.createElement("div");

newElement.textContent = "I am a new element";

newElement.className = "new-element";

const body = document.querySelector("body");

body.appendChild(newElement);

3. What is **Event Bubbling** and how does it work?

Event Bubbling:
When a user clicks a button inside a div that's inside a section, the click event is first handled by the button. Then, the same event is successively "bubbled up" to the div, then the section, and finally the document object. This process allows multiple event listeners to be triggered for a single event on a child element.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation:
Event Delegation is a pattern for handling events efficiently by placing a single event listener on a parent element instead of adding multiple listeners to each individual child element.

It is useful because it Improves performance, simplifies code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

event.preventDefault():
prevents the default browser action for an event. When we try to make a button in the form without giving it's type:button and try to click the button then form's default behaviour try to load the page which is is prevented by preventDefault() method.

stopPropagation():
It prevents parent elements from being notified of an event. It stops event bubbling.
