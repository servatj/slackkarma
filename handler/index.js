const getCommand = ({ text, user }) => {

  console.log('user ? ', text.match(/(<@\w+>)\s*\+(\+)+/g))
  const parseUser = text
		.replace(/^<@/, '')
    .replace(/>/, '')
    .replace(/\+|\s/g, '');

  console.log(parseUser)
}

module.exports = {
    getCommand 
}
