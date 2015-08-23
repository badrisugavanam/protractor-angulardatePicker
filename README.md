# protractor-angulardatePicker
A node module to ease out writting test in protractor for choosing a date and time from angular date and time picker


example usage :

```javascript

it('The text box contains August 12 6:30 PM ', function() {
     browser.get('http://dalelotts.github.io/angular-bootstrap-datetimepicker/');
var p= require('./protractor-angulardatePicker.js');

 
  var parentnode=element(by.css('.input-group-addon'));
  var nthnode=3;
  var dateofthemonth='12';
  var timeoftheday='6:00 PM';
  var specifictimeofthehour='6:30 PM';
  var resultinputbox=element(by.model('data.dateDropDownInput'));
  var relativetime;
    p.ptorangulardateTimePicker(parentnode, nthnode, dateofthemonth, timeoftheday,specifictimeofthehour,    relativetime, resultinputbox).then(function(result){
       console.log(result);
    });

  });
  ```
