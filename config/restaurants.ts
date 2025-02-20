interface MongolianRestaurant {
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  details?: string; // Optional field for additional info
}
const mongolianRestaurants: MongolianRestaurant[] = [
  {
    name: "Mazalae Mongolian Restaurant",
    location: "9216 Waukegan Rd, Morton Grove, IL 60053, USA",
    latitude: 42.0488,
    longitude: -87.7986,
    details: "Offers authentic Mongolian food for lunch, dinner, and delivery.",
  },
  {
    name: "Mongolian Cuisine",
    location: "4640 North Cumberland Ave, Chicago, IL 60656, USA",
    latitude: 41.9651,
    longitude: -87.8368,
    details: "Serves Mongolian food for dine-in, takeout, or delivery.",
  },
  {
    name: "Arag Mongolian Cuisine",
    location: "Los Angeles, CA, USA",
    latitude: 34.0522, // Central LA coordinates
    longitude: -118.2437,
    details: "Known for authentic Mongolian dishes, operating over 7 years.",
  },
  {
    name: "Eurasia",
    location: "12221 San Pablo Ave. #6, Richmond, CA 94805, USA",
    latitude: 37.9358,
    longitude: -122.3248,
    details: "Serves Mongolian food alongside Japanese and Russian dishes.",
  },
  {
    name: "Asian Grill Restaurant",
    location: "352 14th Street, Oakland, CA 94612, USA",
    latitude: 37.8051,
    longitude: -122.2696,
    details: "Offers Japanese sushi and authentic Mongolian food.",
  },
  {
    name: "Nomads Spirit",
    location: "Munich, Germany",
    latitude: 48.1351, // Central Munich coordinates
    longitude: 11.582,
    details: "Catering and delivery service with original Mongolian dishes.",
  },
  {
    name: "99 Yurts",
    location: "North Beijing, China",
    latitude: 40.0, // Approximate northern Beijing coordinates
    longitude: 116.4074,
    details: "Features 99 yurts and roast whole lamb with performances.",
  },
  {
    name: "Inner Mongolia Hotel Buffet",
    location: "Beijing, China",
    latitude: 39.9042, // Central Beijing coordinates
    longitude: 116.4074,
    details: "Offers Mongolian dishes like yogurt and suutei tsai.",
  },
  {
    name: "Mongolian Camp",
    location: "Beijing, China",
    latitude: 39.9042, // Central Beijing coordinates
    longitude: 116.4074,
    details: "Known for roast lamb and traditional performances.",
  },
  {
    name: "Tangdou Xiansheng Shaomai and Lamb Chops",
    location: "Beijing, China",
    latitude: 39.9042, // Central Beijing coordinates
    longitude: 116.4074,
    details: "Small diner with authentic shaomai and lamb chops.",
  },
];

export default mongolianRestaurants;
