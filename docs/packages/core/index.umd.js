(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bootstrap-icons/font/bootstrap-icons.scss'), require('react/jsx-runtime'), require('react'), require('classnames')) :
    typeof define === 'function' && define.amd ? define(['exports', 'bootstrap-icons/font/bootstrap-icons.scss', 'react/jsx-runtime', 'react', 'classnames'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Core = {}, null, global.jsxRuntime, global.React, global.classNames));
})(this, (function (exports, bootstrapIcons_scss, jsxRuntime, React, classNames) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var styles$a = {"progress_background":"progress-module_progress_background__oewVr","progress_bar":"progress-module_progress_bar__DmP1K"};

    var Progress = function Progress(props) {
      return jsxRuntime.jsx("div", __assign({
        className: styles$a.progress_background
      }, {
        children: jsxRuntime.jsx("div", {
          className: styles$a.progress_bar,
          style: {
            width: "".concat(props.percentage, "%")
          }
        }, void 0)
      }), void 0);
    };

    var styles$9 = {"divider":"divider-module_divider__PETfM"};

    var Divider = function Divider() {
      return jsxRuntime.jsx("div", {
        className: styles$9.divider
      }, void 0);
    };

    var styles$8 = {"container":"container-module_container__0dLuw"};

    var Container = function Container(props) {
      return jsxRuntime.jsx("div", __assign({
        className: styles$8.container
      }, {
        children: props.children
      }), void 0);
    };

    var styles$7 = {"navbar":"navbar-module_navbar__4D7UV","logo":"navbar-module_logo__c5XZ-","items":"navbar-module_items__bqoL7","items_dropdown":"navbar-module_items_dropdown__agUWG"};

    /**
     * Hook for detecting click outside of the given ref.
     * @param ref        Ref to check for click outside.
     * @param handler    The handler to call.
     */

    var useClickOutside = function useClickOutside(ref, handler) {
      React.useEffect(function () {
        var listener = function listener(event) {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }

          handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return function () {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      }, [ref, handler]);
    };

    var Navbar = function Navbar(props) {
      return jsxRuntime.jsxs("nav", __assign({
        className: classNames__default["default"](styles$7.navbar, props.style)
      }, {
        children: [jsxRuntime.jsx("div", __assign({
          className: styles$7.logo
        }, {
          children: jsxRuntime.jsxs("a", __assign({
            className: styles$7.logo_name,
            href: props.url
          }, {
            children: [props.image ? jsxRuntime.jsx("img", {
              src: props.image
            }, void 0) : jsxRuntime.jsx("i", {
              className: props.icon
            }, void 0), props.name]
          }), void 0)
        }), void 0), props.collapsed ? jsxRuntime.jsx(NavBarCollapsed, __assign({}, props), void 0) : jsxRuntime.jsx("ul", __assign({
          className: styles$7.items
        }, {
          children: props.children
        }), void 0)]
      }), void 0);
    };

    var NavBarCollapsed = function NavBarCollapsed(props) {
      var _a = React__default["default"].useState(true),
          collapsed = _a[0],
          setCollapsed = _a[1];

      var className = collapsed ? "bi-three-dots" : "bi-arrow-down";
      var ref = React.useRef(null);
      useClickOutside(ref, function () {
        return setCollapsed(true);
      });
      return jsxRuntime.jsx("ul", __assign({
        ref: ref,
        className: styles$7.items_dropdown
      }, {
        children: jsxRuntime.jsxs("li", {
          children: [jsxRuntime.jsx("i", {
            className: className,
            onClick: function () {
              return setCollapsed(!collapsed);
            }
          }, void 0), collapsed ? null : jsxRuntime.jsx("ul", {
            children: props.children
          }, void 0)]
        }, void 0)
      }), void 0);
    };

    var styles$6 = {"breadcrumb":"breadcrumbs-module_breadcrumb__KFiUa"};

    function Breadcrumbs(props) {
      var _a;

      var crumbs = (_a = props.crumbs) === null || _a === void 0 ? void 0 : _a.map(function (crumb, index) {
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [index > 0 ? jsxRuntime.jsx("span", __assign({
            className: styles$6.separator
          }, {
            children: '>'
          }), void 0) : null, jsxRuntime.jsx("li", {
            children: jsxRuntime.jsx("a", __assign({
              href: crumb.href
            }, {
              children: crumb.label
            }), void 0)
          }, index)]
        }, void 0);
      });
      return jsxRuntime.jsx("ul", __assign({
        className: styles$6.breadcrumb
      }, {
        children: crumbs
      }), void 0);
    }

    var styles$5 = {"radioGroup":"radio-group-module_radioGroup__Fts4a","label":"radio-group-module_label__uCcVr"};

    var RadioGroup = function RadioGroup(props) {
      var _a = React__default["default"].useState(0),
          selectedIndex = _a[0],
          setSelectedIndex = _a[1];

      return jsxRuntime.jsxs("label", __assign({
        className: styles$5.label
      }, {
        children: [props.label, jsxRuntime.jsx("div", __assign({
          className: styles$5.radioGroup
        }, {
          children: React__default["default"].Children.map(props.children, function (child, index) {
            return /*#__PURE__*/React__default["default"].cloneElement(child, {
              checked: selectedIndex === index,
              onChange: function () {
                setSelectedIndex(index);
              }
            });
          })
        }), void 0)]
      }), void 0);
    };

    var styles$4 = {"container":"checkbox-module_container__UUJWU","checkmark":"checkbox-module_checkmark__OpD73"};

    var Checkbox = function Checkbox(_a) {
      var checked = _a.checked,
          disabled = _a.disabled,
          label = _a.label,
          name = _a.name,
          onBlur = _a.onBlur,
          onChange = _a.onChange,
          onFocus = _a.onFocus,
          value = _a.value;

      var _b = React.useState(checked),
          isChecked = _b[0],
          setIsChecked = _b[1];

      var handleChange = function handleChange(event) {
        setIsChecked(event.target.checked);
        onChange && onChange(event);
      };

      return jsxRuntime.jsxs("label", __assign({
        className: styles$4.container
      }, {
        children: [" ", label, jsxRuntime.jsx("input", {
          type: "checkbox",
          name: name,
          className: styles$4.checkbox,
          disabled: disabled,
          value: value,
          checked: isChecked,
          onChange: handleChange,
          onFocus: onFocus,
          onBlur: onBlur
        }, void 0), jsxRuntime.jsx("span", {
          className: styles$4.checkmark
        }, void 0)]
      }), void 0);
    };

    var styles$3 = {"select":"select-module_select__2Ys-j","icon":"select-module_icon__gozOS","disabled":"select-module_disabled__lsFbb"};

    var Select = function Select(props) {
      var _a, _b;

      var _c = React.useState(props.value),
          value = _c[0],
          setValue = _c[1];

      var options = React.useMemo(function () {
        return props.options.map(function (option, index) {
          return jsxRuntime.jsx("option", __assign({
            value: option.value
          }, {
            children: option.label
          }), index);
        });
      }, [props.options]);

      var onChange = function onChange(event) {
        setValue(event.target.value);
        props.onChange(event);
      };

      return jsxRuntime.jsxs("div", __assign({
        className: classNames__default["default"](props.className, styles$3.select, (_a = {}, _a[styles$3.disabled] = props.disabled, _a))
      }, {
        children: [jsxRuntime.jsx("select", __assign({
          name: props.name,
          disabled: props.disabled,
          multiple: false,
          onChange: onChange,
          value: value,
          style: {
            maxWidth: "".concat(props.maxWidth, "px")
          }
        }, {
          children: options
        }), void 0), jsxRuntime.jsx("i", {
          className: classNames__default["default"](styles$3.icon, "bi-chevron-down", (_b = {}, _b[styles$3.disabled] = props.disabled, _b))
        }, void 0)]
      }), void 0);
    };

    var styles$2 = {"button":"button-module_button__f4BsD","disabled":"button-module_disabled__caykk","simple":"button-module_simple__NLaXP","default":"button-module_default__dOOUW","icon":"button-module_icon__Mry-o"};

    var types = {
      default: styles$2.default,
      simple: styles$2.simple,
      danger: styles$2.danger,
      warning: styles$2.warning
    };
    var Button = function Button(_a) {
      var _b;

      var children = _a.children;
          _a.ariaDisabled;
          var ariaDescribedBy = _a.ariaDescribedBy;
          _a.ariaLabel;
          var iconClassname = _a.iconClassname,
          onClick = _a.onClick,
          type = _a.type,
          label = _a.label,
          disabled = _a.disabled,
          className = _a.className;
      var buttonRef = React.useRef(null);
      return jsxRuntime.jsxs("button", __assign({
        ref: buttonRef,
        role: "button",
        type: "button",
        "aria-label": label,
        "aria-describedby": ariaDescribedBy,
        "aria-disabled": disabled,
        disabled: disabled,
        className: classNames__default["default"](styles$2.button, className, types[type], (_b = {}, _b[styles$2.disabled] = disabled, _b)),
        onClick: onClick
      }, {
        children: [children || label, iconClassname ? jsxRuntime.jsx("i", {
          "data-testid": "icon",
          className: classNames__default["default"](iconClassname, styles$2.icon),
          "aria-hidden": "true"
        }, void 0) : null]
      }), void 0);
    };

    var styles$1 = {"textfield":"text-field-module_textfield__jciAL","default":"text-field-module_default__IF2H3","minimal":"text-field-module_minimal__fq8Qy","label":"text-field-module_label__lZxc1","required":"text-field-module_required__5dW4F"};

    var TextField = function TextField(props) {
      var _a, _b;

      var _c = React__default["default"].useState(false),
          focused = _c[0],
          setFocused = _c[1];

      var focus = function focus() {
        return setFocused(true);
      };

      var blur = function blur() {
        return setFocused(false);
      };

      var style = props.style === 'default' ? styles$1.default : styles$1.minimal;
      return jsxRuntime.jsxs("div", __assign({
        className: styles$1.textfield
      }, {
        children: [jsxRuntime.jsx("label", __assign({
          className: styles$1.label
        }, {
          children: props.label
        }), void 0), jsxRuntime.jsx("input", {
          className: style,
          type: (_a = props.type) !== null && _a !== void 0 ? _a : 'text',
          placeholder: !focused ? (_b = props.placeholder) !== null && _b !== void 0 ? _b : '' : '',
          onFocus: focus,
          onBlur: blur
        }, void 0)]
      }), void 0);
    };

    var styles = {"btn_group":"button-group-module_btn_group__qLTun","disabled":"button-group-module_disabled__ug1O3","button":"button-group-module_button__LkaYZ","simple":"button-group-module_simple__SUfYx","default":"button-group-module_default__BZWkN","icon":"button-group-module_icon__e5Y-C"};

    var ButtonGroup = function ButtonGroup(_a) {
      var children = _a.children,
          className = _a.className;
      return jsxRuntime.jsx("div", __assign({
        className: classNames__default["default"](styles.btn_group, className)
      }, {
        children: children
      }), void 0);
    };

    exports.Breadcrumbs = Breadcrumbs;
    exports.Button = Button;
    exports.ButtonGroup = ButtonGroup;
    exports.Checkbox = Checkbox;
    exports.Container = Container;
    exports.Divider = Divider;
    exports.Navbar = Navbar;
    exports.Progress = Progress;
    exports.RadioGroup = RadioGroup;
    exports.Select = Select;
    exports.TextField = TextField;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
