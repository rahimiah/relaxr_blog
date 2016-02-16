$('#hidden1').hide();
$('#hidden2').hide();
$('#hl1').hide();
$('#hl2').hide();
$('#hl3').hide();

$('.bluepart').on('click', function(){
  alert('We are not currently taking sign ups');
  $('.bluepart').html('No Sign Ups!');
});

$('#link1').on('click', function(){
  $('#hidden1').slideDown('slow', function(){}),
  $('#hl1').show();
  $('#link1').hide();
});

$('#hl1').on('click', function(){
  $('#hidden1').slideUp('slow', function(){}),
  $('#link1').show(),
  $('#hl1').hide();
});

$('#link2').on('click', function(){
  $('#hidden2').slideDown('slow', function(){}),
  $('#hl2').show();
  $('#link2').hide();
});

$('#hl2').on('click', function(){
  $('#hidden2').slideUp('slow', function(){}),
  $('#link2').show(),
  $('#hl2').hide();
});

$('.learnmore').on('click', function(){
  $('#hl3').slideDown('slow', function(){});
})
