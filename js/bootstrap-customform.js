/* ==========================================================
 * bootstrap-customform.js v2.0.0
 * https://github.com/globocom/bootstrap
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function( $ ){
	
	"use strict"
	
	 var dismiss = '[data-dismiss="customform"]'
	, CustomForm = function ( el, options ) {
    //$(el).on('click', dismiss, this.init)
    this.element = el;
    this.init();
  }
	
	CustomForm.prototype = {
		constructor: CustomForm,
		init: function() {
			$(this.element).hide();
			var oldClasses = $(this.element).attr('class') 
			var container = $('<div />', {
        'class' : 'customform-container ' + oldClasses
      }).insertAfter(this.element)
      if($(this.element).is('select')) {
        container.addClass('customform-selectbox')
        this.createSelect();
      } else if($(this.element).is('[type="checkbox"]')) {
        container.addClass('customform-checkbox')
      } else if($(this.element).is('[type="radio"]')) {
        container.addClass('customform-radio')
      } 
		},
		createSelect: function() {
		  
		}
	}
	
	/* CUSTOM FORM PLUGIN DEFINITION
	 * =============================
	 */
	$.fn.customform = function(option) {
		return this.each(function(){
			var $this = $(this), data = $this.data('customform')
			if (!data) $this.data('customform', (data = new CustomForm(this)))
			if (typeof option == 'string') data[option].call($this)
		})
	}
	
	$.fn.customform.Constructor = CustomForm
	
}( window.jQuery )