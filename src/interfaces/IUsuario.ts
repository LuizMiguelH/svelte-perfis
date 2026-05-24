import IRepositorio from "./IRepositorio";

export default interface IUsuario {
    login: string;
    avatar_url: string;
    perfil_url: string;
    repositorios_publicos: number;
    nome: string
    seguidores: number;
    repositorios_recentes: IRepositorio[];
}