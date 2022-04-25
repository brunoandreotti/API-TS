

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

export default {
  PORT: 3000,
  dbURI: `mongodb+srv://${user}:${password}@meucluster.ijjrj.mongodb.net/API-TS?retryWrites=true&w=majority`,
  env: 'development'
}