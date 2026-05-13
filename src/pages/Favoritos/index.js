import './favoritos.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@cine-agora");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);


    function ExcluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem("@cine-agora", JSON.stringify(filtroFilmes));
    }

  return (
    <div className='container1'>
      <h1>Favoritos</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
      <ul className='lista-filmes1'>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <img src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title} />
              <div>
                <span>{filme.title}</span>
                <div className='area-btn1'>
                  <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                  <button onClick={() => ExcluirFilme(filme.id)}>Excluir</button>
                </div>
              </div>

            </li>
          );
        })}

      </ul>
    </div>
  );
}

export default Favoritos;