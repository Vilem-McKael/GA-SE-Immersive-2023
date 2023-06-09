<img src="https://i.imgur.com/IKHxRMa.png">

# MERN-Stack Infrastructure - Part 2

## Learning Objectives

|Students Will Be Able To:|
|---|
| Add `user` State to the MERN-Stack App |
| Selectively Render Components Using a Ternary Expression |
| Implement Client-Side Routing Using the React Router Library |
| Implement Basic Navigation in a MERN-Stack App |

## Road Map

1. Setup
2. The Plan - Part 2
3. Set Up `user` State
4. Add Skeleton Page-Level Components
5. Conditionally Render Based On the `user` State
6. Intro to Client-Side Routing Using React Router
7. Implement Client-Side Routing
8. Implement a Basic Navigation Bar
9. Further Study

## 1. Setup

This lesson continues to build-out the `mern-infrastructure` project right where the _MERN-Stack Infrastructure - Part 1_ lesson left off.

Move into your **~/code** folder:
```
cd ~/code
```
Open the project in VS Code:
```
code .
```

### Start the Express Backend

Open an integrated Terminal in VS code (`control + backtick`).

Start the Express server:
```
nodemon server
```

### Start the React Development Server

Open a second integrated Terminal in VS code (`control + backtick`).

Start the React Development server:
```
npm run dev
```

<details>
<summary>
👀 Do you need to sync your code?
</summary>
<hr>

**`git reset --hard origin/sync-2-part-2-starter`**

<hr>
</details>

## 2. The Plan - Part 2

In Part 2 we will implement client-side routing as we continue to learn how to build a MERN-Stack app by following a realistic workflow.

**Part 2 - Client-Side Routing:**
1. Set up `user` state
2. Add skeleton page-level components
3. Conditionally render based on the `user` state 
4. Intro client-side routing using React Router
5. Implement client-side routing
6. Implement a typical navigation bar

## 3. Set Up `user` State

Before we jump into the routing, let's set up some state that we can use to dynamically render different components depending upon two factors:

- Is there a logged in user?
- If the user is logged in, render different page-level components according to the path in the address bar.

The following diagrams the routing in SEI CAFE:

<img src="https://i.imgur.com/UwNRJYv.png">

Note that `<App>` is always rendered but only one of the other page-level components render.

### Is There a Logged In User?

A good place to start is to define the `user` state.

### 👉 You Do - Define the `user` State in **App.jsx** (2 mins)

1. Use the `useState` hook to define a state variable named `user`.
2. Initialize `user` to `null`. 
3. The setter function should be named according to convention.

> Hint: Don't forget to add the necessary import.

## 4. Add Skeleton Page-Level Components

Now that we have the `user` state, let's continue setting up routing by stubbing up those three page-level components above.

<details>
<summary>
❓ In which folder will we define these new page-level components?
</summary>
<hr>

**src/pages**

<hr>
</details>

### 👉 You Do - Stub up SEI CAFE's page-level components (5 mins)

1. Create the `<AuthPage>`, `<NewOrderPage>` and `<OrderHistoryPage>` components.
2. Be sure to follow best practices (each in their own folder, etc.) and naming conventions. 
3. Each component should simply render an `<h1>` with the name of the component as its content, e.g., `<h1>AuthPage</h1>`.

> Hint: Be productive by defining one component, then copy/paste its folder and rename everything.

## 5. Conditionally Render Based On the `user` State

We've already seen how to conditionally render components by using:

- Ternary expressions: Used to render one component or another.
- Logical (`&&`) expressions: Used to render a component or nothing.

Examining our routing diagram above, we can see that we are conditionally rendering based upon whether the state of `user` is `null` (user not logged in) or not `null` (user logged in).

Since we want to render either `<AuthPage>` or one of the other two (`<NewOrderPage>` or `<OrderHistoryPage>`), we'll opt for a ternary expression.

Until we start using React Router, we'll just render `<NewOrderPage>` if there's a user logged in.

Here's the refactor in **App.jsx**:

```jsx
return (
  <main className="App">
    { user ?
      <NewOrderPage />
      :
      <AuthPage />
    }
  </main>
);
```

You'll have an error if the components were not automatically imported. Let's ensure all three components are imported while we're at it:

```jsx
import './App.css';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
```

> 👀 `command/ctrl + D` comes in handy for using multiple cursors to edit.

The `<AuthPage>` should now be rendering as expected.

<img src="https://i.imgur.com/QvEh2m6.png">

Updating the hook's State to any truthy value will result in `<NewOrderPage>` rendering instead!

Now let's learn about how to use React Router to perform client-side routing...

## 6. Intro to Client-Side Routing Using React Router

The React library does not include routing functionality.

[React Router](https://reactrouter.com/) is the de facto client-side routing library for both React and [React Native](https://reactnative.dev/).

> 👀 React Router has recently been updated from version 5.x to 6.x which included breaking changes.  Be aware that the code in most of the tutorials, etc. out there that include React Router may not work any more. 

### Install React Router

Since it's a third-party library, React Router must be installed:

```
npm i react-router-dom
```

> 👀 `react-router-dom` is the web-based router used with React apps.  `react-router-native` is the library for React Native.

### How it Works - React Router Is Component-Based!

**React Router provides several components used to conditionally render our app's components based upon the path of the URL in the address bar**

Please read the above again because it's fundamental to understanding how React Router works.

### The `<BrowserRouter>` Component

[`<BrowserRouter>`](https://reactrouter.com/docs/en/v6/api#browserrouter) is the top-level React Router component that makes React Router work.

Only a single `<BrowserRouter>` needs to be rendered and any components that need to use routing features must be nested within it, thus, the convention is to wrap the `<App>` component.

<details><summary>❓ In which module will we need to wrap <code>&LT;App></code> with <code>&LT;BrowserRouter></code>?</summary>
<p>

**index.js**

</p>
</details> 

Check out how we can use an **alias** with the `as` keyword when importing:

```jsx
import App from './pages/App/App';
// Import the top-level BrowserRouter component
import { BrowserRouter as Router } from 'react-router-dom';
```

Now let's refactor so that `<App>` is rendered by `<Router>`:

```jsx
root.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
);
```

Using React Developer Tools we can see that the `<BrowserRouter>` component renders a few other components in addition to our `<App>` component:

<img src="https://i.imgur.com/Je9AZYy.png">

> 👀 Those components named ending with `.Provider` are using React's [Context API](https://reactjs.org/docs/context.html) to provide info to  components down in the component hierarchy without having to pass that info as props. 

## 7. Implement Client-Side Routing

Because React Router is component-based, it can be used in **any** component to conditionally render other components.

However, most React apps only need to perform routing in the `<App>` component - let's see how...

### The `<Routes>` Component

Any component that wants to define client-side routes will first need to render a `<Routes>` component.

Because `<App>` is where we will define all client-side routes, let's import the `Routes` component there:

```jsx
import { useState } from 'react';
// Add the following import
import { Routes } from 'react-router-dom';
```

Now we can use `<Routes>` in `<App>` to wrap our future routes...

```jsx
return (
  <main className="App">
    { user ?
      <Routes>
        {/* Route components in here */}
      </Routes>
      :
      <AuthPage />
    }
  </main>
);
```

On to defining specific routes using the `<Route>` component...

### The `<Route>` Component

The [`<Route>`](https://reactrouter.com/docs/en/v6/api#routes-and-route) component is the main component used to conditionally render a component instance (referred to as an "element" by React Router).

**`<Route>` works by simply rendering the element (instance of a component) assigned to its `element` prop when its `path` prop matches the current URL (path) in the address bar!**

Let's add the `<Route>` component to our list imports:

```jsx
import { useState } from 'react';
// Add the following import
import { Routes, Route } from 'react-router-dom';
```

### Rendering Components According to the Path of the URL

Once again referring to the routing diagram for SEI CAFE shows that we want to render:

- `<NewOrderPage>` when we browse to `/orders/new`, and
- `<OrderHistoryPage>` when we browse to `/orders`

So, let's add a `<Route>` component and set both its `path` and `element` prop to conditionally render `<NewOrderPage>`:

```jsx
return (
  <main className="App">
    { user ?
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
      </Routes>
      :
      <AuthPage />
    }
  </main>
);
```

As you can see, we've set the `path` prop to the URL/path that we plan to use for this route.

Additionally, the `element` prop is interesting in that it accepts an actual component instance:

```jsx
element={<NewOrderPage />}
```

instead of the previous way of providing the component itself:

```jsx
component={NewOrderPage}
```

The advantage of the new approach is that it's easier to pass props to the component being rendered.

### Temporarily Update `user` State for Testing Purposes 

To avoid having to continually update the `user` state using React Developer Tools, let's temporarily initialize `user` to an empty object instead of `null`:

```jsx
const [user, setUser] = useState({});
```

Now, thanks to the `<Route>` component we just added, changing the path of the URL to `/orders/new` will render the `<NewOrderPage>` component as expected:

<img src="https://i.imgur.com/JxQVTFx.png">

### 👉 You Do - Add Another `<Route>` (2 mins)

1. Add a new `<Route>` used to render `<OrderHistoryPage />` when the path of the URL is `/orders`

2. Test by changing the path of the URL back and forth between `/orders` and `/orders/new`.

## 8. Implement a Basic Navigation Bar

Although SEI CAFE does not utilize a typical navigation bar, we'll code one as part of the infrastructure since many MERN-Stack apps will utilize one.

### 👉 You Do - Stub up a `<NavBar>` component (3 mins)

1. Create a `<NavBar>` component within the `components` folder.
2. `<NavBar>` should render a `<nav>` React Element with the text "NavBar" as its only content for now.
3. Import `<NavBar>` in **App.jsx**

<hr>

<details>
<summary>
❓ We want <code>&LT;NavBar></code> to always display when there's a logged in user and before the page-level component, where would we add it to the JSX?
</summary>
<hr>

**Right before the `<Routes>`, requiring a React Fragment to wrap `<NavBar>` and `<Routes>`.**

<hr>
</details>

<br>

Yup, just like this:

```jsx
return (
  <main className="App">
    { user ?
      <>
        <NavBar />
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
      :
      <AuthPage />
    }
  </main>
);
```

Yes, it's necessary to add a React.Fragment (`<>`) to wrap the `<NavBar>` and `<Routes>` components.

Resulting in this for now:

<img src="https://i.imgur.com/ThY0xki.png">

<details>
<summary>
❓ Assuming we want <code>&LT;NavBar></code> to render at all times regardless of whether there's a logged in user or not, where would we add it to the JSX?
</summary>
<hr>

**Between `<main>` and the ternary expression.**

<hr>
</details>

### The `<Link>` Component

<details>
<summary>
❓ What HTML element did we use to change the URL in our previous web apps?
</summary>
<hr>

**The `<a>` hyperlink element.**

<hr>
</details> 

<details>
<summary>
❓ What happens if we use traditional HTML hyperlinks in a SPA?
</summary>
<hr>

**It would cause a page reload when performing the navigation.**

<hr>
</details> 

Luckily, React Router provides a [`<Link>`](https://reactrouter.com/docs/en/v6/api#link) component that renders hyperlinks that when clicked, change the URL client-side only without triggering an HTTP request.

Here's how we can use `<Link>` components in **NavBar.jsx** to change the route client-side:

```jsx
// Don't forget the import
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
    </nav>
  );
}
```

Clicking any of the links performs client-side routing where React Router will:

- Update the path in the address bar without causing the page to reload
- Automatically trigger a re-render

<img src="https://i.imgur.com/R5aElPF.png">

Inspecting the elements on the page will reveal that indeed an `<a>` element is being emitted to the DOM when we use a `<Link>` component.  However, although they look like ordinary `<a>` elements, React intercepts their click event thus preventing an HTTP request from being sent.

> 👀 If you accidentally use an `<a>` tag, React will not intercept the click event and a page reload will occur 😞

Although we've learned most there is to know about client-side routing, we'll learn more in future lessons, including how to change client-side routes programmatically (via code).

#### Congrats on implementing client-side routing!

<details>
<summary>
👀 Do you need to sync your code?
</summary>
<hr>

**`git reset --hard origin/sync-2-part-2-finish`**

<hr>
</details>

## 9. Further Study

### Route Params - Client-Side

- Check out React Router's [`useParams`](https://reactrouter.com/docs/en/v6/hooks/use-params) hook that allows you to access route parameters similar to how we did in Express.

### Other Topics

- Use React Router's [`<NavLink>`](https://reactrouter.com/docs/en/v6/components/nav-link) component when you want to style hyperlinks dynamically based upon the current URL.

- Learn more about the [Context API](https://reactjs.org/docs/context.html) which is a way to provide info to child components without having to pass that info as props.
