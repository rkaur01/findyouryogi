const db = require('./server/db')
const server = require('./server')
const Yogi = require('./server/db/models/yogi')

const yogis = [
  {
    name: 'Minimal Studio',
    quote: 'Namaste',
    email: 'minimal@email.com',
    location: 'Brooklyn',
    difficulty: 'beginner-intermediate',
    costPerClass: 22,
    imageUrl: '/img/whiteyogastudio.jpg',
    clarifaiId: 'd08b2ce0177141c4b7b0e189ef9faf05'
  },
  {
    name: 'The Forest',
    quote: 'Namaste',
    email: 'forest@email.com',
    location: 'Long Island',
    difficulty: 'advanced',
    costPerClass: 32,
    imageUrl: '/img/natureyogastudio.jpg',  
    clarifaiId: 'ccf65fe7ec4843689dc33a0adc7fa84f'
  },
  {
    name: 'Vibrant Yoga',
    quote: 'Namaste',
    email: 'vibrant@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/vibrantyogastudio.jpg',
    clarifaiId: 'faacb65827b54ea7887cc5047349268a'       
  },
  {
    name: 'Bend & Bloom Park Yoga',
    quote: 'Namaste',
    email: 'bendbloom@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/bendbloomparkyoga.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Bija Yoga',
    quote: 'Namaste',
    email: 'bija@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/bija_yoga.png',
    clarifaiId: ''       
  },
  {
    name: 'Exhale Yoga',
    quote: 'Namaste',
    email: 'exhale@email.com',
    location: 'Gramercy',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/exhale_gramercy.png',
    clarifaiId: ''       
  },
  {
    name: 'Greenhouse Holistic',
    quote: 'Namaste',
    email: 'greenhouse@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/greenhouse-holistic.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Iyengar Yoga Institute',
    quote: 'Namaste',
    email: 'iyengar@email.com',
    location: 'Midtown',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/iyengar-yoga-institute.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Laughing Lotus Yoga',
    quote: 'Namaste',
    email: 'lotus@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/laughing-lotus-yoga-main.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Modo Yoga',
    quote: 'Namaste',
    email: 'modo@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/modo_yoga.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Pure Yoga',
    quote: 'Namaste',
    email: 'pure@email.com',
    location: 'NYC',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/Pure-Yoga.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Spot Yoga',
    quote: 'Namaste',
    email: 'spot@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/spotyoga.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Y7 Yoga',
    quote: 'Namaste',
    email: 'y7@email.com',
    location: 'Soho',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/y7-Studio.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Yoga Vida',
    quote: 'Namaste',
    email: 'vida@email.com',
    location: 'NYC',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/yoga-vida.jpg',
    clarifaiId: ''       
  },
  {
    name: 'Dharma Yoga',
    quote: 'Namaste',
    email: 'dharma@email.com',
    location: 'Brooklyn',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/dharma_yoga.jpg',
    clarifaiId: ''       
  }
]

const seed = () => {
  return Promise.all(yogis.map(yogi => Yogi.create(yogi))
  )
}


const main = () => {
  console.log('Syncing db...')
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...')
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack);
    })
    .then(() => {
      db.close()
      console.log('BYE')
      return null
    });
};

main()
