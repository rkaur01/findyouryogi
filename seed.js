const db = require('./server/db')
const Yogi = require('./server/db/models/yogi')

const yogis = [
  {
    name: 'Kevin Tobar',
    quote: 'Namaste',
    email: 'kevin@email.com',
    location: 'NYC',
    difficulty: 'beginner',
    costPerClass: 22
  },
  {
    name: 'Jes Allen',
    quote: 'Namaste',
    email: 'jes@email.com',
    location: 'NYC',
    difficulty: 'beginner-intermediate',
    costPerClass: 22
  },
  {
    name: 'Erin Kelly',
    quote: 'Namaste',
    email: 'erin@email.com',
    location: 'Costa Rica',
    difficulty: 'advanced',
    costPerClass: 32
  },
  {
    name: 'Martina Rando',
    quote: 'Namaste',
    email: 'martina@email.com',
    location: 'Milan',
    difficulty: 'intermediate',
    costPerClass: 42
  }
]

const seed = () => {
  return Promise.all(yogis.map(yogi =>
    Yogi.create(yogi))
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
      return null
    });
};

main()
