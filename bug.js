```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This effect runs whenever count changes
    console.log('Count changed:', count);
    // Incorrect cleanup function which throws an error when unmounted
    return () => {
      // This causes error because of the non-existent 'cleanup' variable
      cleanup();
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```