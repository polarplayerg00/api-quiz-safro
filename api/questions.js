const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  try {
    // Ajuste o caminho para os arquivos JSON
    const files = ['questions1.json', 'questions2.json', 'questions3.json', 'questions4.json', 'questions5.json'];
    const file = files[Math.floor(Math.random() * files.length)];
    
    // Ler e parsear o arquivo JSON selecionado
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), file)));
    
    // Selecionar uma pergunta aleatória
    const randomQuestion = data[Math.floor(Math.random() * data.length)];
    
    res.status(200).json(randomQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Error reading file or retrieving data.' });
  }
}
