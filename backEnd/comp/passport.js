const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport =require('passport')
const findOrCreateUser = require('./findOrCreateUser')

passport.serializeUser((user, done)=>{
    console.log('serialize', user)
    //console.log('userID', user.id)
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    console.log('deserialize', user)
    done(null, id)
})

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: `${process.env.CYCLIC_URL}/auth/google/callback`,
            scope:["email", "profile"],
        },
        function (accessToken, refreshToken, profile, done){
            const {sub, name, picture, email} = profile._json
            const user = {sub, name, picture, email}
            findOrCreateUser(user, done);
        }
    )
)
