module.exports = {
  tournamentApi: {
    input: 'http://localhost:8080/swagger-json', // Путь к JSON твоего сваггера
    output: {
      target: './models/generated.ts', 
      client: 'axios', 
      mode: 'split', 
    },
  },
};