'use strict'

const {db, models: {User, Review, Museum, Favorite, Artwork } } = require('../server/db')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({
      firstName: 'cody',
      lastName: 'pug',
      email: 'cody@gmail.com',
      password: '123'
    }),
    User.create({
      firstName: 'allie',
      lastName: 'collier',
      email: 'allie@gmail.com',
      password: '123'
    }),
  ]);

  // Creating Museums
  const museums = await Promise.all([
    Museum.create({
      name: 'Museum of Fine Arts',
      imgUrl: 'https://www.wanderu.com/blog/wp-content/uploads/2016/02/mfa-exterior-1.jpg',
      hours: 'Open: W-S 10am-5pm, Closed: M, T',
      location: '465 Huntington Ave, Boston, MA 02115',
      latitude: 42.33970,
      longitude: -71.09401,
      typeof: 'art',
      currentExhibits: 'Monet and Boston: Legacy Illuminated, Paper Stories, Layered Dreams, Women Take the  Floor'
    }),
    Museum.create({
      name: 'Isabella Stewart Gardner Museum',
      imgUrl: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FcFZX8QmUn2xGDp4TFAKqEg%252FISG_1.jpg&width=1200&quality=80',
      hours: 'Open: M, W-F 11am-5pm, Sa-S 10am-5pm, Closed: T',
      location: '25 Evans Way, Boston, MA 02115',
      latitude: 42.33881,
      longitude: -71.09610,
      typeof: 'art',
      currentExhibits: 'European. Asian, and American Art'
    }),
    Museum.create({
      name: 'Museum of Science',
      imgUrl: 'https://artnexus.com:5000/uploads/2018/02/1c5bi8c08-upload-4b5491ce-cb4f-11e3-9384-4c72b9254af1.jpg',
      hours: 'Open: Sa-Th 9am-5pm, Closed: F',
      location: '1 Museum Of Science Driveway, Boston, MA 02114',
      latitude: 42.36842,
      longitude: -71.07104,
      typeof: 'science',
      currentExhibits: 'The Science Behind Pixar'
    }),
  ]);

  //Creating reviews
  const reviews = await Promise.all([
    Review.create({
      userId: '1',
      museumId: '2',
      rating: '4',
      review: "I love the history behind this place! A must see to learn about the biggest art Theft!"
    }),
    Review.create({
      userId: '2',
      museumId: '1',
      rating: '3',
      review: "The MFA has a wide range of all kinds of art, a bit large and hard to do in one day, but they are always changing their current exhibts. Fun for the whole family!"
    }),
  ]);

  //Creating Artwork
  const artwork = await Promise.all([
    Artwork.create({
      name: 'Guernica',
      artist: 'Pablo Picasso',
      imgUrl: 'https://artdependence.com/media/8815/guernica_all.jpg'
    }),
    Artwork.create({
      name: 'The Kiss',
      artist: 'Gustav Klimt',
      imgUrl: 'https://www.gustav-klimt.com/images/paintings/The-Kiss.jpg'
    }),
  ]);


  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users,
    museums
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
