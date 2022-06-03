import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, handleSearchQuery, handlePage, page, nbPages } = useGlobalContext()
  return (
    <section className='user-controller'>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <label className='label'>search hacker news</label>
        <input type='text'
          className="user-input"
          value={query}
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder='e.g. react | css | html'
        />
      </form>
      <div className='control-pages'>
        <button className='btn' onClick={() => handlePage('decrease')}>Prev</button>
        <p className='num-page'>{page + 1} of {nbPages}</p>
        <button className='btn' onClick={() => handlePage('increase')}>Next</button>
      </div>
    </section>

  )
}

export default SearchForm