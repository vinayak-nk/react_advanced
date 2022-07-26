1. PureComponent
-----------------
It does not re-render if the component props or state is same.
pros: less re-render => Efficient, faster loading
cons: Only shallow comparison of objects.