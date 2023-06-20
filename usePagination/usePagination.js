import { useState } from "react"

const CONTENT_PER_PAGE = 10

const usePagination = (location) => {
    const [page, setPage] = useState(1)


    // Funcion que se encarga de obtener la cantidad contenido(Cards) que tendra la pagina
    const pagination = () => {
    // if (!location) return [] 
    const maxPageLimit = CONTENT_PER_PAGE * page
    const minPageLimit = maxPageLimit - CONTENT_PER_PAGE
    // Location, es el parametro que se pasa por props, el cuando contiene el numero de residentes de la pagina, este dato debe ser cambiadpo respectivamente al proyecto que se realice
    const newContentPerPage = location?.residents.slice(minPageLimit, maxPageLimit)
    return newContentPerPage
  }

    // Funcion que se encarga de controlar numero de paginas que se obtendran.
    const numbersPage = () => {
    const quantityPages = Math.ceil(location?.residents.length / CONTENT_PER_PAGE);
    const arrayPages = []
    for (let i = 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
    return arrayPages
  }

  return {
    setPage,
    pagination,
    numbersPage
  }
}

export default usePagination