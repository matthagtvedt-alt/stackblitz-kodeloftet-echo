console.log('Hello!');

// Array med objekter
const fruits = [
  {
    name: 'Epler (Røde)',
    emoji: '🍎',
    price: '7,72 kr',
    energy: '49 kcal',
  },

  {
    name: 'Banan',
    emoji: '🍌',
    price: '5,98 kr',
    energy: '84 kcal',
  },

  {
    name: 'Pære',
    emoji: '🍐',
    price: '5,58 kr',
    energy: '44 kcal',
  },

  {
    name: 'Appelsin',
    emoji: '🍊',
    price: '11,44 kr',
    energy: '36 kcal',
  },
];

const grid = document.querySelector('#heroCardGrid');

try {
  fruits.forEach(function (fruitCard) {
    // Lager kort
    const card = document.createElement('div');
    card.classList.add('card');

    // Overskrift
    const nameCard = document.createElement('h2');
    nameCard.classList.toggle('name');
    nameCard.textContent = fruitCard.name;
    card.appendChild(nameCard);

    // Emoji
    const emojiCard = document.createElement('p');
    emojiCard.classList.toggle('emoji');
    emojiCard.textContent = fruitCard.emoji;
    card.appendChild(emojiCard);

    // Pris
    const priceCard = document.createElement('p');
    priceCard.classList.toggle('price');
    priceCard.textContent ="Pris pr stk.: " + fruitCard.price;
    card.appendChild(priceCard);

    // Kalorier
    const energyCard = document.createElement('p');
    energyCard.classList.toggle('energy');
    energyCard.textContent ="Energi pr. 100g: " + fruitCard.energy;
    card.appendChild(energyCard);

    grid.appendChild(card);
  });
} catch (error) {
  grid.innerHTML = '<p>Noe gikk galt. Kunne ikke vise fruktene.</p>';
  console.error(error);
};
