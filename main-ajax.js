var pics;

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
})
.fail(function(err) {
  console.log(err);
});

console.log(pics);

function showFromImgur() {
  var rand = Math.floor(Math.random() * pics.length);
  var displayPic = '<img src="' + pics[rand].link + '">';
  $('#picContainer').html(displayPic);
}

var button = document.getElementById('another');
button.addEventListener('click', function() {
  showFromImgur();
});
