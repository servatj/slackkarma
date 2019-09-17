const extractUserDecreaser = (user) => user
	.replace(/^<@/, '')
	.replace(/>/, '')
  .replace(/-|\s/g, '');

const extractUserIncreaser = (user) => user
	.replace(/^<@/, '')
	.replace(/>/, '')
	.replace(/\+|\s/g, '');

module.exports = {
  extractUserIncreaser,
  extractUserDecreaser
}
