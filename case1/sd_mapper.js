"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/

var thisTime = new Date(2018, 3, 3, 15, 28, 0);

var timeStr = thisTime.toLocaleString();
 
var thisHour = thisTime.getHours();

var thisMonth = thisTime.getMonth();

var mapNum = thisMonth

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
var mapNum = map;


insertAdjancentHTML(imgStr);

