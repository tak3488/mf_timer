"use strict";
// Create new element
var timerStyle = 'width:27px;';
var timer = "<input style=\"" + timerStyle + "\" id=\"timerForm\"></input>\u5206\u5F8C\u306B";
var optionValues = ["出勤", "退勤", "休憩", "戻り"];
var options = "";
for (var i in optionValues)
    options += "<option value=\"" + i + "\">" + optionValues[i] + "</option>";
var selectStyle = 'height: 27px;';
var select = "<select style=\"" + selectStyle + "\" id=\"selectForm\"><option value=\"0\">\u51FA\u52E4</option><option value=\"1\">\u9000\u52E4</option><option value=\"2\">\u4F11\u61A9</option><option value=\"3\">\u623B\u308A</option></select>\u3092\u30AF\u30EA\u30C3\u30AF<br>";
var buttonStyle = 'margin-left: 150px; margin-top: 10px; background: steelblue; color: white;';
var button = "<button onclick=\"setTimer()\" id=\"button\" style=\"" + buttonStyle + "\">\u30BB\u30C3\u30C8</button>";
var newElementStyle = 'display: inline-block; vertical-align: middle; padding-left: 16px;';
var newElement = "<div style=\"" + newElementStyle + "\" id=\"newElement\">" + timer + select + button + "</div>";
// Set new element and add border
var leftElement = document.getElementById('kt-attendance-card-time-stamp');
leftElement.insertAdjacentHTML('afterend', newElement);
leftElement.style.borderRight = "1px solid #d4d8dd";
// Main functions
var setTimer = function () {
    var timerForm = document.getElementById('timerForm');
    var time = Number(timerForm.value);
    var selectForm = document.getElementById('selectForm');
    var selected = Number(selectForm.value);
    var schedule = new Date(Date.now() + time * 60 * 1000);
    var targetElement = document.getElementById('newElement');
    var msg = "<p>" + schedule.getHours() + ":" + schedule.getMinutes() + ":" + schedule.getSeconds() + "\u306B\"" + optionValues[selected] + "\"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059</p>";
    targetElement.innerHTML = msg;
    setTimeout(function () { return clickButton(selected); }, time * 60 * 1000);
};
var clickButton = function (selected) {
    var targetButton = document.getElementsByClassName('attendance-card-time-stamp-button')[selected];
    targetButton.click();
};
