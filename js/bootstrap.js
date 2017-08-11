// build time:Fri Aug 11 2017 18:32:31 GMT+0800 (中国标准时间)
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||e[0]==1&&e[1]==9&&e[2]<1||e[0]>3){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}}(jQuery);+function(t){"use strict";function e(){var t=document.createElement("bootstrap");var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e){if(t.style[i]!==undefined){return{end:e[i]}}}return false}t.fn.emulateTransitionEnd=function(e){var i=false;var o=this;t(this).one("bsTransitionEnd",function(){i=true});var n=function(){if(!i)t(o).trigger(t.support.transition.end)};setTimeout(n,e);return this};t(function(){t.support.transition=e();if(!t.support.transition)return;t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function(t){"use strict";var e='[data-dismiss="alert"]';var i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.3.7";i.TRANSITION_DURATION=150;i.prototype.close=function(e){var o=t(this);var n=o.attr("data-target");if(!n){n=o.attr("href");n=n&&n.replace(/.*(?=#[^\s]*$)/,"")}var s=t(n==="#"?[]:n);if(e)e.preventDefault();if(!s.length){s=o.closest(".alert")}s.trigger(e=t.Event("close.bs.alert"));if(e.isDefaultPrevented())return;s.removeClass("in");function r(){s.detach().trigger("closed.bs.alert").remove()}t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",r).emulateTransitionEnd(i.TRANSITION_DURATION):r()};function o(e){return this.each(function(){var o=t(this);var n=o.data("bs.alert");if(!n)o.data("bs.alert",n=new i(this));if(typeof e=="string")n[e].call(o)})}var n=t.fn.alert;t.fn.alert=o;t.fn.alert.Constructor=i;t.fn.alert.noConflict=function(){t.fn.alert=n;return this};t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery);+function(t){"use strict";var e=function(i,o){this.$element=t(i);this.options=t.extend({},e.DEFAULTS,o);this.isLoading=false};e.VERSION="3.3.7";e.DEFAULTS={loadingText:"loading..."};e.prototype.setState=function(e){var i="disabled";var o=this.$element;var n=o.is("input")?"val":"html";var s=o.data();e+="Text";if(s.resetText==null)o.data("resetText",o[n]());setTimeout(t.proxy(function(){o[n](s[e]==null?this.options[e]:s[e]);if(e=="loadingText"){this.isLoading=true;o.addClass(i).attr(i,i).prop(i,true)}else if(this.isLoading){this.isLoading=false;o.removeClass(i).removeAttr(i).prop(i,false)}},this),0)};e.prototype.toggle=function(){var t=true;var e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");if(i.prop("type")=="radio"){if(i.prop("checked"))t=false;e.find(".active").removeClass("active");this.$element.addClass("active")}else if(i.prop("type")=="checkbox"){if(i.prop("checked")!==this.$element.hasClass("active"))t=false;this.$element.toggleClass("active")}i.prop("checked",this.$element.hasClass("active"));if(t)i.trigger("change")}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"));this.$element.toggleClass("active")}};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.button");var s=typeof i=="object"&&i;if(!n)o.data("bs.button",n=new e(this,s));if(i=="toggle")n.toggle();else if(i)n.setState(i)})}var o=t.fn.button;t.fn.button=i;t.fn.button.Constructor=e;t.fn.button.noConflict=function(){t.fn.button=o;return this};t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var o=t(e.target).closest(".btn");i.call(o,"toggle");if(!t(e.target).is('input[type="radio"], input[type="checkbox"]')){e.preventDefault();if(o.is("input,button"))o.trigger("focus");else o.find("input:visible,button:visible").first().trigger("focus")}}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery);+function(t){"use strict";var e=function(e,i){this.$element=t(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=i;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this));this.options.pause=="hover"&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};e.VERSION="3.3.7";e.TRANSITION_DURATION=600;e.DEFAULTS={interval:5e3,pause:"hover",wrap:true,keyboard:true};e.prototype.keydown=function(t){if(/input|textarea/i.test(t.target.tagName))return;switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()};e.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval));return this};e.prototype.getItemIndex=function(t){this.$items=t.parent().children(".item");return this.$items.index(t||this.$active)};e.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);var o=t=="prev"&&i===0||t=="next"&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n=t=="prev"?-1:1;var s=(i+n)%this.$items.length;return this.$items.eq(s)};e.prototype.to=function(t){var e=this;var i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(t>this.$items.length-1||t<0)return;if(this.sliding)return this.$element.one("slid.bs.carousel",function(){e.to(t)});if(i==t)return this.pause().cycle();return this.slide(t>i?"next":"prev",this.$items.eq(t))};e.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find(".next, .prev").length&&t.support.transition){this.$element.trigger(t.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};e.prototype.next=function(){if(this.sliding)return;return this.slide("next")};e.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")};e.prototype.slide=function(i,o){var n=this.$element.find(".item.active");var s=o||this.getItemForDirection(i,n);var r=this.interval;var a=i=="next"?"left":"right";var l=this;if(s.hasClass("active"))return this.sliding=false;var h=s[0];var f=t.Event("slide.bs.carousel",{relatedTarget:h,direction:a});this.$element.trigger(f);if(f.isDefaultPrevented())return;this.sliding=true;r&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var d=t(this.$indicators.children()[this.getItemIndex(s)]);d&&d.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:h,direction:a});if(t.support.transition&&this.$element.hasClass("slide")){s.addClass(i);s[0].offsetWidth;n.addClass(a);s.addClass(a);n.one("bsTransitionEnd",function(){s.removeClass([i,a].join(" ")).addClass("active");n.removeClass(["active",a].join(" "));l.sliding=false;setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)}else{n.removeClass("active");s.addClass("active");this.sliding=false;this.$element.trigger(p)}r&&this.cycle();return this};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.carousel");var s=t.extend({},e.DEFAULTS,o.data(),typeof i=="object"&&i);var r=typeof i=="string"?i:s.slide;if(!n)o.data("bs.carousel",n=new e(this,s));if(typeof i=="number")n.to(i);else if(r)n[r]();else if(s.interval)n.pause().cycle()})}var o=t.fn.carousel;t.fn.carousel=i;t.fn.carousel.Constructor=e;t.fn.carousel.noConflict=function(){t.fn.carousel=o;return this};var n=function(e){var o;var n=t(this);var s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(!s.hasClass("carousel"))return;var r=t.extend({},s.data(),n.data());var a=n.attr("data-slide-to");if(a)r.interval=false;i.call(s,r);if(a){s.data("bs.carousel").to(a)}e.preventDefault()};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n);t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery);+function(t){"use strict";var e=function(i,o){this.$element=t(i);this.options=t.extend({},e.DEFAULTS,o);this.$trigger=t('[data-toggle="collapse"][href="#'+i.id+'"],'+'[data-toggle="collapse"][data-target="#'+i.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}if(this.options.toggle)this.toggle()};e.VERSION="3.3.7";e.TRANSITION_DURATION=350;e.DEFAULTS={toggle:true};e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"};e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var i;var n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(n&&n.length){i=n.data("bs.collapse");if(i&&i.transitioning)return}var s=t.Event("show.bs.collapse");this.$element.trigger(s);if(s.isDefaultPrevented())return;if(n&&n.length){o.call(n,"hide");i||n.data("bs.collapse",null)}var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",true);this.$trigger.removeClass("collapsed").attr("aria-expanded",true);this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][l])};e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var i=t.Event("hide.bs.collapse");this.$element.trigger(i);if(i.isDefaultPrevented())return;var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);this.$trigger.addClass("collapsed").attr("aria-expanded",false);this.transitioning=1;var n=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return n.call(this);this.$element[o](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(e.TRANSITION_DURATION)};e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};e.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(e,o){var n=t(o);this.addAriaAndCollapsedClass(i(n),n)},this)).end()};e.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i);e.toggleClass("collapsed",!i).attr("aria-expanded",i)};function i(e){var i;var o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function o(i){return this.each(function(){var o=t(this);var n=o.data("bs.collapse");var s=t.extend({},e.DEFAULTS,o.data(),typeof i=="object"&&i);if(!n&&s.toggle&&/show|hide/.test(i))s.toggle=false;if(!n)o.data("bs.collapse",n=new e(this,s));if(typeof i=="string")n[i]()})}var n=t.fn.collapse;t.fn.collapse=o;t.fn.collapse.Constructor=e;t.fn.collapse.noConflict=function(){t.fn.collapse=n;return this};t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var n=t(this);if(!n.attr("data-target"))e.preventDefault();var s=i(n);var r=s.data("bs.collapse");var a=r?"toggle":n.data();o.call(s,a)})}(jQuery);+function(t){"use strict";var e=".dropdown-backdrop";var i='[data-toggle="dropdown"]';var o=function(e){t(e).on("click.bs.dropdown",this.toggle)};o.VERSION="3.3.7";function n(e){var i=e.attr("data-target");if(!i){i=e.attr("href");i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")}var o=i&&t(i);return o&&o.length?o:e.parent()}function s(o){if(o&&o.which===3)return;t(e).remove();t(i).each(function(){var e=t(this);var i=n(e);var s={relatedTarget:this};if(!i.hasClass("open"))return;if(o&&o.type=="click"&&/input|textarea/i.test(o.target.tagName)&&t.contains(i[0],o.target))return;i.trigger(o=t.Event("hide.bs.dropdown",s));if(o.isDefaultPrevented())return;e.attr("aria-expanded","false");i.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s))})}o.prototype.toggle=function(e){var i=t(this);if(i.is(".disabled, :disabled"))return;var o=n(i);var r=o.hasClass("open");s();if(!r){if("ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length){t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",s)}var a={relatedTarget:this};o.trigger(e=t.Event("show.bs.dropdown",a));if(e.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true");o.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return false};o.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return;var o=t(this);e.preventDefault();e.stopPropagation();if(o.is(".disabled, :disabled"))return;var s=n(o);var r=s.hasClass("open");if(!r&&e.which!=27||r&&e.which==27){if(e.which==27)s.find(i).trigger("focus");return o.trigger("click")}var a=" li:not(.disabled):visible a";var l=s.find(".dropdown-menu"+a);if(!l.length)return;var h=l.index(e.target);if(e.which==38&&h>0)h--;if(e.which==40&&h<l.length-1)h++;if(!~h)h=0;l.eq(h).trigger("focus")};function r(e){return this.each(function(){var i=t(this);var n=i.data("bs.dropdown");if(!n)i.data("bs.dropdown",n=new o(this));if(typeof e=="string")n[e].call(i)})}var a=t.fn.dropdown;t.fn.dropdown=r;t.fn.dropdown.Constructor=o;t.fn.dropdown.noConflict=function(){t.fn.dropdown=a;return this};t(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery);+function(t){"use strict";var e=function(e,i){this.options=i;this.$body=t(document.body);this.$element=t(e);this.$dialog=this.$element.find(".modal-dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};e.VERSION="3.3.7";e.TRANSITION_DURATION=300;e.BACKDROP_TRANSITION_DURATION=150;e.DEFAULTS={backdrop:true,keyboard:true,show:true};e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)};e.prototype.show=function(i){var o=this;var n=t.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass("modal-open");this.escape();this.resize();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this));this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){if(t(e.target).is(o.$element))o.ignoreBackdropClick=true})});this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");if(!o.$element.parent().length){o.$element.appendTo(o.$body)}o.$element.show().scrollTop(0);o.adjustDialog();if(n){o.$element[0].offsetWidth}o.$element.addClass("in");o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:i});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(e.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)})};e.prototype.hide=function(i){if(i)i.preventDefault();i=t.Event("hide.bs.modal");this.$element.trigger(i);if(!this.isShown||i.isDefaultPrevented())return;this.isShown=false;this.escape();this.resize();t(document).off("focusin.bs.modal");this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");this.$dialog.off("mousedown.dismiss.bs.modal");t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal()};e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){if(document!==t.target&&this.$element[0]!==t.target&&!this.$element.has(t.target).length){this.$element.trigger("focus")}},this))};e.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){t.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")}};e.prototype.resize=function(){if(this.isShown){t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this))}else{t(window).off("resize.bs.modal")}};e.prototype.hideModal=function(){var t=this;this.$element.hide();this.backdrop(function(){t.$body.removeClass("modal-open");t.resetAdjustments();t.resetScrollbar();t.$element.trigger("hidden.bs.modal")})};e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};e.prototype.backdrop=function(i){var o=this;var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return}if(t.target!==t.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus():this.hide()},this));if(s)this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");if(!i)return;s?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):i()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){o.removeBackdrop();i&&i()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):r()}else if(i){i()}};e.prototype.handleUpdate=function(){this.adjustDialog()};e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})};e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t;this.scrollbarWidth=this.measureScrollbar()};e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";if(this.bodyIsOverflowing)this.$body.css("padding-right",t+this.scrollbarWidth)};e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure";this.$body.append(t);var e=t.offsetWidth-t.clientWidth;this.$body[0].removeChild(t);return e};function i(i,o){return this.each(function(){var n=t(this);var s=n.data("bs.modal");var r=t.extend({},e.DEFAULTS,n.data(),typeof i=="object"&&i);if(!s)n.data("bs.modal",s=new e(this,r));if(typeof i=="string")s[i](o);else if(r.show)s.show(o)})}var o=t.fn.modal;t.fn.modal=i;t.fn.modal.Constructor=e;t.fn.modal.noConflict=function(){t.fn.modal=o;return this};t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var o=t(this);var n=o.attr("href");var s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,""));var r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());if(o.is("a"))e.preventDefault();s.one("show.bs.modal",function(t){if(t.isDefaultPrevented())return;s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})});i.call(s,r,this)})}(jQuery);+function(t){"use strict";var e=function(t,e){this.type=null;this.options=null;this.enabled=null;this.timeout=null;this.hoverState=null;this.$element=null;this.inState=null;this.init("tooltip",t,e)};e.VERSION="3.3.7";e.TRANSITION_DURATION=150;e.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};e.prototype.init=function(e,i,o){this.enabled=true;this.type=e;this.$element=t(i);this.options=this.getOptions(o);this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport);this.inState={click:false,hover:false,focus:false};if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")}var n=this.options.trigger.split(" ");for(var s=n.length;s--;){var r=n[s];if(r=="click"){this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))}else if(r!="manual"){var a=r=="hover"?"mouseenter":"focusin";var l=r=="hover"?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this));this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};e.prototype.getDefaults=function(){return e.DEFAULTS};e.prototype.getOptions=function(e){e=t.extend({},this.getDefaults(),this.$element.data(),e);if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}}return e};e.prototype.getDelegateOptions=function(){var e={};var i=this.getDefaults();this._options&&t.each(this._options,function(t,o){if(i[t]!=o)e[t]=o});return e};e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(!i){i=new this.constructor(e.currentTarget,this.getDelegateOptions());t(e.currentTarget).data("bs."+this.type,i)}if(e instanceof t.Event){i.inState[e.type=="focusin"?"focus":"hover"]=true}if(i.tip().hasClass("in")||i.hoverState=="in"){i.hoverState="in";return}clearTimeout(i.timeout);i.hoverState="in";if(!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){if(i.hoverState=="in")i.show()},i.options.delay.show)};e.prototype.isInStateTrue=function(){for(var t in this.inState){if(this.inState[t])return true}return false};e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(!i){i=new this.constructor(e.currentTarget,this.getDelegateOptions());t(e.currentTarget).data("bs."+this.type,i)}if(e instanceof t.Event){i.inState[e.type=="focusout"?"focus":"hover"]=false}if(i.isInStateTrue())return;clearTimeout(i.timeout);i.hoverState="out";if(!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){if(i.hoverState=="out")i.hide()},i.options.delay.hide)};e.prototype.show=function(){var i=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!o)return;var n=this;var s=this.tip();var r=this.getUID(this.type);this.setContent();s.attr("id",r);this.$element.attr("aria-describedby",r);if(this.options.animation)s.addClass("fade");var a=typeof this.options.placement=="function"?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement;var l=/\s?auto?\s?/i;var h=l.test(a);if(h)a=a.replace(l,"")||"top";s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this);this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);this.$element.trigger("inserted.bs."+this.type);var f=this.getPosition();var d=s[0].offsetWidth;var p=s[0].offsetHeight;if(h){var c=a;var u=this.getPosition(this.$viewport);a=a=="bottom"&&f.bottom+p>u.bottom?"top":a=="top"&&f.top-p<u.top?"bottom":a=="right"&&f.right+d>u.width?"left":a=="left"&&f.left-d<u.left?"right":a;s.removeClass(c).addClass(a)}var v=this.getCalculatedOffset(a,f,d,p);this.applyPlacement(v,a);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type);n.hoverState=null;if(t=="out")n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(e.TRANSITION_DURATION):g()}};e.prototype.applyPlacement=function(e,i){var o=this.tip();var n=o[0].offsetWidth;var s=o[0].offsetHeight;var r=parseInt(o.css("margin-top"),10);var a=parseInt(o.css("margin-left"),10);if(isNaN(r))r=0;if(isNaN(a))a=0;e.top+=r;e.left+=a;t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0);o.addClass("in");var l=o[0].offsetWidth;var h=o[0].offsetHeight;if(i=="top"&&h!=s){e.top=e.top+s-h}var f=this.getViewportAdjustedDelta(i,e,l,h);if(f.left)e.left+=f.left;else e.top+=f.top;var d=/top|bottom/.test(i);var p=d?f.left*2-n+l:f.top*2-s+h;var c=d?"offsetWidth":"offsetHeight";o.offset(e);this.replaceArrow(p,o[0][c],d)};e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")};e.prototype.setContent=function(){var t=this.tip();var e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e);t.removeClass("fade in top bottom left right")};e.prototype.hide=function(i){var o=this;var n=t(this.$tip);var s=t.Event("hide.bs."+this.type);function r(){if(o.hoverState!="in")n.detach();if(o.$element){o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type)}i&&i()}this.$element.trigger(s);if(s.isDefaultPrevented())return;n.removeClass("in");t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",r).emulateTransitionEnd(e.TRANSITION_DURATION):r();this.hoverState=null;return this};e.prototype.fixTitle=function(){var t=this.$element;if(t.attr("title")||typeof t.attr("data-original-title")!="string"){t.attr("data-original-title",t.attr("title")||"").attr("title","")}};e.prototype.hasContent=function(){return this.getTitle()};e.prototype.getPosition=function(e){e=e||this.$element;var i=e[0];var o=i.tagName=="BODY";var n=i.getBoundingClientRect();if(n.width==null){n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top})}var s=window.SVGElement&&i instanceof window.SVGElement;var r=o?{top:0,left:0}:s?null:e.offset();var a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()};var l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,r)};e.prototype.getCalculatedOffset=function(t,e,i,o){return t=="bottom"?{top:e.top+e.height,left:e.left+e.width/2-i/2}:t=="top"?{top:e.top-o,left:e.left+e.width/2-i/2}:t=="left"?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}};e.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0;var r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll;var l=e.top+s-r.scroll+o;if(a<r.top){n.top=r.top-a}else if(l>r.top+r.height){n.top=r.top+r.height-l}}else{var h=e.left-s;var f=e.left+s+i;if(h<r.left){n.left=r.left-h}else if(f>r.right){n.left=r.left+r.width-f}}return n};e.prototype.getTitle=function(){var t;var e=this.$element;var i=this.options;t=e.attr("data-original-title")||(typeof i.title=="function"?i.title.call(e[0]):i.title);return t};e.prototype.getUID=function(t){do t+=~~(Math.random()*1e6);while(document.getElementById(t));return t};e.prototype.tip=function(){if(!this.$tip){this.$tip=t(this.options.template);if(this.$tip.length!=1){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")}}return this.$tip};e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};e.prototype.enable=function(){this.enabled=true};e.prototype.disable=function(){this.enabled=false};e.prototype.toggleEnabled=function(){this.enabled=!this.enabled};e.prototype.toggle=function(e){var i=this;if(e){i=t(e.currentTarget).data("bs."+this.type);if(!i){i=new this.constructor(e.currentTarget,this.getDelegateOptions());t(e.currentTarget).data("bs."+this.type,i)}}if(e){i.inState.click=!i.inState.click;if(i.isInStateTrue())i.enter(i);else i.leave(i)}else{i.tip().hasClass("in")?i.leave(i):i.enter(i)}};e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout);this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type);if(t.$tip){t.$tip.detach()}t.$tip=null;t.$arrow=null;t.$viewport=null;t.$element=null})};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.tooltip");var s=typeof i=="object"&&i;if(!n&&/destroy|hide/.test(i))return;if(!n)o.data("bs.tooltip",n=new e(this,s));if(typeof i=="string")n[i]()})}var o=t.fn.tooltip;t.fn.tooltip=i;t.fn.tooltip.Constructor=e;t.fn.tooltip.noConflict=function(){t.fn.tooltip=o;return this}}(jQuery);+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.7";e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype);e.prototype.constructor=e;e.prototype.getDefaults=function(){return e.DEFAULTS};e.prototype.setContent=function(){var t=this.tip();var e=this.getTitle();var i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e);t.find(".popover-content").children().detach().end()[this.options.html?typeof i=="string"?"html":"append":"text"](i);t.removeClass("fade top bottom left right in");if(!t.find(".popover-title").html())t.find(".popover-title").hide()};e.prototype.hasContent=function(){return this.getTitle()||this.getContent()};e.prototype.getContent=function(){var t=this.$element;var e=this.options;return t.attr("data-content")||(typeof e.content=="function"?e.content.call(t[0]):e.content)};e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.popover");var s=typeof i=="object"&&i;if(!n&&/destroy|hide/.test(i))return;if(!n)o.data("bs.popover",n=new e(this,s));if(typeof i=="string")n[i]()})}var o=t.fn.popover;t.fn.popover=i;t.fn.popover.Constructor=e;t.fn.popover.noConflict=function(){t.fn.popover=o;return this}}(jQuery);+function(t){"use strict";function e(i,o){this.$body=t(document.body);this.$scrollElement=t(i).is(document.body)?t(window):t(i);this.options=t.extend({},e.DEFAULTS,o);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this));this.refresh();this.process()}e.VERSION="3.3.7";e.DEFAULTS={offset:10};e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};e.prototype.refresh=function(){var e=this;var i="offset";var o=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!t.isWindow(this.$scrollElement[0])){i="position";
o=this.$scrollElement.scrollTop()}this.$body.find(this.selector).map(function(){var e=t(this);var n=e.data("target")||e.attr("href");var s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]);e.targets.push(this[1])})};e.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset;var e=this.getScrollHeight();var i=this.options.offset+e-this.$scrollElement.height();var o=this.offsets;var n=this.targets;var s=this.activeTarget;var r;if(this.scrollHeight!=e){this.refresh()}if(t>=i){return s!=(r=n[n.length-1])&&this.activate(r)}if(s&&t<o[0]){this.activeTarget=null;return this.clear()}for(r=o.length;r--;){s!=n[r]&&t>=o[r]&&(o[r+1]===undefined||t<o[r+1])&&this.activate(n[r])}};e.prototype.activate=function(e){this.activeTarget=e;this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]';var o=t(i).parents("li").addClass("active");if(o.parent(".dropdown-menu").length){o=o.closest("li.dropdown").addClass("active")}o.trigger("activate.bs.scrollspy")};e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.scrollspy");var s=typeof i=="object"&&i;if(!n)o.data("bs.scrollspy",n=new e(this,s));if(typeof i=="string")n[i]()})}var o=t.fn.scrollspy;t.fn.scrollspy=i;t.fn.scrollspy.Constructor=e;t.fn.scrollspy.noConflict=function(){t.fn.scrollspy=o;return this};t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery);+function(t){"use strict";var e=function(e){this.element=t(e)};e.VERSION="3.3.7";e.TRANSITION_DURATION=150;e.prototype.show=function(){var e=this.element;var i=e.closest("ul:not(.dropdown-menu)");var o=e.data("target");if(!o){o=e.attr("href");o=o&&o.replace(/.*(?=#[^\s]*$)/,"")}if(e.parent("li").hasClass("active"))return;var n=i.find(".active:last a");var s=t.Event("hide.bs.tab",{relatedTarget:e[0]});var r=t.Event("show.bs.tab",{relatedTarget:n[0]});n.trigger(s);e.trigger(r);if(r.isDefaultPrevented()||s.isDefaultPrevented())return;var a=t(o);this.activate(e.closest("li"),i);this.activate(a,a.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]});e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})};e.prototype.activate=function(i,o,n){var s=o.find("> .active");var r=n&&t.support.transition&&(s.length&&s.hasClass("fade")||!!o.find("> .fade").length);function a(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);if(r){i[0].offsetWidth;i.addClass("in")}else{i.removeClass("fade")}if(i.parent(".dropdown-menu").length){i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)}n&&n()}s.length&&r?s.one("bsTransitionEnd",a).emulateTransitionEnd(e.TRANSITION_DURATION):a();s.removeClass("in")};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.tab");if(!n)o.data("bs.tab",n=new e(this));if(typeof i=="string")n[i]()})}var o=t.fn.tab;t.fn.tab=i;t.fn.tab.Constructor=e;t.fn.tab.noConflict=function(){t.fn.tab=o;return this};var n=function(e){e.preventDefault();i.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery);+function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o);this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this));this.$element=t(i);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()};e.VERSION="3.3.7";e.RESET="affix affix-top affix-bottom";e.DEFAULTS={offset:0,target:window};e.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop();var s=this.$element.offset();var r=this.$target.height();if(i!=null&&this.affixed=="top")return n<i?"top":false;if(this.affixed=="bottom"){if(i!=null)return n+this.unpin<=s.top?false:"bottom";return n+r<=t-o?false:"bottom"}var a=this.affixed==null;var l=a?n:s.top;var h=a?r:e;if(i!=null&&n<=i)return"top";if(o!=null&&l+h>=t-o)return"bottom";return false};e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop();var i=this.$element.offset();return this.pinnedOffset=i.top-t};e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)};e.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var i=this.$element.height();var o=this.options.offset;var n=o.top;var s=o.bottom;var r=Math.max(t(document).height(),t(document.body).height());if(typeof o!="object")s=n=o;if(typeof n=="function")n=o.top(this.$element);if(typeof s=="function")s=o.bottom(this.$element);var a=this.getState(r,i,n,s);if(this.affixed!=a){if(this.unpin!=null)this.$element.css("top","");var l="affix"+(a?"-"+a:"");var h=t.Event(l+".bs.affix");this.$element.trigger(h);if(h.isDefaultPrevented())return;this.affixed=a;this.unpin=a=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}if(a=="bottom"){this.$element.offset({top:r-i-s})}};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.affix");var s=typeof i=="object"&&i;if(!n)o.data("bs.affix",n=new e(this,s));if(typeof i=="string")n[i]()})}var o=t.fn.affix;t.fn.affix=i;t.fn.affix.Constructor=e;t.fn.affix.noConflict=function(){t.fn.affix=o;return this};t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this);var o=e.data();o.offset=o.offset||{};if(o.offsetBottom!=null)o.offset.bottom=o.offsetBottom;if(o.offsetTop!=null)o.offset.top=o.offsetTop;i.call(e,o)})})}(jQuery);
//rebuild by neat 