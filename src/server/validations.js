const validUrl = require('valid-url')

module.exports = {
  validate: (url) => {
    if (validUrl.isUri(url)) {
      return 200
    }
    return 500
  },
  resultValid: (resultado) => {
    if (!resultado) return 404
  }
}
