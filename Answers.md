1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
   
    Using map, filter, and reduce, produces no side-effects. Currying allows a function with multiple arguments to be translated into a sequence of functions.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    
    Actions are call commands/payloads of information that send data from your application to your store. Reducers modify the information relayed to application's state. The Store is the object that brings action and reduce together. The store has the following responsibilities: Holds application state, Allows access to state via getState(), Allows state to be updated via dispatch(action), Registers listeners via subscribe(listener), and Handles unregistering of listeners via the function returned by subscribe(listener). It is the single truth because all data originates from store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    
    Application state is when components can call upon a global state that all hooks will receive the same data server. Component state only receives and updates within its own single component, and can only pass props.

1.  What is middleware?

    middleware is a library of gateway checkpoints for data routes to be sent correctly to its endpoints.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    
    It is a way to execute multiple data requests and formulate responses from the same source tha is immutable. It changes our 
    actions to trigger and execute its function.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect method.

