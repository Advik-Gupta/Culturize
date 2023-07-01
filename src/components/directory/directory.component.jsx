import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'bracelets',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/bracelets',
  },
  {
    id: 2,
    title: 'chains',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/chains',
  },
  {
    id: 3,
    title: 'posters',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/posters',
  },
  {
    id: 4,
    title: 'rings',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/rings',
  },
  {
    id: 5,
    title: 'stickers',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/stickers',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
