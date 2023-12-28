import autor from "../models/Autor.js";

class AutorController{
    static async listarAutor (req, res){
        try{
            const listaAutores = await autor.find();
            res.json(listaAutores);
        } catch(erro){
            res.status(500).json({message: `Erro ao listar os Autores ${erro}`});
        }
    };

    static async listarAutorPorID (req, res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch(erro){
            res.status(500).json({message: `Erro ao encontrar autor ${erro}`});
        }
    };

    static async cadastraAutor (req, res){
        try{
            const novoautor = await autor.create(req.body);
            res.status(201).json({message: "criado com sucesso",autor: novoautor});
        } catch(erro){
            res.status(500).json({message: `Erro ao cadastrar o autor ${erro}`});
        }
    }

    static async atualizarAutor (req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualizado com sucesso"});
        } catch(erro){
            res.status(500).json({message: `Erro ao Atualizar autor ${erro}`});
        }
    };

    static async deletarAutor (req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Deletado com sucesso"});
        } catch(erro){
            res.status(500).json({message: `Erro ao Deletar autor ${erro}`});
        }
    };

};


export default AutorController;