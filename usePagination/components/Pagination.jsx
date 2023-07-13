const Pagination = ({numbersPage, setPage, CONTENT_PER_PAGE}) => {
    return (
      <ul>
          {
              numbersPage(location, CONTENT_PER_PAGE)?.map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
          }
      </ul>
    )
  }
  
  export default Pagination