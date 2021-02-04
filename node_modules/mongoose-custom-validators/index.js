/* CUSTOM VALIDATORS */

/**
 * Function isValidPassword = (String, require = defaultRequire) => Boolean
 */
var isValidPassword = function (password, userPasswordRequire) {
  // Support down to ES5. No support for ES3. Using strict mode.
  'use strict';
  var defaultPasswordRequire = {
    minlength: 10,
    uppercase: true,
    lowercase: true,
    number: true,
    nonalpha: true
  }
  var requirements
  if (userPasswordRequire) requirements = Object.assign({}, defaultPasswordRequire, userPasswordRequire)
  else requirements = Object.assign({}, defaultPasswordRequire)

  if (password.length < requirements.minlength) return false
  if (requirements.uppercase) {
    if (!/[A-Z]+/.test(password)) return false // Does not have at least 1 uppercase
  }
  if (requirements.lowercase) {
    if (!/[a-z]+/.test(password)) return false // Does not have at least 1 lowercase
  }
  if (requirements.number) {
    if (!/\d+/.test(password)) return false // Does not have at least 1 number
  }
  if (requirements.nonalpha) {
    if (!/\W+/.test(password)) return false // Does not have at least 1 Nonalpha
  }
  return true
}

/* EXPORTS */

module.exports = {
  isValidPassword
}
