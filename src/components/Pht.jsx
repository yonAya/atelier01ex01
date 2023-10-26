import { Component } from 'react';

class Pht extends Component {
  render() {
    return (
      <div className='pht'>
        <label htmlFor='pht'>Prix Hors Taxe : </label>
        <input type='text' name='pht' placeholder='Votre Pht...' />
      </div>
    );
  }
}
// const Pht = () => {
//   return (
//     <div className='pht'>
//       <label htmlFor='pht'>Prix Hors Taxe : </label>
//       <input type='text' name='pht' placeholder='Votre Pht...' />
//     </div>
//   );
// };

export default Pht;
