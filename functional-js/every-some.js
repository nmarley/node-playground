function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submitted) {
      return goodUsers.some(function(good) {
          return submitted.id === good.id
      })
    })
  }
}

module.exports = checkUsersValid


// official solution
// module.exports = function checkUsersValid(users) {
//   return function(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return users.some(function(user) {
//         return user.id === submittedUser.id
//       })
//     })
//   }
// }
