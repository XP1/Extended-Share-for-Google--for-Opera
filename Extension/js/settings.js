/**
 * Global Settings.
 *
 * @author Mohamed Mansour 2011 (http://mohamedmansour.com)
 */
settings = {
  get version() {
    return localStorage['version'];
  },
  set version(val) {
    localStorage['version'] = val;
  },
  get opt_out() {
    var key = localStorage['opt_out'];
    return (typeof key == 'undefined') ? false : key === 'true';
  },
  set opt_out(val) {
    localStorage['opt_out'] = val;
  },
  get shares() {
    var key = localStorage['shares'];
    return (typeof key == 'undefined') ? ['facebook', 'twitter'] : (key == '' ? [] : key.split(', '));
  },
  set shares(val) {
    if (typeof val == 'object') {
      localStorage['shares'] = val.sort().join(', ');
    }
  }
};