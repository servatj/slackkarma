const extractUser = (user) => user
	.replace(/^<@/, '')
  .replace(/>/, '')

const getKarmaAmount = (user) => {
  return user.match(/[-\+]/g).length - 1;
}

module.exports = {
  extractUser,
  getKarmaAmount
}
