import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./filme.css";




function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR"
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {                
                console.log("Filme não encontrado");
                navigate("/", {replace: true});
                return;
            })
        }
        loadFilme();
    }, [id, navigate]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@cine-agora");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            alert("Esse filme já está na sua lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@cine-agora", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso");

    }

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filme...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <h4>Avaliação: {filme.vote_average} / 10</h4>

            <div className="area-buttons">
                
                <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target="_blank" rel="noreferrer">Trailer</a>
                
                <button className="button-2" onClick={salvarFilme}>Salvar</button>
            </div>

        </div>
    )
}

export default Filme;