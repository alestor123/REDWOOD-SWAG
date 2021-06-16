const axios = require('axios')

module.exports = async dta => {
  const data = (await axios.get('https://redwoodjs.com/stickers-thanks?' + new URLSearchParams(dta).toString())).status
  return data
}
