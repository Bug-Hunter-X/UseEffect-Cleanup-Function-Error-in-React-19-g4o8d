# useEffect Cleanup Function Error in React 19

This repository demonstrates a common error that can occur in React 19's `useEffect` hook: attempting to clean up resources using a variable that's no longer in scope.  This typically happens when a component unmounts before the cleanup function has a chance to execute properly.

## The Bug
The `bug.js` file contains a component with two `useEffect` hooks. The second `useEffect` hook attempts to execute a cleanup function that depends on a variable (`cleanup`) that is not defined within the hook's scope. This leads to an error when the component is unmounted.

## The Solution
The `bugSolution.js` file demonstrates the correct way to handle cleanup functions. By ensuring that any variables accessed inside the cleanup function are either available in its scope or are managed in a way that does not create an error in unmounting, the error is avoided.