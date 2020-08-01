const Albums=[
 {
    albumname:"Album1",
    id:1,
    albumimg:'https://i.ytimg.com/vi/NuDFhIGjF2Q/maxresdefault.jpg',
    songs:[
     {
      key: 1,
      name: "Labon Ko Labon pe",
      musicUrl:require("../assets/songs/LabonKo.mp3"),
      musicImage:require("../assets/musicimages/LKLP.jpg"),
      artist:['K.K']
     },
     {
      key: 2,
      name: "Kamli",
     musicUrl:require("../assets/songs/Kamli.mp3"),
     musicImage:require("../assets/musicimages/kamli.jpg"),
    artist:['Sunidhi Chauhan']
     }
    ]

},
{
 albumname:"Album2",
 id:2,
 albumimg:'https://i.ytimg.com/vi/NuDFhIGjF2Q/maxresdefault.jpg',
 songs:[
  {
   key: 3,
   name: "Kya Mujhe Pyaar hai",
  musicUrl:require("../assets/songs/KMPH.mp3"),
  musicImage:require("../assets/musicimages/KMPH.jpg"),
  artist:['K.K']
  },
  {
   key: 4,
 name: "Muqabla",
 musicUrl:require("../assets/songs/Muqabla.mp3"),
 musicImage:require("../assets/musicimages/StreetDancer.jpg"),
 artist:['K.K']
  }
 ]

},
{
 albumname:"Album3",
 id:3,
 albumimg:'https://i.ytimg.com/vi/NuDFhIGjF2Q/maxresdefault.jpg', 
 songs:[
  {
   key: 5,
   name: "Tum Se Hi",
   musicUrl:require("../assets/songs/Tum Se Hi.mp3"),
   musicImage:require("../assets/musicimages/tumsehi.jpg"),
   artist:['Mohit Chauhan']
  },
  {
   key: 6,
   name: "Dil Ibadat",
   musicUrl:require("../assets/songs/DilIbaadat.mp3"),
   musicImage:require("../assets/musicimages/DilIbadat.jpg"),
   artist:['K.K']
  }
 ]
}]
export default Albums;
