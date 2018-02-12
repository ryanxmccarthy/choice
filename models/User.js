const admin = require("firebase-admin");
const crypto = require("crypto");

const serviceAccount = require("./choice-logon-firebase-adminsdk-i1ytc-1bf7efaaf5");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://choice-logon.firebaseio.com"
});

module.exports = {
  createUser: (userData, cb) => {
    admin.auth().createUser({
      email: userData.email,
      password: userData.password
    }).then(userRec => {
      cb(null, userRec)
    }).catch(err => {
      cb(err)
    })
  },
  deleteUser: (uid, cb) => {
    admin.auth().deleteUser(uid)
      .then(response => {
        cb(null, response)
      }).catch(err => {
        cb(err)
      })
  },
  signIn: (email, password, cb) => {
    admin.auth().signInWithEmailAndPassword(email, hash(password))
      .then(response => {
        cb(null, response)
      }).catch(err => {
        cb(err)
      })
  },
  signOut: cb => {
    admin.auth().signOut().then(response => {
      console.log('Sign out successful')
    }).catch(err => {
      console.log(err)
    })
  }
}
