/*!
 * jQuery++ - 1.0.1
 * http://jquerypp.com
 * Copyright (c) 2013 Bitovi
 * Fri, 02 Aug 2013 20:18:12 GMT
 * Licensed MIT
 * Download from: http://bitbuilder.herokuapp.com/jquerypp.custom.js?plugins=jquerypp%2Fdom%2Fcookie&plugins=jquerypp%2Fdom%2Fform_params
 */
(function($) {

    // ## jquerypp/lang/json/json.js
    var __m3 = (function($) {

        $.toJSON = function(o, replacer, space, recurse) {
            if (typeof(JSON) == 'object' && JSON.stringify)
                return JSON.stringify(o, replacer, space);

            if (!recurse && $.isFunction(replacer))
                o = replacer("", o);

            if (typeof space == "number")
                space = "          ".substring(0, space);
            space = (typeof space == "string") ? space.substring(0, 10) : "";

            var type = typeof(o);

            if (o === null)
                return "null";

            if (type == "undefined" || type == "function")
                return undefined;

            if (type == "number" || type == "boolean")
                return o + "";

            if (type == "string")
                return $.quoteString(o);

            if (type == 'object') {
                if (typeof o.toJSON == "function")
                    return $.toJSON(o.toJSON(), replacer, space, true);

                if (o.constructor === Date) {
                    var month = o.getUTCMonth() + 1;
                    if (month < 10) month = '0' + month;

                    var day = o.getUTCDate();
                    if (day < 10) day = '0' + day;

                    var year = o.getUTCFullYear();

                    var hours = o.getUTCHours();
                    if (hours < 10) hours = '0' + hours;

                    var minutes = o.getUTCMinutes();
                    if (minutes < 10) minutes = '0' + minutes;

                    var seconds = o.getUTCSeconds();
                    if (seconds < 10) seconds = '0' + seconds;

                    var milli = o.getUTCMilliseconds();
                    if (milli < 100) milli = '0' + milli;
                    if (milli < 10) milli = '0' + milli;

                    return '"' + year + '-' + month + '-' + day + 'T' +
                        hours + ':' + minutes + ':' + seconds +
                        '.' + milli + 'Z"';
                }

                var process = ($.isFunction(replacer)) ? function(k, v) {
                        return replacer(k, v);
                    } : function(k, v) {
                        return v;
                    },
                    nl = (space) ? "\n" : "",
                    sp = (space) ? " " : "";

                if (o.constructor === Array) {
                    var ret = [];
                    for (var i = 0; i < o.length; i++)
                        ret.push(($.toJSON(process(i, o[i]), replacer, space, true) || "null").replace(/^/gm, space));

                    return "[" + nl + ret.join("," + nl) + nl + "]";
                }

                var pairs = [],
                    proplist;
                if ($.isArray(replacer)) {
                    proplist = $.map(replacer, function(v) {
                        return (typeof v == "string" || typeof v == "number") ?
                            v + "" :
                            null;
                    });
                }
                for (var k in o) {
                    var name, val, type = typeof k;

                    if (proplist && $.inArray(k + "", proplist) == -1)
                        continue;

                    if (type == "number")
                        name = '"' + k + '"';
                    else if (type == "string")
                        name = $.quoteString(k);
                    else
                        continue; //skip non-string or number keys

                    val = $.toJSON(process(k, o[k]), replacer, space, true);

                    if (typeof val == "undefined")
                        continue; //skip pairs where the value is a function.

                    pairs.push((name + ":" + sp + val).replace(/^/gm, space));
                }

                return "{" + nl + pairs.join("," + nl) + nl + "}";
            }
        };


        $.evalJSON = function(src) {
            if (typeof(JSON) == 'object' && JSON.parse)
                return JSON.parse(src);
            return eval("(" + src + ")");
        };


        $.secureEvalJSON = function(src) {
            if (typeof(JSON) == 'object' && JSON.parse)
                return JSON.parse(src);

            var filtered = src;
            filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
            filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
            filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');

            if (/^[\],:{}\s]*$/.test(filtered))
                return eval("(" + src + ")");
            else
                throw new SyntaxError("Error parsing JSON, source is not valid.");
        };


        $.quoteString = function(string) {
            if (string.match(_escapeable)) {
                return '"' + string.replace(_escapeable, function(a) {
                    var c = _meta[a];
                    if (typeof c === 'string') return c;
                    c = a.charCodeAt();
                    return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                }) + '"';
            }
            return '"' + string + '"';
        };

        var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;

        var _meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };

        return $;
    })($);

    // ## jquerypp/dom/cookie/cookie.js
    var __m1 = (function($) {

        $.cookie = function(name, value, options) {
            if (typeof value != 'undefined') {
                // name and value given, set cookie
                options = options || {};
                if (value === null) {
                    value = '';
                    options.expires = -1;
                }
                // convert value to JSON string
                if (typeof value == 'object' && $.toJSON) {
                    value = $.toJSON(value);
                }
                var expires = '';
                // Set expiry
                if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                    var date;
                    if (typeof options.expires == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    } else {
                        date = options.expires;
                    }
                    expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
                }
                // CAUTION: Needed to parenthesize options.path and options.domain
                // in the following expressions, otherwise they evaluate to undefined
                // in the packed version for some reason...
                var path = options.path ? '; path=' + (options.path) : '';
                var domain = options.domain ? '; domain=' + (options.domain) : '';
                var secure = options.secure ? '; secure' : '';
                // Set the cookie name=value;expires=;path=;domain=;secure-
                document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
            } else { // only name given, get cookie
                var cookieValue = null;
                if (document.cookie && document.cookie != '') {
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = $.trim(cookies[i]);
                        // Does this cookie string begin with the name we want?
                        if (cookie.substring(0, name.length + 1) == (name + '=')) {
                            // Get the cookie value
                            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                            break;
                        }
                    }
                }
                // Parse JSON from the cookie into an object
                if ($.evalJSON && cookieValue && cookieValue.match(/^\s*\{/)) {
                    try {
                        cookieValue = $.evalJSON(cookieValue);
                    } catch (e) {}
                }
                return cookieValue;
            }
        };

        return $;
    })($, __m3);

    // ## jquerypp/dom/form_params/form_params.js
    var __m4 = (function($) {
        var
        // use to parse bracket notation like my[name][attribute]
        keyBreaker = /[^\[\]]+/g,
            // converts values that look like numbers and booleans and removes empty strings
            convertValue = function(value) {
                if ($.isNumeric(value)) {
                    return parseFloat(value);
                } else if (value === 'true') {
                    return true;
                } else if (value === 'false') {
                    return false;
                } else if (value === '' || value === null) {
                    return undefined;
                }
                return value;
            },
            // Access nested data
            nestData = function(elem, type, data, parts, value, seen, fullName) {
                var name = parts.shift();
                // Keep track of the dot separated fullname. Used to uniquely track seen values
                // and if they should be converted to an array or not
                fullName = fullName ? fullName + '.' + name : name;

                if (parts.length) {
                    if (!data[name]) {
                        data[name] = {};
                    }

                    // Recursive call
                    nestData(elem, type, data[name], parts, value, seen, fullName);
                } else {

                    // Handle same name case, as well as "last checkbox checked"
                    // case
                    if (fullName in seen && type != "radio" && !$.isArray(data[name])) {
                        if (name in data) {
                            data[name] = [data[name]];
                        } else {
                            data[name] = [];
                        }
                    } else {
                        seen[fullName] = true;
                    }

                    // Finally, assign data
                    if ((type == "radio" || type == "checkbox") && !elem.is(":checked")) {
                        return
                    }

                    if (!data[name]) {
                        data[name] = value;
                    } else {
                        data[name].push(value);
                    }

                }

            };


        $.fn.extend({
                formParams: function(params) {

                    var convert;

                    // Quick way to determine if something is a boolean
                    if ( !! params === params) {
                        convert = params;
                        params = null;
                    }

                    if (params) {
                        return this.setParams(params);
                    } else {
                        return this.getParams(convert);
                    }
                },
                setParams: function(params) {

                    // Find all the inputs
                    this.find("[name]").each(function() {
                        var $this = $(this),
                            value = params[$this.attr("name")];

                        // Don't do all this work if there's no value
                        if (value !== undefined) {

                            // Nested these if statements for performance
                            if ($this.is(":radio")) {
                                if ($this.val() == value) {
                                    $this.attr("checked", true);
                                }
                            } else if ($this.is(":checkbox")) {
                                // Convert single value to an array to reduce
                                // complexity
                                value = $.isArray(value) ? value : [value];
                                if ($.inArray($this.val(), value) > -1) {
                                    $this.attr("checked", true);
                                }
                            } else {
                                $this.val(value);
                            }
                        }
                    });
                },
                getParams: function(convert) {
                    var data = {},
                        // This is used to keep track of the checkbox names that we've
                        // already seen, so we know that we should return an array if
                        // we see it multiple times. Fixes last checkbox checked bug.
                        seen = {},
                        current;

                    this.find("[name]:not(:disabled)").each(function() {
                        var $this = $(this),
                            type = $this.attr("type"),
                            name = $this.attr("name"),
                            value = $this.val(),
                            parts;

                        // Don't accumulate submit buttons and nameless elements
                        if (type == "submit" || !name) {
                            return;
                        }

                        // Figure out name parts
                        parts = name.match(keyBreaker);
                        if (!parts.length) {
                            parts = [name];
                        }

                        // Convert the value
                        if (convert) {
                            value = convertValue(value);
                        }

                        // Assign data recursively
                        nestData($this, type, data, parts, value, seen);

                    });

                    return data;
                }
            });

        return $;
    })($);
})(jQuery);