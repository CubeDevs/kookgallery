/*!
 * KookGallery.com
 * Coming Soon page for KookGallery.com
 * https://HosseinKarami.com
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });


  var startIncrementingAge = function(shell) {
      var ageDecimals, decimalsPerSecond;
      if (!shell) {
        shell = $('#page');
      }
      ageDecimals = $('.age-decimal-increment', shell).first();
      ageDecimals.css('width', ageDecimals.width());
      decimalsPerSecond = Math.pow(10, 9) / (365 * 24 * 60 * 60);
      if (!$('html').hasClass('mobile')) {
        return gyroscope.aileron.intervals.push(intervalSet(70, (function(_this) {
          return function() {
            return _this.updateAgeDecimals($('.age-decimal-increment', shell), decimalsPerSecond);
          };
        })(this)));
      }
    };

    var updateAgeDecimals = function(element, decimalsPerSecond) {
      var current, remainder, remainder_string;
      current = parseFloat(element.first().text());
      remainder = parseInt(current + decimalsPerSecond * 0.07);
      if (remainder > Math.pow(10, 9)) {
        this.incrementBaseAge();
      }
      remainder_string = remainder + '';
      return element.html((' 00000000' + remainder_string).slice(-9));
    };

    var incrementBaseAge = function() {
      var current, element;
      element = $('.incrementable.age-number');
      current = parseInt(element.html());
      return element.text(current + 1);
    };

})(jQuery, window, document);
