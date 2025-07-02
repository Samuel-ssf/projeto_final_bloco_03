import axios from "axios"

export const api = axios.create({
    //baseURL: "https://lojagames-3nay.onrender.com"
    baseURL: "http://localhost:8080"
  })
  
  export const listar = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }

  export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
  export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
  }

  export const deletar = async(url: string) => {
    await api.delete(url)
  }