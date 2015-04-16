function showPic() {
  // var pics = ['img/one.jpg',
  //             'img/two.jpg',
  //             'img/three.jpg',
  //             'img/four.jpg',
  //             'img/five.jpg',
  //             'img/six.jpg',
  //             'img/seven.jpg',
  //             'img/eight.jpg',
  //             'img/nine.jpg',
  //             'img/ten.jpg'];
  var pics = ['http://imgur.com/1bZXR52',
            'http://imgur.com/hDEBuhd',
            'http://imgur.com/kHIemCM',
            'http://imgur.com/7oXxcyJ',
            'http://imgur.com/TUA4xtU',
            'http://imgur.com/7IraMf0',
            'http://imgur.com/5TMiwdo',
            'http://imgur.com/j37VzyS',
            'http://imgur.com/kUBfpiV',
            'http://imgur.com/cvEvRaC'];

  var rand = Math.floor(Math.random() * pics.length);
  var displayPic = '<img src="' + pics[rand] + '.jpg">';
  $('#picContainer').html(displayPic);
}

var button = document.getElementById('another');
button.addEventListener('click', function() {
  console.log('clicky');
  showPic();
});
