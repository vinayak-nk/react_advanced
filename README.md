1. PureComponent
-----------------
  It does not re-render if the component props or state is same.
  pros: less re-render => Efficient, faster loading
  cons: Only shallow comparison of objects.


2. HOC
-----------
  -> HOC is a function that takes a component and returns a new component.
  -> Same logic in many component and fetching data in each component
  -> Reusing a component login
  -> It takes 2 args --> 1. component 2. data => returns a new component

  export function HOX(OriginalCmpo, data) {
    // Make changes here
    render() {
      return (
        <OriginalCmpo />
      )
    }
  }

    Use cases of HOC
    -----------
    1. Loading screen unitl component fetches data
    2. styling components
    3. providing specific data or props to component

    -> Avoid using Render Method
    -> Static Methods must be copied over
    -> Ref's aren't passed through
    

  3. Refs
  ------------
    --> Ref provide a way to access DOM nodes or React Elements created in the render method
    --> Can not use in functional component as they do not have instances
    --> this.myRef = React.createRef()
    --> const RefChildDemo = forwardRef((props, ref) => { return( <div>Test </div> )})

4. Error Boundaries
----------------------
  a. static getDerivedStateFromError(error) {
    // Update the state, so the next render will show fallback UI
  }
  b. componentDidCatch(error, errorInfo) {
    // Can log error to an error reporting service.
    logErrorToBackend(error, errorInfo)
  }

  Do not catch errors for
  ----------------------------
  1. Event handlers
  2. Async code, Eg: setTimeout, callbacks
  3. server side rendering
  4. Errors thrown in the error boundary itself