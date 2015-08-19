var pics = [];

$.ajax({
  url: 'https://api.imgur.com/3/album/BeiVs.json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 9a3c388c7b28313'
  }
})
.done(function(res) {
  pics = res.data.images;
  console.log(pics);

  for (var i = 0; i < pics.length; i++) {
    photoArray[i].path = pics[i].link;
  }

  showFromImgur();
})
.fail(function(err) {
  console.log(err);
});

function showFromImgur() {
  var rand = Math.floor(Math.random() * pics.length + 1);
  var displayPic = '<img src="' + pics[rand].link + '">';
  $('#picContainer').html(displayPic);
}

$('#another').click(function() {
  showFromImgur();
  console.log('I am sorry for being mean to Benton');
});

// pics is array of photos from imgur

// photoArray is the existing array of photo objects used by tracker

