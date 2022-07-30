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

  Use cases
  -----------
  1. Loading screen unitl component fetches data
  2. styling components
  3. providing specific data or props to componenta 

  -> Avoid using Render Method
  -> Static Methods must be copied over
  -> Ref's aren't passed through
  