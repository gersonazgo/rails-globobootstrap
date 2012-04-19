$(function () {

  	module("bootstrap-customform general")
  	
    test("should be defined on jquery object", function () {
      ok($(document.body).customform, 'customform method is defined')
    })
    test("should hide the target form element when customform is called", function(){
      var select = $('<select id="custom-select" />')
      select.appendTo('#qunit-fixture')
      select.customform()
      ok($('#custom-select').is(':hidden'))
    })
    test("should create a link to represent the custom field", function(){
      var select = $('<select id="custom-select" />')
      select.appendTo('#qunit-fixture')
      select.customform()
      ok($('.customform-container').length)
    })
    test("should create a class that identifies if is a selectbox", function(){
      var element = $('<select id="custom-select" />')
      element.appendTo('#qunit-fixture')
      element.customform()
      ok($('.customform-container').hasClass('customform-selectbox'))
    })
    test("should create a class that identifies if is a checkbox", function(){
      var element = $('<input type="checkbox" id="custom-checkbox" />')
      element.appendTo('#qunit-fixture')
      element.customform()
      ok($('.customform-container').hasClass('customform-checkbox'))
    });
    test("should create a class that identifies if is a radiobuttom", function(){
      var element = $('<input type="radio" id="custom-radio" />')
      element.appendTo('#qunit-fixture')
      element.customform()
      ok($('.customform-container').hasClass('customform-radio'))
    });
    test("should not create any aditional class if the element is not supported", function(){
      var element = $('<div id="custom-any" />')
      element.appendTo('#qunit-fixture')
      element.customform()
      ok(!$('.customform-container').hasClass('customform-selectbox'))
      ok(!$('.customform-container').hasClass('customform-checkbox'))
      ok(!$('.customform-container').hasClass('customform-radio')) 
    });
    test("should inherit any classes from original element", function(){
      var element = $('<select id="custom-select" class="any other"></select>')
      element.appendTo('#qunit-fixture')
      element.customform()
      ok($('.customform-container').hasClass('any other'))
    })
    module("customform selectbox")
    
    test("should create a link with the option selected as default", function(){
      var element = $('<select id="custom-select"></select>');
      var options = ['<option>option 1</option>']
    });
    

})