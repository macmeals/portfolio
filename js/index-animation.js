$(function() {

/////////  c-animationtext要素 /////////////////////////////////////////////////////

  //c-animationtext要素を変数に代入する
  var c_anima = $('.c-animationtext') 

  //c-animationtext要素の中の文字を一文字ずつ分割して配列(c_array)に入れる
  var c_array = c_anima.text().split('') ;
  
  //.c-animationtext要素の中身を空にする
  $('.c-animationtext').html('');
  
  //配列に入っている文字数分だけ処理を繰り返す:.c-animationtext要素
  $.each(c_array, function(index, element) {

    //<span style="opacity: 0">配列に入っている1文字</span>という要素を作成する
    var new_element = $("<span/>").text(element).css({ 'opacity' : '0' });

     //作成した要素をc-animationtext要素の末尾に追加していく。
    c_anima.append(new_element);

    //indexの数値 * ミリ秒だけ処理を遅延させる。
    //indexの数値は後方の文字にいくほど大きくなるので
    //それにミリ秒を乗じる事で後ろの文字ほど処理が遅延し文字が遅れて現れる
    new_element.delay(index * 100);
    new_element.animate({opacity: 1}, 1000);
  });


 /////////  c-animationlink要素 ///////////////////////////////////////////////////// 
  
  //c-animationlink要素を変数に代入する
  var c_animalink = $('.c-animationlink') 

  //c-animationlink要素の中の文字を一文字ずつ分割して配列(c_array)に入れる
  var c_array = c_animalink.text().split('') ;

  //.c-animationlink要素の中身を空にする
  $('.c-animationlink').html('');

  //配列に入っている文字数分だけ処理を繰り返す:.c-animationlink要素
  $.each(c_array, function(index, element) {

    //<span style="opacity: 0">配列に入っている1文字</span>という要素を作成する
    var new_element = $("<span/>").text(element).css({ 'opacity' : '0' });

     //作成した要素をc-animationlink要素の末尾に追加していく。
    c_animalink.append(new_element);

    //indexの数値 * ミリ秒だけ処理を遅延させる。
    //indexの数値は後方の文字にいくほど大きくなるので
    //それにミリ秒を乗じる事で後ろの文字ほど処理が遅延し文字が遅れて現れる
    new_element.delay(index * 100);
    new_element.animate({opacity: 1}, 1000);
  });

 /////////  c-thunderanimation要素 ///////////////////////////////////////////////////// 
   var c_thunderanima = $('.c-thunderanimation') 

   var c_array = c_thunderanima.text().split('') ;

   //.c-animationlink要素の中身を空にする
  $('.c-thunderanimation').html('');

  //配列に入っている文字数分だけ処理を繰り返す:.c-animationlink要素
  $.each(c_array, function(index, element) {

    //<span style="opacity: 0">配列に入っている1文字</span>という要素を作成する
    var new_element = $("<span/>").text(element).css({ 'opacity' : '0' });

     //作成した要素をc-animationlink要素の末尾に追加していく。
     c_thunderanima.append(new_element);

    //indexの数値 * ミリ秒だけ処理を遅延させる。
    //indexの数値は後方の文字にいくほど大きくなるので
    //それにミリ秒を乗じる事で後ろの文字ほど処理が遅延し文字が遅れて現れる
    new_element.delay(index * 100);
    new_element.animate({opacity: 1}, 1000);
  });

});