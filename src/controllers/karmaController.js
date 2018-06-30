const removeUser = (user) => usersKarma.filter((row) => row.user != user)

const getKarma = (user) => {
   let karma = usersKarma.filter((row) => row.user === user) || [];
   if (karma.length >= 1) {
     return usersKarma.filter((row) => row.user === user)[0].karma
   }
   return 0
}

const getUserPostMessage = (message, userName, incDec) => {
  web.users.info({ user: userName.replace('@','') })
  .then((response) => {
  // Success!
    rtm.sendMessage(`@${response.user.profile.display_name}` + ` karma has ${incDec} to ` + getKarma(userName), message.channel);
  })
  .catch((error) => {
  // Error :/
    console.log('Error: getting username ');
    console.log(error);
  });
}

const incKarma = (userList) => {
    userList.map((userName) => {
        addKarma = { user: userName , karma: (getKarma(userName) || 0) + 1 };
        usersKarma = removeUser(userName);
        usersKarma.push(addKarma);
        getUserPostMessage(message, userName, 'increased');
    });
}

const decKarma = (userList) => {
    userList.map((userName) => {
        addKarma = { user: userName , karma: (getKarma(userName) || 0) - 1 };
        usersKarma = removeUser(userName);
        usersKarma.push(addKarma);
        getUserPostMessage(message, userName, 'decreased');
    });
}

module.exports = {
    incKarma,
    decKarma
}