import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link";

export const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API 
    axios
      .get("https://localhost:7133/Categorias")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Produtos da Agência</h1>
      <p>
        <Link href="categoria/add-client" style={{ backgroundColor: "green", color: 'white', textDecoration: 'none' }}>
          Inserir Categoria
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nome</th>
            <th>Imagem</th>
            <th>Ações</th>{" "}

          </tr>
        </thead>
        {clients.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.categoriaId}</td>
              <td>{element.nome}</td>
              <td>{element.imagemUrl}</td>
              <td>
                <Link
                  href={`categoria/update-client/${element.categoriaId}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <Link
                  href={`categoria/delete-client/${element.categoriaId}`}
                  className="btn btn btn-danger"
                >
                  Excluir
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
