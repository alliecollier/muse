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
    User.create({
      firstName: 'rocky',
      lastName: 'road',
      email: 'rocky@yahoo.com',
      password: '123'
    }),
  ]);

  // Creating Museums
  const museums = await Promise.all([
    Museum.create({
      name: 'Museum of Fine Arts',
      imgUrl: 'https://www.wanderu.com/blog/wp-content/uploads/2016/02/mfa-exterior-1.jpg',
      hours: 'Open: W-Su 10am-5pm, Closed: M, T',
      location: '465 Huntington Ave, Boston, MA 02115',
      latitude: 42.33970,
      longitude: -71.09401,
      typeof: 'art',
      currentExhibits: 'Monet and Boston: Legacy Illuminated, Paper Stories, Layered Dreams, Women Take the  Floor'
    }),
    Museum.create({
      name: 'Isabella Stewart Gardner Museum',
      imgUrl: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FcFZX8QmUn2xGDp4TFAKqEg%252FISG_1.jpg&width=1200&quality=80',
      hours: 'Open: M, W-F 11am-5pm, S-Su 10am-5pm, Closed: T',
      location: '25 Evans Way, Boston, MA 02115',
      latitude: 42.33881,
      longitude: -71.09610,
      typeof: 'art',
      currentExhibits: 'European. Asian, and American Art'
    }),
    Museum.create({
      name: 'Museum of Science',
      imgUrl: 'https://artnexus.com:5000/uploads/2018/02/1c5bi8c08-upload-4b5491ce-cb4f-11e3-9384-4c72b9254af1.jpg',
      hours: 'Open: S-Th 9am-5pm, Closed: F',
      location: '1 Museum Of Science Driveway, Boston, MA 02114',
      latitude: 42.36842,
      longitude: -71.07104,
      typeof: 'science',
      currentExhibits: 'The Science Behind Pixar'
    }),
    Museum.create({
      name: 'Institute of Contemporary Art',
      imgUrl: 'https://www.icaboston.org/sites/default/files/styles/original_crop/public/chuck-choidsc9894.jpg?itok=jJcmWD67',
      hours: 'Open: S-Su & T-W 10am-5pm, Th-F 10am-9pm, Closed: M',
      location: '25 Harbor Shore Dr, Boston, MA 02210',
      latitude: 42.35343,
      longitude: -71.04318,
      typeof: 'art',
      currentExhibits: 'Eva LeWitt, Virgil Abloh: Figures of Speech, Ragnar Kjartansson: The Visitors'
    }),
    Museum.create({
      name: `Boston Children's Museum`,
      imgUrl: 'https://cdn.trolleytours.com/wp-content/uploads/2016/05/boston-childrens-museum-front-480x270.jpg',
      hours: 'Open: W-Su 9am-4:30pm, Closed: M-T',
      location: '308 Congress St, Boston, MA 02210',
      latitude: 42.35260,
      longitude: -71.04968,
      typeof: 'science',
      currentExhibits: 'Art Lab, Arthur and Friends, Explore-a-Saurus, Japanese House'
    }),
    Museum.create({
      name: 'The Museum Of Bad Art',
      imgUrl: 'https://lh3.googleusercontent.com/proxy/-a7_mI9fiyPd-iRak9W-8DlId6o6XiY_p4UCwhDlLoDP-TBRdI5_HWcoWSX82xllHjRIrsUYzJpobkYUsDLm7wujq9dsxuw-Wi_LmnrqRoRqYyWnnQjdQXwSBd_E',
      hours: 'Temporarily closed',
      location: '55 Davis Square, Somerville, MA 02144',
      latitude: 42.39738,
      longitude: -71.12285,
      typeof: 'art',
      currentExhibits: 'None'
    }),
    Museum.create({
      name: 'MIT Museum',
      imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/08/79/fa/b8/mit-museum.jpg',
      hours: 'Temporarily closed',
      location: '265 Massachusetts Ave Building N51, Cambridge, MA 02139',
      latitude: 42.36267,
      longitude: -71.09754,
      typeof: 'science',
      currentExhibits: 'None'
    }),
    Museum.create({
      name: 'Harvard Art Museums',
      imgUrl: 'https://images.squarespace-cdn.com/content/v1/522a3fa9e4b08588270700f0/1420827135866-XMJ4FVG2G3B5KDP0BSY0/Fogg-Style02138',
      hours: 'Temporarily closed',
      location: '32 Quincy St, Cambridge, MA 02138',
      latitude: 42.37470,
      longitude: -71.11435,
      typeof: 'art',
      currentExhibits: 'None'
    }),
    Museum.create({
      name: 'Harvard Museum of Natural History',
      imgUrl: 'https://artnexus.com:5000/uploads/2018/02/1c5jecm8i-0514il_cu_aom_05-web.jpg',
      hours: 'Temporarily closed',
      location: '25 Harbor Shore Dr, Boston, MA 02210',
      latitude: 42.37901,
      longitude: -71.11538,
      typeof: 'history',
      currentExhibits: 'None'
    }),
    Museum.create({
      name: 'The Sports Museum',
      imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/7c/70/c5/title-ix-exhibit.jpg',
      hours: 'Open: Th-Su 10am-5pm, Closed: M-W',
      location: '100 Legends Way, Boston, MA 02114',
      latitude: 42.36678,
      longitude: -71.06246,
      typeof: 'history',
      currentExhibits: 'The history and character of Boston sports'
    }),
  ]);

  //Creating reviews
  const reviews = await Promise.all([
    Review.create({
      userId: 1,
      museumId: 2,
      rating: 4,
      review: "It was great, I loved all the art work. It was part of an art heist which is cool. The attention to detail that Isabella put into each room was quite incredible! Some down sides would be that the top floor is closed for staff or artists, I believe, and I think that if the public was able to go to the top floor we would have a great view. The major down side for me was that it was audio based information guided tour from your phone, and the audio only went over a few details and some major highlights while I really wanted to know more details which was also a bummer for us because we both had low battery going to the museum."
    }),
    Review.create({
      userId: '3',
      museumId: '2',
      rating: '5',
      review: "Such a beautiful and magical place to wonder. Considering it is a historic building, I was very impressed by how relatively easily I could get around with a rollator. It's not a traditional museum in many ways, but just walking room to room with the audio guide was a great time. The individual items in the collection aren't labeled, but they are meticulously cataloged on their website which made it easy to look up any pieces I wanted to know more about."
    }),
    Review.create({
      userId: '2',
      museumId: '1',
      rating: '5',
      review: `I admire this museum and have been their member for years! Everything they do is at the worldclass level! The permanent collection is incredible and presented very well! Great temporary exhibitions! This time we visited "Claude Monet and Boston" and sculptures in the ancient Egypt. I got to see rare Monet's paintings that I only have seen in books. The presentation and set up was incredibly interesting and gave lots of information!`
    }),
    Review.create({
      userId: '1',
      museumId: '1',
      rating: '4',
      review: "It's a very informative and entertaining place to be. The extra 7 dollars for the Monet exhibit was worth it for me. It's a huge place with art from all over the world and it might take a good 3-4 hours to complete all the sections. The place is aesthetic and has really great exhibits!"
    }),
    Review.create({
      userId: '3',
      museumId: '3',
      rating: '5',
      review: "What a great place for the entire family! I have never seen the museum that was so it was so interactive. And military gets a great discount! Highly recommend a visit to the Museum of Science!"
    }),
    Review.create({
      userId: '2',
      museumId: '3',
      rating: '5',
      review: "Amazing experience!!  Very clean, tons of sanitizer stations and even sink stations for washing hands.  Tons of things to do/see/experience!  Can definitely spend an entire day here if you do some of the activities!  Lightening show is am absolute MUST SEE!"
    }),
    Review.create({
      userId: '1',
      museumId: '4',
      rating: '3',
      review: "The Museum was wonderful to see. One could spend all day taking in all the scenery & getting lost in the art."
    }),
    Review.create({
      userId: '2',
      museumId: '4',
      rating: '4',
      review: "Staff was very knowledgeable of exhibitions, and very friendly. One employee in particular was very helpful in my visit cant remember his name but he worked the Virgil store entrance Jul 11. Thank you, ICA staff made the 8 hour drive worth the effort."
    }),
    Review.create({
      userId: 3,
      museumId: 4,
      rating: 5,
      review: "Wonderful museum, exhibits are well laid out and the museum is exceptionally clean. Loved the water taxi and additional exhibit in east Boston!"
    }),
    Review.create({
      userId: '2',
      museumId: '5',
      rating: '4',
      review: "What a great family day to take the children! We went on a Wednesday afternoon and the place was jam packed full of small children everywhere. I would think during the week it wouldn’t be so crowded but boy was it. The exhibits were so crowded with kids waiting to take turns, however the exhibits themselves were great definitely worth the money."
    }),
    Review.create({
      userId: '1',
      museumId: '5',
      rating: '3',
      review: "My girls really enjoyed it. Kept them preoccupied for about 3 hours. They were just as amused with the awesome Martin's Park playground right next to the building (free). Was annoyed that you couldn't bring drinks when they also had the water fountains closed..."
    }),
    Review.create({
      userId: '3',
      museumId: '5',
      rating: '4',
      review: "A slight bit on the small side but the kids all loved it. They were forward thinking enough to put a limited Starbucks inside to provide the caffeine needed to keep up. A great experience for kids of all ages."
    }),
    Review.create({
      userId: '3',
      museumId: '6',
      rating: '1',
      review: "It stinks of urine and is infested with roaches."
    }),
    Review.create({
      userId: '2',
      museumId: '6',
      rating: '5',
      review: "Stunning artwork 5/5"
    }),
    Review.create({
      userId: '1',
      museumId: '6',
      rating: '5',
      review: "This place is so dope that it changed my life to a more awesome one.  Thank you, MOBA!"
    }),
    Review.create({
      userId: '1',
      museumId: '7',
      rating: '4',
      review: "This museum is a great place for kids and adults. It is a fascinating blend of a science museum and an art museum."
    }),
    Review.create({
      userId: '2',
      museumId: '7',
      rating: '4',
      review: "The kinetic sculpture exhibit is incredible. Other major exhibits cover ship building and the history of Polaroid camera. Parking is not provided, so you'll need to use a nearby garage or the street meters."
    }),
    Review.create({
      userId: '3',
      museumId: '7',
      rating: '5',
      review: "I love everything about this place. If you consider yourself a bit of a geek, this is a must go place! Highly recommend going here if you visit Boston"
    }),
    Review.create({
      userId: '2',
      museumId: '8',
      rating: '5',
      review: "This museum of natural history is a must if you are in the Boston area. We were very impressed with their collections. The glass flower collection we had heard about but words and photos do not do this collection justice. The museum also has a very large and impressive collection of minerals and gemstones. The great mammal hall is amazing. We spent a couple of hours here but because of plans we didn't stay longer. You could easily spend half a day here."
    }),
    Review.create({
      userId: '1',
      museumId: '8',
      rating: '5',
      review: "Great museum. Its collection is as good as, or better than most museums in the world. Its gems/geology is awesome, well-cataloged and extensive. Its paleontology collection is great with many large and impressive artifacts. The insect area is quite broad, many interesting items. The glass flower exhibit is one of a kind."
    }),
    Review.create({
      userId: '3',
      museumId: '8',
      rating: '4',
      review: "Such a cool museum. My whole family loved it. You can easily spend several hours here. We stayed for about 2 hours. Well put together and great pieces. It was not very busy. The glass flowers were very beautiful. My kids enjoyed all the animals exhibits and the beautiful rocks."
    }),
    Review.create({
      userId: '3',
      museumId: '9',
      rating: '4',
      review: "You shall not be here merely for its collections but for the architecture."
    }),
    Review.create({
      userId: '2',
      museumId: '9',
      rating: '4',
      review: "Such a peaceful and beautiful museum. Has a wide array of art on every floor and a really cool gift shop!"
    }),
    Review.create({
      userId: '1',
      museumId: '9',
      rating: '5',
      review: "This is a very doable museum if you have an afternoon to spend in Harvard Square. They have a very nice variety of eras and artists represented in the collections. The lobby seating is usually full of people studying instead of cafe patrons but that’s to be expected. The staff is friendly and polite. I’m grateful to have such a lovely art museum nearby!"
    }),
    Review.create({
      userId: '1',
      museumId: '10',
      rating: '4',
      review: "This place was awesome wasn't a hockey fan at all might start watching now."
    }),
    Review.create({
      userId: '2',
      museumId: '10',
      rating: '5',
      review: "My teen is a basketball fanatic and he was in a zone just seeing TD Garden! Our tour guide, Catherine Bogart, was AMAZING! She shared so much information and answered every question the kiddos asked. We thoroughly enjoyed our Sports Museum tour and are planning to return in the summer for the TD Garden tour."
    }),
    Review.create({
      userId: '3',
      museumId: '10',
      rating: '3',
      review: "Lots of history to look at, our guide was very informative. We came to see Celtics memories and view the famous floor. Unfortunately, the new scoreboard was being installed and everything has been taken down. Also, this wasn't mentioned in the calendar on the website which would have been nice to avoid the disappointment that we felt."
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
