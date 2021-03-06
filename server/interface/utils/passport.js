import passport from 'koa-passport' // Passport middleware for Koa
import LocalStrategy from 'passport-local' // Passport strategy for authenticating with a username and password.
import UserModel from '../../dbs/models/users'

passport.use( // [Configure Strategy](https://www.npmjs.com/package/passport-local)
  new LocalStrategy(async function(username, password, done) {
    const where = { username }
    const result = await UserModel.findOne(where)
    if (result !== null) {
      if (result.password === password) {
        return done(null, result)
      } else {
        return done(null, false, '密码错误')
      }
    } else {
      return done(null, false, '用户不存在')
    }
  })
)

passport.serializeUser(function(user, done) { // User information is retained in session, defulat
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  return done(null, user)
})

export default passport
