const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:"mongodb+srv://Muttakin:<12345six>@cluster0-2wehj.mongodb.net/test?retryWrites=true&w=majority"
}

export default config
