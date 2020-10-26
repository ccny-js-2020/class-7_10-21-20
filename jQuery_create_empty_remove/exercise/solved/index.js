/*
  Using jQuery:
    - when you click on the button
    - empty the 'magic-goes-here' div and re-populate it with an artist, album name, and album image of your choice

  Bonus:
    - set up an object array of music objects that contain the keys artist, album, and album picture
    - load it up with as many albums as you want
    - when you click on the button, you change the album that is show on the ui
      - to do this, you'll select an exact index in that array, i.e. musicAlbums[0] will show the arist, album, and album cover image
        - you can generate that index number randomly every time the button is pressed
        - or you can have a number incremented by 1 every time the button is pressed
        - so, to place the album cover in the image tag in jQuery for the first object in the array, itll look something like $("<img>").attr("src", musicAlbums[o].albumPic)
*/
//exercise
$("#change-album").click(function(){
  $(".magic-goes-here").empty();

  var h1 = $("<h1>");
  h1.text("AC/DC");
  var h2 = $("<h2>");
  h2.text("Highway To Hell");
  var img = $("<img>");
  img.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51NdC7BYcRL._SY450_.jpg")

  $(".magic-goes-here").append(h1).append(h2).append(img)
});

//bonus
var albums = [
  {
    artist: "AC/DC",
    albumName: "Highway To Hell",
    albumImage: "https://images-na.ssl-images-amazon.com/images/I/51NdC7BYcRL._SY450_.jpg"
  },
  {
    artist: "Boz Scaggs",
    albumName: "Silk Degrees",
    albumImage: "https://www.soulmusic.com/sites/classicsoul.rock.tools/files/styles/site_width_image/public/2020-02/Boz%2BScaggs%2B-%2BLowdown.jpeg?itok=5cMKOhfn"
  },
  {
    artist: "The Who",
    albumName: "Tommy",
    albumImage: "https://upload.wikimedia.org/wikipedia/en/1/19/Tommyalbumcover.jpg"
  },
  {
    artist: "Queen",
    albumName: "News of the World",
    albumImage: "https://images-na.ssl-images-amazon.com/images/I/810rfsma2tL._SY355_.jpg"
  },
  {
    artist: "Live",
    albumName: "Throwing Copper",
    albumImage: "https://upload.wikimedia.org/wikipedia/en/0/09/Livecopper.jpg"
  }
];

$("#change-album-bonus").click(function(){
  $(".magic-goes-here-bonus").empty();

  var randomAlbum = albums[Math.floor(Math.random() * albums.length)];

  var h1 = $("<h1>");
  h1.text(randomAlbum.artist);
  var h2 = $("<h2>");
  h2.text(randomAlbum.albumName);
  var img = $("<img>");
  img.attr("src", randomAlbum.albumImage);

  $(".magic-goes-here-bonus").append(h1).append(h2).append(img)
});

//if you want to append the albums in the order of the array
// $("#change-album-bonus").click(function(){
//   $(".magic-goes-here-bonus").empty();
//
//   if(num < albums.length){
//
//     var h1 = $("<h1>");
//     h1.text(albums[num].artist);
//     var h2 = $("<h2>");
//     h2.text(albums[num].albumName);
//     var img = $("<img>");
//     img.attr("src", albums[num].albumImage);
//
//     $(".magic-goes-here-bonus").append(h1).append(h2).append(img)
//
//     num++;
//   } else {
//     $(".magic-goes-here-bonus").text("Done with albums");
//   }
// })
