import Aluno from '../models/Aluno';

class HomeController {
  /*
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Alexandre',
      sobrenome: 'Bueno',
      email: 'abueno.silva@gmail.com',
      idade: 49,
      peso: 91.3,
      altura: 1.82,
    });
    res.json(novoAluno);
  }
  */
  index(req, res) {
    res.json({ title: 'Olá' });
  }
}

export default new HomeController();
