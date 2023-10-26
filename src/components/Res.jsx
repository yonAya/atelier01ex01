import { Component } from 'react';

class Res extends Component {
  render() {
    return (
      <div className='res'>
        <label htmlFor='res'>Resultat : </label>
        <input type='text' name='res' placeholder='Resultat' />
      </div>
    );
  }
}

// const Res = () => {
//   return (
//     <div className='res'>
//       <label htmlFor='res'>Resultat : </label>
//       <input type='text' name='res' placeholder='Resultat' />
//     </div>
//   );
// };

export default Res;
