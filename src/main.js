import { Connect } from './c4.js';
import $ from 'jquery';
import '../css/styles.css';
import 'bootstrap';

let connect = new Connect();

function attachListeners() {
  $(".container").on("click", ".grid-item", function(){
    let column = $(this).attr('id').slice(1);
    console.log($("#a"+column)[0]);
    for(let i = column % 7; i < 42; i+=7){
      if($("#a"+i)[0].classList.contains("red") === false && $("#a"+i)[0].classList.contains("blue") === false){
        $("#a"+i).addClass(connect.getTurn());
        connect.turn++;
        break;
    }
    }
  })
}
$(document).ready(function(){
  attachListeners();
  $(".container").append("<div class='grid-container'>");

  for(let i = 41; i >=0 ; i--){
  $(".grid-container").append("<div class='grid-item' id='a"+i+"'>◉</div>");
}
$(".container").append("</div>");
  });
