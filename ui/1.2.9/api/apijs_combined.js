(function () {

    if (window.mw) {
        console.log('%c !!! mw already defined !!! ', 'background: #009cff; color: #fff; font-size:16px;');
        return;
    }

    var mw = {};

    mw.settings = {
        regions: false,
        liveEdit: false,
        debug: true,
        basic_mode: false,
        site_url: 'http://localhost/mw2/',
        template_url: 'http://localhost/mw2/userfiles/templates/big/',
        modules_url: 'http://localhost/mw2/userfiles/modules/',
        includes_url: 'http://localhost/mw2/userfiles/modules/microweber/',
        upload_url: 'http://localhost/mw2/api/upload/',
        api_url: 'http://localhost/mw2/api/',
        libs_url: 'http://localhost/mw2/userfiles/modules/microweber/api/libs/',
        api_html: 'http://localhost/mw2/api_html/',
        editables_created: false,
        element_id: false,
        text_edit_started: false,
        sortables_created: false,
        drag_started: false,
        sorthandle_hover: false,
        resize_started: false,
        sorthandle_click: false,
        row_id: false,

        edit_area_placeholder: '<div class="empty-element-edit-area empty-element ui-state-highlight ui-sortable-placeholder"><span>Please drag items here</span></div>',
        empty_column_placeholder: '<div id="_ID_" class="empty-element empty-element-column">Please drag items here</div>',
        handles: {
            item: "<div title='Click to select this item.' class='mw_master_handle' id='items_handle'></div>"
        },
        sorthandle_delete_confirmation_text: "Are you sure you want to delete this element?"
    }

    mw.settings.libs = {
        jqueryui: [
            function () {
                mw.require(mw.settings.libs_url + 'jqueryui' + '/jquery-ui.min.js');
                mw.require(mw.settings.libs_url + 'jqueryui' + '/jquery-ui.min.css');
            }
        ],
        morris: ['morris.css', 'raphael.js', 'morris.js'],
        rangy: ['rangy-core.js', 'rangy-cssclassapplier.js', 'rangy-selectionsaverestore.js', 'rangy-serializer.js'],
        highlight: [

            'highlight.min.js',
            'highlight.min.css'

        ],
        bootstrap2: [
            function () {
                var v = document.querySelector('meta[name="viewport"]');
                if (v === null) {
                    v = document.createElement('meta');
                    v.name = "viewport";
                }
                v.content = "width=device-width, initial-scale=1.0";
                mwhead.appendChild(v);
            },
            'css/bootstrap.min.css',
            'css/bootstrap-responsive.min.css',
            'js/bootstrap.min.js'
        ],
        bootstrap3: [
            function () {
                mw.require(mw.settings.libs_url + 'fontawesome-4.7.0' + '/css/font-awesome.min.css');
                var v = document.querySelector('meta[name="viewport"]');
                if (v === null) {
                    v = document.createElement('meta');
                    v.name = "viewport";
                }
                v.content = "width=device-width, initial-scale=1.0";
                mwhead.appendChild(v);
            },
            'css/bootstrap.min.css',
            'js/bootstrap.min.js'
        ],
        bootstrap4: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap-4.3.1' + '/css/bootstrap.min.css');
                mw.require(mw.settings.libs_url + 'bootstrap-4.3.1' + '/js/popper.min.js');
                mw.require(mw.settings.libs_url + 'bootstrap-4.3.1' + '/js/bootstrap.min.js');
                mw.require(mw.settings.libs_url + 'fontawesome-free-5.12.0' + '/css/all.min.css');
            }
        ],

        bootstrap5js: [
            function () {
                 mw.require(mw.settings.libs_url + 'bootstrap5' + '/js/bootstrap.bundle.min.js');
            }
        ],
        bootstrap5: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap5' + '/css/bootstrap.' + (document.documentElement.dir==='rtl' ? 'rtl.' : '') + 'min.css');
                mw.lib.require('bootstrap5js')
             }
        ],
        microweber_ui: [
            function () {
                mw.require(mw.settings.libs_url + 'mw-ui' + '/grunt/plugins/ui/css/main.css');
                mw.require(mw.settings.libs_url + 'mw-ui' + '/assets/ui/plugins/css/plugins.min.css');
                mw.require(mw.settings.libs_url + 'mw-ui' + '/assets/ui/plugins/js/plugins.js');
            }


        ],
        mwui: [
            function () {
                // mw.require(mw.settings.libs_url + 'mw-ui' + '/grunt/plugins/ui/css/main.css');
                // mw.require(mw.settings.libs_url + 'mw-ui' + '/assets/ui/plugins/css/plugins.min.css');
                // mw.require(mw.settings.libs_url + 'mw-ui' + '/grunt/plugins/ui/css/mw.css');
                //The files above are added in default.css
                mw.require(mw.settings.libs_url + 'mw-ui' + '/assets/ui/plugins/js/plugins.js');
            }


        ],
        mwui_init: [
            function () {
                mw.require(mw.settings.libs_url + 'mw-ui' + '/grunt/plugins/ui/js/ui.js');
            }
        ],
        flag_icons: [
            function () {
                mw.require(mw.settings.libs_url + 'flag-icon-css' + '/css/flag-icon.min.css');

            }
        ],
        font_awesome: [
            function () {
                mw.require(mw.settings.libs_url + 'fontawesome-4.7.0' + '/css/font-awesome.min.css');

            }
        ],
        font_awesome5: [
            function () {
                mw.require(mw.settings.libs_url + 'fontawesome-free-5.12.0' + '/css/all.min.css');

            }
        ],
        bxslider: [
            function () {
                mw.require(mw.settings.libs_url + 'bxSlider/jquery.bxslider.min.js', true);
                mw.require(mw.settings.libs_url + 'bxSlider/jquery.bxslider.css', true);

            }
        ],
        collapse_nav: [
            function () {
                mw.require(mw.settings.libs_url + 'collapse-nav/dist/collapseNav.js', true);
                mw.require(mw.settings.libs_url + 'collapse-nav/dist/collapseNav.css', true);

            }
        ],
        slick: [
            function () {
                mw.require(mw.settings.libs_url + 'slick' + '/slick.css', true);
                mw.moduleCSS(mw.settings.libs_url + 'slick' + '/slick-theme.css');
                mw.require(mw.settings.libs_url + 'slick' + '/slick.min.js', true);
            }
        ],
        ion_range_slider: [
            function () {
                mw.require(mw.settings.libs_url + 'ion-range-slider' + '/css/ion.rangeSlider.min.css', true);
                mw.require(mw.settings.libs_url + 'ion-range-slider' + '/js/ion.rangeSlider.min.js', true);
            }
        ],
        air_datepicker: [
            function () {

                mw.require(mw.settings.libs_url + 'air-datepicker' + '/css/datepicker.min.css', true);
                mw.require(mw.settings.libs_url + 'air-datepicker' + '/js/datepicker.min.js', true);

                $.fn.datepicker.language['en'] = {
                    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    daysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    today: 'Today',
                    clear: 'Clear',
                    dateFormat: 'yyyy-mm-dd',
                    firstDay: 0
                };

            }
        ],
        bootstrap_datepicker: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap-datepicker' + '/css/bootstrap-datepicker3.css', true);
                mw.require(mw.settings.libs_url + 'bootstrap-datepicker' + '/js/bootstrap-datepicker.js', true);
            }
        ],
        bootstrap_datetimepicker: [
            function () {
                mw.require(mw.settings.libs_url + 'bootstrap-datetimepicker' + '/css/bootstrap-datetimepicker.min.css', true);
                mw.require(mw.settings.libs_url + 'bootstrap-datetimepicker' + '/js/bootstrap-datetimepicker.min.js', true);
            }
        ],
        bootstrap3ns: [
            function () {

                //var bootstrap_enabled = (typeof $().modal == 'function');
                var bootstrap_enabled = (typeof $ != 'undefined' && typeof $.fn != 'undefined' && typeof $.fn.emulateTransitionEnd != 'undefined');

                if (!bootstrap_enabled) {
                    mw.require(mw.settings.libs_url + 'bootstrap3' + '/js/bootstrap.min.js');
                    //var bootstrap_enabled = (typeof $().modal == 'function');
                    //if (bootstrap_enabled == false) {
                    mw.require(mw.settings.libs_url + 'bootstrap3ns' + '/bootstrap.min.css');
                    mw.require(mw.settings.libs_url + 'fontawesome-4.7.0' + '/css/font-awesome.min.css');
                }
                // }
            }
        ],
        bootstrap_select: [
            function () {
                //var bootstrap_enabled = (typeof $().modal == 'function');
                //if (!bootstrap_enabled == false) {
                mw.require(mw.settings.libs_url + 'bootstrap-select-1.13.12' + '/js/bootstrap-select.min.js');
                mw.require(mw.settings.libs_url + 'bootstrap-select-1.13.12' + '/css/bootstrap-select.min.css');
                //}
            }
        ],
        bootstrap_tags: [
            function () {

                // var bootstrap_enabled = (typeof $().modal == 'function');
                //if (!bootstrap_enabled == false) {
                mw.require(mw.settings.libs_url + 'typeahead' + '/typeahead.jquery.js');
                mw.require(mw.settings.libs_url + 'typeahead' + '/typeahead.bundle.min.js');
                mw.require(mw.settings.libs_url + 'typeahead' + '/bloodhound.js');
                mw.require(mw.settings.libs_url + 'mw-ui/grunt/plugins/tags' + '/bootstrap-tagsinput.css');
                mw.require(mw.settings.libs_url + 'mw-ui/grunt/plugins/tags' + '/bootstrap-tagsinput.js');
                //} else {
                //mw.log("You must load bootstrap to use bootstrap_tags");
                //}

            }
        ],
        chosen: [
            function () {
                mw.require(mw.settings.libs_url + 'chosen' + '/chosen.jquery.min.js');
                mw.require(mw.settings.libs_url + 'chosen' + '/chosen.min.css', true);
            }
        ],
        validation: [
            function () {
                mw.require(mw.settings.libs_url + 'jquery_validation' + '/js/jquery.validationEngine.js');
                mw.require(mw.settings.libs_url + 'jquery_validation' + '/js/languages/jquery.validationEngine-en.js');
                mw.require(mw.settings.libs_url + 'jquery_validation' + '/css/validationEngine.jquery.css');
            }
        ],

        fitty: [
            function () {
                mw.require(mw.settings.libs_url + 'fitty' + '/dist/fitty.min.js');
                /*$(document).ready(function () {
                 fitty('.fitty-element');
                 });*/
            }
        ],


        flatstrap3: [
            function () {
                var v = document.querySelector('meta[name="viewport"]');
                if (v === null) {
                    v = document.createElement('meta');
                    v.name = "viewport";
                }
                v.content = "width=device-width, initial-scale=1.0";
                mwhead.appendChild(v);
            },
            'css/bootstrap.min.css',
            'js/bootstrap.min.js'
        ],
        datepicker: [
            'datepicker.min.js',
            'datepicker.min.css'
        ],
        datetimepicker: [
            'jquery.datetimepicker.full.min.js',
            'jquery.datetimepicker.min.css'
        ],

        nestedSortable: [
            function () {
                mw.require(mw.settings.libs_url + 'nestedsortable' + '/jquery.mjs.nestedSortable.js');
            }
        ],
        colorpicker: [
            function () {
                mw.require(mw.settings.includes_url + 'api' + '/color.js');
                mw.require(mw.settings.libs_url + 'acolorpicker' + '/acolorpicker.js');
            }
        ],
        material_icons: [
            function () {
                mw.require(mw.settings.libs_url + 'material_icons' + '/material_icons.css');
            }
        ],
        materialDesignIcons: [
            function () {
                mw.require('css/fonts/materialdesignicons/css/materialdesignicons.min.css');
            }
        ],
        mw_icons_mind: [
            function () {
                mw.require('fonts/mw-icons-mind/line/style.css');
                mw.require('fonts/mw-icons-mind/solid/style.css');
            }
        ],
        uppy: [
            'uppy.min.js',
            'uppy.min.css'
        ],
        apexcharts: [
            'apexcharts.min.js',
            'apexcharts.css'
        ],
        anchorific: [
            function () {
                mw.require(mw.settings.libs_url + 'anchorific' + '/anchorific.min.js', true);
            }
        ],
        multilanguage: [
            function () {
                mw.require(mw.settings.libs_url + 'multilanguage' + '/mlInput.js');
                mw.require(mw.settings.libs_url + 'multilanguage' + '/mlTextArea.js');
            }
        ],
    };

    mw.lib = {
        _required: [],
        require: function (name) {
            if (mw.lib._required.indexOf(name) !== -1) {
                return false;
            }
            mw.lib._required.push(name);
            if (typeof mw.settings.libs[name] === 'undefined') return false;
            if (mw.settings.libs[name].constructor !== [].constructor) return false;
            var path = mw.settings.libs_url + name + '/',
                arr = mw.settings.libs[name],
                l = arr.length,
                i = 0,
                c = 0;
            for (; i < l; i++) {
                (typeof arr[i] === 'string') ? mw.require(path + arr[i], true) : (typeof arr[i] === 'function') ? arr[i].call() : '';
            }
        },
        get: function (name, done, error) {
            if (mw.lib._required.indexOf(name) !== -1) {
                if (typeof done === 'function') {
                    done.call();
                }
                return false;
            }

            if (typeof mw.settings.libs[name] === 'undefined') return false;
            if (mw.settings.libs[name].constructor !== [].constructor) return false;
            mw.lib._required.push(name);
            var path = mw.settings.libs_url + name + '/',
                arr = mw.settings.libs[name],
                l = arr.length,
                i = 0,
                c = 1;
            for (; i < l; i++) {
                var xhr = $.cachedScript(path + arr[i]);
                xhr.done(function () {
                    c++;
                    if (c === l) {
                        if (typeof done === 'function') {
                            done.call();
                        }
                    }
                });
                xhr.fail(function (jqxhr, settings, exception) {

                    if (typeof error === 'function') {
                        error.call(jqxhr, settings, exception);
                    }

                });
            }
        }
    };

    mw.lang = function (key) {
        var camel = key.trim().replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
        if (mw._lang[camel]) {
            return mw._lang[camel];
        }
        else {
            // console.warn('"' + key + '" is not present.');
            return key;
        }
    };
    mw.msg = mw._lang = {
        uniqueVisitors: 'Unique visitors',
        allViews: 'All views',
        date: 'Date',
        weekDays: {
            regular: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            short: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ]
        },
        months: {
            regular: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            short: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'June',
                'July',
                'Aug',
                'Sept',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        ok: "OK",
        category: "Category",
        published: "Published",
        unpublished: "Unpublished",
        contentunpublished: "Content is unpublished",
        contentpublished: "Content is published",
        save: "Save",
        saving: "Saving",
        saved: "Saved",
        settings: "Settings",
        cancel: "Cancel",
        remove: "Remove",
        close: "Close",
        to_delete_comment: "Are you sure you want to delete this comment",
        del: "Are you sure you want to delete this?",
        save_and_continue: "Save &amp;amp; Continue",
        before_leave: "Leave without saving",
        session_expired: "Your session has expired",
        login_to_continue: "Please login to continue",
        more: "More",
        templateSettingsHidden: "Template settings",
        less: "Less",
        product_added: "Your product is added to cart",
        no_results_for: "No results for",
        switch_to_modules: 'Switch to Modules',
        switch_to_layouts: 'Switch to Layouts',
        loading: 'Loading',
        edit: 'Edit',
        change: 'Change',
        submit: 'Submit',
        settingsSaved: 'Settings are saved',
        addImage: 'Add new image'
    };


    if (!window.mw) {
        window.mw = mw;
    }
})();




if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, "assign", {
        value: function assign(target) {
            'use strict';
            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}


if (!window.jQuery) {

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/*
 * jQuery Migrate - v3.0.0 - 2016-06-09
 * Copyright jQuery Foundation and other contributors
 */
(function( jQuery, window ) {
"use strict";


jQuery.migrateVersion = "3.0.0";


( function() {
return;
	// Support: IE9 only
	// IE9 only creates console object when dev tools are first opened
	// Also, avoid Function#bind here to simplify PhantomJS usage
	var log = window.console && window.console.log &&
			function() { window.console.log.apply( window.console, arguments ); },
		rbadVersions = /^[12]\./;

	if ( !log ) {
		return;
	}

	// Need jQuery 3.0.0+ and no older Migrate loaded
	if ( !jQuery || rbadVersions.test( jQuery.fn.jquery ) ) {
		log( "JQMIGRATE: jQuery 3.0.0+ REQUIRED" );
	}
	if ( jQuery.migrateWarnings ) {
		log( "JQMIGRATE: Migrate plugin loaded multiple times" );
	}

	// Show a message on the console so devs know we're active
	log( "JQMIGRATE: Migrate is installed" +
		( jQuery.migrateMute ? "" : " with logging active" ) +
		", version " + jQuery.migrateVersion );

} )();

var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg ) {
	return;
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	Object.defineProperty( obj, prop, {
		configurable: true,
		enumerable: true,
		get: function() {
			migrateWarn( msg );
			return value;
		}
	} );
}

if ( document.compatMode === "BackCompat" ) {

	// JQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var oldInit = jQuery.fn.init,
	oldIsNumeric = jQuery.isNumeric,
	oldFind = jQuery.find,
	rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
	rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;

jQuery.fn.init = function( arg1 ) {
	var args = Array.prototype.slice.call( arguments );

	if ( typeof arg1 === "string" && arg1 === "#" ) {

		// JQuery( "#" ) is a bogus ID selector, but it returned an empty set before jQuery 3.0
		migrateWarn( "jQuery( '#' ) is not a valid selector" );
		args[ 0 ] = [];
	}

	return oldInit.apply( this, args );
};
jQuery.fn.init.prototype = jQuery.fn;

jQuery.find = function( selector ) {
	var args = Array.prototype.slice.call( arguments );

	// Support: PhantomJS 1.x
	// String#match fails to match when used with a //g RegExp, only on some strings
	if ( typeof selector === "string" && rattrHashTest.test( selector ) ) {

		// The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
		// First see if qS thinks it's a valid selector, if so avoid a false positive
		try {
			document.querySelector( selector );
		} catch ( err1 ) {

			// Didn't *look* valid to qSA, warn and try quoting what we think is the value
			selector = selector.replace( rattrHashGlob, function( _, attr, op, value ) {
				return "[" + attr + op + "\"" + value + "\"]";
			} );

			// If the regexp *may* have created an invalid selector, don't update it
			// Note that there may be false alarms if selector uses jQuery extensions
			try {
				document.querySelector( selector );
				migrateWarn( "Attribute selector with '#' must be quoted: " + args[ 0 ] );
				args[ 0 ] = selector;
			} catch ( err2 ) {
				migrateWarn( "Attribute selector with '#' was not fixed: " + args[ 0 ] );
			}
		}
	}

	return oldFind.apply( this, args );
};

// Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)
var findProp;
for ( findProp in oldFind ) {
	if ( Object.prototype.hasOwnProperty.call( oldFind, findProp ) ) {
		jQuery.find[ findProp ] = oldFind[ findProp ];
	}
}

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	migrateWarn( "jQuery.fn.size() is deprecated; use the .length property" );
	return this.length;
};

jQuery.parseJSON = function() {
	migrateWarn( "jQuery.parseJSON is deprecated; use JSON.parse" );
	return JSON.parse.apply( null, arguments );
};

jQuery.isNumeric = function( val ) {

	// The jQuery 2.2.3 implementation of isNumeric
	function isNumeric2( obj ) {
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	}

	var newValue = oldIsNumeric( val ),
		oldValue = isNumeric2( val );

	if ( newValue !== oldValue ) {
		migrateWarn( "jQuery.isNumeric() should not be called on constructed objects" );
	}

	return oldValue;
};

migrateWarnProp( jQuery, "unique", jQuery.uniqueSort,
	"jQuery.unique is deprecated, use jQuery.uniqueSort" );

// Now jQuery.expr.pseudos is the standard incantation
migrateWarnProp( jQuery.expr, "filters", jQuery.expr.pseudos,
	"jQuery.expr.filters is now jQuery.expr.pseudos" );
migrateWarnProp( jQuery.expr, ":", jQuery.expr.pseudos,
	"jQuery.expr[\":\"] is now jQuery.expr.pseudos" );


var oldAjax = jQuery.ajax;

jQuery.ajax = function( ) {
	var jQXHR = oldAjax.apply( this, arguments );

	// Be sure we got a jQXHR (e.g., not sync)
	if ( jQXHR.promise ) {
		migrateWarnProp( jQXHR, "success", jQXHR.done,
			"jQXHR.success is deprecated and removed" );
		migrateWarnProp( jQXHR, "error", jQXHR.fail,
			"jQXHR.error is deprecated and removed" );
		migrateWarnProp( jQXHR, "complete", jQXHR.always,
			"jQXHR.complete is deprecated and removed" );
	}

	return jQXHR;
};


var oldRemoveAttr = jQuery.fn.removeAttr,
	oldToggleClass = jQuery.fn.toggleClass,
	rmatchNonSpace = /\S+/g;

jQuery.fn.removeAttr = function( name ) {
	var self = this;

	jQuery.each( name.match( rmatchNonSpace ), function( i, attr ) {
		if ( jQuery.expr.match.bool.test( attr ) ) {
			migrateWarn( "jQuery.fn.removeAttr no longer sets boolean properties: " + attr );
			self.prop( attr, false );
		}
	} );

	return oldRemoveAttr.apply( this, arguments );
};

jQuery.fn.toggleClass = function( state ) {

	// Only deprecating no-args or single boolean arg
	if ( state !== undefined && typeof state !== "boolean" ) {
		return oldToggleClass.apply( this, arguments );
	}

	migrateWarn( "jQuery.fn.toggleClass( boolean ) is deprecated" );

	// Toggle entire class name of each element
	return this.each( function() {
		var className = this.getAttribute && this.getAttribute( "class" ) || "";

		if ( className ) {
			jQuery.data( this, "__className__", className );
		}

		// If the element has a class name or if we're passed `false`,
		// then remove the whole classname (if there was one, the above saved it).
		// Otherwise bring back whatever was previously saved (if anything),
		// falling back to the empty string if nothing was stored.
		if ( this.setAttribute ) {
			this.setAttribute( "class",
				className || state === false ?
				"" :
				jQuery.data( this, "__className__" ) || ""
			);
		}
	} );
};


var internalSwapCall = false;

// If this version of jQuery has .swap(), don't false-alarm on internal uses
if ( jQuery.swap ) {
	jQuery.each( [ "height", "width", "reliableMarginRight" ], function( _, name ) {
		var oldHook = jQuery.cssHooks[ name ] && jQuery.cssHooks[ name ].get;

		if ( oldHook ) {
			jQuery.cssHooks[ name ].get = function() {
				var ret;

				internalSwapCall = true;
				ret = oldHook.apply( this, arguments );
				internalSwapCall = false;
				return ret;
			};
		}
	} );
}

jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	if ( !internalSwapCall ) {
		migrateWarn( "jQuery.swap() is undocumented and deprecated" );
	}

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

var oldData = jQuery.data;

jQuery.data = function( elem, name, value ) {
	var curData;

	// If the name is transformed, look for the un-transformed name in the data object
	if ( name && name !== jQuery.camelCase( name ) ) {
		curData = jQuery.hasData( elem ) && oldData.call( this, elem );
		if ( curData && name in curData ) {
			migrateWarn( "jQuery.data() always sets/gets camelCased names: " + name );
			if ( arguments.length > 2 ) {
				curData[ name ] = value;
			}
			return curData[ name ];
		}
	}

	return oldData.apply( this, arguments );
};

var oldTweenRun = jQuery.Tween.prototype.run;

jQuery.Tween.prototype.run = function( percent ) {
	if ( jQuery.easing[ this.easing ].length > 1 ) {
		migrateWarn(
			"easing function " +
			"\"jQuery.easing." + this.easing.toString() +
			"\" should use only first argument"
		);

		jQuery.easing[ this.easing ] = jQuery.easing[ this.easing ].bind(
			jQuery.easing,
			percent, this.options.duration * percent, 0, 1, this.options.duration
		);
	}

	oldTweenRun.apply( this, arguments );
};

var oldLoad = jQuery.fn.load,
	originalFix = jQuery.event.fix;

jQuery.event.props = [];
jQuery.event.fixHooks = {};

jQuery.event.fix = function( originalEvent ) {
	var event,
		type = originalEvent.type,
		fixHook = this.fixHooks[ type ],
		props = jQuery.event.props;

	if ( props.length ) {
		migrateWarn( "jQuery.event.props are deprecated and removed: " + props.join() );
		while ( props.length ) {
			jQuery.event.addProp( props.pop() );
		}
	}

	if ( fixHook && !fixHook._migrated_ ) {
		fixHook._migrated_ = true;
		migrateWarn( "jQuery.event.fixHooks are deprecated and removed: " + type );
		if ( ( props = fixHook.props ) && props.length ) {
			while ( props.length ) {
			   jQuery.event.addProp( props.pop() );
			}
		}
	}

	event = originalFix.call( this, originalEvent );

	return fixHook && fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
};

jQuery.each( [ "load", "unload", "error" ], function( _, name ) {

	jQuery.fn[ name ] = function() {
		var args = Array.prototype.slice.call( arguments, 0 );

		// If this is an ajax load() the first arg should be the string URL;
		// technically this could also be the "Anything" arg of the event .load()
		// which just goes to show why this dumb signature has been deprecated!
		// jQuery custom builds that exclude the Ajax module justifiably die here.
		if ( name === "load" && typeof args[ 0 ] === "string" ) {
			return oldLoad.apply( this, args );
		}

		migrateWarn( "jQuery.fn." + name + "() is deprecated" );

		args.splice( 0, 0, name );
		if ( arguments.length ) {
			return this.on.apply( this, args );
		}

		// Use .triggerHandler here because:
		// - load and unload events don't need to bubble, only applied to window or image
		// - error event should not bubble to window, although it does pre-1.7
		// See http://bugs.jquery.com/ticket/11820
		this.triggerHandler.apply( this, args );
		return this;
	};

} );

// Trigger "ready" event only once, on document ready
jQuery( function() {
	jQuery( document ).triggerHandler( "ready" );
} );

jQuery.event.special.ready = {
	setup: function() {
		if ( this === document ) {
			migrateWarn( "'ready' event is deprecated" );
		}
	}
};

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		migrateWarn( "jQuery.fn.bind() is deprecated" );
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		migrateWarn( "jQuery.fn.unbind() is deprecated" );
		return this.off( types, null, fn );
	},
	delegate: function( selector, types, data, fn ) {
		migrateWarn( "jQuery.fn.delegate() is deprecated" );
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		migrateWarn( "jQuery.fn.undelegate() is deprecated" );
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );


var oldOffset = jQuery.fn.offset;

jQuery.fn.offset = function() {
	var docElem,
		elem = this[ 0 ],
		origin = { top: 0, left: 0 };

	if ( !elem || !elem.nodeType ) {
		migrateWarn( "jQuery.fn.offset() requires a valid DOM element" );
		return origin;
	}

	docElem = ( elem.ownerDocument || document ).documentElement;
	if ( !jQuery.contains( docElem, elem ) ) {
		migrateWarn( "jQuery.fn.offset() requires an element connected to a document" );
		return origin;
	}

	return oldOffset.apply( this, arguments );
};


var oldParam = jQuery.param;

jQuery.param = function( data, traditional ) {
	var ajaxTraditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;

	if ( traditional === undefined && ajaxTraditional ) {

		migrateWarn( "jQuery.param() no longer uses jQuery.ajaxSettings.traditional" );
		traditional = ajaxTraditional;
	}

	return oldParam.call( this, data, traditional );
};

var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn( "jQuery.fn.andSelf() replaced by jQuery.fn.addBack()" );
	return oldSelf.apply( this, arguments );
};


var oldDeferred = jQuery.Deferred,
	tuples = [

		// Action, add listener, callbacks, .then handlers, final state
		[ "resolve", "done", jQuery.Callbacks( "once memory" ),
			jQuery.Callbacks( "once memory" ), "resolved" ],
		[ "reject", "fail", jQuery.Callbacks( "once memory" ),
			jQuery.Callbacks( "once memory" ), "rejected" ],
		[ "notify", "progress", jQuery.Callbacks( "memory" ),
			jQuery.Callbacks( "memory" ) ]
	];

jQuery.Deferred = function( func ) {
	var deferred = oldDeferred(),
		promise = deferred.promise();

	deferred.pipe = promise.pipe = function( /* fnDone, fnFail, fnProgress */ ) {
		var fns = arguments;

		migrateWarn( "deferred.pipe() is deprecated" );

		return jQuery.Deferred( function( newDefer ) {
			jQuery.each( tuples, function( i, tuple ) {
				var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

				// Deferred.done(function() { bind to newDefer or newDefer.resolve })
				// deferred.fail(function() { bind to newDefer or newDefer.reject })
				// deferred.progress(function() { bind to newDefer or newDefer.notify })
				deferred[ tuple[ 1 ] ]( function() {
					var returned = fn && fn.apply( this, arguments );
					if ( returned && jQuery.isFunction( returned.promise ) ) {
						returned.promise()
							.done( newDefer.resolve )
							.fail( newDefer.reject )
							.progress( newDefer.notify );
					} else {
						newDefer[ tuple[ 0 ] + "With" ](
							this === promise ? newDefer.promise() : this,
							fn ? [ returned ] : arguments
						);
					}
				} );
			} );
			fns = null;
		} ).promise();

	};

	if ( func ) {
		func.call( deferred, deferred );
	}

	return deferred;
};



})( jQuery, window );


}

var _jqxhr = jQuery.ajax;
mw.jqxhr = _jqxhr;



jQuery.ajax = function(url, options){
    options = options || {};
    var settings = {};
    if(typeof url === 'object'){
        $.extend(settings, url);
    }
    else{
        settings.url = url;
    }


    if(typeof settings.success === 'function'){
        settings._success = settings.success;
        delete settings.success;
    }

    settings.success = function (data, status, xhr) {
        if(xhr.status === 200) {
            if (data && (data.form_data_required || data.form_data_module)) {
                mw.extradataForm(settings, data);
            }
            else {
                if (typeof this._success === 'function') {
                    var scope = this;
                    scope._success.call(scope, data, status, xhr);

                }
            }
        }
    };

    settings = $.extend({}, settings, options);
    var xhr = _jqxhr(settings);
    xhr._settings = settings;
    return xhr;
};

mw.safeCallCache = {};

mw.safeCall = function(hash, call){
    if(!mw.safeCallCache[hash]){
        mw.safeCallCache[hash] = true;
        call.call();
        (function(hash){
            setTimeout(function(){
                delete mw.safeCallCache[hash];
            });
        })(hash);
    }
};

$.ajaxSetup({
    cache: false,
    error: function (xhr, e, c, d) {
        var data = xhr.responseJSON;
        if (data && (data.form_data_required || data.form_data_module)) {
            mw.extradataForm(xhr._settings, data);
            return;
        }
         if(xhr.status === 422){
            mw.errorsHandle(xhr.responseJSON)
        } else if(xhr.status !== 200 && xhr.status !== 0){
            mw.notification.error('Error ' + xhr.status + ' - ' + xhr.statusText + ' - \r\n' + xhr.responseText );
            setTimeout(function(){
                mw.tools.loading(false);
            }, 333);
        }
    }
});


jQuery.cachedScript = function( url, options ) {
    options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
});
    return jQuery.ajax( options );
};


mw.version = "1.2.9-dev5";

mw.pauseSave = false;

mw.askusertostay = false;

  if (top === self){
    window.onbeforeunload = function() {
      if(mw.askusertostay){
        mw.notification.warning("You have unsaved changes!");
        return "You have unsaved changes!";
      }
    }
  }

  warnOnLeave = function(){
     mw.tools.confirm("You have unsaved changes! Are you sure?");
  };

  mw.module = {
    insert: function(target, module, config, pos) {
        return new Promise(function (resolve) {
            pos = pos || 'bottom';
            var action;
            var id = mw.id('mw-module-'),
                el = '<div id="' + id + '"></div>';

        if (pos === 'top') {
            action = 'before';
            if(mw.tools.hasClass(target, 'allow-drop')) {
                action = 'prepend';
            }
        } else if (pos === 'bottom') {
            action = 'after';
            if(mw.tools.hasClass(target, 'allow-drop')) {
                action = 'append';
            }
        }
        mw.$(target)[action](el);
        mw.load_module(module, '#' + id, function () {
            resolve(this);
        }, config);
    });
    }
  }

  mwd = document;

  mww = window;

  mwhead = document.head || document.getElementsByTagName('head')[0];

  mw.doc = mwd;
  mw.win = window;
  mw.head = mwhead;

  mw.loaded = false;

  mw._random = new Date().getTime();

  mw.random = function() {
    return mw._random++;
  };

  mw.id = function(prefix) {
    prefix = prefix || 'mw-';
    return prefix + mw.random();
  };

  String.prototype.contains = function(a) {
    return !!~this.indexOf(a);
  };

  mw.onLive = function(callback) {
    if (typeof mw.settings.liveEdit === 'boolean' && mw.settings.liveEdit) {
      callback.call(this)
    }
  };
  mw.onAdmin = function(callback) {
    if ( window['mwAdmin'] ) {
      callback.call(this);
    }
  };
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
  if (Array.prototype.indexOf === undefined) {
    Array.prototype.indexOf = function(obj) {
      var i=0, l=this.length;
      for ( ; i < l; i++) {
        if (this[i] == obj) {
          return i;
        }
      }
      return -1;
    }
  }


  mw.required = typeof mw.required === 'undefined'?[]:mw.required;
  mw.require = function(url, inHead, key) {
    if(!url) return;
    if(typeof inHead === 'boolean' || typeof inHead === 'undefined'){
        inHead = inHead || false;
    }
    var keyString;
    if(typeof inHead === 'string'){
        keyString = ''+inHead;
        inHead = key || false;
    }
    if(typeof key === 'string'){
        keyString = key;
    }
    var toPush = url, urlModified = false;
    if (!!keyString) {
        toPush = keyString;
        urlModified = true
    }
    var t = url.split('.').pop();
    url = url.contains('//') ? url : (t !== "css" ? "http://localhost/mw2/userfiles/modules/microweber/api/" + url  :  "http://localhost/mw2/userfiles/modules/microweber/css/" + url);
    if(!urlModified) toPush = url;
    if (!~mw.required.indexOf(toPush)) {

      mw.required.push(toPush);
      url = url.contains("?") ?  url + '&mwv=' + mw.version : url + "?mwv=" + mw.version;
      if(document.querySelector('link[href="'+url+'"],script[src="'+url+'"]') !== null){
          return
      }
      var string = t !== "css" ? "<script type='text/javascript'  src='" + url + "'></script>" : "<link rel='stylesheet' type='text/css' href='" + url + "' />";

          if(typeof $.fn === 'object'){
              $(mwhead).append(string);
          }
          else{
              var el;
              if( t !== "css")  {
                  el = document.createElement('script');
                  el.src = url;
                  el.setAttribute('type', 'text/javascript');
                  mwhead.appendChild(el);
              }
              else{
                 el = document.createElement('link');
                 el.rel='stylesheet';
                 el.type='text/css';
                 el.href = url;
                 mwhead.appendChild(el);
              }
          }

    }
  };



mw.getScripts = function (array, callback) {
  if(typeof array === 'string'){
      array = array.split(',')
  }
    array = array.filter(function (item) {
        return !!item.trim();
    });
  var all = array.length, ready = 0;
  $.each(array, function(){
      var scr = $('<script>');
      $(scr).on('load', function(){
        ready++;
        if(all === ready) {
            callback.call()
        }
      });
      scr[0].src = this.indexOf('//') !== -1 ? this : mw.settings.includes_url + 'api/' + this;
      document.body.appendChild(scr[0]);
  });
};

  mw.moduleCSS = mw.module_css = function(url){
    if (!~mw.required.indexOf(url)) {
      mw.required.push(url);
      var el = document.createElement('link');
      el.rel='stylesheet';
      el.type='text/css';
      el.href = url;
      mwhead.insertBefore(el, mwhead.firstChild);
    }
  };
  mw.moduleJS = mw.module_js = function(url){
    mw.require(url, true);
  };


  mw.target = {}

  mw.is = {
    obj: function(obj) {
      return typeof obj === 'object';
    },
    func: function(obj) {
      return typeof obj === 'function';
    },
    string: function(obj) {
      return typeof obj === 'string';
    },
    array:function(obj){
      return [].constructor === obj.constructor;
    },
    invisible: function(obj) {
      return window.getComputedStyle(obj, null).visibility === 'hidden';
    },
    visible: function(obj) {
      return window.getComputedStyle(obj, null).visibility === 'visible';
    },
    ie: (/*@cc_on!@*/false || !!window.MSStream) && !navigator.userAgent.match(/Trident\/7\./) && false,
    firefox:navigator.userAgent.toLowerCase().contains('firefox')
  }


/*
 * Microweber - Javascript Framework
 *
 * Copyright (c) Licensed under the Microweber
 * license http://microweber.com/license
 *
 */

  mw.load_module = function(name, selector, callback, attributes) {
     attributes = attributes || {};
     attributes.module = name;
     return mw._({
        selector: selector,
        params: attributes,
        done: function() {
          mw.settings.sortables_created = false;
          if (mw.is.func(callback)) {
            callback.call(mw.$(selector)[0]);
          }
        }
      });
  }

  mw.loadModuleData = function(name, update_element, callback, attributes){


    var attributes = attributes || {};

    if(typeof update_element == 'function'){
      var callback = update_element;
    }
    var update_element = document.createElement('div');
    attributes.module = name;
    mw._({
      selector: update_element,
      params: attributes
    }, false, true)
    .done(function(data){

            setTimeout(function(){
            callback.call(this, data);
                $(document).off('focusin.modal');
            }, 50)

    });
  }
  mw.getModule = function(name, params, callback){
    if( typeof params == 'function'){
        var callback = params;
    }
    var params = params || {};
    var update_element = document.createElement('div');
    for(var x in params){
        update_element.setAttribute(x, params[x]);
    }
    mw.loadModuleData(name, update_element, function(a){
        callback.call(a);
    });
  }

  mw.reload_module_intervals = {};
  mw.reload_module_interval = function(module_name, interval) {
    var interval =  interval || 1000;
    var obj = {pause:false};
    if(!!mw.reload_module_intervals[module_name]){
        clearInterval(mw.reload_module_intervals[module_name]);
    }
    mw.reload_module_intervals[module_name] = setInterval(function(){
        if(!obj.pause){
            obj.pause = true;
            mw.reload_module(module_name, function(){
                obj.pause = false;
            });
        }
    }, interval);
    return mw.reload_module_intervals['module_name'];
  }

  mw.reload_module_parent = function(module, callback) {
    if(self !== parent && !!parent.mw){

       mw.parent().reload_module(module, callback)
	   if(typeof(mw.top().win.mweditor) != 'undefined'  && typeof(mw.top().win.mweditor) == 'object'   && typeof(mw.top().win.mweditor.contentWindow) != 'undefined'){
		 mw.top().win.mweditor.contentWindow.mw.reload_module(module, callback)
		} else if(typeof(mw.top().win.iframe_editor_window) != 'undefined'  && typeof(mw.top().win.iframe_editor_window) == 'object'   && typeof(mw.top().win.iframe_editor_window.mw) != 'undefined'){

		mw.top().win.iframe_editor_window.mw.reload_module(module, callback)
		}

        if(typeof(parent.mw_preview_frame_object) != 'undefined'  && typeof(parent.mw_preview_frame_object) == 'object'   && typeof(parent.mw_preview_frame_object.contentWindow) != 'undefined'){
            if(parent.mw_preview_frame_object.contentWindow != null && typeof(parent.mw_preview_frame_object.contentWindow.mw) != 'undefined'){
                parent.mw_preview_frame_object.contentWindow.mw.reload_module(module, callback)
            }
        }
    } else {
		if(typeof(mweditor) != 'undefined'  && typeof(mweditor) == 'object'   && typeof(mweditor.contentWindow) != 'undefined' && typeof(mweditor.contentWindow.mw) != 'undefined'){
		    mweditor.contentWindow.mw.reload_module(module, callback)
		}

	}
  }
  mw.reload_modules = function(array, callback, simultaneously) {
      if(array.array && !array.slice){
          callback = array.callback || array.done || array.ready;
          simultaneously = array.simultaneously;
          array = array.array;
      }
      simultaneously = simultaneously || false;
      if(simultaneously){
        var l = array.length, ready = 0, i = 0;
        for( ; i<l; i++){
            mw.reload_module(array[i], function(){
                ready++;
                if(ready === l && callback){
                    callback.call();
                }
            });
        }
      }
      else{
        if(array.length === 0){
            if(callback){
                callback.call()
            }
        }
        else{
            var m = array[0];
            array.shift();
            mw.reload_module(m, function(){
                mw.reload_modules(array, callback, false);
            });
        }
      }
  };
  mw.reload_module_everywhere = function(module, eachCallback) {
    mw.tools.eachWindow(function () {
        if(this.mw && this.mw.reload_module){
            this.mw.reload_module(module, function(){
                if(typeof eachCallback === 'function'){
                    eachCallback.call(this);
                }
            })
        }
    })
  };

  mw.reload_module = function(module, callback) {
    if(module.constructor === [].constructor){
        var l = module.length, i=0, w = 1;
        for( ; i<l; i++){
          mw.reload_module(module[i], function(){
            w++;
            if(w === l && typeof callback === 'function'){
              callback.call();
            }
            $( this ).trigger('ModuleReload')
          });
        }
        return false;
    }
    var done = callback || function(){};
    if (typeof module !== 'undefined') {
      if (typeof module === 'object') {

        mw._({
          selector: module,
          done:done
        });
      } else {
        var module_name = module.toString();
        var refresh_modules_explode = module_name.split(",");
        for (var i = 0; i < refresh_modules_explode.length; i++) {
          var module = refresh_modules_explode[i];
          if (typeof module != 'undefined') {
		    var module = module.replace(/##/g, '#');
            var m = mw.$(".module[data-type='" + module + "']");
            if (m.length === 0) {
                try { var m = $(module); }  catch(e) {};
            }

              (function(callback){
                  var count = 0;
                  for (var i=0;i<m.length;i++){
                      mw.reload_module(m[i], function(){
                          count++;
                          if(count === m.length && typeof callback === 'function'){
                              callback.call();
                          }
                          $( document ).trigger('ModuleReload')
                      })
                  }
              })(callback)



          }
        }
      }
    }
  }

  mw.clear_cache = function() {
    $.ajax({
      url: mw.settings.site_url+'api/clearcache',
      type: "POST",
      success: function(data){
        if(mw.notification != undefined){
          mw.notification.msg(data);

        }
      }
    });
  }
  mw.temp_reload_module_queue_holder = [];




  mw["_"] = function(obj, sendSpecific, DONOTREPLACE) {
    if(mw.on){
        mw.on.DOMChangePause = true;
    }
    var url = typeof obj.url !== 'undefined' ? obj.url : mw.settings.site_url+'module/';
    var selector = typeof obj.selector !== 'undefined' ? obj.selector : '';
    var params =  typeof obj.params !== 'undefined' ? obj.params : {};
    var to_send = params;
    if(typeof $(obj.selector)[0] === 'undefined') {
        mw.pauseSave = false;
        mw.on.DOMChangePause = false;
        return false;
    }
    if(mw.session){
        mw.session.checkPause = true;
    }
    var $node = $(obj.selector);
    var node = $node[0];
    var attrs = node.attributes;



     // wait between many reloads
      if (node.id) {
          if ( mw.temp_reload_module_queue_holder.indexOf(node.id) === -1){
          mw.temp_reload_module_queue_holder.push(node.id);
              setTimeout(function() {
                  var reload_index = mw.temp_reload_module_queue_holder.indexOf(node.id);
                  delete mw.temp_reload_module_queue_holder[reload_index];
              }, 300);
          } else {
              return;
          }
      }

    if (sendSpecific) {
      attrs["class"] !== undefined ? to_send["class"] = attrs["class"].nodeValue : "";
      attrs["data-module-name"] !== undefined ? to_send["data-module-name"] = attrs["data-module-name"].nodeValue : "";
      attrs["data-type"] !== undefined ? to_send["data-type"] = attrs["data-type"].nodeValue : "";
      attrs["type"] !== undefined ? to_send["type"] = attrs["type"].nodeValue : "";
      attrs["template"] !== undefined ? to_send["template"] = attrs["template"].nodeValue : "";
      attrs["ondrop"] !== undefined ? to_send["ondrop"] = attrs["ondrop"].nodeValue : "";
    }
    else {
      for (var i in attrs) {
  		  if(attrs[i] !== undefined){
              var name = attrs[i].name;
              var val = attrs[i].nodeValue;
              if(typeof to_send[name] === 'undefined'){
                  to_send[name]  = val;
              }
  		  }
      }
    }
    var b = true;
    for (var a in to_send) {
       if(to_send.hasOwnProperty(a)) { b = false; }
    }
    if(b){
      mw.tools.removeClass(document.body, 'loading');
      mw.pauseSave = false;
      mw.on.DOMChangePause = false;
      return false;
    }
    var storedValues = $node.dataset('storeValues') === 'true' ? {} : false;
    if(storedValues) {
        $node.find('[name]').each(function () {
            storedValues[this.name] = $(this).val();
        })
    }

    var xhr = $.post(url, to_send, function(data) {

      if(!!mw.session){
        mw.session.checkPause = false;
      }
      if(DONOTREPLACE){

          mw.tools.removeClass(document.body, 'loading');
          mw.pauseSave = false;
          mw.on.DOMChangePause = false;
          return false;
      }

      var docdata = mw.tools.parseHtml(data);

      if(storedValues) {
        mw.$('[name]', docdata).each(function(){
            var el = $(this);
            if(!el.val()) {
                el.val(storedValues[this.name] || undefined);
                this.setAttribute("value", storedValues[this.name] || '');
            }
        })
      }

      var hasDone = typeof obj.done === 'function';
      var id;
      if (typeof to_send.id  !== 'undefined') {
        id = to_send.id;
      } else{
        id = docdata.body.querySelector(['id']);
      }
      mw.$(selector).replaceWith($(docdata.body).html());
      var count = 0;
      if(hasDone){
          setTimeout(function(){
              count++;
              obj.done.call($(selector)[0], data);
              mw.trigger('moduleLoaded');
          }, 33);
      }

      if(!id){
          mw.pauseSave = false;
          mw.on.DOMChangePause = false;
          return false;
      }


      typeof mw.drag !== 'undefined' ? mw.drag.fix_placeholders(true) : '';
      var m = document.getElementById(id);
      // typeof obj.done === 'function' ? obj.done.call(selector, m) : '';

      if(mw.wysiwyg){
        $(m).hasClass("module") ? mw.wysiwyg.init_editables(m) : '' ;
      }


      if(mw.on && !hasDone){
        mw.on.moduleReload(id, "", true);
        mw.trigger('moduleLoaded');
      }
    if($.fn.selectpicker) {
        $('.selectpicker').selectpicker();
    }
      if (mw.on) {
        mw.on.DOMChangePause = false;
      }
      mw.tools.removeClass(document.body, 'loading');


    })
    .fail(function(){
       mw.pauseSave = false;
       typeof obj.fail === 'function' ? obj.fail.call(selector) : '';
    })
    .always(function(){
        mw.pauseSave = false;
    });
    return xhr;
  };


  mw.inLog = function(what) {
    if(!mw._inlog) {
        mw._inlog = document.createElement('div');
        mw._inlog.className = 'mw-in-log';
        $(mw._inlog).css({
            position: 'fixed',
            bottom:0,
            left:0,
            padding:20,
            background:'#fff',
            zIndex:10,
            height:190,
            overflow:'auto',
            fontSize:10

        })
        document.body.appendChild(mw._inlog)
    }
      $(mw._inlog).append('<br>'+what)
      mw._inlog.scrollTop = mw._inlog.scrollHeight;

  };
  mw.log = function(what) {
    if (window.console && mw.settings.debug) {
      top.console.log(what);
    }
  };


  mw.$ = function(selector, context) {
    if(typeof selector === 'object' || (typeof selector === 'string' && selector.indexOf('<') !== -1)){ return jQuery(selector); }
    context = context || mwd;
    if (typeof document.querySelector !== 'undefined') {
      if (typeof selector === 'string') {
        try {
          return jQuery(context.querySelectorAll(selector));
        } catch (e) {
          return jQuery(selector, context);
        }
      } else {
        return jQuery(selector, context);
      }
    } else {
      return jQuery(selector, context);
    }
  };

  mw.get = function(action, params, callback){
      var obj;
    var url = mw.settings.api_url + action;
    var type = typeof params;
    if(type === 'string'){
        obj = mw.serializeFields(params);
    }
    else if(type.constructor === {}.constructor ){
        obj = params;
    }
    else{
      obj = {};
    }
    $.post(url, obj)
        .success(function(data) { return typeof callback === 'function' ? callback.call(data) : data;   })
        .error(function(data) { return typeof callback === 'function' ? callback.call(data) : data;  });
  }

  get_content = function(params, callback){
    var obj = mw.url.getUrlParams("?"+params);
    if(typeof callback!='function'){
       mw.get('get_content_admin', obj);
    }
    else{
       mw.get('get_content_admin', obj, function(){callback.call(this)});
    }
  }

  mw.get_content = get_content

  mw.serializeFields =  function(id, ignorenopost){
        var ignorenopost = ignorenopost || false;
        var el = mw.$(id);
        var fields = "input[type='text'], input[type='email'], input[type='number'], input[type='tel'], "
                    + "input[type='color'], input[type='url'], input[type='week'], input[type='search'], input[type='range'], "
                    + "input[type='datetime-local'], input[type='month'], "
                    + "input[type='password'], input[type='hidden'], input[type='datetime'], input[type='date'], input[type='time'], "
                    +"input[type='email'],  textarea, select, input[type='checkbox']:checked, input[type='radio']:checked, "
                    +"input[type='checkbox'][data-value-checked][data-value-unchecked]";
        var data = {};
        $(fields, el).each(function(){

            if((!$(this).hasClass('no-post') || ignorenopost) && !this.disabled && this.name && typeof this.name !== 'undefined'){
              var el = this, _el = $(el);
              var val = _el.val();
              var name = el.name;
              if(el.name.contains("[]")){
                  data[name] = data[name] || []
                  data[name].push(val);
              }
              else if(el.type === 'checkbox' && el.getAttribute('data-value-checked') ){
                  data[name] = el.checked ? el.getAttribute('data-value-checked') : el.getAttribute('data-value-unchecked');
              }
              else{
                data[name] = val;
              }
            }
        });
        return data;
   }

mw.response = function(form, data, messages_at_the_bottom){
     messages_at_the_bottom = messages_at_the_bottom || false;
    if(data == null  ||  typeof data == 'undefined' ){
      return false;
    }

    data = mw.tools.toJSON(data);
    if(typeof data === 'undefined'){
          return false;
      }

    if(typeof data.error !== 'undefined'){
        mw._response.error(form, data, messages_at_the_bottom);
        return false;
    }
    else if(typeof data.success !== 'undefined'){
        mw._response.success(form, data, messages_at_the_bottom);
        return true;
    }
    else if(typeof data.warning !== 'undefined'){
        mw._response.warning(form, data, messages_at_the_bottom);
        return false;
    }
    else{
        return false;
    }
};

mw._response = {
  error:function(form, data, _msg){
    form = mw.$(form);
    var err_holder = mw._response.msgHolder(form, 'error');
    var msg = typeof data.message !== 'undefined' ? data.message : data.error;
    mw._response.createHTML(msg, err_holder);
  },
  success:function(form, data, _msg){
    form = mw.$(form);
    var err_holder = mw._response.msgHolder(form, 'success');
    var msg = typeof data.message !== 'undefined' ? data.message : data.success;
    mw._response.createHTML(msg, err_holder);
  },
  warning:function(form, data, _msg){
    form = mw.$(form);
    var err_holder = mw._response.msgHolder(form, 'warning');
    var msg = typeof data.message !== 'undefined' ? data.message : data.warning;
    mw._response.createHTML(msg, err_holder);
  },
  msgHolder : function(form, type, method){
    method = method || 'append';
    var err_holder = form.find(".mw-checkout-response:first");
    var err_holder2 = form.find(".alert:first");
    if(err_holder.length === 0){
        err_holder = err_holder2;
    }
    if(err_holder.length === 0){
        err_holder = document.createElement('div');
        form[method](err_holder);
    }

    var bootrap_error_type = 'default';
    if(type === 'error'){
        bootrap_error_type = 'danger';
    } else if(type === 'done'){
        bootrap_error_type = 'info';
    }


    $(err_holder).empty().attr("class", 'alert alert-' + type + ' alert-' + bootrap_error_type + ' ');
    return err_holder;
  },
  createHTML:function(data, holder){
    var i, html = "";


    if(typeof data === 'string'){
        html+= data.toString();
    }
    else{
      for( i in data){
          if(typeof data[i] === 'string'){
              html+='<li>'+data[i]+'</li>';
          }
          else if(typeof data[i] === 'object'){
            $.each(data[i], function(){
                html+='<li>'+this+'</li>';
            })
          }
      }
    }
    mw.$(holder).eq(0).append('<ul class="mw-error-list">'+html+'</ul>');
    mw.$(holder).eq(0).show();
  }
}


mw.user = {
  isLogged:function(callback){
    $.post(mw.settings.api_url + 'is_logged', function(data){
        var isLogged =  (data === 'true');
        callback.call(isLogged, isLogged);
    });
  }
};

mw.parent = function(){
    if(window === top){
        return window.mw;
    }
    if(mw.tools.canAccessWindow(parent) && parent.mw){
        return parent.mw;
    }
    return window.mw;
};

mw.top = function(){
  if(!!mw.__top){
      return mw.__top;
  }
  var getLastParent = function() {
      var result = window;
      var curr = window;
      while (curr && mw.tools.canAccessWindow(curr) && (curr.mw || curr.parent.mw)){
          result = curr;
          curr = curr.parent;
      }
      mw.__top = result.mw;
      return result.mw;
  };
  if(window === top){
    mw.__top = window.mw;
    return window.mw;
  } else {
        if(mw.tools.canAccessWindow(top) && top.mw){
            mw.__top = top.mw;
            return top.mw;
        } else{
            if(window.top !== window.parent){
                return getLastParent();
            }
            else{
                mw.__top = window.mw;
                return window.mw;
            }
        }
  }
};




mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/jquery.js");



mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/tools.js");
mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/tools/cookie.js");



mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/forms.js");

mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/url.js");

mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/events.js");

//mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/upgrades.js");
mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/session.js");

mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/shop.js");

mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/common.js");

mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/components.js");

mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/dialog.js");
mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/instruments.js");
mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/forms.js");
mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/fonts.js");

//mw.required.push("http://localhost/mw2/userfiles/modules/microweber/api/content.js");





mw.tools = {};



mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/base64.js');

mw.tools.base64 = {
// private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
// public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = mw.tools.base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
// public method for decoding
    decode: function (input) {
        if (typeof input == 'undefined') {
            return;
        }
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = mw.tools.base64._utf8_decode(output);
        return output;
    },
// private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
// private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/checkbox.js');

mw.check = {
    all: function (selector) {
        mw.$(selector).find("input[type='checkbox']").each(function () {
            this.checked = true;
        });
    },
    none: function (selector) {
        mw.$(selector).find("input[type='checkbox']").each(function () {
            this.checked = false;
        });
    },
    toggle: function (selector) {
        var els = mw.$(selector).find("input[type='checkbox']"), checked = els.filter(':checked');
        if (els.length === checked.length) {
            mw.check.none(selector)
        }
        else {
            mw.check.all(selector);
        }
    },
    collectChecked: function (parent) {
        var arr = [];
        var all = parent.querySelectorAll('input[type="checkbox"]'), i = 0, l = all.length;
        for (; i < l; i++) {
            var el = all[i];
            el.checked ? arr.push(el.value) : '';
        }
        return arr;
    }
}

mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/colorpicker.js');

mw._colorPickerDefaults = {
    skin: 'mw-tooltip-default',
    position: 'bottom-center',
    onchange: false
};

mw._colorPicker = function (options) {
    mw.lib.require('colorpicker');
    if (!mw.tools.colorPickerColors) {
        mw.tools.colorPickerColors = [];

         var colorpicker_els = mw.top().$(".btn,h1,h2,h3,h4,h5");
         if(colorpicker_els.length > 0){
             colorpicker_els.each(function () {
                 var css = parent.getComputedStyle(this, null);
                 if (css !== null) {
                     if (mw.tools.colorPickerColors.indexOf(css.color) === -1) {
                         mw.tools.colorPickerColors.push(mw.color.rgbToHex(css.color));
                     }
                     if (mw.tools.colorPickerColors.indexOf(css.backgroundColor) === -1) {
                         mw.tools.colorPickerColors.push(mw.color.rgbToHex(css.backgroundColor));
                     }
                 }
             });
         }

    }
    var proto = this;
    if (!options) {
        return false;
    }

    var settings = $.extend({}, mw._colorPickerDefaults, options);

    if (settings.element === undefined || settings.element === null) {
        return false;
    }



    var $el = mw.$(settings.element);
    if ($el[0] === undefined) {
        return false;
    }
    if($el[0].mwcolorPicker) {
        return $el[0].mwcolorPicker;
    }


    $el[0].mwcolorPicker = this;
    this.element = $el[0];
    if ($el[0].mwToolTipBinded !== undefined) {
        return false;
    }
    if (!settings.method) {
        if (this.element.nodeName === 'DIV') {
            settings.method = 'inline';
        }
    }
    this.settings = settings;

    $el[0].mwToolTipBinded = true;
    var sett = {
        showAlpha: true,
        showHSL: false,
        showRGB: false,
        showHEX: true,
        palette: mw.tools.colorPickerColors
    };

    if(settings.value) {
        sett.color = settings.value;

    }
    if(typeof settings.showRGB !== 'undefined') {
        sett.showRGB = settings.showRGB
    }
    if(typeof settings.showHEX !== 'undefined') {
        sett.showHEX = settings.showHEX
    }

    if(typeof settings.showHSL !== 'undefined') {
        sett.showHSL = settings.showHSL
    }
    var frame;
    if (settings.method === 'inline') {

        sett.attachTo = $el[0];

        frame = AColorPicker.createPicker(sett);
        frame.onchange = function (data) {

            if (proto.settings.onchange) {
                proto.settings.onchange(data.color);
            }

            if ($el[0].nodeName === 'INPUT') {
                var val = val === 'transparent' ? val : '#' + val;
                $el.val(val);
                var prev = $el[0].previousElementSibling
                if( prev && prev.classList.contains('mw-field-color-indicator')) {
                    var dp = prev.querySelector('.mw-field-color-indicator-display')
                    if(dp) {
                        dp.style.backgroundColor = val
                    }
                }
            }
        }

    }
    else {
        var tip = mw.tooltip(settings), $tip = mw.$(tip).hide();
        this.tip = tip;

        mw.$('.mw-tooltip-content', tip).empty().css({
            padding: 0
        });
        sett.attachTo = mw.$('.mw-tooltip-content', tip)[0]

        frame = AColorPicker.createPicker(sett);

        frame.onchange = function (data) {

            if(frame.pause) {
                return;
            }

            if (proto.settings.onchange) {
                proto.settings.onchange(data.color);
            }

            if ($el[0].nodeName === 'INPUT') {
                $el.val(data.color);
                var prev = $el[0].previousElementSibling
                if(prev && prev.classList.contains('mw-field-color-indicator')) {
                    var dp = prev.querySelector('.mw-field-color-indicator-display');
                    if(dp) {
                        dp.style.backgroundColor = data.color
                    }

                }
            }
        };
        if ($el[0].nodeName === 'INPUT') {
            $el.on('focus', function (e) {
                if(this.value.trim()){
                    frame.pause = true;
                    frame.color = this.value;
                    setTimeout(function () {
                        frame.pause = false;
                    });
                }
                mw.$(tip).show();
                mw.tools.tooltip.setPosition(tip, $el[0], settings.position)
            });
        }
        else {
            $el.on('click', function (e) {
                mw.$(tip).toggle();
                mw.tools.tooltip.setPosition(tip, $el[0], settings.position)
            });
        }
        var documents = [document];
        if (self !== mw.top().win){
            documents.push(mw.top().win.document);
        }
        mw.$(documents).on('click', function (e) {
            if (!mw.tools.hasParentsWithClass(e.target, 'mw-tooltip') && e.target !== $el[0]) {
                mw.$(tip).hide();
            }
        });
        if ($el[0].nodeName === 'INPUT') {
            $el.bind('blur', function () {
                //$(tip).hide();
            });
        }
    }
    if (this.tip) {
        this.show = function () {
            mw.$(this.tip).show();
            mw.tools.tooltip.setPosition(this.tip, this.settings.element, this.settings.position)
        };
        this.hide = function () {
            mw.$(this.tip).hide()
        };
        this.toggle = function () {
            var tip = mw.$(this.tip);
            if (tip.is(':visible')) {
                this.hide()
            }
            else {
                $el.focus();
                this.show()
            }
        }
    }
    var prev = $el[0].previousElementSibling
    if( prev && prev.classList.contains('mw-field-color-indicator')) {
        var dp = prev.querySelector('.mw-field-color-indicator-display')
        if(dp) {
            dp.style.backgroundColor = $el[0].value
        }
    }

};
mw.colorPicker = function (o) {

    return new mw._colorPicker(o);
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/common-extend.js');

mw.requestAnimationFrame = (function () {
    return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

mw._intervals = {};
mw.interval = function(key, func){
    if(!key || !func || !!mw._intervals[key]) return;
    mw._intervals[key] = func;
};
mw.removeInterval = function(key){
    delete mw._intervals[key];
};
setInterval(function(){
    for(var i in mw._intervals){
        mw._intervals[i].call();
    }
}, 99);

mw.datassetSupport = typeof document.documentElement.dataset !== 'undefined';

mw.exec = function (str, a, b, c) {
    a = a || "";
    b = b || "";
    c = c || "";
    if (!str.contains(".")) {
        return window[this](a, b, c);
    }
    else {
        var arr = str.split(".");
        var temp = window[arr[0]];
        var len = arr.length - 1;
        for (var i = 1; i <= len; i++) {
            if (typeof temp === 'undefined') {
                return false;
            }
            temp = temp[arr[i]];
        }
        return mw.is.func(temp) ? temp(a, b, c) : temp;
    }
};

mw.controllers = {};
mw.external_tool = function (url) {
    return !url.contains("/") ? mw.settings.site_url + "editor_tools/" + url : url;
};
// Polyfill for escape/unescape
if (!window.unescape) {
    window.unescape = function (s) {
        return s.replace(/%([0-9A-F]{2})/g, function (m, p) {
            return String.fromCharCode('0x' + p);
        });
    };
}
if (!window.escape) {
    window.escape = function (s) {
        var chr, hex, i = 0, l = s.length, out = '';
        for (; i < l; i++) {
            chr = s.charAt(i);
            if (chr.search(/[A-Za-z0-9\@\*\_\+\-\.\/]/) > -1) {
                out += chr;
                continue;
            }
            hex = s.charCodeAt(i).toString(16);
            out += '%' + ( hex.length % 2 !== 0 ? '0' : '' ) + hex;
        }
        return out;
    };
}


Array.prototype.remove = Array.prototype.remove || function (what) {
    var i = 0, l = this.length;
    for ( ; i < l; i++) {
        this[i] === what ? this.splice(i, 1) : '';
    }
};

mw.which = function (str, arr_obj, func) {
    if (arr_obj instanceof Array) {
        var l = arr_obj.length, i = 0;
        for (; i < l; i++) {
            if (arr_obj[i] === str) {
                func.call(arr_obj[i]);
                return arr_obj[i];
            }
        }
    }
    else {
        for (var i in arr_obj) {
            if (i === str) {
                func.call(arr_obj[i]);
                return arr_obj[i];
            }
        }
    }
};



mw._JSPrefixes = ['Moz', 'Webkit', 'O', 'ms'];
_Prefixtest = false;
mw.JSPrefix = function (property) {
    !_Prefixtest ? _Prefixtest = document.body.style : '';
    if (_Prefixtest[property] !== undefined) {
        return property;
    }
    else {
        var property = property.charAt(0).toUpperCase() + property.slice(1),
            len = mw._JSPrefixes.length,
            i = 0;
        for (; i < len; i++) {
            if (_Prefixtest[mw._JSPrefixes[i] + property] !== undefined) {
                return mw._JSPrefixes[i] + property;
            }
        }
    }
}
if (typeof document.hidden !== "undefined") {
    _mwdochidden = "hidden";
} else if (typeof document.mozHidden !== "undefined") {
    _mwdochidden = "mozHidden";
} else if (typeof document.msHidden !== "undefined") {
    _mwdochidden = "msHidden";
} else if (typeof document.webkitHidden !== "undefined") {
    _mwdochidden = "webkitHidden";
}
document.isHidden = function () {
    if (typeof _mwdochidden !== 'undefined') {
        return document[_mwdochidden];
    }
    else {
        return !document.hasFocus();
    }
};


mw.postMsg = function (w, obj) {
    w.postMessage(JSON.stringify(obj), window.location.href);
};

mw.uploader = function (o) {

    mw.require("files.js");

    var uploader = mw.files.uploader(o);

    return uploader;
};

mw.fileWindow = function (config) {
    config = config || {};
    config.mode = config.mode || 'dialog'; // 'inline' | 'dialog'
    var q = {
        types: config.types,
        title: config.title
    };


    url = mw.settings.site_url + 'editor_tools/rte_image_editor?' + $.param(q) + '#fileWindow';
    var frameWindow;
    var toreturn = {
        dialog: null,
        root: null,
        iframe: null
    };
    if (config.mode === 'dialog') {
        var modal = mw/*.top()*/.dialogIframe({
            url: url,
            name: "mw_rte_image",
            width: 530,
            height: 'auto',
            autoHeight: true,
            //template: 'mw_modal_basic',
            overlay: true,
            title: mw.lang('Select image')
        });
        var frame = mw.$('iframe', modal.main);
        frameWindow = frame[0].contentWindow;
        toreturn.dialog = modal;
        toreturn.root = frame.parent()[0];
        toreturn.iframe = frame[0];
        frameWindow.onload = function () {
            frameWindow.$('body').on('Result', function (e, url, m) {
                 if (config.change) {
                    config.change.call(undefined, url);
                    modal.remove();
                }
            });
            $(modal).on('Result', function (e, url, m) {
                console.log(9999)
                if (config.change) {
                    config.change.call(undefined, url);
                    modal.remove();
                }
            });
        };
    } else if (config.mode === 'inline') {
        var fr = document.createElement('iframe');
        fr.src = url;
        fr.frameBorder = 0;
        fr.className = 'mw-file-window-frame';
        toreturn.iframe = fr;
        mw.tools.iframeAutoHeight(fr);
        if (config.element) {
            var $el = $(config.element);
            if($el.length) {
                toreturn.root = $el[0];
            }
            $el.append(fr);
        }
        fr.onload = function () {
            this.contentWindow.$('body').on('change', function (e, url, m) {
                if (config.change) {
                    config.change.call(undefined, url);
                }
            });
        };
    }


    return toreturn;
};




mw.accordion = function (el, callback) {
    return mw.tools.accordion(mw.$(el)[0], callback);
};



mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/common.js');

$(window).load(function () {
    mw.loaded = true;
    mw.tools.addClass(document.body, 'loaded');
    mw.tools.removeClass(document.body, 'loading');
    mw.$('div.mw-ui-field').click(function (e) {
        if (e.target.type != 'text') {
            try {
                this.querySelector('input[type="text"]').focus();
            }
            catch (e) {
            }
        }
    });

    mw.dropdown();
});
$(mwd).ready(function () {
    mw.tools.constructions();
    mw.dropdown();
    mw.$(document.body).ajaxStop(function () {
        setTimeout(function () {
            mw.dropdown();
        }, 1222);
    });
    mw.on('mwDialogShow', function(){
        mw.$(document.documentElement).addClass('mw-dialog-opened');
    });
    mw.on('mwDialogHide', function(){
        mw.$(document.documentElement).removeClass('mw-dialog-opened');
    });
    mw.$(document.body).on('mousemove touchmove touchstart', function (event) {
        var has = mw.tools.firstParentOrCurrentWithClass(event.target, 'tip');
        if (has && (!has.dataset.trigger || has.dataset.trigger === 'move')) {
            mw.tools.titleTip(has);
        }
        else {
            mw.$(mw.tools._titleTip).hide();
        }
    }).on('click', function (event) {
        var has = mw.tools.firstParentOrCurrentWithClass(event.target, 'tip');
        if (has && has.dataset.trigger === 'click') {
            mw.tools.titleTip(has, '_titleTipClick');
        }
        else {
            mw.$(mw.tools._titleTipClick).hide();
        }
    });
    mw.$(".mw-onoff").each(function () {
        if (!$(this).hasClass('activated')) {
            mw.$(this).addClass('activated');
            mw.$(this).mousedown(function () {
                var el = this;
                if (mw.tools.hasClass(el, 'active')) {
                    mw.tools.removeClass(el, 'active');
                    el.querySelector('.is_active_n').checked = true;
                }
                else {
                    mw.tools.addClass(el, 'active');
                    el.querySelector('.is_active_y').checked = true;
                }
            });
        }
    });
    mw.$(".wysiwyg-convertible-toggler").click(function () {
        var el = mw.$(this), next = el.next();
        mw.$(".wysiwyg-convertible").not(next).removeClass("active");
        mw.$(".wysiwyg-convertible-toggler").not(el).removeClass("active");
        next.toggleClass("active");
        el.toggleClass("active");
        if (el.hasClass("active")) {
            if (typeof mw.liveEditWYSIWYG === 'object') {
                mw.liveedit.toolbar.editor.fixConvertible(next);
            }
        }
    });
    mw.$(".mw-dropdown-search")
        .on('focus', function (e) {
            $(this).parents('.create-content-dropdown').addClass('focus');
        })
        .on('blur', function (e) {
            $(this).parents('.create-content-dropdown').removeClass('focus');
        })
        .on('keyup', function (e) {
        if (e.keyCode === '27') {
            mw.$(this.parentNode.parentNode).hide();
        }
        if (e.keyCode !== '13' && e.keyCode !== '27' && e.keyCode !== '32') {
            var el = mw.$(this);
            el.addClass('mw-dropdown-searchSearching');
            mw.tools.ajaxSearch({keyword: this.value, limit: 20}, function () {
                var html = "<ul>", l = this.length, i = 0;
                for (; i < l; i++) {
                    var a = this[i];
                    html += '<li class="' + a.content_type + ' ' + a.subtype + '"><a href="' + a.url + '" title="' + a.title + '">' + a.title + '</a></li>';
                }
                html += '</ul>';
                el.parent().next("ul").replaceWith(html);
                el.removeClass('mw-dropdown-searchSearching');
            });
        }
    });
    var _mwoldww = mw.$(window).width();
    mw.$(window).resize(function () {
        if ($(window).width() > _mwoldww) {
            mw.trigger("increaseWidth");
        }
        else if ($(window).width() < _mwoldww) {
            mw.trigger("decreaseWidth");
        }
        $.noop();
        _mwoldww = mw.$(window).width();
    });
    mw.$(document.body).on("keydown", function (e) {
        var isgal = document.querySelector('.mw_modal_gallery') !== null;
        if (isgal) {
            if (e.keyCode === 27) {  /* escape */
                mw.dialog.remove(mw.$(".mw_modal_gallery"))
                mw.tools.cancelFullscreen()
            }
            else if (e.keyCode === 37) { /* left */
                mw.tools.gallery.prev(mw.$(".mw_modal_gallery")[0].modal)
            }
            else if (e.keyCode === 39) { /* right */
                mw.tools.gallery.next(mw.$(".mw_modal_gallery")[0].modal)
            }
            else if (e.keyCode === 122) {/* F11 */
                mw.event.cancel(e, true);
                mw.tools.toggleFullscreen(mw.$(".mw_modal_gallery")[0]);
                return false;
            }
        }
        else {
            if (e.keyCode === 27) {
                var modal = mw.$(".mw_modal:last")[0];
                if (modal) modal.modal.remove();
            }
        }
    });

    mw.$(".mw-image-holder").each(function () {
        if ($(".mw-image-holder-overlay", this).length === 0) {
            mw.$('img', this).eq(0).after('<span class="mw-image-holder-overlay"></span>');
        }
    });

    mw.$(".mw-ui-dropdown").on('touchstart mousedown', function(){
        mw.$(this).toggleClass('active')
    });
    mw.$(document.body).on('touchend', function(e){
        if(!mw.tools.hasAnyOfClassesOnNodeOrParent(e.target, ['mw-ui-dropdown'])){
            mw.$(".mw-ui-dropdown.active").removeClass('active')
        }
    });
    mw.$(document.body).on('click', 'a', function(e){
        if(location.hash.indexOf('#mw@') !== -1 && (e.target.href || '').indexOf('#mw@') !== -1){
            if(location.href === e.target.href){
                var el = mw.$('#' + e.target.href.split('mw@')[1])[0];
                if(el){
                    mw.tools.scrollTo(el)
                }
            }
        }
    })


});


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/cookie.js');

mw.cookie = {
    get: function (name) {
        var cookies = document.cookie.split(";"), i = 0, l = cookies.length;
        for (; i < l; i++) {
            var x = cookies[i].substr(0, cookies[i].indexOf("="));
            var y = cookies[i].substr(cookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === name) {
                return unescape(y);
            }
        }
    },
    set: function (name, value, expires, path, domain, secure) {
        var now = new Date();
        expires = expires || 365;
        now.setTime(now.getTime());
        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(now.getTime() + (expires));
        document.cookie = name + "=" + escape(value) + ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + ( ( path ) ? ";path=" + path : ";path=/" ) + ( ( domain ) ? ";domain=" + domain : "" ) + ( ( secure ) ? ";secure" : "" );
    },
    setEncoded: function (name, value, expires, path, domain, secure) {
        // value = encodeURIComponent(value);
        // value = escape(value);
        // value = mw.tools.base64.encode( unescape( encodeURIComponent( value ) ) )
        value = mw.tools.base64.encode(value);
        return this.set(name, value, expires, path, domain, secure);
    },
    getEncoded: function (name) {
        var value = this.get(name);
        // value = decodeURIComponent(value);
        // value = unescape(value);
        // value = decodeURIComponent( escape( mw.tools.base64.decode( value ) ) )
        value = mw.tools.base64.decode(value);
        return value;
    },
    ui: function (a, b) {
        var mwui = mw.cookie.getEncoded("mwui");
        try {
            mwui = (!mwui || mwui === '') ? {} : $.parseJSON(mwui);
        }
        catch (e) {
            return false;
        }
        if (typeof a === 'undefined') {
            return mwui;
        }
        if (typeof b === 'undefined') {
            return mwui[a] !== undefined ? mwui[a] : "";
        }
        else {
            mwui[a] = b;
            var tostring = JSON.stringify(mwui);
            mw.cookie.setEncoded("mwui", tostring, false, "/");
            if (typeof mw.cookie.uievents[a] !== 'undefined') {
                var funcs = mw.cookie.uievents[a], l = funcs.length, i = 0;
                for (; i < l; i++) {
                    mw.cookie.uievents[a][i].call(b.toString());
                }
            }
        }
    },
    uievents: {},
    changeInterval: null,
    uiCurr: null,
    onchange: function (name, func) {
        if (typeof mw.cookie.uievents[name] === 'undefined') {
            mw.cookie.uievents[name] = [func];
        }
        else {
            mw.cookie.uievents[name].push(func);
        }
    }
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/dialog.js');

(function (mw) {



    mw.dialog = function (options) {
        return new mw.Dialog(options);
    };


    mw.dialogIframe = function (options, cres) {
        options.pauseInit = true;
        var attr = 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen';
        if (options.autoHeight) {
            // attr += ' scrolling="no"';
            options.height = 'auto';
        }
        options.content = '<iframe src="' + mw.external_tool(options.url.trim()) + '" ' + attr + '><iframe>';
        options.className = ('mw-dialog-iframe mw-dialog-iframe-loading ' + (options.className || '')).trim();
        options.className += (options.autoHeight ? ' mw-dialog-iframe-autoheight' : '');
        var dialog = new mw.Dialog(options, cres);
        dialog.iframe = dialog.dialogContainer.querySelector('iframe');
        mw.tools.loading(dialog.dialogContainer, 90);



        setTimeout(function () {
            var frame = dialog.dialogContainer.querySelector('iframe');
            frame.style.minHeight = 0; // reset in case of conflicts
            if (options.autoHeight) {
                mw.tools.iframeAutoHeight(frame, {dialog: dialog, maxHeightWindowScroll: '75vh'});
            } else{
                $(frame).height(options.height - 60);
                frame.style.position = 'relative';
            }
            mw.$(frame).on('load', function () {
                mw.tools.loading(dialog.dialogContainer, false);
                setTimeout(function () {
                    dialog.center();
                    mw.$(frame).on('bodyResize', function () {
                        dialog.center();
                    });
                    dialog.dialogMain.classList.remove('mw-dialog-iframe-loading');
                    frame.contentWindow.thismodal = dialog;
                    if (options.autoHeight) {
                        mw.tools.iframeAutoHeight(frame, {dialog: dialog, maxHeightWindowScroll: '75vh'});
                    }
                }, 78);
                if (mw.tools.canAccessIFrame(frame)) {
                    mw.$(frame.contentWindow.document).on('keydown', function (e) {
                        if (mw.event.is.escape(e) && !mw.event.targetIsField(e)) {
                            if(mw.top().__dialogs && mw.top().__dialogs.length){
                                var dlg = mw.top().__dialogs;
                                dlg[dlg.length - 1]._doCloseButton();
                                $(dlg[dlg.length - 1]).trigger('closedByUser');
                            }
                            else {
                                if (dialog.options.closeOnEscape) {
                                    dialog._doCloseButton();
                                    $(dialog).trigger('closedByUser');
                                }
                            }
                        }
                    });
                }
                if(typeof options.onload === 'function') {
                    options.onload.call(dialog);
                }
            });
        }, 12);
        return dialog;
    };

    /** @deprecated */
    mw.modal = mw.dialog;
    mw.modalFrame = mw.dialogIframe;

    mw.dialog.remove = function (selector) {
        var dlg = mw.dialog.get(selector);
        if(dlg) {
            dlg.remove()
        }
    };

    mw.dialog.get = function (selector) {
        selector = selector || '.mw-dialog';
        var $el = mw.$(selector);
        var el = $el[0];

        if(!el) return false;

        if(el._dialog) {
            return el._dialog;
        }
        var child_cont = el.querySelector('.mw-dialog-holder');
        var parent_cont = $el.parents(".mw-dialog-holder:first");
        if (child_cont) {
            return child_cont._dialog;
        }
        else if (parent_cont.length !== 0) {
            return parent_cont[0]._dialog;
        }
        else if (window.thismodal) {
            return thismodal;
        }
        else {
             // deprecated
            child_cont = el.querySelector('.mw_modal');
            parent_cont = $el.parents(".mw_modal:first");
            if(child_cont) {
                return child_cont.modal;
            } else if (parent_cont.length !== 0) {
                return parent_cont[0].modal;
            }
            return false;
        }
    };


    mw.Dialog = function (options, cres) {

        var scope = this;

        options = options || {};
        options.content = options.content || options.html || '';

        if(!options.height && typeof options.autoHeight === 'undefined') {
            options.height = 'auto';
            options.autoHeight = true;
        }

        var defaults = {
            skin: 'default',
            overlay: true,
            overlayClose: false,
            autoCenter: true,
            root: document,
            id: options.name || options.id || mw.id('mw-dialog-'),
            content: '',
            closeOnEscape: true,
            closeButton: true,
            closeButtonAppendTo: '.mw-dialog-header',
            closeButtonAction: 'remove', // 'remove' | 'hide'
            draggable: true,
            scrollMode: 'inside', // 'inside' | 'window',
            centerMode: 'intuitive', // 'intuitive' | 'center'
            containment: 'window',
            overflowMode: 'auto', // 'auto' | 'hidden' | 'visible'
            disableTextSelection: false,

        };

        this.options = $.extend({}, defaults, options, {
            // skin: 'default'
        });

        this.id = this.options.id;


        var exist = document.getElementById(this.id);
        if (exist) {
            return exist._dialog;
        }

        this.hasBeenCreated = function () {
            return this.options.root.getElementById(this.id) !== null;
        };

        if (this.hasBeenCreated()) {
            return this.options.root.getElementById(this.id)._dialog;
        }

        if(!mw.top().__dialogs ) {
            mw.top().__dialogs = [];
        }
        if (!mw.top().__dialogsData) {
            mw.top().__dialogsData = {};
        }


        if (!mw.top().__dialogsData._esc) {
            mw.top().__dialogsData._esc = true;
            mw.$(document).on('keydown', function (e) {
                if (mw.event.is.escape(e)) {
                    var dlg = mw.top().__dialogs[mw.top().__dialogs.length - 1];
                    if (dlg && dlg.options && dlg.options.closeOnEscape) {
                        dlg._doCloseButton();
                    }
                }
            });
        }

        mw.top().__dialogs.push(this);

        this.draggable = function () {
            if (this.options.draggable && $.fn.draggable) {
                var $holder = mw.$(this.dialogHolder);
                $holder.draggable({
                    handle: this.options.draggableHandle || '.mw-dialog-header',
                    start: function () {
                        $holder.addClass('mw-dialog-drag-start');
                        scope._dragged = true;
                    },
                    stop: function () {
                        $holder.removeClass('mw-dialog-drag-start');
                    },
                    containment: scope.options.containment,
                    iframeFix: true
                });
            }
        };

        this.header = function () {
            this.dialogHeader = this.options.root.createElement('div');
            this.dialogHeader.className = 'mw-dialog-header';
            if (this.options.title || this.options.header) {
                this.dialogHeader.innerHTML = '<div class="mw-dialog-title">' + (this.options.title || this.options.header) + '</div>';
            }
        };

        this.footer = function (content) {
            this.dialogFooter = this.options.root.createElement('div');
            this.dialogFooter.className = 'mw-dialog-footer';
            if (this.options.footer) {
                $(this.dialogFooter).append(this.options.footer);
            }
        };

        this.title = function (title) {
            var root = mw.$('.mw-dialog-title', this.dialogHeader);
            if (typeof title === 'undefined') {
                return root.html();
            } else {
                if (root[0]) {
                    root.html(title);
                }
                else {
                    mw.$(this.dialogHeader).prepend('<div class="mw-dialog-title">' + title + '</div>');                }
            }
        };


        this.build = function () {
            this.dialogMain = this.options.root.createElement('div');
            if (this.options.disableTextSelection){
                this.dialogMain.style.userSelect = 'none';
            }
            this.dialogMain.id = this.id;
            var cls = 'mw-dialog mw-dialog-scroll-mode-' + this.options.scrollMode
                + ' mw-dialog-skin-' + this.options.skin
                + ' mw-dialog-overflowMode-' + this.options.overflowMode;
            cls += (!this.options.className ? '' : (' ' + this.options.className));
            this.dialogMain.className = cls;
            this.dialogMain._dialog = this;

            this.dialogHolder = this.options.root.createElement('div');
            this.dialogHolder.id = 'mw-dialog-holder-' + this.id;


            this.dialogHolder._dialog = this;

            this.header();
            this.footer();
            this.draggable();



            this.dialogContainer = this.options.root.createElement('div');
            this.dialogContainer._dialog = this;

            // TODO: obsolate
            this.container = this.dialogContainer;


            this.dialogContainer.className = 'mw-dialog-container';
            this.dialogHolder.className = 'mw-dialog-holder';

            var cont = this.options.content;
            if(this.options.shadow) {
                this.shadow = this.dialogContainer.attachShadow({
                    mode: 'open'
                });
                if(typeof cont === 'string') {
                    this.shadow.innerHTML = (cont);
                } else {
                    this.shadow.appendChild(cont);
                }
            } else {
                mw.$(this.dialogContainer).append(cont);
            }


            if (this.options.encapsulate) {
                this.iframe = cont;
                this.iframe.style.display = '';
            }

            this.dialogHolder.appendChild(this.dialogHeader);
            this.dialogHolder.appendChild(this.dialogContainer);
            this.dialogHolder.appendChild(this.dialogFooter);

            this.closeButton = this.options.root.createElement('div');
            this.closeButton.className = 'mw-dialog-close';

            this.closeButton.$scope = this;

            this.closeButton.onclick = function () {
                this.$scope[this.$scope.options.closeButtonAction]();
                $(this.$scope).trigger('closedByUser');
            };
            this.main = mw.$(this.dialogContainer); // obsolete
            this.main.width = this.width;

            this.width(this.options.width || 600);
            this.height(this.options.height || 320);

            this.options.root.body.appendChild(this.dialogMain);
            this.dialogMain.appendChild(this.dialogHolder);
            if (this.options.closeButtonAppendTo) {
                mw.$(this.options.closeButtonAppendTo, this.dialogMain).append(this.closeButton)
            }
            else {
                this.dialogHolder.appendChild(this.closeButton);

            }
            this.dialogOverlay();
            return this;
        };

        this._doCloseButton = function() {
            this[this.options.closeButtonAction]();
        };

        this.containmentManage = function () {
            if (scope.options.containment === 'window') {
                if (scope.options.scrollMode === 'inside') {
                    var rect = this.dialogHolder.getBoundingClientRect();
                    var $win = mw.$(window);
                    var sctop = $win.scrollTop();
                    var height = $win.height();
                    if (rect.top < sctop || (sctop + height) > (rect.top + rect.height)) {
                        this.center();
                    }
                }
            }
        };

        this.dialogOverlay = function () {
            this.overlay = this.options.root.createElement('div');
            this.overlay.className = 'mw-dialog-overlay';
            this.overlay.$scope = this;
            if (this.options.overlay === true) {
                this.dialogMain.appendChild(this.overlay);
            }
            mw.$(this.overlay).on('click', function () {
                if (this.$scope.options.overlayClose === true) {
                    this.$scope._doCloseButton();
                    $(this.$scope).trigger('closedByUser');
                }
            });
            return this;
        };

        this._afterSize = function() {
            if(mw._iframeDetector) {
                mw._iframeDetector.pause = true;
                var frame = window.frameElement;
                if(frame && parent !== top){
                    var height = this.dialogContainer.scrollHeight + this.dialogHeader.scrollHeight;
                    if($(frame).height() < height) {
                        frame.style.height = ((height + 100) - this.dialogHeader.offsetHeight - this.dialogFooter.offsetHeight) + 'px';
                        if(window.thismodal){
                            thismodal.height(height + 100);
                        }

                    }
                }
            }
        };

        this.show = function () {
            mw.$(this.dialogMain).find('iframe').each(function(){
                this._intPause = false;
            });
            mw.$(this.dialogMain).addClass('active');
            this.center();
            this._afterSize();
            mw.$(this).trigger('Show');
            mw.trigger('mwDialogShow', this);
            return this;
        };

        this._hideStart = false;
        this.hide = function () {
            if (!this._hideStart) {
                this._hideStart = true;
                mw.$(this.dialogMain).find('iframe').each(function(){
                    this._intPause = true;
                });
                setTimeout(function () {
                    scope._hideStart = false;
                }, 300);
                mw.$(this.dialogMain).removeClass('active');
                if(mw._iframeDetector) {
                    mw._iframeDetector.pause = false;
                }
                mw.$(this).trigger('Hide');
                mw.trigger('mwDialogHide', this);
            }
            return this;
        };

        this.remove = function () {
            this.hide();
            mw.removeInterval('iframe-' + this.id);
            mw.$(this).trigger('BeforeRemove');
            if (typeof this.options.beforeRemove === 'function') {
                this.options.beforeRemove.call(this, this)
            }
            mw.$(this.dialogMain).remove();
            if(this.options.onremove) {
                this.options.onremove()
            }
            mw.$(this).trigger('Remove');
            mw.trigger('mwDialogRemove', this);
            for (var i = 0; i < mw.top().__dialogs.length; i++) {
                if (mw.top().__dialogs[i] === this) {
                    mw.top().__dialogs.splice(i, 1);
                    break;
                }
            }
            clearInterval(this._observe.interval);
            return this;
        };

        this.destroy = this.remove;

        this._prevHeight = -1;
        this._dragged = false;

        this.center = function (width, height) {
            var $holder = mw.$(this.dialogHolder), $window = mw.$(window);
            var holderHeight = height || $holder.outerHeight();
            var holderWidth = width || $holder.outerWidth();
            var dtop, css = {};

            if (this.options.centerMode === 'intuitive' && this._prevHeight < holderHeight) {
                dtop = $window.height() / 2 - holderHeight / 2;
            } else if (this.options.centerMode === 'center') {
                dtop = $window.height() / 2 - holderHeight / 2;
            }

            if (!scope._dragged) {
                css.left = $window.outerWidth() / 2 - holderWidth / 2;
            } else {
                css.left = parseFloat($holder.css('left'));
            }

            if(css.left + holderWidth > $window.width()){
                css.left = css.left - ((css.left + holderWidth) - $window.width());
            }

            if (dtop) {
                css.top = dtop > 0 ? dtop : 0;
            }

            /*if(window !== mw.top().win && document.body.scrollHeight > mw.top().win.innerHeight){
                $win = $(mw.top());

                css.top = $(document).scrollTop() + 50;
                var off = $(window.frameElement).offset();
                if(off.top < 0) {
                    css.top += Math.abs(off.top);
                }
                if(window.thismodal) {
                    css.top += thismodal.dialogContainer.scrollTop;
                }

            }*/


            $holder.css(css);
            this._prevHeight = holderHeight;


            this._afterSize();
            mw.$(this).trigger('dialogCenter');

            return this;
        };

        this.width = function (width) {
            if(!width) {
                return mw.$(this.dialogHolder).outerWidth();
            }
            mw.$(this.dialogHolder).width(width);
            this._afterSize();
        };
        this.height = function (height) {
            if(!height) {
                return mw.$(this.dialogHolder).outerHeight();
            }
            mw.$(this.dialogHolder).height(height);
            this._afterSize();
        };
        this.resize = function (width, height) {
            if (typeof width !== 'undefined') {
                this.width(width);
            }
            if (typeof height !== 'undefined') {
                this.height(height);
            }
            this.center(width, height);
        };
        this.content = function (content) {
            this.options.content = content || '';
            $(this.dialogContainer).empty().append(this.options.content);
            return this;
        };

        this.result = function(result, doClose) {
            this.value = result;
            if(this.options.onResult){
                this.options.onResult.call( this, result );
            }
            if (cres) {
                cres.call( this, result );
            }
            $(this).trigger('Result', [result]);
            if(doClose){
                this._doCloseButton();
            }
        };


        this.contentMaxHeight = function () {
            var scope = this;
            if (this.options.scrollMode === 'inside') {
                mw.interval('iframe-' + this.id, function () {
                    var max = mw.$(window).height() - scope.dialogHeader.clientHeight - scope.dialogFooter.clientHeight - 40;
                    scope.dialogContainer.style.maxHeight = max + 'px';
                    scope.containmentManage();
                });
            }
        };

        this._observe = {};
        this.observeDimensions = function(cb) {
            if (!this._observe.interval) {
                var changed = function () {
                  var css = getComputedStyle(scope.dialogMain);
                  if (!scope._observe.data) {
                      scope._observe.data = {
                          width: css.width,
                          height: css.height
                      };
                      return {
                          width: css.width,
                          height: css.height
                      };
                  } else  {
                      var curr = scope._observe.data;
                      if(curr.width !== css.width || curr.height !== css.height) {
                          scope._observe.data = {
                              width: css.width,
                              height: css.height
                          };
                          return {
                              width: css.width,
                              height: css.height
                          };
                      }
                  }
                };
                this._observe.interval = setInterval(function (){
                    var chg = changed();
                    if (chg) {
                        cb.call(scope, chg);
                    }

                }, 333);
            }
        };

        this.init = function () {
            this.build();
            this.contentMaxHeight();
            this.center();
            this.show();
            if (this.options.autoCenter) {
                (function (scope) {
                    mw.$(window).on('resize orientationchange load', function () {
                        scope.contentMaxHeight();
                        scope.center();
                    });
                })(this);
            }
            if (!this.options.pauseInit) {
                mw.$(this).trigger('Init');
            }
            this.observeDimensions(function (){
                scope.center();
            });
            return this;
        };
        this.init();
    };

    mw.Dialog.elementIsInDialog = function (node) {
        return mw.tools.firstParentWithClass(node, 'mw-dialog');
    };

})(window.mw);


(function () {
    function scoped() {
        var all = document.querySelectorAll('style[scoped]'), i = 0;

        try {
            for( ; i < all.length; i++ ) {
                var parent = all[i].parentNode;
                parent.id = parent.id || mw.id('scoped-id-');
                var prefix = '#' + parent.id + ' ';
                var rules = all[i].sheet.rules;
                var r = 0;
                for ( ; r < rules.length; r++) {
                    var newRule = prefix + rules[r].cssText;
                    all[i].sheet.deleteRule(r);
                    all[i].sheet.insertRule(newRule, r);
                }
                all[i].removeAttribute('scoped');
            }
        }
        catch(error) {

        }


    }
    scoped();
    $(window).on('load', function () {
        scoped();
    });
})();




mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/domhelpers.js');

(function(){
var domHelp = {
    classNamespaceDelete: function (el_obj, namespace, parent, namespacePosition, exception) {
        if (el_obj.element && el_obj.namespace) {
            el = el_obj.element;
            namespace = el_obj.namespace;
            parent = el_obj.parent;
            namespacePosition = el_obj.namespacePosition;
            exceptions = el_obj.exceptions || [];
        }
        else {
            el = el_obj;
            exceptions = [];
        }
        namespacePosition = namespacePosition || 'contains';
        parent = parent || mwd;
        if (el === 'all') {
            var all = parent.querySelectorAll('.edit *'), i = 0, l = all.length;
            for (; i < l; i++) {
                mw.tools.classNamespaceDelete(all[i], namespace, parent, namespacePosition)
            }
            return;
        }
        if (!!el.className && typeof(el.className.split) === 'function') {
            var cls = el.className.split(" "), l = cls.length, i = 0, final = [];
            for (; i < l; i++) {
                if (namespacePosition === 'contains') {
                    if (!cls[i].contains(namespace) || exceptions.indexOf(cls[i]) !== -1) {
                        final.push(cls[i]);
                    }
                }
                else if (namespacePosition === 'starts') {
                    if (cls[i].indexOf(namespace) !== 0) {
                        final.push(cls[i]);
                    }
                }
            }
            el.className = final.join(" ");
        }
    },
    firstWithBackgroundImage: function (node) {
        if (!node) return false;
        if (!!node.style.backgroundImage) return node;
        var final = false;
        mw.tools.foreachParents(node, function (loop) {
            if (!!this.style.backgroundImage) {
                mw.tools.stopLoop(loop);
                final = this;
            }
        });
        return final;
    },

    parentsOrCurrentOrderMatchOrOnlyFirstOrNone: function (node, arr) {
        return !mw.tools.hasAnyOfClassesOnNodeOrParent(node, [arr[1]]) || mw.tools.parentsOrCurrentOrderMatchOrOnlyFirst(node, arr)
    },
    parentsOrCurrentOrderMatchOrOnlyFirst: function (node, arr) {
        var curr = node;
        while (curr && curr.classList) {
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                return false;
            }
            else {
                if (h1) {
                    return true;
                }
                else if (h2) {
                    return false;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    parentsOrCurrentOrderMatchOrOnlyFirstOrNone: function (node, arr) {
        var curr = node;
        while (curr && curr.classList) {
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                return false;
            }
            else {
                if (h1) {
                    return true;
                }
                else if (h2) {
                    return false;
                }
            }
            curr = curr.parentNode;
        }
        return true;
    },
    parentsOrCurrentOrderMatch: function (node, arr) {
        var curr = node,
            match = {a: 0, b: 0},
            count = 1,
            hadA = false;
        while (curr && curr.classList) {
            count++;
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                if (match.a > 0) {
                    return true;
                }
                return false;
            }
            else {
                if (h1) {
                    match.a = count;
                    hadA = true;
                }
                else if (h2) {
                    match.b = count;
                }
                if (match.b > match.a) {
                    return hadA ? true : false;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    parentsOrCurrentOrderMatchOrNone:function(node, arr){
        if(!node) return false;
        var curr = node,
            match = {a: 0, b: 0},
            count = 1,
            hadA = false;
        while (curr && curr.classList) {
            count++;
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                if (match.a > 0) {
                    return true;
                }
                return false;
            }
            else {
                if (h1) {
                    match.a = count;
                    hadA = true;
                }
                else if (h2) {
                    match.b = count;
                }
                if (match.b > match.a) {
                    return hadA ? true : false;
                }
            }
            curr = curr.parentNode;
        }
        return match.a === 0 && match.b === 0;
    },
    parentsOrCurrentOrderMatchOrOnlyFirstOrBoth: function (node, arr) {
        var curr = node,
            has1 = false,
            has2 = false;
        while (curr && curr.classList) {
            var h1 = mw.tools.hasClass(curr, arr[0]);
            var h2 = mw.tools.hasClass(curr, arr[1]);
            if (h1 && h2) {
                return true;
            }
            else {
                if (h1) {
                    return true;
                }
                else if (h2) {
                    return false;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    matchesAnyOnNodeOrParent: function (node, arr) {
        var curr = node;
        while (curr && curr.classList) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.matches(curr, arr[i])) {
                    return true;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstMatchesOnNodeOrParent: function (node, arr) {
        if (!arr) return;
        if (typeof arr === 'string') {
            arr = [arr];
        }
        var curr = node;
        while (curr && curr.classList) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.matches(curr, arr[i])) {
                    return curr;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    lastMatchesOnNodeOrParent: function (node, arr) {
        if (!arr) return;
        if (typeof arr === 'string') {
            arr = [arr];
        }
        var curr = node, result;
        while (curr && curr.classList) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.matches(curr, arr[i])) {
                    result = curr;
                }
            }
            curr = curr.parentNode;
        }
        return result;
    },
    hasAnyOfClassesOnNodeOrParent: function (node, arr) {
        var curr = node;
        while (curr && curr.classList) {
            var i = 0;
            for (; i < arr.length; i++) {
                if (mw.tools.hasClass(curr, arr[i])) {
                    return true;
                }
            }
            curr = curr.parentNode;
        }
        return false;
    },
    hasClass: function (classname, whattosearch) {
        if (classname === null) {
            return false;
        }
        if (typeof classname === 'string') {
            return classname.split(' ').indexOf(whattosearch) > -1;
        }
        else if (typeof classname === 'object') {
            return mw.tools.hasClass(classname.className, whattosearch);
        }
        else {
            return false;
        }
    },
    hasAllClasses: function (node, arr) {
        if (!node) return;
        var has = true;
        var i = 0, nodec = node.className.trim().split(' ');
        for (; i < arr.length; i++) {
            if (nodec.indexOf(arr[i]) === -1) {
                return false;
            }
        }
        return has;
    },
    hasAnyOfClasses: function (node, arr) {
        if (!node) return;
        var i = 0, l = arr.length, cls = node.className;
        for (; i < l; i++) {
            if (mw.tools.hasClass(cls, arr[i])) {
                return true;
            }
        }
        return false;
    },


    hasParentsWithClass: function (el, cls) {
        if (!el) return;
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (mw.tools.hasClass(curr, cls)) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    hasParentWithId: function (el, id) {
        if (!el) return;
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (curr.id === id) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },

    hasChildrenWithTag: function (el, tag) {
        tag = tag.toLowerCase();
        var has = false;
        mw.tools.foreachChildren(el, function (loop) {
            if (this.nodeName.toLowerCase() === tag) {
                has = true;
                mw.tools.stopLoop(loop);
            }
        });
        return has;
    },
    hasParentsWithTag: function (el, tag) {
        if (!el || !tag) return;
        tag = tag.toLowerCase();
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (curr.nodeName.toLowerCase() === tag) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    hasHeadingParent: function (el) {
        if (!el) return;
        var h = /^(h[1-6])$/i;
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (h.test(curr.nodeName.toLowerCase())) {
                return true;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    addClass: function (el, cls) {
        if (!cls || !el) {
            return false;
        }
        if (el.fn) {
            el = el[0];
            if (!el) {
                return;
            }
        }
        if (typeof cls === 'string') {
            cls = cls.trim();
        }
        if (!el) return;
        var arr = cls.split(" ");
        var i = 0;
        if (arr.length > 1) {
            for (; i < arr.length; i++) {
                mw.tools.addClass(el, arr[i]);
            }
            return;
        }
        if (typeof el === 'object') {
            if (el.classList) {
                el.classList.add(cls);
            }
            else {
                if (!mw.tools.hasClass(el.className, cls)) el.className += (' ' + cls);
            }
        }
        if (typeof el === 'string') {
            if (!mw.tools.hasClass(el, cls)) el += (' ' + cls);
        }
    },
    removeClass: function (el, cls) {
        if (typeof cls === 'string') {
            cls = cls.trim();
        }
        if (!cls || !el) return;
        if (el === null) {
            return false;
        }
        if (el.fn) {
            el = el[0];
            if (!el) {
                return;
            }
        }
        if (typeof el === 'undefined') {
            return false;
        }
        if (el.constructor === [].constructor) {
            var i = 0, l = el.length;
            for (; i < l; i++) {
                mw.tools.removeClass(el[i], cls);
            }
            return;
        }
        if (typeof(cls) === 'object') {
            var arr = cls;
        } else {
            var arr = cls.split(" ");
        }
        var i = 0;
        if (arr.length > 1) {
            for (; i < arr.length; i++) {
                mw.tools.removeClass(el, arr[i]);
            }
            return;
        }
        else if (!arr.length) {
            return;
        }
        if (el.classList && cls) {
            el.classList.remove(cls);
        }
        else {
            if (mw.tools.hasClass(el.className, cls)) el.className = (el.className + ' ').replace(cls + ' ', '').replace(/\s{2,}/g, ' ').trim();
        }

    },
    isEventOnElement: function (event, node) {
        if (event.target === node) {
            return true;
        }
        mw.tools.foreachParents(event.target, function () {
            if (event.target === node) {
                return true;
            }
        });
        return false;
    },
    isEventOnElements: function (event, array) {
        var l = array.length, i = 0;
        for (; i < l; i++) {
            if (event.target === array[i]) {
                return true;
            }
        }
        var isEventOnElements = false;
        mw.tools.foreachParents(event.target, function () {
            var l = array.length, i = 0;
            for (; i < l; i++) {
                if (event.target === array[i]) {
                    isEventOnElements = true;
                }
            }
        });
        return isEventOnElements;
    },
    isEventOnClass: function (event, cls) {
        if (mw.tools.hasClass(event.target, cls) || mw.tools.hasParentsWithClass(event.target, cls)) {
            return true;
        }
        return false;
    },
    firstChildWithClass: function (parent, cls) {
        var toreturn;
        mw.tools.foreachChildren(parent, function (loop) {
            if (this.nodeType === 1 && mw.tools.hasClass(this, cls)) {
                mw.tools.stopLoop(loop);
                toreturn = this;
            }
        });
        return toreturn;
    },
    firstChildWithTag: function (parent, tag) {
        var toreturn;
        var tag = tag.toLowerCase();
        mw.tools.foreachChildren(parent, function (loop) {
            if (this.nodeName.toLowerCase() === tag) {
                toreturn = this;
                mw.tools.stopLoop(loop);
            }
        });
        return toreturn;
    },
    hasChildrenWithClass: function (node, cls) {
        var final = false;
        mw.tools.foreachChildren(node, function () {
            if (mw.tools.hasClass(this.className, cls)) {
                final = true;
            }
        });
        return final;
    },
    parentsOrder: function (node, arr) {
        var only_first = [];
        var obj = {}, l = arr.length, i = 0, count = -1;
        for (; i < l; i++) {
            obj[arr[i]] = -1;
        }
        if (!node) return obj;

        var curr = node.parentNode;
        while (curr && curr.classList) {
            count++;
            var cls = curr.className;
            i = 0;
            for (; i < l; i++) {
                if (mw.tools.hasClass(cls, arr[i]) && only_first.indexOf(arr[i]) === -1) {
                    obj[arr[i]] = count;
                    only_first.push(arr[i]);
                }
            }
            curr = curr.parentNode;
        }
        return obj;
    },
    parentsAndCurrentOrder: function (node, arr) {
        var only_first = [];
        var obj = {}, l = arr.length, i = 0, count = -1;
        for (; i < l; i++) {
            obj[arr[i]] = -1;
        }
        if (!node) return obj;

        var curr = node;
        while (curr && curr.classList) {
            count++;
            var cls = curr.className;
            i = 0;
            for (; i < l; i++) {
                if (mw.tools.hasClass(cls, arr[i]) && only_first.indexOf(arr[i]) === -1) {
                    obj[arr[i]] = count;
                    only_first.push(arr[i]);
                }
            }
            curr = curr.parentNode;
        }
        return obj;
    },
    firstParentWithClass: function (el, cls) {
        if (!el) return false;
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (curr.classList.contains(cls)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithClass: function (el, cls) {
        if (!el) return false;
        var curr = el;
        while (curr && curr.classList) {
            if (mw.tools.hasClass(curr, cls)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstBlockLevel: function (el) {
        while(el && el.classList) {
            if(mw.tools.isBlockLevel(el)) {
                return el;
            }
            el = el.parentNode;
        }
    },
    firstNotInlineLevel: function (el) {
        if(el.nodeType !== 1) {
            el = el.parentNode
        }
        if(!el) {
            return;
        }
        while(el && el.classList) {
            if(!mw.tools.isInlineLevel(el)) {
                return el;
            }
            el = el.parentNode;
        }
    },
    firstParentOrCurrentWithId: function (el, id) {
        if (!el) return false;
        var curr = el;
        while (curr && el.classList) {
            if (curr.id === id) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithAllClasses: function (node, arr) {
        if (!node) return false;
        var curr = node;
        while (curr && curr.classList) {
            if (mw.tools.hasAllClasses(curr, arr)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithAnyOfClasses: function (node, arr) {
        if (!node) return false;
        var curr = node;
        while (curr && curr.classList) {
            if (!curr) return false;
            if (mw.tools.hasAnyOfClasses(curr, arr)) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    lastParentWithClass: function (el, cls) {
        if (!el) return;
        var _has = false;
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (mw.tools.hasClass(curr, cls)) {
                _has = curr;
            }
            curr = curr.parentNode;
        }
        return _has;
    },
    firstParentWithTag: function (el, tag) {
        if (!el || !tag) return;
        tag = typeof tag !== 'string' ? tag : [tag];
        var curr = el.parentNode;
        while (curr && curr.classList) {
            if (tag.indexOf(curr.nodeName.toLowerCase()) !== -1) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    firstParentOrCurrentWithTag: function (el, tag) {
        if (!el || !tag) return;
        tag = typeof tag !== 'string' ? tag : [tag];
        var curr = el;
        while (curr && curr.classList) {
            if (tag.indexOf(curr.nodeName.toLowerCase()) !== -1) {
                return curr;
            }
            curr = curr.parentNode;
        }
        return false;
    },
    generateSelectorForNode: function (node, strict) {
         if(typeof strict === 'undefined') {
            strict = true;
        }
        if (node === null || node.nodeType === 3) {
            return false;
        }
        if (node.nodeName === 'BODY') {
            return 'body';
        }
        if(strict && !node.id) {
            if(!node.classList.contains('edit') && mw.tools.isEditable(node)) {
                node.id = mw.id('mw-selector-');
            }
        }
        if (!!node.id /*&& node.id.indexOf('element_') === -1*/) {
            return '#' + node.id;
        }
        if(mw.tools.hasClass(node, 'edit')){
            var field = node.getAttribute('field');
            var rel = node.getAttribute('rel');
            if(field && rel){
                return '.edit[field="'+field+'"][rel="'+rel+'"]';
            }
        }
        var filter = function(item) {
            return item !== 'changed'
                && item !== 'module-over'
                && item !== 'mw-bg-mask'
                && item !== 'element-current';
        };
        var _final = node.className.trim() ? '.' + node.className.trim().split(' ').filter(filter).join('.') : node.nodeName.toLocaleLowerCase();


        _final = _final.replace(/\.\./g, '.');
        mw.tools.foreachParents(node, function (loop) {
            if (this.id /*&& node.id.indexOf('element_') === -1*/) {
                _final = '#' + this.id + ' > ' + _final;
                mw.tools.stopLoop(loop);
                return false;
            }
            var n;
            if (this.className.trim()) {
                n = this.nodeName.toLocaleLowerCase() + '.' + this.className.trim().split(' ').join('.');
            }
            else {
                n = this.nodeName.toLocaleLowerCase();
            }
            _final = n + ' > ' + _final;
        });
        return _final
            .replace(/.changed/g, '')
            .replace(/.element-current/g, '')
            .replace(/.module-over/g, '');
    }
};

for (var i in domHelp) {
    mw.tools[i] = domHelp[i];
}
})();


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/dropdown.js');

mw.tools.dropdown = function (root) {
    root = root || document.body;
    if (root === null) {
        return;
    }

    var isMobile = ('ontouchstart' in document.documentElement && /mobi/i.test(navigator.userAgent));
    mw.tools.dropdownActivatedBindOnEventsNames = 'mousedown';
    if(isMobile){
        mw.tools.dropdownActivatedBindOnEventsNames = 'mousedown touchstart';
    }
    var items = root.querySelectorAll(".mw-dropdown"), l = items.length, i = 0;
    for (; i < l; i++) {
        var el = items[i];
        var cls = el.className;
        if (el.mwDropdownActivated) {
            continue;
        }
        el.mwDropdownActivated = true;
        el.hasInput = el.querySelector('input.mw-dropdown-field') !== null;



        if (el.hasInput) {
            var input = el.querySelector('input.mw-dropdown-field');
            input.dropdown = el;
            input.onkeydown = function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    mw.$(this.dropdown).removeClass("active");
                    mw.$('.mw-dropdown-content', this.dropdown).hide();
                    mw.$(this.dropdown).setDropdownValue(this.value, true, true);
                    return false;
                }
            };

            input.onkeyup = function (e) {
                if (e.keyCode === 13) {
                    return false;
                }
            }
        }
        mw.$(el).off("click");
        mw.$(el).on("click", function (event) {
            if ($(this).hasClass("disabled")) {
                return false;
            }
            if (!mw.tools.hasClass(event.target.className, 'mw-dropdown-content') && !mw.tools.hasClass(event.target.className, 'dd_search')) {
                if (this.querySelector('input.mw-dropdown-field') !== null && !mw.tools.hasClass(this, 'active') && mw.tools.hasParentsWithClass(event.target, 'mw-dropdown-value')) {
                    if (this.hasInput) {
                        var input = this.querySelector('input.mw-dropdown-field');
                        input.value = mw.$(this).getDropdownValue();
                        mw.wysiwyg.save_selection(true);
                        mw.$(input).focus();
                    }
                }
                mw.$(this).toggleClass("active");
                mw.$(".mw-dropdown").not(this).removeClass("active").find(".mw-dropdown-content").hide();
                if (mw.$(".other-action-hover", this).length === 0) {
                    var item = mw.$(".mw-dropdown-content", this);
                    if (item.is(":visible")) {
                        item.hide();
                        item.focus();
                    }
                    else {
                        item.show();
                        if (event.target.type !== 'text') {
                            try {
                                this.querySelector("input.dd_search").focus();
                            } catch (e) {
                            }
                        }
                    }
                }
            }
        });
        mw.$(el)
            .hover(function () {
                mw.$(this).add(this);
                if (mw.tools.hasClass(cls, 'other-action')) {
                    mw.$(this).addClass('other-action');
                }
            }, function () {
                mw.$(this).removeClass("hover");
                mw.$(this).removeClass('other-action');
            })
            .on(mw.tools.dropdownActivatedBindOnEventsNames, 'li[value]', function (event) {
                mw.$(mw.tools.firstParentWithClass(this, 'mw-dropdown')).setDropdownValue(this.getAttribute('value'), true);
                return false;
            })
            .on('click', 'a[href="#"]', function (event) {
                return false;
            });
    }
    /* end For loop */
    if (typeof mw.tools.dropdownActivated === 'undefined') {
        mw.tools.dropdownActivated = true;
        mw.$(document.body).on(mw.tools.dropdownActivatedBindOnEventsNames, function (e) {
            if (!mw.tools.hasAnyOfClassesOnNodeOrParent(e.target, ['mw-dropdown-content', 'mw-dropdown'])) {
                mw.$(".mw-dropdown").removeClass("active");
                mw.$(".mw-dropdown-content").hide();
                if(self !== top) {
                    try {
                        mw.top().$(".mw-dropdown").removeClass("active");
                        mw.top().$(".mw-dropdown-content").hide();
                    } catch(e){

                    }
                }
            }
        });
    }
};


mw.dropdown = mw.tools.dropdown;


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/editor.js');



    mw.tools.richtextEditorSettings = {
        width: '100%',
        height: 'auto',
        addControls: false,
        hideControls: false,
        ready: false
    };

    mw.tools.richtextEditor = function (obj) {
        if (typeof obj.element === 'string') {
            obj.element = mw.$(obj.element)[0];
        }
        if (!obj.element || obj.element === undefined) return false;

        var o = $.extend({}, mw.tools.richtextEditorSettings, obj);
        var frame = document.createElement('iframe');
        frame.richtextEditorSettings = o;
        frame.className = 'mw-fullscreen mw-iframe-editor';
        frame.scrolling = 'no';
        var name = 'mw-editor' + mw.random();
        frame.id = name;
        frame.name = name;
        frame.style.backgroundColor = "white";
        frame.setAttribute('frameborder', 0);
        frame.setAttribute('allowtransparency', 'true');
        mw.$(o.element).after(frame);
        mw.$(o.element).hide();
        $.get(mw.external_tool('editor_toolbar'), function (a) {
            if (frame.contentWindow.document === null) {
                return;
            }
            frame.contentWindow.document.open('text/html', 'replace');
            frame.contentWindow.document.write(a);
            frame.contentWindow.document.close();
            frame.contentWindow.editorArea = o.element;
            frame.contentWindow.thisFrame = frame;
            frame.contentWindow.pauseChange = true;
            frame.contentWindow.richtextEditorSettings = o;

            frame.onload = function () {
                var val = o.element.nodeName !== 'TEXTAREA' ? o.element.innerHTML : o.element.value
                frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
                if (!!o.hideControls && o.hideControls.constructor === [].constructor) {
                    var l = o.hideControls.length, i = 0;
                    for (; i < l; i++) {
                        mw.$('.mw_editor_' + o.hideControls[i], frame.contentWindow.document).hide();
                    }
                }
                if (!!o.addControls && (typeof o.addControls === 'string' || typeof o.addControls === 'function' || !!o.addControls.nodeType)) {
                    mw.$('.editor_wrapper', frame.contentWindow.document).append(o.addControls);
                }
                frame.api = frame.contentWindow.mw.wysiwyg;
                if (typeof o.ready === 'function') {
                    o.ready.call(frame, frame.contentWindow.document);
                }
                setTimeout(function () {
                    if (frame.contentWindow) {
                        frame.contentWindow.pauseChange = false;
                    }

                }, frame.contentWindow.SetValueTime);
                mw.$(obj.element).on('sourceChanged', function(e, val){
                    frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
                })
                mw.$(frame.contentWindow.document.getElementById('editor-area')).on('keyup paste change', function(){
                    if (frame.richtextEditorSettings.element.nodeName !== 'TEXTAREA') {
                        frame.richtextEditorSettings.element.innerHTML = this.innerHTML
                    }  else {
                        frame.richtextEditorSettings.element.value = this.innerHTML;
                    }
                })
                frame.contentWindow.mw.tools.createStyle(undefined, '#editor-area{' + (obj.style || '') + '}');
            }
            mw.$(obj.element).on('sourceChanged', function (e, val) {
                frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
            });

        });
        o.width = o.width != 'auto' ? o.width : '100%';
        mw.$(frame).css({width: o.width, height: o.height});
        if(o.height === 'auto') {
            mw.tools.iframeAutoHeight(frame);
        }
        frame.setValue = function (val) {
            frame.contentWindow.pauseChange = true;
            frame.contentWindow.document.getElementById('editor-area').innerHTML = val;
            if (frame.richtextEditorSettings.element.nodeName !== 'TEXTAREA') {
                frame.richtextEditorSettings.element.innerHTML = val
            }
            else {
                frame.richtextEditorSettings.element.value = val;
            }
            frame.value = val;
            frame.contentWindow.pauseChange = false;
        }
        return frame;
    }

    mw.editor = mw.tools.richtextEditor;


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/element.js');

(function(){

    var MWElement = function(options, root){
        var scope = this;


        this.toggle = function () {
            this.css('display', this.css('display') === 'none' ? 'block' : 'none');
        };

        this._active = function () {
            return this.nodes[this.nodes.length - 1];
        };

        this.get = function(selector, scope){
            this.nodes = (scope || document).querySelectorAll(selector);
        };

        this.each = function(cb){
            if(this.nodes) {
                for (var i = 0; i < this.nodes.length; i++) {
                    cb.call(this.nodes[i], i);
                }
            } else if(this.node) {
                cb.call(this.node, 0);
            }
            return this;
        };

        this.encapsulate = function () {

        };

        this.create = function() {
            var el = this.document.createElement(this.settings.tag);
            this.node = el;

            if (this.settings.encapsulate) {
                var mode = this.settings.encapsulate === true ? 'open' : this.settings.encapsulate;
                el.attachShadow({
                    mode: mode
                });
            }
            this.nodes = [el];
            if (this.settings.content) {
                if (Array.isArray(this.settings.content)) {
                    this.settings.content.forEach(function (el){
                        scope.append(el);
                    });
                } else if(this.settings.content instanceof MWElement) {
                    this.append(this.settings.content);
                }  else if(typeof this.settings.content === 'object') {
                    this.append(new MWElement(this.settings.content));
                }
            }
            this.$node = $(el);
        };

        this._specialProps = function(dt, val){
            if(dt === 'tooltip') {
                this.node.dataset[dt] = val;
                return true;
            }
        };

        this.setProps = function(){
            for(var i in this.settings.props) {
                if (i === 'dataset') {
                    for(var dt in this.settings.props[i]) {
                        this.node.dataset[dt] = this.settings.props[i][dt];
                    }
                } else if (i === 'style') {
                    for(var st in this.settings.props[i]) {
                        this.node.style[st] = this.settings.props[i][st];
                    }
                } else {
                    var val = this.settings.props[i];
                    if(!this._specialProps(i, val)) {
                        this.node[i] = val;
                    }
                }
            }
        };

        this.__ = {
            cssNumber: [
                'animationIterationCount',
                'columnCount',
                'fillOpacity',
                'flexGrow',
                'flexShrink',
                'fontWeight',
                'gridArea',
                'gridColumn',
                'gridColumnEnd',
                'gridColumnStart',
                'gridRow',
                'gridRowEnd',
                'gridRowStart',
                'lineHeight',
                'opacity',
                'order',
                'orphans',
                'widows',
                'zIndex',
                'zoom'
            ]
        };

        this._normalizeCSSValue = function (prop, val) {
            if(typeof val === 'number') {
                if(this.__.cssNumber.indexOf(prop) === -1) {
                    val = val + 'px';
                }
            }
            return val;
        };

        this.css = function(css, val){
            if(typeof css === 'string') {
                if(typeof val !== 'undefined'){
                    var nval =  this._normalizeCSSValue(css, val);
                    this.each(function (){
                        this.style[css] = nval;
                    });
                } else {
                    return this.document.defaultView.getComputedStyle(this.node)[css];
                }
            }
            if(typeof css === 'object') {
                for (var i in css) {

                    this.each(function (){
                        this.style[i] = scope._normalizeCSSValue(i, css[i]);
                    });
                }
            }
            return this;
        };

        this.dataset = function(prop, val){
            if(typeof val === 'undefined') {
                return this._active()[prop];
            }
            this.each(function (){
                this.dataset[prop] = val;
            });
            return this;
        };

        this.attr = function(prop, val){
            if(typeof val === 'undefined') {
                return this._active()[prop];
            }
            this.each(function (){
                this.setAttribute(prop, val);
            });
            return this;
        };

        this.val = function(val){
            if(typeof val === 'undefined') {
                return this._active().value;
            }
            this.each(function (){
                this.value = val;
            });
            return this;
        };

        this.prop = function(prop, val){
            var active = this._active();
            if(typeof val === 'undefined') {
                return active[prop];
            }
            if(active[prop] !== val){
                active[prop] = val;
                this.trigger('propChange', [prop, val]);
            }
            return this;
        };

        this.hide = function () {
            return this.each(function (){
                this.style.display = 'none';
            });
        };
        this.show = function () {
            return this.each(function (){
                this.style.display = '';
            });
        };

        this.find = function (sel) {
            var el = mw.element('#r' + new Date().getTime());
            this.each(function (){
                var all = this.querySelectorAll(sel);
                for(var i = 0; i < all.length; i++) {
                    if(el.nodes.indexOf(all[i]) === -1) {
                        el.nodes.push(all[i]);
                    }
                }
            });
            return el;
        };

        this.addClass = function (cls) {
             cls = cls.trim().split(' ');
            return this.each(function (){
                var node = this;
                cls.forEach(function (singleClass){
                    node.classList.add(singleClass);
                });

            });
        };

        this.toggleClass = function (cls) {
            return this.each(function (){
                this.classList.toggle(cls.trim());
            });
        };

        this.removeClass = function (cls) {
            return this.each(function (){
                this.classList.remove(cls.trim());
            });
        };

        this.remove = function () {
            return this.each(function (){
                this.remove();
            });
        };

        this.empty = function () {
            return this.html('');
        };

        this.html = function (val) {
            if (typeof val === 'undefined') {
                return this._active().innerHTML;
            }
            return this.each(function (){
                this.innerHTML = val;
            });
        };
        this.text = function (val, clean) {
            if(typeof val === 'undefined') {
                return this.node.textContent;
            }
            if(typeof clean === 'undefined') {
                clean = true;
            }
            if (clean) {
                val = this.document.createRange().createContextualFragment(val).textContent;
            }
            this.node.innerHTML = val;
        };

        this._asdom = function (obj) {
            if (typeof obj === 'string') {
                return this.document.createRange().createContextualFragment(obj);
            } else if (obj.node){
                return obj.node;
            }
            else if (obj.nodes){
                return obj.nodes[obj.nodes.length - 1];
            } else {
                return obj;
            }
        };

        this.offset = function () {
            var rect = this._active().getBoundingClientRect();
            rect.offsetTop = rect.top + window.pageYOffset;
            rect.offsetBottom = rect.bottom + window.pageYOffset;
            rect.offsetLeft = rect.left + window.pageXOffset;
            return rect;
        };


        this.width = function (val) {
            if(val) {
                return this.css('width', val);
            }
            return this._active().offsetWidth;
        };

        this.height = function (val) {
            if(val) {
                return this.css('height', val);
            }
            return this._active().offsetHeight;
        };

        this.parent = function () {
            return mw.element(this._active().parentNode);
        };
        this.parents = function (selector) {
            selector = selector || '*';
            var el = this._active();
            var curr = el.parentElement;
            var res = mw.element();
            res.nodes = []
            while (curr) {
                if(curr.matches(selector)) {
                    res.nodes.push(curr);
                }
                curr = curr.parentElement;
            }
            return res;
        };
        this.append = function (el) {

            if (el) {
                this.each(function (){
                    this.append(scope._asdom(el));
                });
            }
            return this;
        };

        this.before = function (el) {
            if (el) {
                this.each(function (){
                    if(this.parentNode){
                        this.parentNode.insertBefore(scope._asdom(el), this);
                    }
                });
            }
            return this;
        };

        this.after = function (el) {
            if (el) {
                this.each(function (){
                    if(this.parentNode) {
                        this.parentNode.insertBefore(scope._asdom(el), this.nextSibling);
                    }
                });
            }
        };

        this.prepend = function (el) {
            if (el) {
                this.each(function (){
                    this.prepend(scope._asdom(el));
                });
            }
            return this;
        };
        this._disabled = false;

        Object.defineProperty(this, "disabled", {
            get : function () { return this._disabled; },
            set : function (value) {
                this._disabled = value;
                this.node.disabled = this._disabled;
                this.node.dataset.disabled = this._disabled;
            }
        });

        this.trigger = function(event, data){
            data = data || {};
            this.each(function (){
                this.dispatchEvent(new CustomEvent(event, {
                    detail: data,
                    cancelable: true,
                    bubbles: true
                }));
                if(scope._on[event]) {
                    scope._on[event].forEach(function(cb){
                        cb.call(this, event, data);
                    });
                }
            });
            return this;
        };

        this.get = function (i) {
            return this.nodes[i];
        };

        this._on = {};
        this.on = function(events, cb){
            events = events.trim().split(' ');
            events.forEach(function (ev) {
                if(!scope._on[ev]) {  scope._on[ev] = []; }
                scope._on[ev].push(cb);
                scope.each(function (){
                    /*this.addEventListener(ev, function(e) {
                        cb.call(scope, e, e.detail, this);
                    }, false);*/
                    this.addEventListener(ev, cb, false);
                });
            });
            return this;
        };
        this.init = function(){
            this.nodes = [];
            this.root = root || document;
            this._asElement = false;
            this.document =  (this.root.body ? this.root : this.root.ownerDocument);

            options = options || {};

            if(options.nodeName && options.nodeType) {
                this.nodes.push(options);
                this.node = (options);
                options = {};
                this._asElement = true;
            } else if(typeof options === 'string') {
                if(options.indexOf('<') === -1) {
                    this.nodes = Array.prototype.slice.call(this.root.querySelectorAll(options));
                    options = {};
                    this._asElement = true;
                } else {
                    var el = this._asdom(options);

                    this.nodes = [].slice.call(el.children);
                    this._asElement = true;
                }
            }

            options = options || {};

            var defaults = {
                tag: 'div',
                props: {}
            };

            this.settings = $.extend({}, defaults, options);

            if(this._asElement) return;
            this.create();
            this.setProps();
         };
        this.init();
    };
    mw.element = function(options){
        return new MWElement(options);
    };
    mw.element.module = function (name, func) {
        MWElement.prototype[name] = func;
    };

})();


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/elementedit.js');

mw.tools.elementEdit = function (el, textonly, callback, fieldClass) {
    if (!el || el.querySelector('.mw-live-edit-input') !== null) {
        return;
    }
    textonly = (typeof textonly === 'undefined') ? true : textonly;
    var input = document.createElement('span');
    input.className = (fieldClass || "") + ' mw-live-edit-input mw-liveedit-field';
    input.contentEditable = true;
    var $input = $(input);
    if (textonly === true) {
        input.innerHTML = el.textContent;
        input.onblur = function () {
            var val = $input.text();
            var ischanged = true;
            setTimeout(function () {
                mw.$(el).text(val);
                if (typeof callback === 'function' && ischanged) {
                    callback.call(val, el);
                }
            }, 3);
        };
        input.onkeydown = function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                mw.$(el).text($input.text());
                if (typeof callback === 'function') {
                    callback.call($input.text(), el);
                }
                return false;
            }
        }
    }
    else {
        input.innerHTML = el.innerHTML;
        input.onblur = function () {
            var val = this.innerHTML;
            var ischanged = this.changed === true;
            setTimeout(function () {
                el.innerHTML = val;
                if (typeof callback === 'function' && ischanged) {
                    callback.call(val, el);
                }
            }, 3)
        }
        input.onkeydown = function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                var val = this.innerHTML;
                el.innerHTML = val;
                if (typeof callback === 'function') {
                    callback.call(val, el);
                }
                return false;
            }
        }
    }
    mw.$(el).empty().append(input);
    $input.focus();
    input.changed = false;
    $input.change(function () {
        this.changed = true;
    });
    return input;
}


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/external.js');

    mw.tools.externalInstrument = {
        register: {},
        holder: function () {
            var div = document.createElement('div');
            div.className = 'mw-external-tool';
            return div;
        },
        prepare: function (name, params) {
            var frame = document.createElement('iframe');
            frame.name = name;
            /* for callbacks */
            var url = mw.external_tool(name);
            if (typeof params === 'object') {
                params = $.param(params);
            }
            else {
                params = "";
            }
            frame.src = url + "?" + params;
            frame.scrolling = 'no';
            frame.frameBorder = 0;
            frame.onload = function () {
                frame.contentWindow.thisframe = frame;
            };
            return frame;
        },
        init: function (name, callback, holder, params) {
            if (typeof mw.tools.externalInstrument.register[name] === 'undefined') {
                var frame = mw.tools.externalInstrument.prepare(name, params);
                frame.height = 300;
                mw.tools.externalInstrument.register[name] = frame;
                if (!holder) {
                    holder = mw.tools.externalInstrument.holder();
                    mw.$(document.body).append(holder);
                }
                mw.$(holder).append(frame);
            }
            else {
                mw.$(mw.tools.externalInstrument.register[name]).unbind('change');
            }
            mw.$(mw.tools.externalInstrument.register[name]).bind('change', function () {
                Array.prototype.shift.apply(arguments);
                callback.apply(this, arguments);
            });
            return mw.tools.externalInstrument.register[name];
        }
    };

    mw.tools.external = function (name, callback, holder, params) {
        return mw.tools.externalInstrument.init(name, callback, holder, params);
    };

    mw.tools._external = function (o) {
        return mw.tools.external(o.name, o.callback, o.holder, o.params);
    };



mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/extradata-form.js');

mw.getExtradataFormData = function (data, call) {

    if (data.form_data_required) {
        if (!data.form_data_module_params) {
            data.form_data_module_params = {};
        }
        data.form_data_module_params._confirm = 1
    }


    if (data.form_data_required_params) {
        data.form_data_module_params = $.extend({}, data.form_data_required_params,data.form_data_module_params);
    }

    if (data.form_data_module) {
        mw.loadModuleData(data.form_data_module, function (moduledata) {
            call.call(undefined, moduledata);
        }, null, data.form_data_module_params);
    }
    else {
        call.call(undefined, data.form_data_required);
    }
}

mw.extradataForm = function (options, data, func) {
    if (options._success) {
        options.success = options._success;
        delete options._success;
    }
    mw.getExtradataFormData(data, function (extra_html) {
        var form = document.createElement('form');
        mw.$(form).append(extra_html);

        if(data.form_data_required){
            mw.$(form).append('<hr><button type="submit" class="mw-ui-btn pull-right mw-ui-btn-invert">' + mw.lang('Submit') + '</button>');
        }



        form.action = options.url;
        form.method = options.type;
        form.__modal = mw.dialog({
            content: form,
            title: data.error,
            closeButton: false,
            closeOnEscape: false
        });
        mw.$('script', form).each(function() {
            eval($(this).text());
        });

        $(form.__modal).on('closedByUser', function () {
            if(options.onExternalDataDialogClose) {
                options.onExternalDataDialogClose.call();
            }
        });



        if(data.form_data_required) {
            mw.$(form).on('submit', function (e) {
                e.preventDefault();
                var when = form.$beforepost ? form.$beforepost : function () {};
                $.when(when()).then(function() {
                    var exdata = mw.serializeFields(form);
                    if(typeof options.data === 'string'){
                        var params = {};
                        options.data.split('&').forEach(function(a){
                            var c = a.split('=');
                            params[c[0]] = decodeURIComponent(c[1]);
                        });
                        options.data = params;
                    }
                    var isFormData = options.data.constructor.name === 'FormData';
                    if(isFormData) {
                        for (var i in exdata) {
                            options.data.set(i, exdata[i]);
                        }

                    } else {
                        for (var i in exdata) {
                            options.data[i] = exdata[i];
                        }
                    }
                    if(func) {
                        func(options);

                    } else {
                        mw.ajax(options);

                    }
                    form.__modal.remove();
                })



            });
        }
    });
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/fullscreen.js');

(function(expose){
   var fullscreen = {
    fullscreen: function (el) {
        if (el.requestFullScreen) {
            el.requestFullScreen();
        }
        else if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen();
        }
        else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        }
        else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    },
    isFullscreenAvailable: function () {
        var b = document.body;
        return 'requestFullScreen' in b || 'webkitRequestFullScreen' in b || 'mozRequestFullScreen' in b || 'msRequestFullscreen' in b || false;
    },
    cancelFullscreen: function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    },
    toggleFullscreen: function (el) {
        var infullscreen = document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || false;
        if (infullscreen) {
            mw.tools.cancelFullscreen();
        }
        else {
            mw.tools.fullscreen(el)
        }
    },
    fullscreenChange: function (c) {
        if ('addEventListener' in document) {
            document.addEventListener("fullscreenchange", function () {
                c.call(document.fullscreen);
            }, false);
            document.addEventListener("mozfullscreenchange", function () {
                c.call(document.mozFullScreen);
            }, false);
            document.addEventListener("webkitfullscreenchange", function () {
                c.call(document.webkitIsFullScreen);
            }, false);
        }
    }
   };
    Object.assign(expose, fullscreen);

})(mw.tools);


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/gallery.js');

(function(){


    var Gallery = function (array, startFrom) {
        startFrom = startFrom || 0;

        this.currentIndex = startFrom;

        this.data = array;
        var scope = this;

        this._template = function () {
            var el = document.createElement('div');
            el.className = 'mw-gallery';
            el.innerHTML = '' +
            '<div class="">' +
                '<div class="mw-gallery-overlay"></div>' +
                '<div class="mw-gallery-content"></div>' +
                '<div class="mw-gallery-prev"></div>' +
                '<div class="mw-gallery-next"></div>' +
                '<div class="mw-gallery-controls">' +
                    '<span class="mw-gallery-control-play"></span>' +
                    /*'<span class="mw-gallery-control-fullscreen"></span>' +*/
                    '<span class="mw-gallery-control-close"></span>' +
                '</div>' +
            '</div>';
            return el;
        };

        this.createSingle = function (item, i) {
            var el = document.createElement('div');
            el.className = 'mw-gallery-fullscreen-item mw-gallery-item-' + i + (startFrom === i ? ' active' : '');
            var desc = !item.description ? '' : '<div class="mw-gallery-item-description">'+item.description+'</div>';
            el.innerHTML = '<div class="mw-gallery-item-image"><img src="'+(item.image || item.url || item.src || item.filename)+'"></div>' + desc;
            this.container.appendChild(el);
            return el;
        };

        this.next = function () {
            this.currentIndex++;
            if(!this._items[this.currentIndex]) {
                this.currentIndex = 0;
            }
            this.goto(this.currentIndex);
        };

        this.prev = function () {
            this.currentIndex--;
            if(!this._items[this.currentIndex]) {
                this.currentIndex = this._items.length - 1;
            }
            this.goto(this.currentIndex);
        };

        this.goto = function (i) {
            if(i > -1 && i < this._items.length) {
                this.currentIndex = i;
                this._items.forEach(function (item, i){
                    item.classList.remove('active');
                    if(i === scope.currentIndex) {
                        item.classList.add('active');
                    }
                });
            }
        };

        this.paused = true;

        this.pause = function () {
            this.paused = true;
            clearTimeout(this.playInterval);
            mw.tools.loading(this.template, false, );
        };

        this.playInterval = null;
        this._play = function () {
            if(this.paused) return;
            mw.tools.loading(this.template, 100, 'slow');
            this.playInterval = setTimeout(function (){
                mw.tools.loading(scope.template, 'hide');
                scope.next();
                scope._play();
            },5000);
        };

        this.play = function () {
            this.next();
            this.paused = false;
            this._play();
        };

        this._items = [];

        this.createHandles = function () {
            this.template.querySelector('.mw-gallery-prev').onclick = function (){ scope.pause(); scope.prev(); };
            this.template.querySelector('.mw-gallery-next').onclick = function (){ scope.pause(); scope.next(); };
            this.template.querySelector('.mw-gallery-control-close').onclick = function (){ scope.remove(); };
            this.template.querySelector('.mw-gallery-control-play').onclick = function (){
                scope[scope.paused ? 'play' : 'pause']();
                this.classList[scope.paused ? 'remove' : 'add']('pause');
            };
        };

        this.createItems = function () {
            this.data.forEach(function (item, i ){
                scope._items.push(scope.createSingle(item, i));
            });
        };

        this.init = function () {
            this.template = this._template();
            document.body.appendChild(this.template);
            this.container = this.template.querySelector('.mw-gallery-content');
            this.createItems();
            this.createHandles();
        };

        this.remove = function () {
            this.template.remove();
        };

        this.init();
    };

    mw.gallery = function (array, startFrom){
        return new Gallery(array, startFrom);
    };

    // obsolate:
    mw.tools.gallery = {
        init: mw.gallery
    };
})();


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/helpers.js');

;(function(expose){
    var helpers = {
        fragment: function(){
            if(!this._fragment){
                this._fragment = document.createElement('div');
                this._fragment.style.visibility = 'hidden';
                this._fragment.style.position = 'absolute';
                this._fragment.style.width = '1px';
                this._fragment.style.height = '1px';
                document.body.appendChild(this._fragment);
            }
            return this._fragment;
        },
        _isBlockCache:{},
        isBlockLevel:function(node){
            if(!node || node.nodeType === 3){
                return false;
            }
            var name = node.nodeName;
            if(typeof this._isBlockCache[name] !== 'undefined'){
                return this._isBlockCache[name];
            }
            var test = document.createElement(name);
            this.fragment().appendChild(test);
            this._isBlockCache[name] = getComputedStyle(test).display === 'block';
            this.fragment().removeChild(test);
            return this._isBlockCache[name];
        },
        _isInlineCache:{},
        isInlineLevel:function(node){
            if(node.nodeType === 3){
                return false;
            }
            var name = node.nodeName;
            if(typeof this._isInlineCache[name] !== 'undefined'){
                return this._isInlineCache[name];
            }
            var test = document.createElement(name);
            this.fragment().appendChild(test);
            this._isInlineCache[name] = getComputedStyle(test).display === 'inline' && node.nodeName !== 'BR';
            this.fragment().removeChild(test);
            return this._isInlineCache[name];
        },
        elementOptions: function(el) {
            var opt = ( el.dataset.options || '').trim().split(','), final = {};
            if(!opt[0]) return final;
            $.each(opt, function(){
                var arr = this.split(':');
                var val = arr[1].trim();
                if(!val){

                }
                else if(val === 'true' || val === 'false'){
                    val = val === 'true';
                }
                else if(!/\D/.test(val)){
                    val = parseInt(val, 10);
                }
                final[arr[0].trim()] = val;
            });
            return final;
        },
        createAutoHeight: function() {
            if(window.thismodal && thismodal.iframe) {
                mw.tools.iframeAutoHeight(thismodal.iframe, 'now');
            }
            else if(mw.top().win.frameElement && mw.top().win.frameElement.contentWindow === window) {
                mw.tools.iframeAutoHeight(mw.top().win.frameElement, 'now');
            } else if(window.top !== window) {
                mw.top().$('iframe').each(function(){
                    try{
                        if(this.contentWindow === window) {
                            mw.tools.iframeAutoHeight(this, 'now');
                        }
                    } catch(e){}
                })
            }
        },
        collision: function(el1, el2){
            if(!el1 || !el2) return;
            el1 = mw.$(el1);
            el2 = mw.$(el2);
            var o1 = el1.offset();
            var o2 = el2.offset();
            o1.width = el1.width();
            o1.height = el1.height();
            o2.width = el2.width();
            o2.height = el2.height();
            return (o1.left < o2.left + o2.width  && o1.left + o1.width  > o2.left &&  o1.top < o2.top + o2.height && o1.top + o1.height > o2.top);
        },
        distance: function (x1, y1, x2, y2) {
            var a = x1 - x2;
            var b = y1 - y2;
            return Math.floor(Math.sqrt(a * a + b * b));
        },
        copy: function (value) {
            var tempInput = document.createElement("input");
            tempInput.style = "position: absolute; left: -1000px; top: -1000px";
            tempInput.value = value;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            mw.notification.success(mw.lang('Copied') + ': "' + value + '"');
        },
        cloneObject: function (object) {
            return jQuery.extend(true, {}, object);
        },
        constructions: function () {
            mw.$(".mw-image-holder").each(function () {
                var img = this.querySelector('img');
                if (img && img.src) {
                    mw.$(this).css('backgroundImage', 'url(' + img.src + ')');
                }
            });
        },
        isRtl: function (el) {
            //todo
            el = el || document.documentElement;
            return document.documentElement.dir === 'rtl';
        },
        isEditable: function (item) {
            var el = item;
            if (!!item.type && !!item.target) {
                el = item.target;
            }
            return mw.tools.parentsOrCurrentOrderMatchOrOnlyFirst(el, ['edit', 'module']);
        },
        eachIframe: function (callback, root, ignore) {
            root = root || document;
            var scope = this;
            ignore = ignore || [];
            var all = root.querySelectorAll('iframe'), i = 0;
            for (; i < all.length; i++) {
                if (mw.tools.canAccessIFrame(all[i]) && ignore.indexOf(all[i]) === -1) {
                    callback.call(all[i].contentWindow, all[i].contentWindow);
                    scope.eachIframe(callback, all[i].contentWindow.document);
                }
            }
        },
        eachWindow: function (callback, options) {
            options = options || {};
            var curr = window;
            callback.call(curr, curr);
            while (curr !== top) {
                this.eachIframe(function (iframeWindow) {
                    callback.call(iframeWindow, iframeWindow);
                }, curr.parent.document, [curr]);
                curr = curr.parent;
                callback.call(curr, curr);
            }
            this.eachIframe(function (iframeWindow) {
                callback.call(iframeWindow, iframeWindow);
            });
            if (window.opener !== null && mw.tools.canAccessWindow(opener)) {
                callback.call(window.opener, window.opener);
                this.eachIframe(function (iframeWindow) {
                    callback.call(iframeWindow, iframeWindow);
                }, window.opener.document);
            }
        },
        canAccessWindow: function (winObject) {
            var can = false;
            try {
                var doc = winObject.document;
                can = !!doc.body;
            } catch (err) {
            }
            return can;
        },
        canAccessIFrame: function (iframe) {
            var can = false;
            try {
                var doc = iframe.contentDocument || iframe.contentWindow.document;
                can = !!doc.body && !!doc.documentElement;
            } catch (err) {
            }
            return can;
        },
         createStyle: function (c, css, ins) {
            ins = ins || document.getElementsByTagName('head')[0];
            var style = mw.$(c)[0];
            if (!style) {
                style = document.createElement('style');
                ins.appendChild(style);
            }
            style.innerHTML = css;
            return style;
        },
        cssNumber: function (val) {
            var units = ["px", "%", "in", "cm", "mm", "em", "ex", "pt", "pc"];
            if (typeof val === 'number') {
                return val + 'px';
            }
            else if (typeof val === 'string' && parseFloat(val).toString() === val) {
                return val + 'px';
            }
            else {
                if (isNaN(parseFloat(val))) {
                    return '0px';
                }
                else {
                    return val;
                }
            }

        },
        isField: function (target) {
            var t = target.nodeName.toLowerCase();
            var fields = /^(input|textarea|select)$/i;
            return fields.test(t);
        },

        toggleCheckbox: function (node) {
            if (node === null || node === undefined) return false;
            node.checked = !node.checked;
            return node.checked;
        },
        jQueryFields: function (root) {
            if (typeof root === 'string') {
                root = document.querySelector(root);
            }
            if (typeof root === 'undefined' || root === null) return false;
            var allFields = "textarea, select, input[type='checkbox']:checked, input[type='color'], input[type='date'], input[type='datetime'], input[type='datetime-local'], input[type='email'], input[type='file'], input[type='hidden'], input[type='month'], input[type='number'], input[type='password'], input[type='radio']:checked, input[type='range'], input[type='search'], input[type='tel'], input[type='text'], input[type='time'], input[type='url'], input[type='week']";
            return mw.$(allFields, fields).not(':disabled');
        },
        toggle: function (who, toggler, callback) {
            who = mw.$(who);
            who.toggle();
            who.toggleClass('toggle-active');
            mw.$(toggler).toggleClass('toggler-active');
            mw.is.func(callback) ? callback.call(who) : '';
        },
        _confirm: function (question, callback) {
            var conf = confirm(question);
            if (conf && typeof callback === 'function') {
                callback.call(window);
            }
            return conf;
        },
        el_switch: function (arr, type) {
            if (type === 'semi') {
                mw.$(arr).each(function () {
                    var el = mw.$(this);
                    if (el.hasClass("semi_hidden")) {
                        el.removeClass("semi_hidden");
                    }
                    else {
                        el.addClass("semi_hidden");
                    }
                });
            }
            else {
                mw.$(arr).each(function () {
                    var el = mw.$(this);
                    if (el.css('display') === 'none') {
                        el.show();
                    }
                    else {
                        el.hide();
                    }
                });
            }
        },
        focus_on: function (el) {
            if (!$(el).hasClass('mw-focus')) {
                mw.$(".mw-focus").each(function () {
                    this !== el ? mw.$(this).removeClass('mw-focus') : '';
                });
                mw.$(el).addClass('mw-focus');
            }
        },
        scrollTo: function (el, callback, minus) {

            minus = minus || 0;
            if ($(el).length === 0) {
                return false;
            }
            if (typeof callback === 'number') {
                minus = callback;
            }
            mw.$('html,body').stop().animate({scrollTop: mw.$(el).offset().top - minus}, function () {
                typeof callback === 'function' ? callback.call(el) : '';
            });
        },
        accordion: function (el, callback) {
            var speed = 200;
            var container = el.querySelector('.mw-accordion-content');
            if (container === null) return false;
            var is_hidden = getComputedStyle(container).display === 'none';
            if (!$(container).is(":animated")) {
                if (is_hidden) {
                    mw.$(container).slideDown(speed, function () {
                        mw.$(el).addClass('active');
                        typeof callback === 'function' ? callback.call(el, 'visible') : '';
                    });
                }
                else {
                    mw.$(container).slideUp(speed, function () {
                        mw.$(el).removeClass('active');
                        typeof callback === 'function' ? callback.call(el, 'hidden') : '';
                    });
                }
            }
        },
        index: function (el, parent, selector) {
            el = mw.$(el)[0];
            selector = selector || el.tagName.toLowerCase();
            parent = parent || el.parentNode;
            var all;
            if (parent.constructor === [].constructor) {
                all = parent;
            }
            else {
                all = mw.$(selector, parent)
            }
            var i = 0, l = all.length;
            for (; i < l; i++) {
                if (el === all[i]) return i;
            }
        },

        highlight: function (el, color, speed1, speed2) {
            if (!el) return false;
            mw.$(el).stop();
            color = color || '#48AD79';
            speed1 = speed1 || 777;
            speed2 = speed2 || 777;
            var curr = window.getComputedStyle(el, null).backgroundColor;
            if (curr === 'transparent') {
                curr = '#ffffff';
            }
            mw.$(el).animate({backgroundColor: color}, speed1, function () {
                mw.$(el).animate({backgroundColor: curr}, speed2, function () {
                    mw.$(el).css('backgroundColor', '');
                });
            });
        },
        highlightStop: function (el) {
            mw.$(el).stop();
            mw.$(el).css('backgroundColor', '');
        },
        toCamelCase: function (str) {
            return str.replace(/(\-[a-z])/g, function (a) {
                return a.toUpperCase().replace('-', '');
            });
        },
        multihover: function () {
            var l = arguments.length, i = 1;
            var type = arguments[0].type;
            var check = ( type === 'mouseover' || type === 'mouseenter');
            for ( ; i < l; i++ ) {
                check ? mw.$(arguments[i]).addClass('hovered') : mw.$(arguments[i]).removeClass('hovered');
            }
        },
        listSearch: function (val, list) {
            val = val.trim().toLowerCase();
            if(!val) {
                $('li', list).show();
                return;
            }
            this.search(val, 'li', function (found) {
                if(found) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

            }, list);
        },
        search: function (string, selector, callback, root) {
            root = !!root ? $(root)[0] : mwd;
            if (!root) {
                return;
            }
            string = string.toLowerCase();
            var items;
            if (typeof selector === 'object') {
                items = selector;
            }
            else if (typeof selector === 'string') {
                items = root.querySelectorAll(selector);
            }
            else {
                return false;
            }
            var i = 0, l = items.length;
            for (; i < l; i++) {
                items[i].textContent.toLowerCase().contains(string) ? callback.call(items[i], true) : callback.call(items[i], false);
            }
        },
        ajaxIsSearching: false,
        ajaxSearcSetting: {
            limit: 10,
            keyword: '',
            order_by: 'updated_at desc',
            search_in_fields: 'title'
        },
        ajaxSearch: function (o, callback) {
            if (!mw.tools.ajaxIsSearching) {
                var obj = $.extend({}, mw.tools.ajaxSearcSetting, o);
                mw.tools.ajaxIsSearching = $.post(mw.settings.site_url + "api/get_content_admin", obj, function (data) {
                    if (typeof callback === 'function') {
                        callback.call(data, data);
                    }
                }).always(function () {
                    mw.tools.ajaxIsSearching = false
                });
            }
            return mw.tools.ajaxIsSearching;
        },
        getPostById: function (id, callback) {
            var config = {
                limit: 10,
                keyword: '',
                order_by: 'updated_at desc',
                search_in_fields: 'id',
                id: id
            };
            return this.ajaxSearch(config, callback);
        },
        iframeLinksToParent: function (iframe) {
            mw.$(iframe).contents().find('a').each(function () {
                var href = this.href;
                if (href.contains(mw.settings.site_url)) {
                    this.target = '_parent';
                }
            });
        },
        get_filename: function (s) {
            if (s.contains('.')) {
                var d = s.lastIndexOf('.');
                return s.substring(s.lastIndexOf('/') + 1, d < 0 ? s.length : d);
            }
            else {
                return undefined;
            }
        },
        is_field: function (obj) {
            if (obj === null || typeof obj === 'undefined' || obj.nodeType === 3) {
                return false;
            }
            if (!obj.nodeName) {
                return false;
            }
            var t = obj.nodeName.toLowerCase();
            if (t === 'input' || t === 'textarea' || t === 'select') {
                return true
            }
            return false;
        },
        getAttrs: function (el) {
            var attrs = el.attributes;
            var obj = {};
            for (var x in attrs) {
                if (attrs[x].nodeName) {
                    obj[attrs[x].nodeName] = attrs[x].nodeValue;
                }
            }
            return obj;
        },
        copyAttributes: function (from, to, except) {
            except = except || [];
            var attrs = mw.tools.getAttrs(from);
            if (mw.tools.is_field(from) && mw.tools.is_field(to)) to.value = from.value;
            for (var x in attrs) {
                ( $.inArray(x, except) == -1 && x != 'undefined') ? to.setAttribute(x, attrs[x]) : '';
            }
        },
        isEmptyObject: function (obj) {
            for (var a in obj) {
                if (obj.hasOwnProperty(a)) return false;
            }
            return true;
        },
        objLenght: function (obj) {
            var len = 0, x;
            if (obj.constructor === {}.constructor) {
                for ( x in obj ) {
                    len++;
                }
            }
            return len;
        },
        scaleTo: function (selector, w, h) {
            w = w || 800;
            h = h || 600;
            var is_percent = w.toString().contains("%") ? true : false;
            var item = mw.$(selector);
            if (item.hasClass('mw-scaleto') || w == 'close') {
                item.removeClass('mw-scaleto');
                item.removeAttr('style');
            }
            else {
                item.parent().height(item.height());
                item.addClass('mw-scaleto');
                if (is_percent) {
                    item.css({
                        width: w,
                        height: h,
                        left: ((100 - parseFloat(w)) / 2) + "%",
                        top: ((100 - parseFloat(h)) / 2) + "%"
                    });
                }
                else {
                    item.css({
                        width: w,
                        height: h,
                        marginLeft: -w / 2,
                        marginTop: -h / 2
                    });
                }
            }
        },
        getFirstEqualFromTwoArrays: function (a, b) {
            var ia = 0, ib = 0, la = a.length, lb = b.length;
            loop:
                for (; ia < la; ia++) {
                    var curr = a[ia];
                    for (; ib < lb; ib++) {
                        if (b[ib] == curr) {
                            return curr;
                        }
                    }
                }
        },
        has: function (el, what) {
            return el.querySelector(what) !== null;
        },
        html_info: function (html) {
            if (typeof mw._html_info === 'undefined') {
                mw._html_info = document.createElement('div');
                mw._html_info.id = 'mw-html-info';
                document.body.appendChild(mw._html_info);
            }
            mw.$(mw._html_info).html(html);
            return mw._html_info;
        },
        image_info: function (a, callback) {
            var img = document.createElement('img');
            img.className = 'semi_hidden';
            img.src = a.src;
            document.body.appendChild(img);
            img.onload = function () {
                callback.call({width: mw.$(img).width(), height: mw.$(img).height()});
                mw.$(img).remove();
            };
        },
        refresh_image: function (node) {
            node.src = mw.url.set_param('refresh_image', mw.random(), node.src);
            return node;
        },
        refresh: function (a) {
            if (a === null || typeof a === 'undefined') {
                return false;
            }
            if (a.src) {
                a.src = mw.url.set_param('mwrefresh', mw.random(), a.src);
            }
            else if (a.href) {
                a.href = mw.url.set_param('mwrefresh', mw.random(), a.href);
            }
        },
        getDiff: function (_new, _old) {
            var diff = {}, x, y;
            for (x in _new) {
                if (!x in _old || _old[x] != _new[x]) {
                    diff[x] = _new[x];
                }
            }
            for (y in _old) {
                if (typeof _new[y] === 'undefined') {
                    diff[y] = "";
                }
            }
            return diff;
        },
        parseHtml: function (html) {
            var doc = document.implementation.createHTMLDocument("");
            doc.body.innerHTML = html;
            return doc;
        },
        isEmpty: function (node) {
            return ( node.innerHTML.trim() ).length === 0;
        },
        isJSON: function (a) {
            if (typeof a === 'object') {
                if (a.constructor === {}.constructor) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (typeof a === 'string') {
                try {
                    JSON.parse(a);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            else {
                return false;
            }
        },
        toJSON: function (w) {
            if (typeof w === 'object' && mw.tools.isJSON(w)) {
                return w;
            }
            if (typeof w === 'string') {
                try {
                    var r = JSON.parse(w);
                }
                catch (e) {
                    var r = {"0": w};
                }
                return r;
            }
            if (typeof w === 'object' && w.constructor === [].constructor) {
                var obj = {}, i = 0, l = w.length;
                for (; i < l; i++) {
                    obj[i] = w[i];
                }
                return obj;
            }
        },
        mwattr: function (el, a, b) {
            if (!b && !!el) {
                var data = mw.$(el).dataset(a);
                if (!!$(el)[0].attributes) {
                    var attr = mw.$(el)[0].attributes[a];
                }

                if (data !== '') {
                    return data;
                }
                if (!!attr) {
                    return attr.value;
                }
                return false;
            }
            else {
                mw.$(el).dataset(a, b);
            }
        },
        disable: function (el, text, global) {
            text = text || mw.msg.loading + '...';
            global = global || false;
            var _el = mw.$(el);
            if (!_el.length) {
                return false;
            }
            if (!_el.hasClass("disabled")) {
                _el.addClass('disabled');
                if (_el[0].tagName !== 'INPUT') {
                    _el.dataset("text", _el.html());
                    _el.html(text);
                }
                else {
                    _el.dataset("text", _el.val());
                    _el.val(text);
                }
                if (global) mw.$(document.body).addClass("loading");
            }
            return el;
        },
        enable: function (el) {
            var _el = mw.$(el);
            if (!_el.length) {
                return false;
            }
            var text = _el.dataset("text");
            _el.removeClass("disabled");
            if (_el[0].tagName !== 'INPUT') {
                _el.html(text);
            }
            else {
                _el.val(text);
            }
            mw.$(document.body).removeClass("loading");
            return el;
        },
        prependClass: function (el, cls) {
            el.className = (cls + ' ' + el.className).trim()
        },
        inview: function (el) {
            var $el = mw.$(el);
            if ($el.length === 0) {
                return false;
            }
            var dt = mw.$(window).scrollTop(),
                db = dt + mw.$(window).height(),
                et = $el.offset().top;
            return (et <= db) && !(dt > ($el.height() + et));
        },
        wholeinview: function (el) {
            var $el = mw.$(el),
                dt = mw.$(window).scrollTop(),
                db = dt + mw.$(window).height(),
                et = $el.offset().top,
                eb = et + mw.$(el).height();
            return ((eb <= db) && (et >= dt));
        },
        preload: function (u, c) {
            var im = new Image();
            if (typeof c === 'function') {
                im.onload = function () {
                    c.call(u, im);
                }
            }
            im.src = u;
        },
        mapNodeValues: function (n1, n2) {
            if (!n1 || !n2) return false;
            var setValue1 = ((!!n1.type && n1.nodeName !== 'BUTTON') || n1.nodeName === 'TEXTAREA') ? 'value' : 'textContent';
            var setValue2 = ((!!n2.type && n2.nodeName !== 'BUTTON') || n2.nodeName === 'TEXTAREA') ? 'value' : 'textContent';
            var events = 'keyup paste';
            mw.$(n1).bind(events, function () {
                n2[setValue2] = n1[setValue1];
                mw.$(n2).trigger('change');
            });
            mw.$(n2).bind(events, function () {
                n1[setValue1] = n2[setValue2];
                mw.$(n1).trigger('change');
            });
        },
        copyEvents: function (from, to) {
            if (typeof $._data(from, 'events') === 'undefined') {
                return false;
            }
            $.each($._data(from, 'events'), function () {
                $.each(this, function () {
                    mw.$(to).bind(this.type, this.handler);
                });
            });
        },
        setTag: function (node, tag) {
            var el = document.createElement(tag);
            mw.tools.copyAttributes(node, el);
            while (node.firstChild) {
                el.appendChild(node.firstChild);
            }
            mw.tools.copyEvents(node, el);
            mw.$(node).replaceWith(el);
            return el;
        },

        module_settings: function (a, view, liveedit) {
            var opts = {};
            if (typeof liveedit === 'undefined') {
                opts.liveedit = true;
            }
            if (!!view) {
                opts.view = view;
            }
            else {
                opts.view = 'admin';
            }
            return mw.live_edit.showSettings(a, opts);
        },
        fav: function (a) {
            var canvas = document.createElement("canvas");
            canvas.width = 16;
            canvas.height = 16;
            var context = canvas.getContext("2d");
            context.fillStyle = "#EF3D25";
            context.fillRect(0, 0, 16, 16);
            context.font = "normal 10px Arial";
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = "white";
            context.fillText(a, 8, 8);
            var im = canvas.toDataURL();
            var l = document.createElement('link');
            l.className = 'mwfav';
            l.setAttribute('rel', 'icon');
            l.setAttribute('type', 'image/png');
            l.href = im;
            mw.$(".mwfav").remove();
            document.getElementsByTagName('head')[0].appendChild(l);
        },
        px2pt: function (px) {
            var n = parseInt(px, 10);
            if (isNaN(n)) {
                return false;
            }
            return Math.round(((3 / 4) * n));
        },
        matches: function (node, what) {
            if (node === 'init') {
                if (!!document.documentElement.matches) mw.tools.matchesMethod = 'matches';
                else if (!!document.documentElement.matchesSelector) mw.tools.matchesMethod = 'matchesSelector';
                else if (!!document.documentElement.mozMatchesSelector) mw.tools.matchesMethod = 'mozMatchesSelector';
                else if (!!document.documentElement.webkitMatchesSelector) mw.tools.matchesMethod = 'webkitMatchesSelector';
                else if (!!document.documentElement.msMatchesSelector) mw.tools.matchesMethod = 'msMatchesSelector';
                else if (!!document.documentElement.oMatchesSelector) mw.tools.matchesMethod = 'oMatchesSelector';
                else mw.tools.matchesMethod = undefined;
            }
            else {
                if (node === null) {
                    return false;
                }
                if (typeof node === 'undefined') {
                    return false;
                }
                if (node.nodeType !== 1) {
                    return false;
                }
                if (!!mw.tools.matchesMethod) {
                    return node[mw.tools.matchesMethod](what)
                }
                else {
                    var doc = document.implementation.createHTMLDocument("");
                    node = node.cloneNode(true);
                    doc.body.appendChild(node);
                    var all = doc.body.querySelectorAll(what),
                        l = all.length,
                        i = 0;
                    for (; i < l; i++) {
                        if (all[i] === node) {
                            return true;
                        }
                    }
                    return false;
                }
            }
        }
    }

    Object.assign(expose, helpers);
    expose.matches('init');

})(mw.tools);


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/iframe-tools.js');

mw.tools.createAutoHeight = function() {
    if(window.thismodal && thismodal.iframe) {
        mw.tools.iframeAutoHeight(thismodal.iframe);
    }
    else if(mw.top().win.frameElement && mw.top().win.frameElement.contentWindow === window) {
        mw.tools.iframeAutoHeight(mw.top().win.frameElement);
    } else if(window.top !== window) {
        mw.top().$('iframe').each(function(){
            try{
                if(this.contentWindow === window) {
                    mw.tools.iframeAutoHeight(this);
                }
            } catch(e){}
        })
    }
};

mw.tools.moduleFrame = function(type, template){
    return mw.dialogIframe({
        url: mw.external_tool('module_dialog') + '?module=' + type + (template ? ('&template=' + template) : ''),
        width: 532,
        height: 'auto',
        autoHeight:true,
        title: type,
        className: 'mw-dialog-module-settings',
        closeButtonAction: 'remove'
    });
};


mw.tools.iframeAutoHeight = function(frame, opt){

    opt = opt || {};
    opt.maxHeightWindowScroll = opt.maxHeightWindowScroll || null;

    frame = mw.$(frame)[0];
    if(!frame) return;

    var _detector = document.createElement('div');
    _detector.className = 'mw-iframe-auto-height-detector';
    _detector.id = mw.id();

    var insertDetector = function() {
        if(frame.contentWindow && frame.contentWindow.document && frame.contentWindow.document.body){
            var det = frame.contentWindow.document.querySelector('.mw-iframe-auto-height-detector');
            if(!det){
                frame.contentWindow.document.body.appendChild(_detector);
            } else if(det !== frame.contentWindow.document.body.lastChild){
                frame.contentWindow.document.body.appendChild(det);
            }
            if(frame.contentWindow.mw) {
                frame.contentWindow.mw._iframeDetector = _detector;
            }

        }
    };



    setTimeout(function(){
        insertDetector();
    }, 100);
    frame.style.minHeight = 0 + 'px';
    if (opt.maxHeightWindowScroll) {
        frame.style.maxHeight = opt.maxHeightWindowScroll;
        frame.style.overflow = 'auto';
        frame.scrolling="auto"
    } else {
        frame.scrolling="auto";
        frame.style.overflow = 'hidden';
    }
    mw.$(frame).on('load resize', function(){

        if(!mw.tools.canAccessIFrame(frame)) {
            console.log('Iframe can not be accessed.', frame);
            return;
        }
        if(!frame.contentWindow.document.body){
            return;
        }
        if(!!frame.contentWindow.document.querySelector('.mw-iframe-auto-height-detector')){
            return;
        }
        insertDetector();
        if (opt.maxHeightWindowScroll) {
            frame.style.maxHeight = opt.maxHeightWindowScroll;
            frame.style.overflow = 'auto';
            frame.scrolling="auto";
        } else {
            frame.scrolling="auto";
            frame.style.overflow = 'hidden';
        }
    });
    var offset = function () {
        return _detector.getBoundingClientRect().top;
    };
    frame._intPause = false;
    frame._int = setInterval(function(){
        if(!frame._intPause && frame.parentNode && frame.contentWindow && frame.contentWindow.document.body){
            var calc = offset() + _detector.offsetHeight;
            frame._currHeight = frame._currHeight || 0;
            if(calc && calc !== frame._currHeight ){
                frame._currHeight = calc;
                frame.style.height = Math.max(calc) + 'px';
                var scroll = Math.max(frame.contentWindow.document.documentElement.scrollHeight, frame.contentWindow.document.body.scrollHeight);
                if(scroll > frame._currHeight) {
                    frame._currHeight = scroll;
                    frame.style.height = scroll + 'px';
                }
                mw.$(frame).trigger('bodyResize');
            }
        } else if(!frame.parentElement){
            clearInterval(frame._int);
        }
        else {
            //clearInterval(frame._int);
        }
    }, 77);

};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/images.js');

mw.image = {
    isResizing: false,
    currentResizing: null,
    resize: {
        create_resizer: function () {
            if (!mw.image_resizer) {
                var resizer = document.createElement('div');
                resizer.className = 'mw-defaults mw_image_resizer';
                resizer.innerHTML = '<div id="image-edit-nav"><span onclick="mw.wysiwyg.media(\'#editimage\');" class="mw-ui-btn mw-ui-btn-medium mw-ui-btn-invert mw-ui-btn-icon image_change tip" data-tip="' + mw.msg.change + '"><span class="mdi mdi-image mdi-18px"></span></span><span class="mw-ui-btn mw-ui-btn-medium mw-ui-btn-invert mw-ui-btn-icon tip image_change" id="image-settings-button" data-tip="' + mw.msg.edit + '" onclick="mw.image.settings();"><span class="mdi mdi-pencil mdi-18px"></span></span></div>';
                document.body.appendChild(resizer);
                mw.image_resizer = resizer;
                mw.image_resizer_time = null;
                mw.image_resizer._show = function () {
                    clearTimeout(mw.image_resizer_time)
                    mw.$(mw.image_resizer).addClass('active')
                };
                mw.image_resizer._hide = function () {
                    clearTimeout(mw.image_resizer_time)
                    mw.image_resizer_time = setTimeout(function () {
                        mw.$(mw.image_resizer).removeClass('active')
                    }, 3000)
                };

                mw.$(resizer).on("click", function (e) {
                    if (mw.image.currentResizing[0].nodeName === 'IMG') {
                        mw.wysiwyg.select_element(mw.image.currentResizing[0])
                    }
                });
                mw.$(resizer).on("dblclick", function (e) {
                    mw.wysiwyg.media('#editimage');
                });
            }
        },
        prepare: function () {
            mw.image.resize.create_resizer();
            mw.$(mw.image_resizer).resizable({
                handles: "all",
                minWidth: 60,
                minHeight: 60,
                start: function () {
                    mw.image.isResizing = true;
                    mw.$(mw.image_resizer).resizable("option", "maxWidth", mw.image.currentResizing.parent().width());
                    mw.$(mw.tools.firstParentWithClass(mw.image.currentResizing[0], 'edit')).addClass("changed");
                },
                stop: function () {
                    mw.image.isResizing = false;
                    mw.drag.fix_placeholders();
                    mw.wysiwyg.change(mw.image.currentResizing[0])
                },
                resize: function () {
                    var offset = mw.image.currentResizing.offset();
                    mw.$(this).css(offset);
                },
                aspectRatio: 16 / 9
            });
            mw.image_resizer.mwImageResizerComponent = true;
            var all = mw.image_resizer.querySelectorAll('*'), l = all.length, i = 0;
            for (; i < l; i++) all[i].mwImageResizerComponent = true
        },
        resizerSet: function (el, selectImage) {
            selectImage = typeof selectImage === 'undefined' ? true : selectImage;
            /*  var order = mw.tools.parentsOrder(el, ['edit', 'module']);
             if(!(order.module > -1 && order.edit > order.module) && order.edit>-1){   */


            mw.$('.ui-resizable-handle', mw.image_resizer)[el.nodeName == 'IMG' ? 'show' : 'hide']()

            el = mw.$(el);
            var offset = el.offset();
            var parent = el.parent();
            var parentOffset = parent.offset();
            if(parent[0].nodeName !== 'A'){
                offset.top = offset.top < parentOffset.top ? parentOffset.top : offset.top;
                offset.left = offset.left < parentOffset.left ? parentOffset.left : offset.left;
            }
            var r = mw.$(mw.image_resizer);
            var width = el.outerWidth();
            var height = el.outerHeight();
            r.css({
                left: offset.left,
                top: offset.top,
                width: width,
                height: mw.tools.hasParentsWithClass(el[0], 'mw-image-holder') ? 1 : height
            });
            r.addClass("active");
            mw.$(mw.image_resizer).resizable("option", "alsoResize", el);
            mw.$(mw.image_resizer).resizable("option", "aspectRatio", width / height);
            mw.image.currentResizing = el;
            if (!el[0].contentEditable) {
                mw.wysiwyg.contentEditable(el[0], true);
            }

            if (selectImage) {
                if (el[0].parentNode.tagName !== 'A') {
                    mw.wysiwyg.select_element(el[0]);
                }
                else {
                    mw.wysiwyg.select_element(el[0].parentNode);
                }
            }
            if (document.getElementById('image-settings-button') !== null) {
                if (!!el[0].src && el[0].src.contains('userfiles/media/pixum/')) {
                    document.getElementById('image-settings-button').style.display = 'none';
                }
                else {
                    document.getElementById('image-settings-button').style.display = '';
                }
            }
            /* } */
        },
        init: function (selector) {
            mw.image_resizer == undefined ? mw.image.resize.prepare() : '';

            mw.on("ImageClick", function (e, el) {
                if (!mw.image.isResizing && !mw.isDrag && !mw.settings.resize_started && el.tagName === 'IMG') {
                    mw.image.resize.resizerSet(el);
                }
            })
        }
    },

    _isrotating: false,
    rotate: function (img_object, angle) {
        if (!mw.image.Rotator) {
            mw.image.Rotator = document.createElement('canvas');
            mw.image.Rotator.style.top = '-9999px';
            mw.image.Rotator.style.left = '-9999px';
            mw.image.Rotator.style.position = 'absolute';
            mw.image.RotatorContext = mw.image.Rotator.getContext('2d');
            document.body.appendChild(mw.image.Rotator);
        }
        if (!mw.image._isrotating) {
            mw.image._isrotating = true;
            img_object = img_object || document.querySelector("img.element-current");
            if (img_object === null) {
                return false;
            }
            mw.image.preload(img_object.src, function () {
                if (!img_object.src.contains("base64")) {
                    var currDomain = mw.url.getDomain(window.location.href);
                    var srcDomain = mw.url.getDomain(img_object.src);
                    if (currDomain !== srcDomain) {
                        mw.tools.alert("This action is allowed for images on the same domain.");
                        return false;
                    }
                }
                var angle = angle || 90;
                var image = mw.$(this);
                var w = this.naturalWidth;
                var h = this.naturalHeight;
                var contextWidth = w;
                var contextHeight = h;
                var x = 0;
                var y = 0;
                switch (angle) {
                    case 90:
                        contextWidth = h;
                        contextHeight = w;
                        y = -h;
                        break;
                    case 180:
                        x = -w;
                        y = -h;
                        break;
                    case 270:
                        contextWidth = h;
                        contextHeight = w;
                        x = -w;
                        break;
                    default:
                        contextWidth = h;
                        contextHeight = w;
                        y = -h;
                }
                mw.image.Rotator.setAttribute('width', contextWidth);
                mw.image.Rotator.setAttribute('height', contextHeight);
                mw.image.RotatorContext.rotate(angle * Math.PI / 180);
                mw.image.RotatorContext.drawImage(img_object, x, y);
                var data = mw.image.Rotator.toDataURL("image/png");
                img_object.src = data;
                mw.image._isrotating = false;
             });
        }
    },
    grayscale: function (node) {
        var node = node || document.querySelector("img.element-current");
        if (node === null) {
            return false;
        }
        mw.image.preload(node.src, function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            ctx.drawImage(node, 0, 0);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (var y = 0; y < imgPixels.height; y++) {
                for (var x = 0; x < imgPixels.width; x++) {
                    var i = (y * 4) * imgPixels.width + x * 4; //Why is this multiplied by 4?
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }
            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
            node.src = canvas.toDataURL();
        })
    },
    vr: [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
    vg: [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
    vb: [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199],
    vintage: function (node) {
        var node = node || document.querySelector("img.element-current");
        if (node === null) {
            return false;
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        mw.image.preload(node.src, function (w, h) {
            canvas.width = w;
            canvas.height = h;
            ctx.drawImage(node, 0, 0);
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height), l = imageData.data.length, i = 0;
            for (; i < l; i += 4) {
                imageData.data[i] = mw.image.vr[imageData.data[i]];
                imageData.data[i + 1] = mw.image.vg[imageData.data[i + 1]];
                imageData.data[i + 2] = mw.image.vb[imageData.data[i + 2]];
                if (noise > 0) {
                    var noise = Math.round(noise - Math.random() * noise), j = 0;
                    for (; j < 3; j++) {
                        var iPN = noise + imageData.data[i + j];
                        imageData.data[i + j] = (iPN > 255) ? 255 : iPN;
                    }
                }
            }
            ctx.putImageData(imageData, 0, 0);
            node.src = canvas.toDataURL();
            mw.$(canvas).remove()
        });
    },
    _dragActivated: false,
    _dragcurrent: null,
    _dragparent: null,
    _dragcursorAt: {x: 0, y: 0},
    _dragTxt: function (e) {
        if (mw.image._dragcurrent !== null) {
            mw.image._dragcursorAt.x = e.pageX - mw.image._dragcurrent.offsetLeft;
            mw.image._dragcursorAt.y = e.pageY - mw.image._dragcurrent.offsetTop;
            var x = e.pageX - mw.image._dragparent.offsetLeft - mw.image._dragcurrent.startedX - mw.image._dragcursorAt.x;
            var y = e.pageY - mw.image._dragparent.offsetTop - mw.image._dragcurrent.startedY - mw.image._dragcursorAt.y;
            mw.image._dragcurrent.style.top = y + 'px';
            mw.image._dragcurrent.style.left = x + 'px';
        }
    },
    preloadForAll: function (array, eachCall, callback) {
        var size = array.length, i = 0, count = 0;
        for (; i < size; i++) {
            mw.image.preload(array[i], function (imgWidth, imgHeight) {
                count++;
                if(eachCall) {
                    eachCall.call(this, imgWidth, imgHeight)
                }
                if (count === size) {
                    if (!!callback) callback.call()
                }
            })
        }
    },
    preloadAll: function (array, callback) {
        var size = array.length, i = 0, count = 0;
        for (; i < size; i++) {
            mw.image.preload(array[i], function () {
                count++;
                if (count === size) {
                    callback.call()
                }
            })
        }
    },
    preload: function (url, callback) {
        var img;
        if (typeof window.chrome === 'object') {
            var img = new Image();
        }
        else {
            img = document.createElement('img')
        }
        img.className = 'semi_hidden';
        img.src = url;
        img.onload = function () {
            setTimeout(function () {
                if (typeof callback === 'function') {
                    callback.call(img, img.naturalWidth, img.naturalHeight);
                }
                mw.$(img).remove();
            }, 33);
        }
        img.onerror = function () {
            setTimeout(function () {
                if (typeof callback === 'function') {
                    callback.call(img, 0, 0, 'error');
                }
            }, 33);
        }
        document.body.appendChild(img);
    },
    description: {
        add: function (text) {
            var img = document.querySelector("img.element-current");
            img.title = text;
        },
        get: function () {
            return document.querySelector("img.element-current").title;
        },
        init: function (id) {
            var area = mw.$(id);
            area.hover(function () {
                area.addClass("desc_area_hover");
            }, function () {
                area.removeClass("desc_area_hover");
            });
            var curr = mw.image.description.get();
            if (!area.hasClass("inited")) {
                area.addClass("inited");
                area.bind("keyup change paste", function () {
                    var val = mw.$(this).val();
                    mw.image.description.add(val);
                });
            }
            area.val(curr);
            area.show();
        }
    },
    settings: function () {
        return mw.dialogIframe({
            url: 'imageeditor',
            template: "mw_modal_basic",
            overlay: true,
            width: '600',
            height: "auto",
            autoHeight: true,
            name: 'mw-image-settings-modal'
        });
    }
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/jquery.tools.js');

$.fn.dataset = function (dataset, val) {
    var el = this[0];
    if (el === undefined) return false;
    var _dataset = !dataset.contains('-') ? dataset : mw.tools.toCamelCase(dataset);
    if (!val) {
        var dataset = !!el.dataset ? el.dataset[_dataset] : mw.$(el).attr("data-" + dataset);
        return dataset !== undefined ? dataset : "";
    }
    else {
        !!el.dataset ? el.dataset[_dataset] = val : mw.$(el).attr("data-" + dataset, val);
        return mw.$(el);
    }
};

$.fn.reload_module = function (c) {
    return this.each(function () {
        //   if($(this).hasClass("module")){
        (function (el) {
            mw.reload_module(el, function () {
                if (typeof(c) != 'undefined') {
                    c.call(el, el)
                }
            })
        })(this)
        //   }
    })
};


    $.fn.getDropdownValue = function () {
        return this.dataset("value") || mw.$('.active', this).attr('value');
    };
    $.fn.setDropdownValue = function (val, triggerChange, isCustom, customValueToDisplay) {

        var isCustom = isCustom || false;
        var triggerChange = triggerChange || false;
        var isValidOption = false;
        var customValueToDisplay = customValueToDisplay || false;
        var el = this;
        if (isCustom) {
            var isValidOption = true;
            el.dataset("value", val);
            triggerChange ? el.trigger("change") : '';
            var valel = mw.$(".mw-dropdown-val", el);
            var method = valel[0].type ? 'val' : 'html';
            if (!!customValueToDisplay) {
                valel[method](customValueToDisplay);
            }
            else {
                valel[method](val);
            }
        }
        else {
            mw.$("[value]", el).each(function () {
                if (this.getAttribute('value') == val) {
                    el.dataset("value", val);
                    var isValidOption = true;
                    var html = !!this.getElementsByTagName('a')[0] ? this.getElementsByTagName('a')[0].textContent : this.innerText;
                    mw.$(".mw-dropdown-val", el[0]).html(html);
                    if (triggerChange === true) {
                        el.trigger("change")
                    }
                    return false;
                }
            });
        }
        this.dataset("value", val);
        //    }, 100);
    };
    $.fn.commuter = function (a, b) {
        if (a === undefined) {
            return false
        }
        var b = b || function () {
            };
        return this.each(function () {
            if ((this.type === 'checkbox' || this.type === 'radio') && !this.cmactivated) {
                this.cmactivated = true;
                mw.$(this).bind("change", function () {
                    this.checked === true ? a.call(this) : b.call(this);
                });
            }
        });
    };



$.fn.visible = function () {
    return this.css("visibility", "visible").css("opacity", "1");
};
$.fn.visibilityDefault = function () {
    return this.css("visibility", "").css("opacity", "");
};
$.fn.invisible = function () {
    return this.css("visibility", "hidden").css("opacity", "0");
};

$.fn.mwDialog = function(conf){
    var el = this[0];
    var isTemplate = el.nodeName === 'TEMPLATE';

    var options = mw.tools.elementOptions(el);
    var id = mw.id('mwDialog-');
    var idEl = mw.id('mwDialogTemp-');
    var defaults = {
        height: 'auto',
        autoHeight: true,
        width: 'auto'
    };
    var settings = $.extend({}, defaults, options, conf, {closeButtonAction: 'remove'});
    if(conf === 'close' || conf === 'hide' || conf === 'remove'){
        if(el._dialog){
            el._dialog.remove();
        }
        return;
    }
    $(el).before('<mw-dialog-temp id="'+idEl+'"></mw-dialog-temp>');
    var dialog = mw.dialog(settings);
    el._dialog = dialog;
    if(isTemplate) {
        dialog.dialogContainer.innerHTML = el.innerHTML;

    } else {
        dialog.dialogContainer.appendChild(el);

    }
    $(el).show();
    if(settings.width === 'auto'){
        dialog.width($(el).width);
        dialog.center($(el).width);
    }
    $(dialog).on('BeforeRemove', function(){
        mw.$('#' + idEl).replaceWith(el);
        $(el).hide();
        el._dialog = null;
    });
    return this;
};

mw.ajax = function (options) {
    var xhr = $.ajax(options);
    return xhr;
};

mw.ajax = $.ajax;

jQuery.each(["xhrGet", "xhrPost"], function (i, method) {
    mw[method] = function (url, data, callback, type) {
        if (jQuery.isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
        }
        return mw.ajax(jQuery.extend({
            url: url,
            type: i == 0 ? 'GET' : 'POST',
            dataType: type,
            data: data,
            success: callback
        }, jQuery.isPlainObject(url) && url));
    };
});


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/loading.js');

mw.tools.progressDefaults = {
    skin: 'mw-ui-progress',
    action: mw.msg.loading + '...',
    progress: 0
};

mw.tools.progress = function (obj) {
    if (typeof obj.element === 'string') {
        obj.element = mw.$(obj.element)[0];
    }
    if (obj.element === null || !obj.element) return false;
    if (obj.element.querySelector('.mw-ui-progress-bar')) {
        obj.element.progressOptions.show()
        return obj.element.progressOptions;
    }
    obj = $.extend({}, mw.tools.progressDefaults, obj);
    if(obj.progress > 100 ) {
        obj.progress = 100;
    }
    if(obj.progress < 0 ) {
        obj.progress = 0;
    }
    var progress = document.createElement('div');
    progress.className = obj.skin;
    progress.innerHTML = '<div class="mw-ui-progress-bar" style="width: ' + obj.progress + '%;"></div><div class="mw-ui-progress-info">' + obj.action + '</div><span class="mw-ui-progress-percent">'+obj.progress+'%</span>';
    progress.progressInfo = obj;
    var options = {
        progress: progress,
        show: function () {
            this.progress.style.display = '';
        },
        hide: function () {
            this.progress.style.display = 'none';
        },
        remove: function () {
            progress.progressInfo.element.progressOptions = undefined;
            mw.$(this.progress).remove();
        },
        set: function (v, action) {
            if (v > 100) {
                v = 100;
            }
            if (v < 0) {
                v = 0;
            }
            action = action || this.progress.progressInfo.action;
            mw.$('.mw-ui-progress-bar', this.progress).css('width', v + '%');
            mw.$('.mw-ui-progress-percent', this.progress).html(v + '%');
            progress.progressInfo.element.progressOptions.show();
        }
    };
    progress.progressOptions = obj.element.progressOptions = options;
    obj.element.appendChild(progress);
    return options;
};

mw.tools.loading = function (element, progress, speed) {
    /*

     progress:number 0 - 100,
     speed:string, -> 'slow', 'normal, 'fast'

     mw.tools.loading(true) -> slowly animates to 95% on body
     mw.tools.loading(false) -> fast animates to 100% on body

     */
    function set(el, progress, speed) {
        speed = speed || 'normal';
        mw.tools.removeClass(el, 'mw-progress-slow');
        mw.tools.removeClass(el, 'mw-progress-normal');
        mw.tools.removeClass(el, 'mw-progress-fast');
        mw.tools.addClass(el, 'mw-progress-' + speed);
        element.__loadingTime = setTimeout(function () {
            el.querySelector('.mw-progress-index').style.width = progress + '%';
        }, 10)

    }


    if (typeof element === 'boolean') {
        progress = !!element;
        element = document.body;
    }
    if (typeof element === 'number') {
        progress = element;
        element = document.body;
    }
    if (element === document || element === document.documentElement) {
        element = document.body;
    }
    element = mw.$(element)[0]
    if (element === null || !element) return false;
    if (element.__loadingTime) {
        clearTimeout(element.__loadingTime)
    }
    mw.require('css_parser.js')

    var isLoading = mw.tools.hasClass(element, 'mw-loading');
    var el = element.querySelector('.mw-progress');

    if (!el) {
        el = document.createElement('div');
        el.className = 'mw-progress';
        el.innerHTML = '<div class="mw-progress-index"></div>';
        if (element === document.body) el.style.position = 'fixed';
        element.appendChild(el);
    }
    if (progress === 'hide') {
        el.remove();
        return;
    }
    var pos = mw.CSSParser(element).get.position();
    if (pos === 'static') {
        element.style.position = 'relative';
    }
    if (progress) {
        if (progress === true) {
            set(el, 95, speed || 'slow')
        }
        else if (typeof progress === 'number') {
            progress = progress <= 100 ? progress : 100;
            progress = progress >= 0 ? progress : 0;
            set(el, progress, speed)
        }
    }
    else {
        if (el) {
            set(el, 100, speed || 'fast')
        }
        element.__loadingTime = setTimeout(function () {
            mw.$(element).removeClass('mw-loading-defaults mw-loading');
            mw.$(el).remove()
        }, 700)
    }
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/loops.js');

(function(){
    var loopTools = {
       loop: {/* Global index for MW loops */},
        stopLoop: function (loop) {
            mw.tools.loop[loop] = false;
        },
        foreachParents: function (el, callback) {
            if (!el) return false;
            var index = mw.random();
            mw.tools.loop[index] = true;
            var _curr = el.parentNode;
            var count = -1;
            if (_curr !== null && _curr !== undefined) {
                var _tag = _curr.tagName;
                while (_tag !== 'BODY') {
                    count++;
                    var caller = callback.call(_curr, index, count);
                    _curr = _curr.parentNode;
                    if (caller === false || _curr === null || _curr === undefined || !mw.tools.loop[index]) {
                        delete mw.tools.loop[index];
                        break;
                    }
                    _tag = _curr.tagName;
                }
            }
        },
        foreachChildren: function (el, callback) {
            if (!el) return false;
            var index = mw.random();
            mw.tools.loop[index] = true;
            var _curr = el.firstChild;
            var count = -1;
            if (_curr !== null && _curr !== undefined) {
                while (_curr.nextSibling !== null) {
                    if (_curr.nodeType === 1) {
                        count++;
                        var caller = callback.call(_curr, index, count);
                        _curr = _curr.nextSibling;
                        if (caller === false || _curr === null || _curr === undefined || !mw.tools.loop[index]) {
                            delete mw.tools.loop[index];
                            break
                        }
                        var _tag = _curr.tagName;
                    }
                    else {
                        _curr = _curr.nextSibling;
                    }
                }
            }
        }
    };
    Object.assign(mw.tools, loopTools);
})();


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/modules-dialogs.js');

(function(){
    var systemDialogs = {
        moduleFrame: function(type, params, autoHeight){
            if(typeof autoHeight === 'undefined') {
                autoHeight = true;
            }
            params = params || {};
            if(!type) return;

            var frame = document.createElement('iframe');
            frame.className = 'mw-editor-frame';
            frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            frame.allowFullscreen = true;
            frame.scrolling = "auto";
            frame.width = "100%";
            frame.frameBorder = "0";
            frame.src = mw.external_tool('module') + '?type=' + type + '&params=' + $.param(params).split('&').join(',');
            if(autoHeight) {
                mw.tools.iframeAutoHeight(frame)
            }
            return frame;
        },
          confirm_reset_module_by_id: function (module_id, cb) {
            var result = confirm("Are you sure you want to reset this module?");
            if (result) {
            var is_a_preset = mw.$('#'+module_id).attr('data-module-original-id');
            var is_a_preset_attrs = mw.$('#'+module_id).attr('data-module-original-attrs');
            if(is_a_preset){
                var orig_attrs_decoded = JSON.parse(window.atob(is_a_preset_attrs));
                if (orig_attrs_decoded) {
                    mw.$('#'+module_id).removeAttr('data-module-original-id');
                    mw.$('#'+module_id).removeAttr('data-module-original-attrs');
                    mw.$('#'+module_id).attr(orig_attrs_decoded).reload_module();

                    if(  mw.top().win.module_settings_modal_reference_preset_editor_thismodal ){
                        mw.top().win.module_settings_modal_reference_preset_editor_thismodal.remove();
                    }
                 }
                 return;
            }

            var data = {};
            data.modules_ids = [module_id];

            var childs_arr = [];
            mw.$('#'+module_id).andSelf().find('.edit').each(function (i) {
                var some_child = {};
                mw.tools.removeClass(this, 'changed')
                some_child.rel = mw.$(this).attr('rel');
                some_child.field = mw.$(this).attr('field');
                childs_arr.push(some_child);
            });


          mw.$('#'+module_id).andSelf().find('.module').each(function (i) {

              var some_child = mw.$(this).attr('id');

              data.modules_ids.push(some_child);

          });

            window.mw.on.DOMChangePause = true;
            var done = 0, alldone = 1;

            if (childs_arr.length) {
                alldone++;
                $.ajax({
                    type: "POST",
                   // dataType: "json",
                    //processData: false,
                    url: mw.settings.api_url + "content/reset_edit",
                    data: {reset:childs_arr}
                  //  success: success,
                  //  dataType: dataType
                }).always(function (){
                    done++;
                    if(done === alldone) {
                        if(cb){
                            cb.call()
                        }
                    }
                });
           }


           //data-module-original-attrs

            $.ajax({
                type: "POST",
                // dataType: "json",
                //processData: false,
                url: mw.settings.api_url + "content/reset_modules_settings",
                data: data,
                success: function(){

                    setTimeout(function () {


                        mw.$('#'+module_id).removeAttr('data-module-original-id');
                        mw.reload_module('#'+module_id);
                        window.mw.on.DOMChangePause = false;

                    }, 1000);
                    done++;
                    if(done === alldone) {
                        if(cb){
                            cb.call()
                        }
                    }

                 },
            });
        }
              return result;
    },
    open_reset_content_editor: function (root_element_id) {

        var src = mw.settings.site_url + 'api/module?id=mw_global_reset_content_editor&live_edit=true&module_settings=true&type=editor/reset_content&autosize=true';

        if(typeof(root_element_id) != 'undefined') {
            var src = src + '&root_element_id='+root_element_id;
        }

        // mw.dialogIframe({
        var modal = mw.dialogIframe({
            url: src,
            // width: 500,
            // height: mw.$(window).height() - (2.5 * mw.tools.TemplateSettingsModalDefaults.top),
            name: 'mw-reset-content-editor-front',
            title: 'Reset content',
            template: 'default',
            center: false,
            resize: true,
            autosize: true,
            autoHeight: true,
            draggable: true
        });
    },
    open_global_module_settings_modal: function (module_type, module_id, modalOptions, additional_params) {


        var params = {};
        params.id = module_id;
        params.live_edit = true;
        params.module_settings = true;
        params.type = module_type;
        params.autosize = false;

        var params_url = $.extend({}, params, additional_params);

        var src = mw.settings.site_url + "api/module?" + json2url(params_url);


        modalOptions = modalOptions || {};

        var defaultOpts = {
            url: src,
            // width: 500,
            height: 'auto',
            autoHeight: true,
            name: 'mw-module-settings-editor-front',
            title: 'Settings',
            template: 'default',
            center: false,
            resize: true,
            draggable: true
        };

        var settings = $.extend({}, defaultOpts, modalOptions);

        // return mw.dialogIframe(settings);
        return mw.top().dialogIframe(settings);
    },
    open_module_modal: function (module_type, params, modalOptions) {

        var id = mw.id('module-modal-');
        var id_content = id + '-content';
        modalOptions = modalOptions || {};

        var settings = $.extend({}, {
            content: '<div class="module-modal-content" id="' + id_content + '"></div>',
            id: id
        }, modalOptions, {skin: 'default'});

        var xhr = false;
        var openiframe = false;
        if (typeof (settings.iframe) != 'undefined' && settings.iframe) {
            openiframe = true;
        }
        if (openiframe) {

            var additional_params = {};
            additional_params.type = module_type;
            var params_url = $.extend({}, params, additional_params);
            var src = mw.settings.site_url + "api/module?" + json2url(params_url);


            var settings = {
                url: src,
                name: 'mw-module-settings-editor-front',
                title: 'Settings',
                center: false,
                resize: true,
                draggable: true,
                height:'auto',
                autoHeight: true
            };
            return mw.top().dialogIframe(settings);

        } else {
            delete settings.skin;
            delete settings.template;
            settings.height = 'auto';
            settings.autoHeight = true;
            settings.encapsulate = false;
            var modal = mw.dialog(settings);
            xhr = mw.load_module(module_type, '#' + id_content, function(){
                setTimeout(function(){
                    modal.center();
                },333)
            }, params);
        }


        return {
            xhr: xhr,
            modal: modal,
        }
    }
    };

    for (var i in systemDialogs) {
        mw.tools[i] = systemDialogs[i];
    }
})()


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/native-notification.js');

mw.tools.notification = function (body, tag, icon) {
    if (!body) return;
    var n = window.Notification || window.webkitNotification || window.mozNotification;
    if (typeof n == 'undefined') {
        return false;
    }
    if (n.permission == 'granted') {
        new n("MW Update", {
            tag: tag || "Microweber",
            body: body,
            icon: icon || mw.settings.includes_url + "img/logomark.png"
        });
    }
    else if (n.permission == 'default') {
        n.requestPermission(function (result) {

            if (result == 'granted') {
                return mw.tools.notification(body, tag, icon)
            }
            else if (result == 'denied') {
                mw.notification.error('Notifications are blocked')
            }
            else if (result == 'default') {
                mw.notification.warn('Notifications are canceled')

            }
        });
    }
}


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/notification.js');



var errorsHandlePrev = [];
mw.errorsHandle = function (obj) {
    while (errorsHandlePrev.length) {
        errorsHandlePrev[errorsHandlePrev.length-1].remove();
        errorsHandlePrev.pop();
    }

    if(!obj) return;
    if(obj.status === 401) {

        mw.session.checkPause = false;
        mw.session.checkPauseExplicitly = false;
        mw.session.logRequest();

    }
    obj.errors = obj.errors || obj.form_errors;
    if(!obj.errors) {
        $('.invalid-feedback').hide();
        $('.valid-feedback').hide();
    }
    if(obj.errors) {
        var html = [];
        for (var key in obj.errors) {
            var bsel = $('.custom-file-input[name="' + key + '"], .form-control[name="' + key + '"]').last()[0]
            if(!bsel) {
                var err = obj.errors[key].map ? obj.errors[key][0] : obj.errors[key];
                html.push(err);
            } else if ( bsel ) {
                var next = bsel.nextElementSibling;
                if (!next || !next.classList.contains('invalid-feedback')) {
                    next = document.createElement('div');
                    next.classList.add('invalid-feedback');
                    bsel.parentNode.insertBefore(next, bsel.nextSibling);
                    errorsHandlePrev.push(next);
                }
                next.style.display = 'block';

                $(next).css('display','block');
                next.innerHTML = obj.errors[key];
            }
        }
        if (html.length) {
     
            mw.notification.warning(html.join('<br>'))
        }
    }
    if (obj.errors && obj.message) {
        mw.notification.warning(obj.message);
    }
};
mw.notification = {
    msg: function (data, timeout, alert) {
        timeout = timeout || 1000;
        alert = alert || false;
        if (data) {
            if (data.success) {
                if (alert) {
                    mw.notification.success(data.success, timeout);
                }
                else {
                    mw.alert(data.success);
                }
            }
            if (data.error) {
                mw.notification.error(data.error, timeout);
            }
            if (data.warning) {
                mw.notification.warning(data.warning, timeout);
            }
        }
    },
    build: function (type, text, name) {
        var div = document.createElement('div');
        div.id = name;
        div.className = 'mw-notification mw-' + type;
        div.innerHTML = '<div>' + text + '</div>';
        return div;
    },
    append: function (type, text, timeout, name) {

        if(typeof type === 'object') {
            text = type.text;
            timeout = type.timeout;
            name = type.name;
            type = type.type;
        }
        name = name || 'default';
        name = 'mw-notification-id-' + name;
        if(document.getElementById(name)) {
            document.getElementById(name).remove();
        }
        timeout = timeout || 1000;
        var div = mw.notification.build(type, text, name);
        if (typeof mw.notification._holder === 'undefined') {
            mw.notification._holder = document.createElement('div');
            mw.notification._holder.id = 'mw-notifications-holder';
            document.body.appendChild(mw.notification._holder);
        }
        mw.notification._holder.appendChild(div);
        var w = mw.$(div).outerWidth();
        mw.$(div).css("marginLeft", -(w / 2));
        setTimeout(function () {
            div.style.opacity = 0;
            setTimeout(function () {
                mw.$(div).remove();
            }, 1000);
        }, timeout);
    },
    success: function (text, timeout, name) {
        if ( typeof text === 'object' ) {
            timeout = text.timeout;
            name = text.name;
            text = text.text;
        }
        timeout = timeout || 1000;
        mw.notification.append('success', text, timeout, name);
    },
    error: function (text, timeout, name) {
        if ( typeof text === 'object' ) {
            timeout = text.timeout;
            name = text.name;
            text = text.text;
        }
        timeout = timeout || 1000;
        mw.notification.append('error', text, timeout, name);
    },
    warning: function (text, timeout, name) {
        if ( typeof text === 'object' ) {
            timeout = text.timeout;
            name = text.name;
            text = text.text;
        }
        timeout = timeout || 1000;
        mw.notification.append('warning', text, timeout, name);
    }
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/objects.js');

mw.object = {
    extend: function () {
        var extended = {};
        var deep = false;
        var i = 0;
        var l = arguments.length;

        if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
            deep = arguments[0];
            i++;
        }
        var merge = function (obj) {
            for ( var prop in obj ) {
                if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                    if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                        extended[prop] = mw.object.extend( true, extended[prop], obj[prop] );
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        for ( ; i < l; i++ ) {
            var obj = arguments[i];
            merge(obj);
        }
        return extended;

    }
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/responsive.js');

mw.responsive = {
    table: function (selector, options) {
        options = options || {};
        mw.$(selector).each(function () {
            var cls = 'responsive-table-' + mw.random();
            mw.tools.addClass(this, cls);
            var el = mw.$(this);
            el.wrap('<div class="mw-responsive-table-wrapper"></div>');
            if (options.minWidth) {
                el.css('minWidth', options.minWidth)
            }
            if (!el.hasClass('mw-mobile-table')) {
                el.addClass('mw-mobile-table');
            }
        });
    }
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/select.js');

/*
    options.data = [
        {
            title: string,
            value: any,
            icon?: string,
            selected?: boolean
        }
    ]

 */


mw.Select = function(options) {
    var defaults = {
        data: [],
        skin: 'default',
        multiple: false,
        autocomplete: false,
        mobileAutocomplete: false,
        showSelected: false,
        document: document,
        size: 'normal',
        color: 'default',
        dropMode: 'over', // 'over' | 'push'
        placeholder: mw.lang('Select'),
        tags: false, // only if multiple is set to true,
        ajaxMode: {
            paginationParam: 'page',
            searchParam: 'keyword',
            endpoint: null,
            method: 'get'
        }
    };
    options  = options || {};
    this.settings = $.extend({}, defaults, options);

    var _e = {};
    this.on = function (e, f) { _e[e] ? _e[e].push(f) : (_e[e] = [f]); return this; };
    this.dispatch = function (e, f) { _e[e] ? _e[e].forEach(function (c){ c.call(this, f); }) : ''; return this; };

    if(this.settings.ajaxMode && !this.settings.ajaxMode.endpoint){
        this.settings.ajaxMode = false;
    }

    this.$element = $(this.settings.element).eq(0);
    this.element = this.$element[0];
    if(!this.element) {
        return;
    }

    this._rootInputMode = this.element.nodeName === 'INPUT';

    if(this.element._mwSelect) {
        return this.element._mwSelect;
    }

    var scope = this;
    this.document = this.settings.document;

    this._value = null;


    this.getLabel = function(item) {
        return item.title || item.name || item.label || item.value;
    };

    this._loading = false;

    this._page = 1;

    this.nextPage = function () {
        this._page++;
    };

    this.page = function (state) {
        if (typeof state === 'undefined') {
            return this._page;
        }
        this._page = state;
    };

    this.loading = function (state) {
        if (typeof state === 'undefined') {
            return this._state;
        }
        this._state = state;
        mw.tools.classNamespaceDelete(this.root, 'mw-select-loading-');
        mw.tools.addClass(this.root, 'mw-select-loading-' + state);
    };

    this.xhr = null;

    this.ajaxFilter = function (val, callback) {
        if (this.xhr) {
            this.xhr.abort();
        }
        val = (val || '').trim().toLowerCase();
        var params = { };
        params[this.settings.ajaxMode.searchParam] = val;
        params = (this.settings.ajaxMode.endpoint.indexOf('?') === -1 ? '?' : '&' ) + $.param(params);
        this.xhr = $[this.settings.ajaxMode.method](this.settings.ajaxMode.endpoint + params, function (data) {
            callback.call(this, data);
            scope.xhr = null;
        });
    };

    this.filter = function (val) {
        val = (val || '').trim().toLowerCase();
        if (this.settings.ajaxMode) {
            this.loading(true);
            this.ajaxFilter(val, function (data) {
                scope.setData(data.data);
                if(data.data && data.data.length){
                    scope.open();
                } else {
                    scope.close();
                }
                scope.loading(false);
            });
        } else {
            var all = this.root.querySelectorAll('.mw-select-option'), i = 0;
            if (!val) {
                for( ; i< all.length; i++) {
                    all[i].style.display = '';
                }
            } else {
                for( ; i< all.length; i++) {
                    all[i].style.display = this.getLabel(all[i].$value).toLowerCase().indexOf(val) !== -1 ? '' : 'none';
                }
            }
        }
    };

    this.setPlaceholder = function (plval) {
        /*plval = plval || this.settings.placeholder;
        if(scope.settings.autocomplete){
            $('.mw-ui-invisible-field', this.root).attr('placeholder', plval);
        } else {
            $('.mw-ui-btn-content', this.root).html(plval);
        }*/
        return this.displayValue(plval)
    };
    this.displayValue = function(plval){
        if(!plval && !this.settings.multiple && this.value()) {
            plval = scope.getLabel(this.value());
        }
        plval = plval || this.settings.placeholder;
        if(!scope._displayValue) {
            scope._displayValue = scope.document.createElement('span');
            scope._displayValue.className = 'mw-select-display-value mw-ui-size-' + this.settings.size;
            $('.mw-select-value', this.root).append(scope._displayValue)
        }
        if(this._rootInputMode){
            scope._displayValue.innerHTML = '&nbsp';
            $('input.mw-ui-invisible-field', this.root).val(plval);

        } else {
            scope._displayValue.innerHTML = plval + this.__indicateNumber();

        }
    };

    this.__indicateNumber = function () {
        if(this.settings.multiple && this.value() && this.value().length){
            return "<span class='mw-select-indicate-number'>" + this.value().length + "</span>";
        } else {
            return "<span class='mw-select-indicate-number mw-select-indicate-number-empty'>" + 0 + "</span>";
        }
    };

    this.rend = {

        option: function(item){
            var oh = scope.document.createElement('label');
            oh.$value = item;
            oh.className = 'mw-select-option';
            if (scope.settings.multiple) {
                oh.className = 'mw-ui-check mw-select-option';
                oh.innerHTML =  '<input type="checkbox"><span></span><span>'+scope.getLabel(item)+'</span>';

                $('input', oh).on('change', function () {
                    this.checked ? scope.valueAdd(oh.$value) : scope.valueRemove(oh.$value)
                });
            } else {
                oh.innerHTML = scope.getLabel(item);
                oh.onclick = function () {
                    scope.value(oh.$value)
                };
            }


            return oh;
        },
        value: function() {
            var tag = 'span', cls = 'mw-ui-btn';
            if(scope.settings.autocomplete){
                tag = 'span';
                cls = 'mw-ui-field'
            }
            var oh = scope.document.createElement(tag);
            oh.className = cls + ' mw-ui-size-' + scope.settings.size + ' mw-ui-bg-' + scope.settings.color + ' mw-select-value';

            if(scope.settings.autocomplete){
                oh.innerHTML = '<input type="text" class="mw-ui-invisible-field mw-ui-field-' + scope.settings.size + '">';
            } else {
                oh.innerHTML = '<span class="mw-ui-btn-content"></span>';
            }

            if(scope.settings.autocomplete){
                $('input', oh)
                    .on('input focus', function (e) {
                        scope.filter(this.value);
                        if(scope._rootInputMode) {
                            scope.element.value = this.value;

                        }
                    })
                    .on('keydown', function (e) {
                        if(mw.event.is.enter(e) || mw.event.is.comma(e)) {
                            e.preventDefault();
                            $(scope).trigger('enterOrComma', [this, e]);
                            $(this).val('adsadasd')
                        }
                    })
                    .on('focus', function () {
                        if(scope.settings.data && scope.settings.data.length) {
                            scope.open();
                        }
                    }).on('focus blur input', function () {
                    var hasVal = !!this.value.trim();
                    mw.tools[hasVal ? 'addClass' : 'removeClass'](scope.root, 'mw-select-has-value')
                });
            } else {
                oh.onclick = function () {
                    scope.toggle();
                };
            }
            return oh;
        },
        options: function(){
            scope.optionsHolder = scope.document.createElement('div');
            scope.holder = scope.document.createElement('div');
            scope.optionsHolder.className = 'mw-select-options';
            var options = [];
            $.each(scope.settings.data, function(){
                var opt = scope.rend.option(this);
                options.push(opt)
                scope.holder.appendChild(opt)
            });
            scope.optionsHolder.appendChild(scope.holder);

            setTimeout(function (){
                scope.dispatch('optionsReady', options)
            }, 10)

            return scope.optionsHolder;
        },
        root: function () {
            scope.root = scope.document.createElement('div');
            scope.root.className = 'mw-select mw-select-dropmode-' + scope.settings.dropMode + ' mw-select-multiple-' + scope.settings.multiple;

            return scope.root;
        }
    };

    this.state = 'closed';

    this.open = function () {
        this.state = 'opened';
        mw.tools.addClass(scope.root, 'active');
        mw.Select._register.forEach(function (item) {
            if(item !== scope) {
                item.close()
            }
        });
    };

    this.close = function () {
        this.state = 'closed';
        mw.tools.removeClass(scope.root, 'active');
    };

    this.tags = function () {
        if(!this._tags) {
            if(this.settings.multiple && this.settings.tags) {
                var holder = scope.document.createElement('div');
                holder.className = 'mw-select-tags';
                this._tags = new mw.tags({element:holder, data:scope._value || [], color: this.settings.tagsColor, size: this.settings.tagsSize || 'small'})
                $(this.optionsHolder).prepend(holder);
                mw.$(this._tags).on('tagRemoved', function (e, tag) {
                    scope.valueRemove(tag)
                })
            }
        } else {
            this._tags.setData(scope._value)
        }
        this.displayValue()
    };


    this.toggle = function () {
        if (this.state === 'closed') {
            this.open();
        } else {
            this.close();
        }
    };


    this._valueGet = function (val) {
        if(typeof val === 'number') {
            val = this.settings.data.find(function (item) {
                return item.id === val;
            })
        }
        return val;
    };



    this.valueAdd = function(val){
        if (!val) return;
        val = this._valueGet(val);
        if (!val) return;
        if (!this._value) {
            this._value = []
        }
        var exists = this._value.find(function (item) {
            return item.id === val.id;
        });
        if (!exists) {
            this._value.push(val);
            $(this.root.querySelectorAll('.mw-select-option')).each(function () {
                if(this.$value === val) {
                    this.querySelector('input').checked = true;
                }
            });
        }

        this.afterChange();
    };

    this.afterChange = function () {
        this.tags();
        this.displayValue();
        if($.isArray(this._value)) {
            $.each(this._value, function () {

            });
            $(this.root.querySelectorAll('.mw-select-option')).each(function () {
                if(scope._value.indexOf(this.$value) !== -1) {
                    mw.tools.addClass(this, 'active')
                }
                else {
                    mw.tools.removeClass(this, 'active')
                }
            });
        }
        $(this).trigger('change', [this._value]);
        this.dispatch('change', [this._value])
    };

    this.valueRemove = function(val) {
        if (!val) return;
        val = this._valueGet(val);
        if (!val) return;
        if (!this._value) {
            this._value = [];
        }
        var exists = this._value.find(function (item) {
            return item.id === val.id;
        });
        if (exists) {
            this._value.splice(this._value.indexOf(exists), 1);
        }
        $(this.root.querySelectorAll('.mw-select-option')).each(function () {
            if(this.$value === val) {
                this.querySelector('input').checked = false;
            }
        });
        this.afterChange()
    };

    this._valueToggle = function(val){
        if (!val) return;
        if (!this._value) {
            this._value = [];
        }
        var exists = this._value.find(function (item) {
            return item.id === val.id;
        });
        if (exists) {
            this._value.splice(this._value.indexOf(exists), 1);
        } else {
            this._value.push(val);
        }
        this.afterChange();
    };

    this.value = function(val){
        if(!val) return this._value;
        val = this._valueGet(val);
        if (!val) return;
        if(this.settings.multiple){
            this._valueToggle(val)
        }
        else {
            this._value = val;
            $('.mw-ui-invisible-field', this.root).val(this.getLabel(val))
            this.close();
        }

        this.afterChange()
    };

    this.setData = function (data) {
        $(scope.holder).empty();
        scope.settings.data = data;
        var options = []
        $.each(scope.settings.data, function(){
            var opt = scope.rend.option(this)
            options.push(opt)
            scope.holder.appendChild(opt)
        });
        setTimeout(function (){
            scope.dispatch('optionsReady', options)
        }, 10)
        return scope.holder;
    };

    this.addData = function (data) {
        $.each(data, function(){
            scope.settings.data.push(this);
            scope.holder.appendChild(scope.rend.option(this));
        });
        return scope.holder;
    };

    this.build = function () {
        this.rend.root();
        this.root.appendChild(this.rend.value());
        this.root.appendChild(this.rend.options());
        if (this._rootInputMode) {
            this.element.type = 'hidden';
            this.$element.before(this.root);
        } else {
            this.$element.html(this.root);
        }
        this.setPlaceholder();
        mw.Select._register.push(this);
    };

    this.init = function () {
        this.build();
        this.element._mwSelect = this;
    };



    this.init();


};

mw.Select._register = [];


$(document).ready(function () {
    $(document).on('mousedown touchstart', function (e) {
        if(!mw.tools.firstParentOrCurrentWithClass(e.target, 'mw-select')){
            mw.Select._register.forEach(function (item) {
                item.close();
            });
        }
    });
});


mw.select = function(options) {
    return new mw.Select(options);
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/spinner.js');

mw.Spinner = function(options){
    if(!options || !options.element){
        return;
    }
    this.$element = $(options.element);
    if(!this.$element.length) return;
    this.element = this.$element[0];
    if(this.element._mwSpinner){
        return this.element._mwSpinner;
    }
    this.element._mwSpinner = this;
    this.options = options;

    this.options.size = this.options.size || 20;
    this.options.color = this.options.color || '#4592ff';
    this.options.insertMode = this.options.insertMode || 'append';

    this.color = function(val){
        if(!val) {
            return this.options.color;
        }
        this.options.color = val;
        this.$spinner.find('circle').css({
            stroke: this.options.color
        });
    };

    this.size = function(val){
        if(!val) {
            return this.options.size;
        }
        this.options.size = parseFloat(val);
        this.$spinner.css({
            width: this.options.size,
            height: this.options.size
        });
    };

    this.setState = function(state) {
        mw.tools.classNamespaceDelete(this.$spinner[0], 'mw-spinner-state-');
        mw.tools.addClass(this.$spinner[0], 'mw-spinner-state-' + state);
    }

    this.create = function(){
        this.$spinner = $('<div class="mw-spinner mw-spinner-mode-' + this.options.insertMode + '" style="display: none;"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle><path class="mw-spinner-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></div>');
        this.size(this.options.size);
        this.color(this.options.color);
        this.$element[this.options.insertMode](this.$spinner);
        this.show();
        return this;
    };

    this.show = function(){
        this.$spinner.show();
        this.$element.addClass('has-mw-spinner');
        if(this.options.decorate) {
            this.$element.addClass('mw-spinner-decorate');
        }
        return this;
    };

    this.hide = function(){
        this.$spinner.hide();
        this.$element.removeClass('has-mw-spinner');
        if(this.options.decorate) {
            this.$element.removeClass('mw-spinner-decorate');
        }
        return this;
    };

    this.remove = function(){
        this.hide();
        this.$spinner.remove();
        delete this.element._mwSpinner;
    };

    this.create().show();

};

mw.spinner = function(options){
    return new mw.Spinner(options);
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/storage.js');

mw.storage = {
    init: function () {

        try {
            if (window.location.href.indexOf('data:') === 0 || !('localStorage' in mww) || /* IE Security configurations */ typeof mww['localStorage'] === 'undefined') return false;
            var lsmw = localStorage.getItem("mw");
            if (typeof lsmw === 'undefined' || lsmw === null) {
                lsmw = localStorage.setItem("mw", "{}");
            }
            this.change("INIT");
            return lsmw;

        } catch (error) {
            console.log(error);
        }


    },
    set: function (key, val) {
        try {
            if (!('localStorage' in mww)) return false;
            var curr = JSON.parse(localStorage.getItem("mw"));
            curr[key] = val;
            var a = localStorage.setItem("mw", JSON.stringify(curr));
            mw.storage.change("CALL", key, val);
            return a;
        } catch (error) {
            console.log(error);
        }

    },
    get: function (key) {
        try {
            if (!('localStorage' in mww)) return false;
            var curr = JSON.parse(localStorage.getItem("mw"));
            return curr[key];
        } catch (error) {
            console.log(error);
        }
    },
    _keys: {},
    change: function (key, callback, other) {
        if (!('localStorage' in mww)) return false;
        if (key === 'INIT' && 'addEventListener' in document) {
            addEventListener('storage', function (e) {
                if (e.key === 'mw') {
                    if (e.newValue === null) {
                        return;
                    }

                    if (e.oldValue === null) {
                        return;
                    }

                    var _new = JSON.parse(e.newValue || {});
                    var _old = JSON.parse(e.oldValue || {});
                    var diff = mw.tools.getDiff(_new, _old);
                    for (var t in diff) {
                        if (t in mw.storage._keys) {
                            var i = 0, l = mw.storage._keys[t].length;
                            for (; i < l; i++) {
                                mw.storage._keys[t][i].call(diff[t]);
                            }
                        }
                    }
                }
            }, false);
        }
        else if (key === 'CALL') {
            if (!document.isHidden() && typeof mw.storage._keys[callback] !== 'undefined') {
                var i = 0, l = mw.storage._keys[callback].length;
                for (; i < l; i++) {
                    mw.storage._keys[callback][i].call(other);
                }
            }
        }
        else {
            if (key in mw.storage._keys) {
                mw.storage._keys[key].push(callback);
            }
            else {
                mw.storage._keys[key] = [callback];
            }
        }
    }
};
mw.storage.init();


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/system-dialogs.js');

mw.tools.alert = function (text) {
    var html = ''
        + '<table class="mw_alert" width="100%" height="140" cellpadding="0" cellspacing="0">'
        + '<tr>'
        + '<td align="center" valign="middle"><div class="mw-alert-holder">' + text + '</div></td>'
        + '</tr>'
        + '<tr>'
        + '<td align="center" height="25"><span class="mw-ui-btn mw-ui-btn-medium" onclick="mw.dialog.remove(this);"><b>' + mw.msg.ok + '</b></span></td>'
        + '</tr>'
        + '</table>';
    if (mw.$("#mw_alert").length === 0) {
        return mw.dialog({
            html: html,
            width: 400,
            height: 200,
            overlay: false,
            name: "mw_alert",
            template: "mw_modal_basic"
        });
    }
    else {
        mw.$("#mw_alert .mw-alert-holder").html(text);
        return mw.$("#mw_alert")[0].modal;
    }
};


mw.tools.prompt = function (q, callback) {
    if(!q) return ;
     var input = document.createElement('input');
    input.className = 'mw-ui-field w100';


    var question = mw.$('<div class="mw-prompt-input-container"><label class="mw-ui-label">'+q+'</label></div>');
    question.append(input)
    var footer = mw.$('<div class="mw-prompt-input-footer">');
    var ok = mw.$('<button type="button" disabled class="mw-ui-btn mw-ui-btn-info">'+mw.lang('OK')+'</button>');
    var cancel = mw.$('<span class="mw-ui-btn">'+mw.lang('Cancel')+'</span>');
    footer.append(cancel);
    footer.append(ok);
    var dialog = mw.dialog({
        content: question,
        title: q,
        footer: footer
    });
    ok.on('click', function (){
        callback.call(window, input.value);
        dialog.remove();
    });
    cancel.on('click', function (){
        dialog.remove();
    });
    input.focus();
    input.oninput = function () {
        var val = this.value.trim();
        ok[0].disabled = !val;
    };
    input.onkeydown = function (e) {
        if (mw.event.is.enter(e)) {
            var val = this.value.trim();
            if (val) {
                callback.call(window, input.value);
                dialog.remove();
            }

        }
    };

    return dialog;
};
mw.tools.confirm = function (question, callback, onCancel) {
    if(typeof question === 'function') {
        callback = question;
        question = 'Are you sure?';
    }
    question = question || 'Are you sure?';
        var html = ''
            + '<table class="mw_alert" width="100%" height="140" cellpadding="0" cellspacing="0">'
            + '<tr>'
            + '<td valign="middle"><div class="mw-alert-holder">' + question + '</div></td>'
            + '</tr>'
            + '</table>';

        var ok = mw.top().$('<span tabindex="99999" class="mw-ui-btn mw-ui-btn-medium mw-ui-btn-info">' + mw.msg.ok + '</span>');
        var cancel = mw.top().$('<span class="mw-ui-btn mw-ui-btn-medium ">' + mw.msg.cancel + '</span>');
        var modal;

        if (mw.$("#mw_confirm_modal").length === 0) {
            modal = mw.top().dialog({
                content: html,
                width: 400,
                height: 'auto',
                autoHeight: true,
                overlay: false,
                name: "mw_confirm_modal",
                footer: [cancel, ok],
                title: mw.lang('Confirm')
            });
        }
        else {
            mw.$("#mw_confirm_modal .mw-alert-holder").html(question);
            modal = mw.$("#mw_confirm_modal")[0].modal;
        }

        ok.on('keydown', function (e) {
            if (e.keyCode === 13 || e.keyCode === 32) {
                callback.call(window);
                modal.remove();
                e.preventDefault();
            }
        });
        cancel.on('click', function () {
            if(onCancel) {
                onCancel.call()
            }
            modal.remove();
        });
        ok.on('click', function () {
            callback.call(window);
            setTimeout(function () {
                modal.remove();
            }, 78);
        });
        setTimeout(function () {
            mw.$(ok).focus();
        }, 120);
        return modal;
    };


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/tabs.js');

mw.tools.tabGroup = function (obj, element, model) {
    /*
    *
    *  {
    *       linkable: 'link' | 'auto',
    *       nav: string
    *       tabs: string
    *       onclick: function
    *  }
    *
    * */
    element = element || document.body;
    model = typeof model === 'undefined' ? true : model;
    if (model) {
        model = {
            set: function (i) {
                if (typeof i === 'number') {
                    if (!$(obj.nav).eq(i).hasClass(active)) {
                        mw.$(obj.nav).removeClass(active);
                        mw.$(obj.nav).eq(i).addClass(active);
                        mw.$(obj.tabs).hide().eq(i).show();
                    }
                }
            },
            setLastClicked: function () {
                if ((typeof(obj.lastClickedTabIndex) != 'undefined') && obj.lastClickedTabIndex !== null) {
                    this.set(obj.lastClickedTabIndex);
                }
            },
            unset: function (i) {
                if (typeof i === 'number') {
                    if ($(obj.nav).eq(i).hasClass(active)) {
                        mw.$(obj.nav).eq(i).removeClass(active);
                        mw.$(obj.tabs).hide().eq(i).hide();
                    }
                }
            },
            toggle: function (i) {
                if (typeof i === 'number') {
                    if ($(obj.nav).eq(i).hasClass(active)) {
                        this.unset(i);
                    }
                    else {
                        this.set(i);
                    }
                }
            }
        };
    }
    var active = obj.activeNav || obj.activeClass || "active active-info",
        firstActive = 0;

    obj.lastClickedTabIndex = null;

    if (obj.linkable) {


        if (obj.linkable === 'link') {

        } else if (typeof obj.linkable === 'string') {
            $(window).on('load hashchange', function () {
                var param = mw.url.windowHashParam(obj.linkable);
                if(param) {
                    var el = $('[data-' + obj.linkable + '="' + param + '"]');
                }
            });
            $(obj.nav).each(function (i) {
                this.dataset.linkable = obj.linkable + '-' + i;
                (function (linkable, i) {
                    this.onclick = function () {
                        mw.url.windowHashParam(linkable, i);
                    };
                })(obj.linkable, i);
            });
        }
    }


    mw.$(obj.nav).on('click', function (e) {
        if (obj.linkable) {
            if (obj.linkable === 'link') {

            }
        } else {
            if (!$(this).hasClass(active)) {
                var i = mw.tools.index(this, mw.$(obj.nav).get(), mw.$(obj.nav)[0].nodeName);
                mw.$(obj.nav).removeClass(active);
                mw.$(this).addClass(active);
                mw.$(obj.tabs).hide().eq(i).show();
                obj.lastClickedTabIndex = i;
                if (typeof obj.onclick === 'function') {
                    obj.onclick.call(this, mw.$(obj.tabs).eq(i)[0], e, i);
                }
            }
            else {
                if (obj.toggle === true) {
                    mw.$(this).removeClass(active);
                    mw.$(obj.tabs).hide();
                    if (typeof obj.onclick === 'function') {
                        var i = mw.tools.index(this, element, obj.nav);
                        obj.onclick.call(this, mw.$(obj.tabs).eq(i)[0], e, i);
                    }
                }
            }
        }


        return false;
    }).each(function (i) {
        if (mw.tools.hasClass(this, active)) {
            firstActive = i;
        }
    });
    model.set(firstActive);
    return model;
};


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/tooltip.js');

(function(){

    var ToolTip = function (options) {
        options = options || {};

        var defaults = {
            template: 'default',
            overlay: false,
            position: 'bottom-center'
        };

        var scope = this;

        this.settings = mw.object.extend({}, defaults, options);
        if (this.settings.skin ) {
            this.settings.template = this.settings.skin;
        }

        var create = function () {
            var tpl = scope.settings.template.indexOf('mw-tooltip') === 0 ? scope.settings.template : 'mw-tooltip  mw-tooltip-' + scope.settings.template;
            tpl += ' mw-tooltip-widget';
            scope.tooltip = mw.element({
                tag: 'div',
                props: {
                    className: tpl,
                    id: scope.settings.id || mw.id('mw-tooltip-')
                }
            });
            scope.tooltip.get(0)._mwtooltip = scope;
            if ( scope.settings.overlay) {
                scope.overlay = mw.element({
                    tag: 'div',
                    props: {
                        className: 'mw-tooltip-overlay',
                    }
                });
                scope.overlay.on('mousedown touchstart', function (){
                    scope.remove()
                });
            }
            mw.element('body')
                .append(scope.overlay)
                .append(scope.tooltip);
            scope.content(scope.settings.content);
        };

        var _e = {};

        this.on = function (e, f) { _e[e] ? _e[e].push(f) : (_e[e] = [f]) };

        this.dispatch = function (e, f) { _e[e] ? _e[e].forEach(function (c){ c.call(this, f); }) : ''; };

        this.content = function (content) {
          if (typeof content === 'undefined') {
              return scope.tooltip.innerHTML;
          }
          scope.tooltip.html(content || '') ;
        };

        this.remove = function () {
            this.tooltip.remove();
            if (this.overlay) {
                this.overlay.remove();
            }
             this.dispatch('removed');
        };
        this.show = function () {
            this.tooltip.show();
            if (this.overlay) {
                this.overlay.show();
            }
            this.dispatch('show');
        };
        this.hide = function () {
            this.tooltip.hide();
            if (this.overlay) {
                this.overlay.hide();
            }
            this.dispatch('hide');
        };

        this._position = null;
        this.position = function (position, target) {
            position = position || this._position || this.settings.position;
            if (target) {
                scope.settings.element = target;
            }
            var el = mw.$(scope.settings.element);
            if (el.length === 0) {
                return false;
            }
            var tooltip = this.tooltip.get(0);
            var w = el.outerWidth(),
                tipwidth = mw.$(tooltip).outerWidth(),
                h = el.outerHeight(),
                tipheight = mw.$(tooltip).outerHeight(),
                off = el.offset();
            if (off.top === 0 && off.left === 0) {
                off = el.parent().offset();
            }
            mw.tools.removeClass(tooltip, this._position);
            mw.tools.addClass(tooltip, position);
            this._position = position


            off.left = off.left > 0 ? off.left : 0;
            off.top = off.top > 0 ? off.top : 0;

            var leftCenter = off.left - tipwidth / 2 + w / 2;
            leftCenter = leftCenter > 0 ? leftCenter : 0;

            if (position === 'bottom-left') {
                mw.$(tooltip).css({
                    top: off.top + h,
                    left: off.left
                });
            }
            else if (position === 'bottom-center') {
                mw.$(tooltip).css({
                    top: off.top + h,
                    left: leftCenter
                });
            }
            else if (position === 'bottom-right') {
                mw.$(tooltip).css({
                    top: off.top + h,
                    left: off.left - tipwidth + w
                });
            }
            else if (position === 'top-right') {
                mw.$(tooltip).css({
                    top: off.top - tipheight - arrheight,
                    left: off.left - tipwidth + w
                });
            }
            else if (position === 'top-left') {
                mw.$(tooltip).css({
                    top: off.top - tipheight - arrheight,
                    left: off.left
                });
            }
            else if (position === 'top-center') {

                mw.$(tooltip).css({
                    top: off.top - tipheight - arrheight,
                    left: leftCenter
                });
            }
            else if (position === 'left-top') {
                mw.$(tooltip).css({
                    top: off.top,
                    left: off.left - tipwidth - arrheight
                });
            }
            else if (position === 'left-bottom') {
                mw.$(tooltip).css({
                    top: (off.top + h) - tipheight,
                    left: off.left - tipwidth - arrheight
                });
            }
            else if (position === 'left-center') {
                mw.$(tooltip).css({
                    top: off.top - tipheight / 2 + h / 2,
                    left: off.left - tipwidth - arrheight
                });
            }
            else if (position === 'right-top') {
                mw.$(tooltip).css({
                    top: off.top,
                    left: off.left + w
                });
            }
            else if (position === 'right-bottom') {
                mw.$(tooltip).css({
                    top: (off.top + h) - tipheight,
                    left: off.left + w
                });
            }
            else if (position === 'right-center') {
                mw.$(tooltip).css({
                    top: off.top - tipheight / 2 + h / 2,
                    left: off.left + w
                });
            }
            if (parseFloat($(tooltip).css('top')) < 0) {
                mw.$(tooltip).css('top', 0);
            }
            this.show();
        };

        var init = function () {
            create();
            scope.position();
            scope.show();
        };

        init();

    };

    mw.ToolTip = ToolTip;


    var tooltip = {
        source: function (content, skin, position, id) {
            if (skin === 'dark') {
                skin = 'mw-tooltip-dark';
            } else if (skin === 'warning') {
                skin = 'mw-tooltip-default mw-tooltip-warning';
            }
            if (typeof id === 'undefined') {
                id = 'mw-tooltip-' + mw.random();
            }
            var tooltip = document.createElement('div');
            var tooltipc = document.createElement('div');
            tooltip.className = 'mw-tooltip ' + position + ' ' + skin;
            tooltipc.className = 'mw-tooltip-content';
            tooltip.id = id;
            $(tooltipc).append(content);
            $(tooltip).append(tooltipc).append('<span class="mw-tooltip-arrow"></span>');
            document.body.appendChild(tooltip);
            return tooltip;
        },
        setPosition: function (tooltip, el, position) {
                el = mw.$(el);
                if (el.length === 0) {
                    return false;
                }
                tooltip.tooltipData.element = el[0];
                var w = el.outerWidth(),
                    tipwidth = mw.$(tooltip).outerWidth(),
                    h = el.outerHeight(),
                    tipheight = mw.$(tooltip).outerHeight(),
                    off = el.offset(),
                    arrheight = mw.$('.mw-tooltip-arrow', tooltip).height();
                if (off.top === 0 && off.left === 0) {
                    off = mw.$(el).parent().offset();
                }
                mw.tools.removeClass(tooltip, tooltip.tooltipData.position);
                mw.tools.addClass(tooltip, position);
                tooltip.tooltipData.position = position;

                off.left = off.left > 0 ? off.left : 0;
                off.top = off.top > 0 ? off.top : 0;

                var leftCenter = off.left - tipwidth / 2 + w / 2;
                leftCenter = leftCenter > 0 ? leftCenter : 0;

                if (position === 'auto') {
                    var $win = mw.$(window);
                    var wxCenter =  $win.width()/2;
                    var wyCenter =  ($win.height() + $win.scrollTop())/2;
                    var elXCenter =  off.left +(w/2);
                    var elYCenter =  off.top +(h/2);
                    var xPos, yPost;
                    var space = 100;

                    if(elXCenter > wxCenter) {
                        xPos = 'left'
                    } else {
                        xPos = 'right'
                    }

                    yPos = 'top'


                    return this.setPosition (tooltip, el, (xPos+'-'+yPos));
                }

                if (position === 'bottom-left') {
                    mw.$(tooltip).css({
                        top: off.top + h + arrheight,
                        left: off.left
                    });
                }
                else if (position === 'bottom-center') {
                    mw.$(tooltip).css({
                        top: off.top + h + arrheight,
                        left: leftCenter
                    });
                }
                else if (position === 'bottom-right') {
                    mw.$(tooltip).css({
                        top: off.top + h + arrheight,
                        left: off.left - tipwidth + w
                    });
                }
                else if (position === 'top-right') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight - arrheight,
                        left: off.left - tipwidth + w
                    });
                }
                else if (position === 'top-left') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight - arrheight,
                        left: off.left
                    });
                }
                else if (position === 'top-center') {

                    mw.$(tooltip).css({
                        top: off.top - tipheight - arrheight,
                        left: leftCenter
                    });
                }
                else if (position === 'left-top') {
                    mw.$(tooltip).css({
                        top: off.top,
                        left: off.left - tipwidth - arrheight
                    });
                }
                else if (position === 'left-bottom') {
                    mw.$(tooltip).css({
                        top: (off.top + h) - tipheight,
                        left: off.left - tipwidth - arrheight
                    });
                }
                else if (position === 'left-center') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight / 2 + h / 2,
                        left: off.left - tipwidth - arrheight
                    });
                }
                else if (position === 'right-top') {
                    mw.$(tooltip).css({
                        top: off.top,
                        left: off.left + w + arrheight
                    });
                }
                else if (position === 'right-bottom') {
                    mw.$(tooltip).css({
                        top: (off.top + h) - tipheight,
                        left: off.left + w + arrheight
                    });
                }
                else if (position === 'right-center') {
                    mw.$(tooltip).css({
                        top: off.top - tipheight / 2 + h / 2,
                        left: off.left + w + arrheight
                    });
                }
                if (parseFloat($(tooltip).css('top')) < 0) {
                    mw.$(tooltip).css('top', 0);
                }
            },
            fixPosition: function (tooltip) {
                /* mw_todo */
                var max = 5;
                var arr = mw.$('.mw-tooltip-arrow', tooltip);
                arr.css('left', '');
                var arr_left = parseFloat(arr.css('left'));
                var tt = mw.$(tooltip);
                if (tt.length === 0) {
                    return false;
                }
                var w = tt.width(),
                    off = tt.offset(),
                    ww = mw.$(window).width();
                if ((off.left + w) > (ww - max)) {
                    var diff = off.left - (ww - w - max);
                    tt.css('left', ww - w - max);
                    arr.css('left', arr_left + diff);
                }
                if (parseFloat(tt.css('top')) < 0) {
                    tt.css('top', 0);
                }
            },
            prepare: function (o) {
                if (typeof o.element === 'undefined') return false;
                if (o.element === null) return false;
                if (typeof o.element === 'string') {
                    o.element = mw.$(o.element)
                }

                if (o.element.constructor === [].constructor && o.element.length === 0) return false;
                if (typeof o.position === 'undefined') {
                    o.position = 'auto';
                }
                if (typeof o.skin === 'undefined') {
                    o.skin = 'mw-tooltip-default';
                }
                if (typeof o.id === 'undefined') {
                    o.id = 'mw-tooltip-' + mw.random();
                }
                if (typeof o.group === 'undefined') {
                    o.group = null;
                }
                return {
                    id: o.id,
                    element: o.element,
                    skin: o.template || o.skin,
                    position: o.position,
                    overlay: o.overlay,
                    content: o.content,
                    group: o.group
                }
            },
            init: function (o, wl) {

                var orig_options = o;
                o = mw.tools.tooltip.prepare(o);
                if (o === false) return false;
                var tip;
                if (o.id && mw.$('#' + o.id).length > 0) {
                    tip = mw.$('#' + o.id)[0];
                } else {
                    tip = mw.tools.tooltip.source(o.content, o.skin, o.position, o.id);
                }

                if(o.overlay) {
                    var overlay = $('<div class="mw-tooltip-overlay"></div>');
                    tip.tremove = function () {
                        overlay.remove();
                        tip.remove();
                    };

                    overlay.on('click', function () {
                        tip.tremove()
                    });

                    $('body').append(overlay)
                }
                tip.tooltipData = o;
                wl = wl || true;
                if (o.group) {
                    var tip_group_class = 'mw-tooltip-group-' + o.group;
                    var cur_tip = mw.$(tip)
                    if (!cur_tip.hasClass(tip_group_class)) {
                        cur_tip.addClass(tip_group_class);
                    }
                    var cur_tip_id = cur_tip.attr('id');
                    if (cur_tip_id) {
                        mw.$("." + tip_group_class).not("#" + cur_tip_id).hide();
                        if (o.group && typeof orig_options.close_on_click_outside !== 'undefined' && orig_options.close_on_click_outside) {
                            setTimeout(function () {
                                mw.$("#" + cur_tip_id).show();
                            }, 100);
                        } else {
                            mw.$("#" + cur_tip_id).show();
                        }
                    }
                }
                if (wl && $.contains(self.document, tip)) {

                    if (o.group && typeof orig_options.close_on_click_outside !== 'undefined' && orig_options.close_on_click_outside) {
                        mw.$(self).bind('click', function (e, target) {
                            mw.$("." + tip_group_class).hide();
                        });
                    }
                }
                mw.tools.tooltip.setPosition(tip, o.element, o.position);
                return tip;
            }

    };

    mw.tools.tooltip = tooltip;
    var TTTime = null;
    mw.tools.titleTip = function (el, _titleTip) {
        clearTimeout(TTTime);
        mw.$(mw.tools[_titleTip]).hide();
        TTTime = setTimeout(function (){
        _titleTip = _titleTip || '_titleTip';
        if (mw.tools.hasClass(el, 'tip-disabled')) {
            mw.$(mw.tools[_titleTip]).hide();
            return false;
        }
        var skin = mw.$(el).attr('data-tipskin');
        skin = (skin) ? skin : 'mw-tooltip-dark';
        var pos = mw.$(el).attr('data-tipposition');
        var iscircle = mw.$(el).attr('data-tipcircle') === 'true';
        if (!pos) {
            pos = 'top-center';
        }
        var text = mw.$(el).attr('data-tip');
        if (!text) {
            text = mw.$(el).attr('title');
        }
        if (!text) {
            text = mw.$(el).attr('tip');
        }
        if (typeof text === 'undefined' || !text) {
            return;
        }
        if (text.indexOf('.') === 0 || text.indexOf('#') === 0) {
            var xitem = mw.$(text);
            if (xitem.length === 0) {
                return false;
            }
            text = xitem.html();
        }
        else {
            text = text.replace(/\n/g, '<br>');
        }
        var showon = mw.$(el).attr('data-showon');
        if (showon) {
            el = mw.$(showon)[0];
        }
        if (!mw.tools[_titleTip]) {
            mw.tools[_titleTip] = mw.tooltip({skin: skin, element: el, position: pos, content: text});
            mw.$(mw.tools[_titleTip]).addClass('mw-universal-tooltip');
        }
        else {
            mw.tools[_titleTip].className = 'mw-tooltip ' + pos + ' ' + skin + ' mw-universal-tooltip';
            mw.$('.mw-tooltip-content', mw.tools[_titleTip]).html(text);
            mw.tools.tooltip.setPosition(mw.tools[_titleTip], el, pos);
        }
        if (iscircle) {
            mw.$(mw.tools[_titleTip]).addClass('mw-tooltip-circle');
        }
        else {
            mw.$(mw.tools[_titleTip]).removeClass('mw-tooltip-circle');
        }
        mw.$(mw.tools[_titleTip]).show();
        }, 500)
    };

})();


mw.required.push('http://localhost/mw2/userfiles/modules/microweber/api/tools/uiaccordion.js');

mw.uiAccordion = function (options) {
    if (!options) return;
    options.element = options.element || '.mw-accordion';

    var scope = this;



    this.getContents = function () {
        this.contents = this.root.children(this.options.contentSelector);
        if (!this.contents.length) {
            this.contents = mw.$();
            this.root.children(this.options.itemSelector).each(function () {
                var title = mw.$(this).children(scope.options.contentSelector)[0];
                if (title) {
                    scope.contents.push(title)
                }
            });
        }
    }
    this.getTitles = function () {
        this.titles = this.root.children(this.options.titleSelector);
        if (!this.titles.length) {
            this.titles = mw.$();
            this.root.children(this.options.itemSelector).each(function () {
                var title = mw.$(this).children(scope.options.titleSelector)[0];
                if (title) {
                    scope.titles.push(title)
                }
            });
        }
    };

    this.prepare = function (options) {
        var defaults = {
            multiple: false,
            itemSelector: ".mw-accordion-item,mw-accordion-item",
            titleSelector: ".mw-accordion-title,mw-accordion-title",
            contentSelector: ".mw-accordion-content,mw-accordion-content",
            openFirst: true,
            toggle: true
        };
        this.options = $.extend({}, defaults, options);

        this.root = mw.$(this.options.element).not('.mw-accordion-ready').eq(0);
        if (!this.root.length) return;
        this.root.addClass('mw-accordion-ready');
        this.root[0].uiAccordion = this;
        this.getTitles();
        this.getContents();

    };

    this.getItem = function (q) {
        var item;
        if (typeof q === 'number') {
            item = this.contents.eq(q)
        }
        else {
            item = mw.$(q);
        }
        return item;
    };

    this.set = function (index) {
        var item = this.getItem(index);
        if (!this.options.multiple) {
            this.contents.not(item)
                .slideUp()
                .removeClass('active')
                .prev()
                .removeClass('active')
                .parents('.mw-accordion-item').eq(0)
                .removeClass('active');
        }
        item.stop()
            .slideDown()
            .addClass('active')
            .prev()
            .addClass('active')
            .parents('.mw-accordion-item').eq(0)
            .addClass('active');
        mw.$(this).trigger('accordionSet', [item]);
    };

    this.unset = function (index) {
        if (typeof index === 'undefined') return;
        var item = this.getItem(index);
        item.stop()
            .slideUp()
            .removeClass('active')
            .prev()
            .removeClass('active')
            .parents('.mw-accordion-item').eq(0)
            .removeClass('active');

        mw.$(this).trigger('accordionUnset', [item]);
    }

    this.toggle = function (index) {
        var item = this.getItem(index);
        if (item.hasClass('active')) {
            if (this.options.toggle) {
                this.unset(item)
            }
        }
        else {
            this.set(item)
        }
    }

    this.init = function (options) {
        this.prepare(options);
        if(typeof(this.contents) !== 'undefined'){
            this.contents.hide()
        }

        if (this.options.openFirst) {
            if(typeof(this.contents) !== 'undefined'){
                this.contents.eq(0).show().addClass('active')
            }
            if(typeof(this.titles) !== 'undefined'){
                this.titles.eq(0).addClass('active').parent('.mw-accordion-item').addClass('active');
            }
        }
        if(typeof(this.titles) !== 'undefined') {
            this.titles.on('click', function () {
                scope.toggle(scope.titles.index(this));
            });
        }
    }

    this.init(options);

};


mw.tabAccordion = function (options, accordion) {
    if (!options) return;
    var scope = this;
    this.options = options;

    this.options.breakPoint = this.options.breakPoint || 800;
    this.options.activeClass = this.options.activeClass || 'active-info';


    this.buildAccordion = function () {
        this.accordion = accordion || new mw.uiAccordion(this.options);
    }

    this.breakPoint = function () {
        if (matchMedia("(max-width: " + this.options.breakPoint + "px)").matches) {
            mw.$(this.nav).hide();
            mw.$(this.accordion.titles).show();
        }
        else {
            mw.$(this.nav).show();
            mw.$(this.accordion.titles).hide();
        }
    }

    this.createTabButton = function (content, index) {
        this.buttons = this.buttons || mw.$();
        var btn = document.createElement('span');
        this.buttons.push(btn)
        var size = (this.options.tabsSize ? ' mw-ui-btn-' + this.options.tabsSize : '');
        var color = (this.options.tabsColor ? ' mw-ui-btn-' + this.options.tabsColor : '');
        var active = (index === 0 ? (' ' + this.options.activeClass) : '');
        btn.className = 'mw-ui-btn' + size + color + active;
        btn.innerHTML = content;
        btn.onclick = function () {
            scope.buttons.removeClass(scope.options.activeClass).eq(index).addClass(scope.options.activeClass);
            scope.accordion.set(index);
        }
        return btn;
    }

    this.createTabs = function () {
        this.nav = document.createElement('div');
        this.nav.className = 'mw-ui-btn-nav mw-ui-btn-nav-tabs';
        mw.$(this.accordion.titles)
            .each(function (i) {
                scope.nav.appendChild(scope.createTabButton($(this).html(), i))
            })
            .hide();
        mw.$(this.accordion.root).before(this.nav)
    }

    this.init = function () {
        this.buildAccordion();
        this.createTabs();
        this.breakPoint();
        mw.$(window).on('load resize orientationchange', function () {
            scope.breakPoint();
        });
    };

    this.init();
};




mw.require('components.js');

mw.confirm = mw.tools.confirm;
mw.prompt = mw.tools.prompt;
mw.tabs = mw.tools.tabGroup;
mw.progress = mw.tools.progress;
mw.external = function (o) {
    return mw.tools._external(o);
};

mw.gallery = function (arr, start, modal) {

    return mw.tools.gallery.init(arr, start, modal)

};

mw.alert = mw.tools.alert;
mw.tooltip = function (config) {
    return mw.tools.tooltip.init(config);
};

mw.gallery = function (arr, start, modal) {
    return mw.tools.gallery.init(arr, start, modal)
};



mw.cookie = {
    get: function (name) {
        var cookies = document.cookie.split(";"), i = 0, l = cookies.length;
        for (; i < l; i++) {
            var x = cookies[i].substr(0, cookies[i].indexOf("="));
            var y = cookies[i].substr(cookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === name) {
                return unescape(y);
            }
        }
    },
    set: function (name, value, expires, path, domain, secure) {
        var now = new Date();
        expires = expires || 365;
        now.setTime(now.getTime());
        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(now.getTime() + (expires));
        document.cookie = name + "=" + escape(value) + ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + ( ( path ) ? ";path=" + path : ";path=/" ) + ( ( domain ) ? ";domain=" + domain : "" ) + ( ( secure ) ? ";secure" : "" );
    },
    setEncoded: function (name, value, expires, path, domain, secure) {
        // value = encodeURIComponent(value);
        // value = escape(value);
        // value = mw.tools.base64.encode( unescape( encodeURIComponent( value ) ) )
        value = mw.tools.base64.encode(value);
        return this.set(name, value, expires, path, domain, secure);
    },
    getEncoded: function (name) {
        var value = this.get(name);
        // value = decodeURIComponent(value);
        // value = unescape(value);
        // value = decodeURIComponent( escape( mw.tools.base64.decode( value ) ) )
        value = mw.tools.base64.decode(value);
        return value;
    },
    ui: function (a, b) {
        var mwui = mw.cookie.getEncoded("mwui");
        try {
            mwui = (!mwui || mwui === '') ? {} : $.parseJSON(mwui);
        }
        catch (e) {
            return false;
        }
        if (typeof a === 'undefined') {
            return mwui;
        }
        if (typeof b === 'undefined') {
            return mwui[a] !== undefined ? mwui[a] : "";
        }
        else {
            mwui[a] = b;
            var tostring = JSON.stringify(mwui);
            mw.cookie.setEncoded("mwui", tostring, false, "/");
            if (typeof mw.cookie.uievents[a] !== 'undefined') {
                var funcs = mw.cookie.uievents[a], l = funcs.length, i = 0;
                for (; i < l; i++) {
                    mw.cookie.uievents[a][i].call(b.toString());
                }
            }
        }
    },
    uievents: {},
    changeInterval: null,
    uiCurr: null,
    onchange: function (name, func) {
        if (typeof mw.cookie.uievents[name] === 'undefined') {
            mw.cookie.uievents[name] = [func];
        }
        else {
            mw.cookie.uievents[name].push(func);
        }
    }
};











var getFieldValue = function(a){
  return typeof a === 'string' ? a : ( typeof a === 'object' && a.tagName !== undefined ? a.value : null);
};


//Cross-browser placeholder


mw.Form = function(options) {
    options = options || {};
    var defaults = {
        form: null
    };
    this.settings = $.extend({}, defaults, options);

    this.$form = mw.$(this.settings.form).eq(0);
    this.form = this.$form[0];
    if (!this.form) {
        return;
    }

    this.addBeforePost = function (func, cb) {

    };
};



var setValidity = function (state, obj) {
    var $el = mw.element(obj);
    if(state){
        $el.parents('.field').removeClass("error");
        $el.parent().find('.mw-error').remove();
    }
    else{
        $el.parents('.field').addClass("error");

    }
};


mw.form = {
  typeNumber:function(el){
    el.value = el.value.replace(/[^0-9\.,]/g,'');
  },
  fixPrice:function(el){
    el.value = el.value.replace(/,/g,'');
    var arr = el.value.split('.');
    var len = arr.length;
    if(len>1){
      if(arr[len-1]===''){
          arr[len-1] = '.00';
      }
      else{
         arr[len-1] = '.' + arr[len-1];
      }
      el.value = arr.join('');
    }
  },
  dstatic:function(event, d){

  },
  post: function(selector, url_to_post, callback, ignorenopost, callback_error, callback_user_cancel, before_send){
     mw.session.checkPause = true;
    if(selector.constructor === {}.constructor){
      return mw.form._post(selector);
    }

    callback_error = callback_error || false;
    ignorenopost = ignorenopost || false;
    var is_form_valid = mw.form.validate.init(selector);

	if(!url_to_post){

		url_to_post = mw.settings.site_url + 'api/post_form';

	}


    if(is_form_valid){

        var form = mw.$(selector)[0];
        if (form._isSubmitting) {
            return;
        }

        form._isSubmitting = true;

        var when = form.$beforepost ? form.$beforepost : function () {};
        $.when(when()).then(function() {
            setTimeout(function () {
                var obj = mw.form.serialize(selector, ignorenopost);




                var req = {
                    url: url_to_post,
                    data: before_send ? before_send(obj) : obj,
                    method: 'post',
                    dataType: "json",
                    statusCode: {
                        201: function(data){
                            // copy of success
                            mw.session.checkPause = false;
                            if(typeof callback === 'function'){
                                callback.call(data, mw.$(selector)[0]);
                            } else {
                                return data;
                            }
                        }
                    },
                    success: function(data){
/*
                       if(typeof (data.error) != 'undefined' && data.error){
                           mw.notification.error(data.error);
                       }*/

                        mw.session.checkPause = false;
                        if(typeof callback === 'function'){
                            callback.call(data, mw.$(selector)[0]);
                        } else {
                            return data;
                        }
                    },

                    onExternalDataDialogClose: function() {
                        if(callback_user_cancel) {
                            callback_user_cancel.call();
                        }
                    }
                }

                if (form.getAttribute('enctype') === "multipart/form-data") {

                    var form_data = new FormData();
                    $.each(req.data, function (k,v) {
                        form_data.append(k,v);
                    });

                    $('[type="file"]', form).each(function () {
                        if(typeof this.files[0] !== 'undefined') {
                            form_data.set(this.name, this.files[0]);
                        }
                    })

                    req.data = form_data;
                    req.processData = false;
                    req.contentType = false;
                    req.mimeType = 'multipart/form-data';
                }

                var xhr = $.ajax(req);
                xhr.always(function(jqXHR, textStatus) {
                    form._isSubmitting = false;
                });
                xhr.fail(function(a,b) {
                    mw.session.checkPause = false;
                    if(typeof callback_error === 'function'){
                        callback_error.call(a,b);
                    }
                });
            }, 78);
        });


    }
	return false;
  },
  _post:function(obj){
    mw.form.post(obj.selector, obj.url, obj.done, obj.ignorenopost, obj.error, obj.error);
  },
  validate:{
    checkbox: function(obj){
        return obj.checked === true;
    },
    field:function(obj){
		return !!getFieldValue(obj).trim();
    },
    email:function(obj){
        var regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        return regexmail.test(getFieldValue(obj));
    },
    url:function(obj){
	  /* var rurl =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; */
       var rurl = /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
       return rurl.test(getFieldValue(getFieldValue(obj)));
    },
    radio:function(objname){
        var radios = document.getElementsByName(objname), i = 0, len = radios.length;
        this_radio_valid = false;
        for( ; i < len ; i++){
            if(radios[i].checked){
                this_radio_valid = true;
                break;
            }
        }
        var parent = mw.$(document.getElementsByName(objname)[0].parentNode);
        if(this_radio_valid){
           parent.removeClass("error");
        }
        else{
           parent.addClass("error");
        }
        return this_radio_valid;
    },
    image_url:function(url, valid, invalid){
        url = url.replace(/\s/gi,'');
        if(url.length<6){
            typeof invalid === 'function'? invalid.call(url) : '';
            return false;
        }
        else{
          if(!url.contains('http')){url = 'http://'+url}
          if(!window.ImgTester){
              window.ImgTester = new Image();
              document.body.appendChild(window.ImgTester);
              window.ImgTester.className = 'semi_hidden';
              window.ImgTester.onload = function(){
                typeof valid === 'function'? valid.call(url) : '';
              }
              window.ImgTester.onerror = function(){
                typeof invalid === 'function'? invalid.call(url) : '';
              }
          }
          window.ImgTester.src = url;
        }
    },
    proceed:{
      checkbox:function(obj){
          setValidity(mw.form.validate.checkbox(obj), obj)
      },
      field:function(obj){
          setValidity(mw.form.validate.field(obj), obj)

      },
      email:function(obj){
          setValidity(mw.form.validate.email(obj), obj)
      }
    },
    checkFields:function(form){
        mw.$(form).find(".required,[required]").each(function(){
          var type = mw.$(this).attr("type");
          if(type==='checkbox'){
             mw.form.validate.proceed.checkbox(this);
          }
          else if(type==='radio'){
             mw.form.validate.radio(this.name);
          }
          else{
             mw.form.validate.proceed.field(this);
          }
        });
        mw.$(form).find(".required-email").each(function(){
            mw.form.validate.proceed.email(this);
        });
    },
    init:function(obj){
        mw.form.validate.checkFields(obj);
        if($(obj).find(".error").length>0){
            mw.$(obj).addClass("error submited");
            return false;
        }
        else{
           mw.$(obj).removeClass("error");
            return true;
        }
    }
  },
  serialize : function(id, ignorenopost){
    var ignorenopost = ignorenopost || false;
    return mw.serializeFields(id, ignorenopost);
  }
}


mw.postForm = function(o){
  return mw.form._post(o);
}















// URL Strings - Manipulations

json2url = function(obj){ var t=[];for(var x in obj)t.push(x+"="+encodeURIComponent(obj[x]));return t.join("&").replace(/undefined/g, 'false') };


mw.url = {
    hashStart: '',
    getDomain:function(url){
      return url.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
    },
    removeHash:function(url){
        return url.replace( /#.*/, "");
    },
    getHash:function(url){
      return url.indexOf('#')!=-1 ? url.substring(url.indexOf('#'), url.length) : "";
    },
    strip:function(url){
      return url.replace(/#[^#]*$/, "").replace(/\?[^\?]*$/, "")
    },
    getUrlParams:function(url){
        url = mw.url.removeHash(url);
        if(url.contains('?')){
          var arr = url.slice(url.indexOf('?') + 1).split('&');
          var obj = {}, i=0, len = arr.length;
          for( ; i<len; i++){
            var p_arr = arr[i].split('=');
            obj[p_arr[0]] = p_arr[1];
          }
          return obj;
        }
        else{return {} }
    },
    set_param:function(param, value, url){
        url = url || window.location.href;
        var hash = mw.url.getHash(url);
        var params = mw.url.getUrlParams(url);
        params[param] = value;
        var params_string = json2url(params);
        var url = mw.url.strip(url);
        return decodeURIComponent (url + "?" + params_string + hash);
    },
    remove_param:function(url, param){
        var hash = mw.url.getHash(url);
        var params = mw.url.getUrlParams(url);
        delete params[param];
        var params_string = json2url(params);
        url = mw.url.strip(url);
        return decodeURIComponent (url + "?" + params_string + hash);
    },
    getHashParams:function(hash){
        var r = new RegExp(mw.url.hashStart, "g");
        var hash = hash.replace(r, "");
        var hash = hash.replace(/\?/g, "");
        if(hash=='' || hash=='#'){
          return {}
        }
        else{
          var hash = hash.replace(/#/g, "");
          var arr = hash.split('&');
          var obj = {}, i=0, len = arr.length;
          for( ; i<len; i++){
            var p_arr = arr[i].split('=');
            obj[p_arr[0]] = p_arr[1];
          }
          return obj;
        }
    },
    setHashParam:function(param, value, hash){

      var hash = hash || mw.hash();
      var obj = mw.url.getHashParams(hash);
      obj[param] = value;
      return mw.url.hashStart + decodeURIComponent(json2url(obj));
    },
    windowHashParam:function(a,b){
      if(b !== undefined){
        mw.hash(mw.url.setHashParam(a,b));
      }
      else{
        return mw.url.getHashParams(mw.hash())[a];
      }
    },
    deleteHashParam:function(hash, param){
        var params = mw.url.getHashParams(hash);
        delete params[param];
        var params_string = decodeURIComponent(mw.url.hashStart+json2url(params));
        return params_string;
    },
    windowDeleteHashParam:function(param){
       mw.hash(mw.url.deleteHashParam(window.location.hash, param));
    },
    whichHashParamsHasBeenRemoved:function(currHash, prevHash){
        var curr = mw.url.getHashParams(currHash);
        var prev = mw.url.getHashParams(prevHash);
        var hashes = [];
        for(var x in prev){
            curr[x] === undefined ? hashes.push(x) : '';
        }
        return hashes;
    },
    hashParamToActiveNode:function(param, classNamespace, context){
        var context = context || document.body;
        var val =  mw.url.windowHashParam(param);
        mw.$('.'+classNamespace, context).removeClass('active');
        var active = mw.$('.'+classNamespace + '-' + val, context);
        if(active.length > 0){
           active.addClass('active');
        }
        else{
           mw.$('.'+classNamespace + '-none', context).addClass('active');
        }
    },
    mwParams:function(url){
        url = url || window.location.pathname;
        url = mw.url.removeHash(url);
        var arr = url.split('/');
        var obj = {};
        var i=0,l=arr.length;
        for( ; i<l; i++){
            if(arr[i].indexOf(':') !== -1 && arr[i].indexOf('http') === -1){
                var p = arr[i].split(':');
                obj[p[0]] = p[1];
            }
        }
        return obj;
    },
    type:function(url){
        if(!url) return;
      url = url.toString();
      if( url ===  'false' ){
          return false;
      }
      if(url.indexOf('/images.unsplash.com/') !== -1){
          return 'image';
      }
      var extension = url.split('.').pop();
      var images = 'jpg,png,gif,jpeg,bmp';
      if(images.contains(extension)){
        return 'image';
      }
      else if(extension=='swf'){return 'flash'}
      else if(extension=='pdf'){return 'pdf'}
      else if(url.contains('youtube.com') || url.contains('youtu.be')){return 'youtube'}
      else if(url.contains('vimeo.com')){return 'vimeo'}

      else{ return 'link'; }
    }
};

mw.slug = {
  max: 60,
  normalize:function(string){
      if(!string) return '';
      string = string.substring(0, mw.slug.max);
      return string.replace(/[`~!@#$%^&№€§*()\=?'"<>\{\}\[\]\\]/g, '');
  },
  removeSpecials:function(string){
    string = mw.slug.normalize(string);
    if(!string) return string;
    var special = 'àáäãâèéëêìíïîòóöôõùúüûñç·=,:;',
        normal =  'aaaaaeeeeiiiiooooouuuunc------',
        len = special.length,
        i = 0;
    for ( ; i<len; i++) {
       var bad = special[i];
       var good = normal[i];
       string = string.replace(new RegExp(bad, 'g'), good);
    }
    return string;
  },
  create:function(string){
    string = string || '';
    string = mw.slug.removeSpecials(string);
    return string.trim().toLowerCase().replace(/[-\s]+/g, '-');
  }
};


mw.require('url.js');

mw.hash = function(b){ return b === undefined ? window.location.hash : window.location.hash = b; };

mw.on = function(eventName, callback){
    eventName = eventName.trim()
    $.each(eventName.split(' '), function(){
        mw.$(mw._on._eventsRegister).on(this.toString(), callback);
    });
};
mw.trigger = function(eventName, paramsArray){
    return mw.$([mww, mw._on._eventsRegister]).trigger(eventName, paramsArray);
};

mw._on = {
  _eventsRegister:{},
  mouseDownAndUp:function(el, callback){
    var $el = mw.$(el);
    el = $el[0];
    $el.on('mousedown touchstart', function(){
      this.__downTime = new Date().getTime();
      (function(el){
        setTimeout(function(){
          el.__downTime = -1;
        }, 777);
      })(this);
    });
    $el.on('mouseup touchend', function(e){
      if(!!callback){
        callback.call(this, new Date().getTime()-this.__downTime, e)
      }
    });
  },
  onmodules : {},
  moduleReload : function(id, c, trigger){
      var exists;
     if(trigger){
          exists = typeof mw.on.onmodules[id] !== 'undefined';
          if(exists){
            var i = 0, l = mw.on.onmodules[id].length;
            for( ; i < l; i++){
               mw.on.onmodules[id][i].call(document.getElementById(id));
            }
          }
        return false;
     }
     if(mw.is.func(c)){
       exists = typeof mw.on.onmodules[id] !== 'undefined';
       if(exists){
          mw.on.onmodules[id].push(c);
       }
       else{
         mw.on.onmodules[id] = [c];
       }
     }
     else if(c==='off'){
        exists = typeof mw.on.onmodules[id] !== 'undefined';
        if(exists){
          mw.on.onmodules[id] = [];
        }
     }
  },
  _hashrec : {},
  _hashparams : this._hashparams || [],
  _hashparam_funcs : [],
  hashParam : function(param, callback, trigger, isManual){
    var index;
    if(isManual){
        index = mw.on._hashparams.indexOf(param);
        if (mw.on._hashparam_funcs[index] !== undefined){
          mw.on._hashparam_funcs[index].call(false, false);
        }
        return false;
    }
    if(trigger === true){
        index = mw.on._hashparams.indexOf(param);

        if(index !== -1){
          var hash = mw.hash();
          var params = mw.url.getHashParams(hash);

          if (typeof params[param] === 'string' && mw.on._hashparam_funcs[index] !== undefined) {
              var pval = decodeURIComponent(params[param]);
              mw.on._hashparam_funcs[index].call(pval, pval);

          }
        }
    }
    else{
        mw.on._hashparams.push(param);
        mw.on._hashparam_funcs.push(callback);
    }
},
hashParamEventInit:function(){
  var hash = mw.hash();
  var params = mw.url.getHashParams(hash);

  if(hash==='' || hash==='#' || hash ==='#?'){
    var len = mw.on._hashparams.length, i=0;
    for( ; i < len; i++){
        mw.on.hashParam(mw.on._hashparams[i], "", true);
    }
  }
  else{
    for(var x in params){
        if(params[x] !== mw.on._hashrec[x] || typeof mw.on._hashrec[x] === 'undefined'){
            mw.on.hashParam(x, "", true);
        }
    }
  }

  mw.on._hashrec = params;
},
DOMChangePause:false,
DOMChangeTime:1500,
DOMChange:function(element, callback, attr, a){
    attr = attr || false;
    a = a || false;

    element.addEventListener("input", function(e){
        if( !mw.on.DOMChangePause ) {
            if(!a){
                callback.call(this);
            }
            else{
                clearTimeout(element._int);
                element._int = setTimeout(function(){
                    callback.call(element);
                }, mw.on.DOMChangeTime);
            }

        }
    }, false);

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    if(typeof MutationObserver === 'function'){
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation){
            if( !mw.on.DOMChangePause ) {
                callback.call(mutation.target);
            }
          });
        });
        var config = { attributes: attr, childList: true, characterData: true };
        observer.observe(element, config);
    } else {
        element.addEventListener("DOMCharacterDataModified", function(e){
            if( !mw.on.DOMChangePause ) {
                if(!a){
                    callback.call(this);
                }
                else{
                    clearTimeout(element._int);
                    element._int = setTimeout(function(){
                        callback.call(element);
                    }, mw.on.DOMChangeTime);
                }

            }
        }, false);
        element.addEventListener("DOMNodeInserted", function(e){

            if(/*mw.tools.hasClass(e.target, 'element') || */mw.tools.hasClass(e.target, 'module') || mw.tools.hasParentsWithClass(e.target, 'module')){
                return false;
            }
            if( !mw.on.DOMChangePause ) {
                if(!a){
                    callback.call(this);
                }
                else{
                    clearTimeout(element._int);
                    element._int = setTimeout(function(){
                        callback.call(element);
                    }, mw.on.DOMChangeTime);
                }
            }
        }, false);

        if(attr){
            element.addEventListener("DOMAttrModified", function(e){

                var attr = e.attrName;
                if(attr !== "contenteditable"){
                    if( !mw.on.DOMChangePause ) {
                        if(!a){
                            callback.call(this);
                        }
                        else{
                            clearTimeout(element._int);
                            element._int = setTimeout(function(){
                                callback.call(element);
                            }, mw.on.DOMChangeTime);
                        }
                    }
                }
            }, false);
        }
    }

 },
 stopWriting:function(el, c){
    if(el === null || typeof el === 'undefined'){ return false; }
    if(!el.onstopWriting){
      el.onstopWriting = null;
    }
    clearTimeout(el.onstopWriting);
    el.onstopWriting = setTimeout(function(){
        c.call(el);
    }, 400);
 },
 scrollBarOnBottom : function(obj, distance, callback){
    if(typeof obj === 'function'){
       callback = obj;
       obj =  window;
       distance = 0;
    }
    if(typeof distance === 'function'){
      callback = distance;
      distance = 0;
    }
    obj._pauseCallback = false;
    obj.pauseScrollCallback = function(){ obj._pauseCallback = true;}
    obj.continueScrollCallback = function(){ obj._pauseCallback = false;}
    mw.$(obj).scroll(function(e){
      var h = obj === window ? document.body.scrollHeight : obj.scrollHeight;
      var calc = h - mw.$(obj).scrollTop() - mw.$(obj).height();
      if(calc <= distance && !obj._pauseCallback){
        callback.call(obj);
      }
    });
  },
  tripleClick : function(el, callback){
      var t, timeout = 199;
      el = el || window;
      el.addEventListener("dblclick", function () {
          t = setTimeout(function () {
              t = null;
          }, timeout);
      });
      el.addEventListener("click", function (e) {
          if (t) {
              clearTimeout(t);
              t = null;
              callback.call(el, e.target);
          }
      });
  },
  transitionEnd:function(el,callback){
    mw.$(el).bind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd otransitionend', function(){
        callback.call(el);
    });
  },
  ones:{ },
  one:function(name, c, trigger, isDone){
    if(trigger !== true){
      if(mw.on.ones[name] === undefined){
         mw.on.ones[name] = [c]
      }
      else{
         mw.on.ones[name].push(c);
      }
    }
    else{
       if(mw.on.ones[name] !== undefined){
          var i=0, l = mw.on.ones[name].length;
          for( ; i<l; i++){
              if(isDone === true){
                mw.on.ones[name][i].call('ready', 'ready');
              }
              else{
                mw.on.ones[name][i].call('start', 'start');
              }
          }
       }
    }
  },
  userIteractionInitRegister: new Date().getTime(),
  userIteractionInit: function(){
      var max = 378;
      mw.$(mwd).on('mousemove touchstart click keydown resize ajaxStop', function(){
          var time = new Date().getTime();
          if((time - mw._on.userIteractionInitRegister) > max){
              mw._on.userIteractionInitRegister = time;
              mw.trigger('UserInteraction');
          }
      });
  }
};

for(var x in mw._on) mw.on[x] = mw._on[x];



mw.hashHistory = [window.location.hash]

mw.prevHash = function(){
  var prev = mw.hashHistory[mw.hashHistory.length - 2];
  return prev !== undefined ? prev : '';
};



$(window).on("hashchange load", function(event){
    if(event.type === 'load'){
        mw._on.userIteractionInit();
    }

    mw.on.hashParamEventInit();

   var hash =  mw.hash();

   var isMWHash = hash.replace(/\#/g, '').indexOf('mw@') === 0;
   if (isMWHash) {
       var MWHash = hash.replace(/\#/g, '').replace('mw@', '');
       var el = document.getElementById(MWHash);
       if(el) {
           mw.tools.scrollTo(el);
       }
   }
   if(hash.contains("showpostscat")){
      mw.$("html").addClass("showpostscat");
   }
   else{
      mw.$("html").removeClass("showpostscat");
   }


   if (event.type === 'hashchange') {
     mw.hashHistory.push(mw.hash());
     var size = mw.hashHistory.length;
     var changes = mw.url.whichHashParamsHasBeenRemoved(mw.hashHistory[size-1], mw.hashHistory[size-2]), l=changes.length, i=0;
     if (l>0) {
       for( ; i < l; i++ ){
          mw.on.hashParam(changes[i], "", true, true);
       }
     }
   }
});


mw.event = {
    windowLeave: function(c) {
      document.documentElement.addEventListener('mouseout', function(e) {
          if (!e.relatedTarget && !e.toElement && c) {
              c.call(document.body, e);
          }
      });
    },
    cancel:function(e, prevent){
    prevent === true ? e.preventDefault() : '';
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    },
    key:function(e,key){
        return (e.keyCode === parseFloat(key));
    },
    page: function (e) {
      e = e.originalEvent || e;
      if (e.type.indexOf('touch') !== 0) {
        return {
            x: e.pageX,
            y: e.pageY
        };
      } else {
          return {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY
          };
      }
    },
    targetIsField: function(e) {
        e = e.originalEvent || e;
        var t = e.target;
        return t.nodeName === 'INPUT' ||
            t.nodeName === 'textarea' ||
            t.nodeName === 'select';
    },
    get: function(e) {
        return e.originalEvent || e;
    },
    keyCode: function(e) {
        e = mw.event.get(e);
        return e.keyCode || e.which;
    },
    isKeyCode: function(e, code){
        return this.keyCode(e) === code;
    },
    is: {
      comma: function (e) {
          e = mw.event.get(e);
          return e.keyCode === 188;
              },
      enter: function (e) {
        e = mw.event.get(e);
        return e.key === "Enter" || mw.event.isKeyCode(e, 13);
      },
      escape: function (e) {
          e = mw.event.get(e);
          return e.key === "Escape" || mw.event.isKeyCode(e, 27);
      },
      backSpace : function (e) {
        e = mw.event.get(e);
        return e.key === "Backspace" || mw.event.isKeyCode(e, 8);
      },
      delete: function (e) {
          e = mw.event.get(e);
          return e.key === "Delete" || mw.event.isKeyCode(e, 46);
      }
    }
};














// JavaScript Document
mw.require('forms.js');

mw.product = {
    quick_view: function(product_id, dialog_title) {
        $.get(mw.settings.api_url + 'product/quick-view', {id:product_id},
            function (html) {
                mw.dialog({
                    title: dialog_title,
                    width: 960,
                    content: html,
                    onremove: function () {

                    },
                    name: 'product-quick-view'
                });
            }
        );
    }
};

mw.cart = {

    add_and_checkout: function (content_id, price, c) {
        if (typeof(c) == 'undefined') {
            var c = function () {
                window.location.href = mw.settings.api_url + 'shop/redirect_to_checkout';
            }
        }
        return mw.cart.add_item(content_id, price, c);
    },

    add_item: function (content_id, price, c) {
        var data = {};
        if (content_id == undefined) {
            return;
        }

        data.content_id = content_id;

        if (price != undefined && data != undefined) {
            data.price = price;
        }

        $.post(mw.settings.api_url + 'update_cart', data,
            function (data) {

                //   mw.cart.after_modify(data);


                if (typeof c === 'function') {
                    c.call(data);
                }
                mw.cart.after_modify(data, ['mw.cart.add']);
                mw.trigger('cartAddItem', data);

                //  mw.trigger('mw.cart.add', [data]);
            });
    },

    add: function (selector, price, c) {
        var data = mw.form.serialize(selector);


        var is_form_valid = true;
        mw.$('[required],.required', selector).each(function () {

            if (!this.validity.valid) {
                is_form_valid = false

                var is_form_valid_check_all_fields_tip = mw.tooltip({
                    id: 'mw-cart-add-invalid-form-tooltip-show',
                    content: 'This field is required',
                    close_on_click_outside: true,
                    group: 'mw-cart-add-invalid-tooltip',
                    skin: 'warning',
                    element: this
                });


                return false;
            }
        });

        if (!is_form_valid) {
            return;
        }


        if (price != undefined && data != undefined) {
            data.price = price;
        }
        if (data.price == null) {
            data.price = 0;
        }
        $.post(mw.settings.api_url + 'update_cart', data,
            function (data) {

                // mw.trigger('mw.cart.add', [data]);

                if (typeof c === 'function') {
                    c.call(data);
                }
                mw.cart.after_modify(data, ['mw.cart.add']);
                mw.trigger('cartAddItem', data);


            });
    },

    remove: function ($id) {
        var data = {}
        data.id = $id;

        $.post(mw.settings.api_url + 'remove_cart_item', data,
            function (data) {
                var parent = mw.$('.mw-cart-item-' + $id).parent();
                mw.$('.mw-cart-item-' + $id).fadeOut(function () {
                    mw.$(this).remove();
                    if (parent.find(".mw-cart-item").length == 0) {

                    }
                });
                //mw.cart.after_modify();
                // mw.reload_module('shop/cart');
                // mw.reload_module('shop/shipping');
                // mw.trigger('mw.cart.remove', [data]);
                mw.cart.after_modify(data, ['mw.cart.remove']);
                mw.trigger('cartRemoveItem', data);

            });
    },

    qty: function ($id, $qty) {
        var data = {}
        data.id = $id;
        data.qty = $qty;
        $.post(mw.settings.api_url + 'update_cart_item_qty', data,
            function (data) {
                // mw.reload_module('shop/cart');
                // mw.reload_module('shop/shipping');
                // mw.trigger('mw.cart.qty', [data]);

                if(data && typeof(data.error) !== 'undefined'){
                    if(typeof(data.message) !== 'undefined'){
                        mw.notification.warning(data.message);
                    }
                }

                mw.cart.after_modify(data, ['mw.cart.qty']);
                mw.trigger('cartModify', data);


            });

    },

    after_modify: function (data, events_to_trigger) {


        var modules = ["shop/cart", "shop/shipping", "shop/payments"].filter(function (module) {
            return !!document.querySelector('[data-type="' + module + '"');
        });

        var events = ['mw.cart.modify'];

        if (!!events_to_trigger) {
            var events = events.concat(events_to_trigger);
        }


        if (modules.length) {
            mw.reload_modules(modules, function (data) {
                events.forEach(function (item) {
                    mw.trigger(item, [data]);
                })
            }, true);
        } else {
            events.forEach(function (item) {
                mw.trigger(item, [data]);
            })
        }


        // mw.reload_module('shop/cart');
        // mw.reload_module('shop/shipping');
        // mw.reload_module('shop/payments');


        if ((typeof data == 'object') && typeof data.cart_items_quantity !== 'undefined') {
            $('.js-shopping-cart-quantity').html(data.cart_items_quantity);
        }


        mw.trigger('mw.cart.after_modify', data);
        mw.trigger('cartModify', data);


    },

    checkout: function (selector, callback, beforeRedirect) {

        if (!beforeRedirect) {
            beforeRedirect = function () {
                return new Promise(function (){
                    resolve();
                });
            };
        }

        var form = mw.$(selector);
        $(document).trigger("checkoutBeforeProcess", form);


        var state = form.dataset("loading");
        if (state == 'true') return false;
        form.dataset("loading", 'true');
        form.find('.mw-checkout-btn').attr('disabled', 'disabled');
        form.find('.mw-checkout-btn').hide();

        setTimeout(function () {

            var form = mw.$(selector);
            var obj = mw.form.serialize(form);


            $.ajax({
                type: "POST",
                url: mw.settings.api_url + 'checkout',
                data: obj,
                error: function (xhr, ajaxOptions, thrownError) {
                     mw.errorsHandle(JSON.parse(xhr.responseText))
                    form.dataset("loading", 'false');
                    form.find('.mw-checkout-btn').removeAttr('disabled');
                    form.find('.mw-checkout-btn').show();

                }
            })
                .done(function (data) {
                    mw.trigger('checkoutDone', data);

                    var data2 = data;

                    if (data != undefined) {
                        mw.$(selector + ' .mw-cart-data-btn').removeAttr('disabled');
                        mw.$('[data-type="shop/cart"]').removeAttr('hide-cart');


                        if (typeof(data2.error) != 'undefined') {
                            mw.$(selector + ' .mw-cart-data-holder').show();
                            if (typeof(data2.error.address_error) != 'undefined') {
                                var form_with_err = form;
                                var isModalForm = $(form_with_err).attr('is-modal-form')

                                if (isModalForm) {
                                    mw.cart.modal.showStep(form_with_err, 'delivery-address');
                                }
                                mw.notification.error('Please fill your address details');

                            }

                            mw.response(selector, data2);
                        } else if (typeof(data2.success) != 'undefined') {


                            if (typeof callback === 'function') {
                                callback.call(data2.success);

                            } else if (typeof window[callback] === 'function') {
                                window[callback](selector, data2.success);
                            } else {

                                mw.$('[data-type="shop/cart"]').attr('hide-cart', 'completed');
                                mw.reload_module('shop/cart');
                                mw.$(selector + ' .mw-cart-data-holder').hide();
                                mw.response(selector, data2);
                            }





                            if (typeof(data2.redirect) != 'undefined') {

                                setTimeout(function () {
                                    beforeRedirect().then(function (){
                                        window.location.href = data2.redirect;
                                    });
                                }, 100);
                                return;
                            } else {
                                mw.trigger('mw.cart.checkout.success', data2);
                                mw.trigger('checkoutSuccess', [data]);

                            }


                        } else if (parseInt(data) > 0) {
                            mw.$('[data-type="shop/checkout"]').attr('view', 'completed');
                            mw.reload_module('shop/checkout');
                        } else {
                            if (obj.payment_gw != undefined) {
                                var callback_func = obj.payment_gw + '_checkout';
                                if (typeof window[callback_func] === 'function') {
                                    window[callback_func](data, selector);
                                }
                                var callback_func = 'checkout_callback';
                                if (typeof window[callback_func] === 'function') {
                                    window[callback_func](data, selector);
                                }
                            }
                        }

                    }
                    form.dataset("loading", 'false');
                    form.find('.mw-checkout-btn').removeAttr('disabled');
                    form.find('.mw-checkout-btn').show();
                    mw.trigger('checkoutResponse', data);
                });

        }, 1500);
    }
}

if (typeof(mw.cart.modal) == 'undefined') {
    mw.cart.modal = {};
}
if (typeof(mw.cart.modal.init) == 'undefined') {
    mw.cart.modal.init = function (root_node) {
        mw.cart.modal.bindStepButtons(root_node);

        /*
            var inner_cart_module = $(root_node).find('[parent-module-id="js-ajax-cart-checkout-process"]')[0];
        */
        var inner_cart_module = $(root_node).find('[id="cart_checkout_js-ajax-cart-checkout-process"]')[0];
        if (inner_cart_module) {
            var check = $(document).find('[id="' + inner_cart_module.id + '"]').length
            mw.on.moduleReload(inner_cart_module.id);
        }
    };
}
if (typeof(mw.cart.modal.bindStepButtons) == 'undefined') {

    mw.cart.modal.bindStepButtons = function (root_node) {
        if (typeof root_node === 'string') {
            root_node = mw.$(root_node);
        }

        if (root_node[0]._bindStepButtons) {
            return;
        }
        root_node[0]._bindStepButtons = true;

        var checkout_form = $(root_node).find('form').first();


        $('body').on("mousedown touchstart", '.js-show-step', function () {
            var step = $(this).attr('data-step');

            mw.cart.modal.showStep(checkout_form, step);


        });
    };

    mw.cart.modal.showStep = function (form, step) {


        var prevStep = mw.$('.js-show-step.active', form).data('step');

        if (prevStep === step) return;

        var prevHolder = $(form).find('.js-' + prevStep).first();

        $(form).attr('is-modal-form', true);

        if (step === 'checkout-complete') {
            return;
        }

        var validate = function (callback) {
            var hasError = false;
            mw.$('input,textarea,select', prevHolder).each(function () {
                if (!this.checkValidity()) {
                    mw.$(this).addClass('is-invalid');
                    hasError = true;
                } else {
                    mw.$(this).removeClass('is-invalid');
                }
            });
            if (step === 'payment-method' || step === 'preview') {
                if (hasError) {
                    step = 'delivery-address';
                    callback.call(undefined, hasError, undefined, step);
                }
            }
            if (step === 'payment-method') {
                $.post(mw.settings.api_url + 'checkout/validate', mw.serializeFields(prevHolder), function (data) {
                    if (!data.valid) {
                        step = 'delivery-address';
                    }
                    callback.call(undefined, !data.valid, undefined, step);

                }).fail(function (data) {
                    mw.errorsHandle(data)
                });
            } else {
                callback.call(undefined, hasError, undefined, step);
            }
        };

        validate(function (hasError, message, step) {
            if (hasError) {
                message = message || mw.lang('Please fill properly the required fields');
                mw.notification.warning(message);
            }

            mw.$('.js-show-step').removeClass('active');
            mw.$('[data-step]').removeClass('active');
            mw.$('[data-step="' + step + '"]').addClass('active').parent().removeClass('muted');
            mw.$(this).addClass('active');
            var step1 = '.js-' + step;
            mw.$('.js-step-content').hide();
            mw.$(step1).show();

        });


    };
}

mw.cart.modal.bindStepButtons__old = function (root_node) {
    if (typeof root_node === 'string') {
        root_node = mw.$(root_node);
    }

    if (root_node[0]._bindStepButtons) {
        return;
    }
    root_node[0]._bindStepButtons = true;

    root_node.find('.js-show-step').on("mousedown touchstart", function () {

        var has_error = false;

        var form = mw.tools.firstParentWithTag(this, 'form');
        var prevStep = mw.$('.js-show-step.active', form).data('step');
        var step = this.dataset.step;

        if (prevStep === step) return;


        var prevHolder = form.querySelector('.js-' + prevStep);


        if (step === 'checkout-complete') {
            return;
        }
        mw.$('input,textarea,select', prevHolder).each(function () {
            if (!this.checkValidity()) {
                mw.$(this).addClass('is-invalid');
                has_error = 1;
            } else {
                mw.$(this).removeClass('is-invalid');
            }
        });
        if (step === 'payment-method' || step === 'preview') {
            if (has_error) {
                step = 'delivery-address';
            }
        }
        mw.$('.js-show-step').removeClass('active');
        mw.$('[data-step]').removeClass('active');
        mw.$('[data-step="' + step + '"]').addClass('active').parent().removeClass('muted');
        mw.$(this).addClass('active');
        var step1 = '.js-' + step;
        mw.$('.js-step-content').hide();
        mw.$(step1).show();
        if (has_error) {
            mw.notification.warning('Please fill the required fields');
        }
    });

}


$(document).ready(function(){
    mw.$('.mw-lazy-load-module').reload_module();
});


$(document).ready(function(){

    mw.common['data-mw-close']();
    mw.$(document.body)
    .on('click', '[data-mw-dialog]', function(e){
        mw.common['data-mw-dialog'](e);
    })
    .on('click', '[data-mw-close]', function(e){
        mw.common['data-mw-close'](e);
    });
});

mw.common = {
    setOptions:function (el, options) {
        options = options || {};
        if(el.target){
            el = el.target;
        }
        var settings = el.getAttribute('data-mw-settings');
        try{
            settings = JSON.parse(settings);
        }
        catch(e){
            settings = {};
        }
        return $.extend(options, settings)

    },
    'data-mw-close':function(e){
        if(e && e.target){
            var data = e.target.getAttribute('data-mw-close');
            var cookie = JSON.parse(mw.cookie.get('data-mw-close') || '{}');
            mw.$(data).slideUp(function(){
                mw.$(this).remove();
                cookie[data] = true;
                mw.cookie.set('data-mw-close', JSON.stringify(cookie));
            })
        }
        else{
            var cookie =  JSON.parse(mw.cookie.get('data-mw-close') || '{}');
            mw.$('[data-mw-close]').each(function(){
                var data = this.getAttribute('data-mw-dialog');
                if(cookie[data]){
                    mw.$(data).remove();
                }
            })
        }
    },
    'data-mw-dialog':function(e){
        var skin = 'basic';
        var overlay = true;
        var data = e.target.getAttribute('data-mw-dialog');

        if(data){
            e.preventDefault();
            data = data.trim();
            var arr = data.split('.');
            var ext = arr[arr.length-1];
            if(data.indexOf('http') === 0){
                if(ext && /(gif|png|jpg|jpeg|bpm|tiff)$/i.test(ext)){
                    mw.image.preload(data, function(w,h){
                        var html = "<img src='"+data+"'>";
                        var conf = mw.common.setOptions(e, {
                            width:w,
                            height:h,
                            content:html,
                            template:skin,
                            overlay:overlay,
                            overlayRemovesModal:true
                        })
                        mw.dialog(conf);
                    });
                }
                else{
                    var conf = mw.common.setOptions(e, {
                        url:data,
                        width:'90%',
                        height:'auto%',
                        template:skin,
                        overlay:overlay,
                        overlayRemovesModal:true
                    })
                    mw.dialogIframe(conf)
                }
            }
            else if(data.indexOf('#') === 0 || data.indexOf('.') === 0){
                var conf = mw.common.setOptions(e, {
                    content:$(data)[0].outerHTML,
                    template:skin,
                    overlay:overlay,
                    overlayRemovesModal:true
                });
                mw.dialog(conf);
            }
        }
    }
}


    mw.components = {
    _rangeOnce: false,
    'range': function(el){
        mw.lib.require('jqueryui');
        var options = this._options(el);
        var defaults = {
            range: 'min',
            animate: "fast"
        };
        var ex = {}, render = el;
        if(el.nodeName === 'INPUT'){
            el._pauseChange = false;
            el.type = 'text';
            render = document.createElement('div');
            $(el).removeClass('mw-range');
            $(render).addClass('mw-range');
            $(el).after(render);
            ex = {
                slide: function( event, ui ) {
                    el._pauseChange = true;
                   $(el).val(ui.value).trigger('change').trigger('input');
                    setTimeout(function () {
                        el._pauseChange = false;
                    }, 78);
                }
            };

        }
        var settings = $.extend({}, defaults, options, ex);
        if(el.min){
            settings.min = parseFloat(el.min);
        }
        if(el.max){
            settings.max = parseFloat(el.max);
        }
        if(el.value){
            settings.value = parseFloat(el.value);
        }
        mw.$(render)
            .slider(settings)
            .on('mousedown touchstart', function(){
                mw.$(this).addClass('active');
            });
        $(el).on('input', function(){
            mw.$(render).slider( "value", this.value );
        });
        if(!mw.components._rangeOnce) {
            mw.components._rangeOnce = true;
            mw.$(document.body).on('mouseup touchend', function(){
                mw.$('.mw-range.active').removeClass('active');
            });
        }
    },
    'color-picker': function(el){
        var options = this._options(el);
        var defaults = {
            position: 'bottom-center'
        };
        var settings = $.extend({}, defaults, options);
        var nav = document.createElement('div');
        nav.className = 'mw-ui-btn-nav mw-color-picker-holder';
        var view = document.createElement('div');
        view.className = 'mw-ui-btn';
        view.innerHTML = '<span class="mw-ui-btn-img"></span>';
        nav.appendChild(view);
        var inputEl;
        if(el.nodeName === 'INPUT'){
            inputEl = el;
            mw.$(el).addClass('mw-ui-field').after(nav);
            nav.appendChild(el);
            mw.$('.mw-ui-btn-img', view).css("background-color", el.value);
        }

        inputEl._time = null;
        var picker = mw.colorPicker({
            element:inputEl,
            position:settings.position,
            onchange:function(color){
                mw.$('.mw-ui-btn-img', view).css("background-color", color);
                mw.$(inputEl).trigger('change');
            }
        });
        mw.$(view).on("click", function(){
            setTimeout(function(){
                picker.toggle();
            }, 10);
        });
    },
    'file-uploader':function(el){
        var options = this._options(el);
        var defaults = {
            element: el
        };
        var settings = $.extend({}, defaults, options);
        var ch = mw.$(el).attr("onchange");

        mw.fileWindow({
            types:'media',
            change:function(url){
                try{
                    eval(ch);
                }
                catch(err){}
            }
        });
    },
    'modules-tabs':function(el){
        var options = this._options(el);
        options.breakPoint = 100; //makes accordion if less then 100px
        if(window.live_edit_sidebar) {
            mw.$(el).addClass('mw-accordion-window-height')
            options.breakPoint = 800; //makes accordion if less then 800px
        }
        var accordion = this.accordion(el);
        var tb = new mw.tabAccordion(options, accordion);
    },
    'tab-accordion':function(el){
       var options = this._options(el);
       var accordion = this.accordion(el);
       var tb = new mw.tabAccordion(options, accordion);
    },
    accordion:function(el){
        if(!el || el._accordion) return;
        if(!$(el).is(':visible')){
            setTimeout(function(){
                mw.components.accordion(el);
            }, 777, el);
            return;
        }
        el._accordion = true;
        var options = this._options(el);
        var settings = $.extend(options, {element:el})
        var accordion = new mw.uiAccordion(settings);
        if($(el).hasClass('mw-accordion-window-height')){
            accordion._setHeight = function(){
                var max =  mw.$(window).height() - (accordion.root.offset().top - mw.$(window).scrollTop());
                accordion.root.css('height', max);
                var content_max = max - (accordion.titles.length * accordion.titles.eq(0).outerHeight());
                accordion.contents.css('height', content_max);
            };
            accordion._setHeight();
            mw.$(window).on('load resize', function(){
                accordion._setHeight();
            });
            if(window !== top){
                mw.$(top).on('load resize', function(){
                    accordion._setHeight();
                });
            }
        }
        if($(el).hasClass('mw-accordion-full-height')){
            accordion._setHeight = function(){
                var max = Math.min($(el).parent().height(), mw.$(window).height());
                accordion.root.css('maxHeight', max);
                var content_max = max - (accordion.titles.length * accordion.titles.eq(0).outerHeight());
                accordion.contents.css('maxHeight', content_max);
            };
            accordion._setHeight();
            mw.$(window).on('load resize', function(){
                accordion._setHeight();
            });
            if(window !== top){
                mw.$(top).on('load resize', function(){
                    accordion._setHeight();
                });
            }
        }
        return accordion;
    },
    postSearch: function (el) {
        var defaults = {keyword: el.value, limit: 4};
        el._setValue = function (id) {
            mw.tools.ajaxSearch(this._settings, function () {

            });
        };

        el = mw.$(el);
        var options = JSON.parse(el.attr("data-options") || '{}');
        settings = $.extend({}, defaults, options);
        el[0]._settings = settings;

        el.wrap("<div class='mw-component-post-search'></div>");
        el.after("<ul></ul>");

        el.on("input focus blur", function (event) {

            if (!el[0].is_searching) {
                var val = el.val();
                if (event.type == 'blur') {
                    mw.$(this).next('ul').hide();
                    return false;
                }
                if (event.type == 'focus') {
                    if ($(this).next('ul').html()) {
                        mw.$(this).next('ul').show()
                    }
                    return false;
                }
                el[0].is_searching = true;

                this._settings.keyword = this.value;
                mw.$('ul', el).empty("")
                el.parent().addClass("loading");
                mw.tools.ajaxSearch(this._settings, function () {
                    var lis = [];
                    var json = this;
                    for (var item in json) {
                        var obj = json[item];
                        if (typeof obj === 'object') {
                            var li = document.createElement("li");
                            li._value = obj;
                            li.innerHTML = obj.title;
                            mw.$(li).on("mousedown touchstart", function () {
                                el.val(this._value.title);

                                el[0]._value = this._value;

                                el.trigger('postSelected', [this._value]);
                                mw.$(this.parentNode).hide()
                            })

                            lis.push(li);
                        }
                    }
                    el.parent().removeClass("loading");
                    var ul = el.parent().find("ul");
                    ul.empty().append(lis).show();
                    el[0].is_searching = false;
                });
            }
        });
        el.trigger("postSearchReady");
    },
    _options: function (el) {
        return mw.tools.elementOptions(el);
    },
    _init: function () {
        mw.$('.mw-field input[type="range"]').addClass('mw-range');
        mw.$('[data-mwcomponent], [data-mw-component]').each(function () {
            var component = this.dataset.mwComponent || this.dataset.mwcomponent;
            if (mw.components[component]) {
                mw.components[component](this);
                mw.$(this).removeAttr('data-mwcomponent').removeAttr('data-mw-component')
            }
        });
        $.each(this, function(key){
            if(key.indexOf('_') === -1){
                mw.$('.mw-'+key+', mw-'+key).not(".mw-component-ready").each(function () {
                    mw.$(this).addClass('mw-component-ready');
                    mw.components[key](this);
                });
            }
        });
    }
};

$(document).ready(function () {
    mw.components._init();
});

$(window).on('load', function () {
    mw.components._init();
});

    mw.on('ComponentsLaunch', function () {
        mw.components._init();
    });

    mw.on('mwDialogShow', function () {
        setTimeout(function () {
            mw.components._init();
        }, 110);
    });

$(window).on('ajaxStop', function () {
    setTimeout(function () {
        mw.components._init();
    }, 100);
});

mw.registerComponent = function(name, func){
    if(mw.components[name]){
        console.warn('Component ' + name + ' already exists.');
        return;
    }
    mw.components[name] = func;
};


mw._instrument = function(){
    this._value = null;
    var $scope = $(this);
    this.value = function(val){
        if (!val) return this._value;
        this._value = val;
        $scope.trigger('change', [val]);
        return this;
    };
};
mw.instruments = {
    _create:function (config) {
        config = config || {};
        var settings = $.extend({}, config);
        var frame = document.createElement('iframe');
        frame.src = mw.external_tool(settings.url);
        frame.className = 'mw-instrument-frame';
        frame.frameBorder = '0';
        $(frame).css(settings.css || {width: '100%'}).on('load', function () {
            mw.instruments._prepareFrame(frame, settings);
        });
        return frame;
    },
    _prepareFrame: function (frame, settings) {
        frame.contentWindow.thisframe = frame;
        if(!settings.css || !settings.css.height) {
            mw.tools.iframeAutoHeight(frame);
        }
    },
    _run: {},
    run: function(config){
        if(!config || !config.instrument || !config.id) {
            return;
        }
        config.show = typeof config.show === 'undefined' ? true : config.show;
        config.width = config.width || 660;
        if(!this._run[config.id]){
            var inst = this[config.instrument]({
                mode: 'inline'
            });
            var div = $('<div id="'+config.id+'" />');
            div.hide();
            $(document.body).append(div);
            div.append(inst.frame);
            this._run[config.id] = inst;
        }
        if (config.show) {
            mw.$('#' + config.id).mwDialog({
                //id: 'mw-instrument-dialog-' + config.id,
                width: config.width
            });
        }
        return this._run[config.id];
    },
    createMode: function(mode, url, id){
        var frame, dialog;
        if(mode === 'inline'){
            frame = this._create({
                url: 'link_editor'
            });
        } else if(mode === 'dialog') {
            var exists = mw.dialog.get('#' + id.replace('#', ''));
            if(exists){
                exists.show();
                return {
                    dialog: exists,
                    frame: exists.iframe
                };
            }
            dialog = mw.dialogIframe({
                url: url,
                height: 'auto',
                autoHeight: true
            });
            frame = dialog.iframe;
        } else {
            return {};
        }

        return {
            frame: frame,
            dialog: dialog
        };
    },
    _handlers: {},
    handler: function(id, val){
        if(!val) {
            return this._handlers[id];
        }
        this._handlers[id] = val;
    },
    link: function(config){
        config = config || {};
        var defaults = {
            mode: 'dialog' // 'dialog', 'inline'
        };
        var settings = $.extend({}, defaults, config);
        var frame, dialog;
        if(settings.mode === 'inline'){
            frame = this._create({
                url: 'link_editor'
            });
            mw.tools.iframeAutoHeight(frame);
        } else if(settings.mode === 'dialog') {
          dialog = mw.dialogIframe({
              url:' link_editor',
              height: 'auto',
              autoHeight: true,
              width: 800
          });
          frame = dialog.iframe;
        } else {
            return {};
        }
        var id = mw.id();
        var final = {
            frame: frame,
            dialog: dialog,
            handler: $({}),
            id: id,
            window: window
        };
        this.handler(id, final);
        $(frame).on('load', function(url, target, text){
            this.contentWindow.mw.instrumentData = final;
        });
        if(frame.contentWindow && frame.contentWindow.mw){
            frame.contentWindow.mw.instrumentData = final;
        }
        return final;
    },
    file: function(config){
        config = config || {};
        var defaults = {
            mode: 'dialog' // 'dialog', 'inline'
        };
        var settings = $.extend({}, defaults, config);
        var frame, dialog;
        var url = 'file_picker';
        if(config.types) {
            url += '?types=' + config.types
        }
        if(settings.mode === 'inline'){
            frame = this._create({
                url: url
            });
        } else if(settings.mode === 'dialog') {
            dialog = mw.dialogIframe({
                url:url,
                height: 'auto',
                autoHeight: true
            });
            frame = dialog.iframe;
        } else {
            return {};
        }
        var id = mw.id();
        var final = {
            frame: frame,
            dialog: dialog,
            handler: $({}),
            id: id,
            window: window
        };
        this.handler(id, final);
        $(frame).on('load', function(url, target, text){
            this.contentWindow.mw.instrumentData = final;
        });
        if(frame.contentWindow && frame.contentWindow.mw){
            frame.contentWindow.mw.instrumentData = final;
        }
        return final;
    }
};


/***********************


    var myFont = new mw.font();


    //create group of fonts

    myFont.set({
        family:{
            Roboto:[300,400],
            'Architects Daughter':[400, 700],
        },
        subset:["cyrillic","cyrillic-ext","korean","latin-ext"]
    })

    //add to group

    myFont.add({
        family:{
            Roboto:[100]
        }
    })


    myFont.remove('Roboto', 100) // removes weight 100

    myFont.remove('Roboto')  // removes family



*************************/




mw.fonts = {
    _create:function(){
        var el = document.createElement('link');
        el.rel = 'stylesheet';
        document.documentElement.appendChild(el);
        return el;
    },
    _unique:function(obj){
        var data = {};
        var n;
        for(n in obj){
            data.name = n;
            data.weight = obj[n];
        }
        return data;
    },
    google:{
        create:function(){
            var root = 'https://fonts.googleapis.com/css?';
            var el = mw.fonts._create();
            el._rooturl = root;
            el._config = {};

            return el;
        },
        remove:function(el, family, weight){
            if(!family){
                mw.$(el).removeAttr('href');
                el._config = {};
            }
            else if(!weight){
                if(el._config.family && el._config.family[family]){
                    delete el._config.family[family];
                }
                this.config(el._config, el)
            }
            else if(weight && family){
                weight = parseInt(weight, 10)
                if(el._config.family && el._config.family[family]){
                    for(var i=0; i<el._config.family[family].length; i++){
                        el._config.family[family][i] = parseInt(el._config.family[n][i], 10);
                    }
                }
            }
        },
        setUrl:function(options, el){
            var url = 'family=';
            for( var i in options.family){
                url += i + ':'+options.family[i].join(',') + '|';
            }
            url = url.substring(0, url.length - 1);

            if(options.subset){
                url += '&amp;subset=' + options.subset.join(',')
            }
            el._config = options;
            el.href = el._rooturl + url.replace(/\s/g, '+');
        },
        config:function(options, el, mode){

            /*
            {
                family:{
                     'Roboto': [300,500] ,
                    'Tajawal': [400,700]
                },

                subset:["cyrillic","cyrillic-ext","korean","latin-ext"]
            }
            */

            for(var n in el._config.family){
                for(var i=0; i<el._config.family[n].length; i++){
                    el._config.family[n][i] = parseInt(el._config.family[n][i], 10);
                }
            }

            if(mode == 'add'){
                $.each(options.family, function(key,val){
                    if(el._config.family && el._config.family[key]){
                        options.family[key] = el._config.family[key].concat(options.family[key]);
                        options.family[key] = options.family[key].filter( function (value, i, self) {
                            return self.indexOf(value) == i;
                        });
                    }
                });
                $.each(el._config.family, function(key,val){
                    if(options.family && !options.family[key]){
                        options.family[key] = el._config.family[key]
                    }
                });
            }

            this.setUrl(options, el)

        }
    },
    noop:{
        fonts:[],
        config:function(){

        }
    }
}
mw.font = function(){
    this.data = {};
    this.init = function(options){
        options = options || {};
        if(options.provider){
            options.provider = options.provider.trim().toLowerCase();
        }
        else{
            options.provider = 'google';
        }
        if(!this[options.provider]){
            this[options.provider] = mw.fonts[options.provider].create();
        }
        this.options = options;
    }
    this.remove = function(family, weight){
        mw.fonts[this.options.provider].remove(this[options.provider], family, weight);
    }

    this.add = function(options){
        this.init(options)
        mw.fonts[this.options.provider].config(this.options, this[options.provider], 'add');
    };

    this.set = function(options){
        this.init(options);
        mw.fonts[this.options.provider].config(this.options, this[options.provider]);
    };


}







$(window).on('load', function(){
    if(typeof $().emulateTransitionEnd === 'function'){
        $(".modal").each(function(){
            var selector = 'form[action*="/api/"], form.mw-checkout-form';
            var hasMWForm = $(selector, this).length;
            if(hasMWForm){
                $(this).on('shown.bs.modal', function() {
                    $(document).off('focusin.modal');
                });
            }
        })
    }
})



mw.session = {
    checkPause: false,
    checkPauseExplicitly: false,
    check: function (callback) {
        if (!mw.session.checkPause) {
            mw.session.checkPause = true;
            if (mw.session.checkPauseExplicitly) {
                return false;
            }
            $.post(mw.settings.api_url + "is_logged", function (data) {
                if (data === null) {
                    return;
                }
                if (data !== false) {
                    if (typeof callback === 'function') {
                        callback.call(undefined, true);
                    }

                }
                else {
                    if (typeof callback === 'function') {
                        callback.call(undefined, false)
                    }

                }
                mw.session.checkPause = false;
            });
        }
    },
    logRequest: function () {
        var modal = mw.dialog({
            html: "<h3 style='margin:0;'>" + mw.msg.session_expired + ".</h3> <p style='margin:0;'>" + mw.msg.login_to_continue + ".</p> <br> <div id='session_popup_login'></div>",
            id: "session_modal",
            name: "session_modal",
            overlay: true,
            width: 400,
            height: 300,
            template: 'mw_modal_basic',
            callback: function () {
                mw.load_module("users/login", '#session_popup_login', false, {template: 'popup'});
            }
        });
    },
    checkInit: function () {
        if (self !== top) {
            return false;
        }
        setInterval(function () {
            mw.session.check(function (is_logged) {
                if (is_logged) {
                    var m = mw.dialog.get("#session_modal");
                    if (m) {
                        m.remove();
                    }
                }
                else {
                    mw.session.logRequest();
                }
            });
        }, 300000); // 5 minutes
    }
}
$(document).ready(function () {

    mw.$(document).on("ajaxSend",function () {

        mw.session.checkPause = true;
    }).bind("ajaxComplete", function () {
            mw.session.checkPause = false;
        });
});
