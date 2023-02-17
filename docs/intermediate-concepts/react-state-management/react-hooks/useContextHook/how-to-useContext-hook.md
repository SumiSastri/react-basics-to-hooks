1. Decide which component will host the method to create context and export it
2. use the useContext() hook and variables for multiple contexts
3. Consume the context value from the provider

By using the hook, the code is virtually reduced to 2 lines in the component.

```
  const userName = useContext(UserContext);
  const userType = useContext(UserTypeContext);
```

YouTube Tutorial:
Code Evolution
Traditional demo
[https://www.youtube.com/watch?v=tEqNSOhCHLU&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=16]
Hooks demo
[https://www.youtube.com/watch?v=UjjtvroahBU&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=17]
