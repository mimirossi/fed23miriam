//  var cursore;
//  var offset = [0,0];
//  var ogg;
//  var click = false;
////  ogg = document.getElementById("oggettoMobile");
//  ogg = document.getElementsByClassName("movete");
//console.log(ogg);
//  document.body.appendChild(ogg);
//
//
//  ogg.addEventListener('mousedown', function(e) {
//    click = true;
//    offset = [
//      ogg.offsetLeft - e.clientX,
//      ogg.offsetTop - e.clientY
//    ];
//  }, true);
//  document.addEventListener('mouseup', function() {
//    click = false;
//  }, true);
//  document.addEventListener('mousemove', function(event) {
//    event.preventDefault();
//    if (click) {
//      cursore = {
//        x : event.clientX,
//        y : event.clientY
//      };
//      ogg.style.left = (cursore.x + offset[0]) + 'px';
//      ogg.style.top  = (cursore.y + offset[1]) + 'px';
//    }
//  }, true);




  var cursore;
  var offset = [0,0];
  var ogg;
  var click = false;
  ogg = document.getElementById("oggettoMobile1");


//document.body.appendChild(ogg);


  ogg.addEventListener('mousedown', function(e) {
    click = true;
    offset = [
      ogg.offsetLeft - e.clientX,
      ogg.offsetTop - e.clientY
    ];
    console.log(offset);
  }, true);
  document.addEventListener('mouseup', function() {
    click = false;
  }, true);
  document.addEventListener('mousemove', function(event) {
    event.preventDefault();

    if (click) {
      cursore = {
        x : event.clientX,
        y : event.clientY
      };

      ogg.style.left = (cursore.x + offset[0]) + 'px';
      ogg.style.top  = (cursore.y + offset[1]) + 'px';
    }
  }, true);


  