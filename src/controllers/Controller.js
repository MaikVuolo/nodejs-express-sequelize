/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */
class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }
    async pegaTodos(req, res) {
        try {
            const listaRegitros = await this.entidadeService.pegaTodosOsModelos();
            return res.status(200).json(listaRegitros);

        } catch (erro) {
            res.status(500).json({erro: erro.message});

        }
    }

    async buscaPorId(req,res){
        try {
            const { id } = req.params;
            const buscando = await this.entidadeService.serviceBuscaPorId(id);
            res.status(200).json({buscando});
        } catch (erro) {
            res.status(500).json({erro: erro.message});
        }
    }
    async criaNovoRegistro(req,res){
        try {
            const dadosFornecidos = req.body;
            const novo = await this.entidadeService.criandoNovo(dadosFornecidos);
            res.status(200).json({message:'Novo registro criado com sucesso ', novo});
        } catch (erro) {
           res.status(500).json({erro: erro.message});
        }
    }

    async atualizaRegistro(req,res){
        try {
            const { id } = req.params;
            const novosDados = req.body;
            const isUpdate = await this.entidadeService.serviceAtualiza(novosDados,Number(id));

            if (!isUpdate){
                res.status(400).json({message:'Nenhum registro atualizado'});
            }
            res.status(200).json({message:'Registro atualizado com sucesso'});
        } catch (erro) {
            res.status(500).json({erro: erro.message});  
        }
    }
    async deleteRegister(req,res){
        try {
            const { id } = req.params;
            await this.entidadeService.deleteId(Number(id));
            res.status(200).json({message:`Id ${id} deletado com sucesso`});
        } catch (erro) {
            return res.status(500).json(erro.message);
        }
    }
}

module.exports = Controller;
