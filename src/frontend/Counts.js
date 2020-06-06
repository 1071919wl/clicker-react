import React from 'react';

// class Counts extends React.Component{
//   componentWillMount() {debugger}
//   componentDidMount() {debugger}
//   componentWillReceiveProps(nextProps) {debugger}
//   componentWillUpdate(nextProps, nextState) {debugger}
//   componentDidUpdate(prevProps, prevState) {debugger}
//   componentWillUnmount() {debugger}
//
//   render(){
//     return(
//       <ul>
//         {
//           this.props.previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
//         }
//       </ul>
//     )
//   }
// }
// ======when there is no state needed, we should be using a function
// instead of a constructor

const Counts = ({previousCounts}) => (
  <ul>
    {
      previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
    }
  </ul>
);

export default Counts;