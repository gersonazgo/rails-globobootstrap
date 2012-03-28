/* ===========================================================
 * bootstrap-charcount.js v2.0.0
 * ===========================================================
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


 /* PLUGIN DEFINITION
  * ========================= */
!function( $ ){
	
  var Charcount = function ( element, options ) {
    this.init('charcount', element, options)
  }
	
	Charcount.prototype = {
		constructor: Charcount,
		init: function(type, element, options) {
			var self = this;
			self.type = type;
      self.$element = $(element);
      self.options = this.getOptions(options);
      var box = self.$element.val();
			var amount = self.options.chars;
			var count = parseInt(amount) - box.length;
      self.$element.attr('title', self.options.text.replace('{n}', count));
      
			self.$element.tooltip({
		  	placement: 'right',
		  	trigger: 'manual'
		  }).focus(function(){
		  	$(this).tooltip('show');
		  }).blur(function(){
		  	$(this).tooltip('hide');
		  }).keyup(function(){
		  	box = self.$element.val();
				amount = self.options.chars;
				count = parseInt(amount) - box.length;
				$('.tooltip-inner').html(self.options.text.replace('{n}', count));
		  });
		},
		getOptions: function ( options ) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      return options
    }
	}

  $.fn.charcount = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('charcount', (data = new Charcount(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Charcount

  $.fn.charcount.defaults = {
  	chars: 60,
  	text: '{n} chars left'
	}

}( window.jQuery )