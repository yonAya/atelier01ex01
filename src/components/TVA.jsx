import { Component } from 'react';

class TVA extends Component {
  render() {
    return (
      <div className='tva'>
        <label htmlFor='tva'>Taux TVA : </label>
        <input type='text' name='tva' placeholder='Votre tva...' />
      </div>
    );
  }
}

// const TVA = () => {
//   return (
//     <div className='tva'>
//       <label htmlFor='tva'>Taux TVA : </label>
//       <input type='text' name='tva' placeholder='Votre tva...' />
//     </div>
//   );
// };

export default TVA;
