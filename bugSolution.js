```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [cleanup, setCleanup] = useState(()=>{});

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This effect runs whenever count changes
    console.log('Count changed:', count);
    const cleanupFunc = () => {
      // Correct cleanup function
      console.log('Cleaning up...');
    };
    setCleanup(cleanupFunc);
    return cleanupFunc;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```