var moment = require('moment');
//Here parent node is the one which is used trigger to open the calendar object 
exports.ptorangulardateTimePicker = function(parentnode, nthnode, dateofthemonth, timeoftheday,specifictimeofthehour, relativetime, resultinputbox) {

    parentnode.click();
    var i = 0;
    //Just to select the third date picker in the page which has the input page 
    element.all(by.cssContainingText('td', dateofthemonth)).each(function(date) {
        i = i + 1;
        if (i == nthnode) {
            date.click();
        }

    });
    //hour of the day 
    element.all(by.cssContainingText('span', timeoftheday)).each(function(time) {

        time.click();
    });
    //specific time of the hour
    element.all(by.cssContainingText('span', specifictimeofthehour)).each(function(specifictime) {

        specifictime.click();
    });

    return (resultinputbox.getAttribute('value'));

};