//import { Agecalc } from './age.js';
import $ from 'jquery';
import '../css/styles.css';
import 'bootstrap';

$(document).ready(function(){
  $(".container").append("<div class='grid-container'>");

  for(let i = 0; i < 42; i++){
  $(".grid-container").append("<div class='grid-item spot"+i+"'>◉</div>");
}
$(".container").append("</div>");
  });
