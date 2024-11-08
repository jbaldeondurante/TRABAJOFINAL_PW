import React from 'react';
import ProductList from '../components/ProductList';
import InfoBoxes from '../components/InfoBoxes';


const products = [
  { id: 1, name: 'S.H.Figuarts FRIEZA FULL POWER', price: 30.00, imageUrl: '/images/freezer1.jpg' },
  { id: 2, name: 'Myth Cloth EX PANDORA', price: 50.00, imageUrl: '/images/expandora1.jpg' },
  { id: 3, name: 'S.H.Figuarts PAIN TENDO -Six Path Rinnegan-', price: 30.00, imageUrl: '/images/paintendo1.jpg' },
  { id: 4, name: 'SAINT CLOTH MYTH EX PEGASUS SEIYA [GOD CLOTH]', price: 70.00, imageUrl: '/images/pegasus1.jpg' },
  { id: 5, name: 'S.H.Figuarts TRUNKS-GT-', price: 30.00, imageUrl: '/images/trunksgt1.jpg' },
  { id: 6, name: 'S.H.Figuarts PORTGAS D. ACE -Fire Fist-', price: 30.00, imageUrl: '/images/portgas1.jpg' }
];

const LandingPage = () => {
  return (
    <div>
      <ProductList products={products} />
      <InfoBoxes />
    </div>
  );
};

export default LandingPage;

