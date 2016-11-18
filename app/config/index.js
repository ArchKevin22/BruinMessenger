if (process.env.NODE_ENV === 'production') {
  // Use producton environment variables
  module.exports = {
    host: '',
    sessionSecret: "dpulylyd0tgh2yaflsm6ejb6zb05kppc7xhwoitnjrudrcjuuc"
  }
} else {
  // Use dev settings
  module.exports = require('./development.json')
}
