import Pht from './Pht';
import TVA from './TVA';
import Boutons from './Boutons';
import Res from './Res';
import { Component } from 'react';

class CalculPTTC extends Component {
  render() {
    return (
      <fieldset>
        <legend>Calcul de PTTC</legend>
        <Pht />
        <TVA />
        <Boutons />
        <Res />
      </fieldset>
    );
  }
}

// const CalculPTTC = () => {
//   return (
//     <fieldset>
//       <legend>Calcul de PTTC</legend>
//       <Pht />
//       <TVA />
//       <Boutons />
//       <Res />
//     </fieldset>
//   );
// };

export default CalculPTTC;
