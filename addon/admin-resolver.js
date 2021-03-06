// Generated by CoffeeScript 1.8.0
import Resolver from 'ember/resolver';
/*global require*/
var adminResolver;

adminResolver = Resolver["default"].extend({
  resolveRoute: function(parsedName) {
    var module, moduleName;
    moduleName = "%@/routes/main".fmt(this.namespace.modulePrefix);
    this.useRouterNaming(parsedName);
    if (this.resolveOther(parsedName)) {
      return this.resolveOther(parsedName);
    } else {
      if (!this._checkRouteName(parsedName.fullName)) {
        module = require(moduleName, null, null, true);
        if (module['default']) {
          module = module['default'];
        }
        return module;
      }
    }
  },
  resolveController: function(parsedName) {
    this.useRouterNaming(parsedName);
    if (this._checkResourceController(parsedName.fullName)) {
      this._setNames(parsedName);
    }
    if (this.resolveOther(parsedName)) {
      return this.resolveOther(parsedName);
    }
    return this._super(parsedName);
  },
  _checkRouteName: function(name) {
    return 'route:application route:basic route:loading route:error'.w().indexOf(name) >= 0;
  },
  _checkResourceController: function(name) {
    return this._pattern().test(name);
  },
  _replaceForResource: function(name) {
    return name.replace(this._pattern(), '');
  },
  _setNames: function(parsedName) {
    parsedName.fullName = this._replaceForResource(parsedName.fullName);
    parsedName.fullNameWithoutType = this._replaceForResource(parsedName.fullNameWithoutType);
    parsedName.name = this._replaceForResource(parsedName.name);
  },
  _pattern: function() {
    return /(\/[Ss]how)|(\/[Ee]dit)|(\/[Nn]ew)/;
  }
});

export default adminResolver;
