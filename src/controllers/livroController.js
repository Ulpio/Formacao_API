import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";

class LivroController{
    static async listarLivros (req, res){
        try{
            const listaLivros = await livro.find();
            res.json(listaLivros);
        } catch(erro){
            res.status(500).json({message: `Erro ao listar os livros ${erro}`});
        }
    };

    static async listarLivroPorID (req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch(erro){
            res.status(500).json({message: `Erro ao encontrar Livro ${erro}`});
        }
    };

    static async cadastraLivro (req, res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {
                ...autorEncontrado._doc,}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "criado com sucesso",livro: novoLivro});
        } catch(erro){
            res.status(500).json({message: `Erro ao cadastrar o livro ${erro}`});
        }
    }

    static async atualizarLivro (req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualizado com sucesso"});
        } catch(erro){
            res.status(500).json({message: `Erro ao Atualizar Livro ${erro}`});
        }
    };

    static async deletarLivro (req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Deletado com sucesso"});
        } catch(erro){
            res.status(500).json({message: `Erro ao Deletar Livro ${erro}`});
        }
    };

    static async listarLivroPorEditora (req, res){
        const editora = req.query.editora;
        try{
            const listaLivros = await livro.find({editora: editora});
            res.status(200).json(listaLivros);
        } catch(erro){
            res.status(500).json({message: `Erro ao listar os livros ${erro}`});
        }
    };
};

export default LivroController;