let sign = [{
  title: "Aries",
  image:"https://www.horoscopedates.com/img/icon_aries.png",
  dateRange:"320,420",
  description: "Courageous, energetic, willful, commanding, leading"
},
{
  title: "Taurus",
  image:"https://www.horoscopedates.com/img/icon_taurus.png",
  dateRange:"420,521",
  description: "Pleasure seeking, loves control, dependable, grounded, provokes slowly, and highly sensual in nature."
},
{
  title: "Gemini",
  image:"https://www.horoscopedates.com/img/icon_gemini.png",
  dateRange:"521,621",
  description: "Cerebral, chatty, loves learning and education, charming, and adventurous."
},
{
  title: "Cancer",
  image:"https://www.horoscopedates.com/img/icon_cancer.png",
  dateRange:"621,723",
  description: "Emotional, group oriented, seeks security, family."
},{
  title: "Leo",
  image:"https://www.horoscopedates.com/img/icon_leo.png",
  dateRange:"723,823",
  description: "Generous, organized, protective, beautiful."
},{
  title: "Virgo",
  image:"https://www.horoscopedates.com/img/icon_virgo.png",
  dateRange:"823,923",
  description: "Particular, logical, practical, sense of duty, critical."
},{
  title: "Libra",
  image:"https://www.horoscopedates.com/img/icon_libra.png",
  dateRange:"923,1023",
  description: "Balanced, seeks beauty, sense of justice."
},{
  title: "Scorpio",
  image:"https://www.horoscopedates.com/img/icon_scorpio.png",
  dateRange:"1023,1123",
  description: "Passionate, exacting, loves extremes, combative, reflective."
},{
  title: "Sagittarius",
  image:"https://www.horoscopedates.com/img/icon_sagittarius.png",
  dateRange:"1122,1222",
  description: "Happy, absent minded, creative, adventurous."
},
{
  title: "Capricorn",
  image:"https://www.horoscopedates.com/img/icon_capricorn.png",
  dateRange:"1222,120",
  description: "Timeless, driven, calculating, ambitious."
},
{
  title: "Aquarius",
  image:"https://www.horoscopedates.com/img/icon_aquarius.png",
  dateRange:"120,218",
  description: "Forward thinking, communicative, people oriented, stubborn, generous, and dedicated."
},
{
  title: "Pisces",
  image:"https://www.horoscopedates.com/img/icon_pisces.png",
  dateRange:"218,320",
  description: "Likeable, energetic, passionate, sensitive."
},
];

let dropdown = document.getElementById('horolist');
let signimg = document.getElementById('resultimg');
let traits = document.getElementById('resulttxt');
let select = document.getElementById('horolist');


// create dropdown list options
for (let i=0; i<sign.length; i++) {
  // select dropdown
  // create option element
  let selection = document.createElement('option');
  // insert text content for selection
  selection.textContent = sign[i].title;
  // add option to the dropdown
  dropdown.appendChild(selection);
};


dropdown.onchange = function(){
  // for loop runs through array to find match w/ dropdown selection
  console.log(this.value);
  for (let i=0; i<sign.length; i++) {
  if (this.value == sign[i].title) {
  // writing the image source for horoscope image
  signimg.src = sign[i].image;
  // writing the description for the horescope
  traits.innerText = sign[i].description;
} 
};
};
