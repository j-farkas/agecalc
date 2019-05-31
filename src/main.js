//import { Connect } from './c4.js';
import $ from 'jquery';
import '../css/styles.css';
import 'bootstrap';


function attachListeners() {
  $(".container").on("click", ".grid-item", function(){
    console.log($(this));
  })
}
$(document).ready(function(){
  attachListeners();
  $(".container").append("<div class='grid-container'>");

  for(let i = 41; i >= 0 ; i--){
  $(".grid-container").append("<div class='grid-item' id='spot"+i+"'>◉</div>");
}
$(".container").append("</div>");
  });
