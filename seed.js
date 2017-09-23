const db = require('./server/db')
const server = require('./server')
const Yogi = require('./server/db/models/yogi')

const yogis = [
  {
    name: 'Minimal Studio',
    quote: 'Namaste',
    email: 'deepika@email.com',
    location: 'NYC',
    difficulty: 'beginner-intermediate',
    costPerClass: 22,
    imageUrl: '/img/whiteyogastudio.jpg',
    clarifaiId: 'd08b2ce0177141c4b7b0e189ef9faf05'
  },
  {
    name: 'The Forest',
    quote: 'Namaste',
    email: 'erin@email.com',
    location: 'Costa Rica',
    difficulty: 'advanced',
    costPerClass: 32,
    imageUrl: '/img/natureyogastudio.jpg',  
    clarifaiId: 'ccf65fe7ec4843689dc33a0adc7fa84f'
  },
  {
    name: 'Vibrant',
    quote: 'Namaste',
    email: 'martina@email.com',
    location: 'Milan',
    difficulty: 'intermediate',
    costPerClass: 42,
    imageUrl: '/img/vibrantyogastudio.jpg',
    clarifaiId: 'faacb65827b54ea7887cc5047349268a'       
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
