const getCommand = ({ text, user }) => {
  console.log(text.match(/(<@\w+>)/g).length)
  console.log('user ? ', text , text.match(/(<@\w+>)\s*\+(\+)+/g))
  const parseUser = text
		.replace(/^<@/, '')
    .replace(/>/, '')
    .replace(/\+|\s/g, '');

  console.log(parseUser)
  return {
    numberOfUsers: () => text.match(/(<@\w+>)/g).length
  }
}

module.exports = {
    getCommand 
}
