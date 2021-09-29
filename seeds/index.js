const mongoose = require('mongoose')
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');
const campground = require('../models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
          console.log("Database connected"); 
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async()=>{
    await Campground.deleteMany({});
    for(let i = 0 ;i < 300 ; i++)
    {
        const random1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20) + 10;
        const camp = new Campground({
            author: '614dda14bdb67c77db56570b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            price,
            geometry: {
              type: "Point",
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude,
              ]
          },
            images: [
                {
                    url: 'https://res.cloudinary.com/dxejcntls/image/upload/v1632739585/Yelpcamp/je5xogewxcpqtpfwyyhy.png',
                    filename: 'Yelpcamp/je5xogewxcpqtpfwyyhy'
                    
                  },
                  {
                    url: 'https://res.cloudinary.com/dxejcntls/image/upload/v1632739585/Yelpcamp/jf9o8lkkkmcncxfgb61g.png',
                    filename: 'Yelpcamp/jf9o8lkkkmcncxfgb61g'
                
                  },
                  {
                    url: 'https://res.cloudinary.com/dxejcntls/image/upload/v1632739585/Yelpcamp/zveapvjwjt35a5guqqof.png',
                    filename: 'Yelpcamp/zveapvjwjt35a5guqqof'
                  }
              
            ]

        }) 

        await camp.save();
    }
}

seedDB();