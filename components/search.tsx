import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';

const Search = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  const [hidden, setHidden] = useState(true);

  const searchEndpoint = (query: string) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick)
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  const showSearchBox = () => {
    setHidden(false);
    document.getElementById('searchButton')?.classList.add('hidden');
    document.getElementById('searchInput')?.focus();
  }
  const hideSearchBox = () => {
    setHidden(true);
    document.getElementById('searchButton')?.classList.remove('hidden');
  }

  let isHidden = '';
  if (hidden) {
    isHidden = ' hidden';
  } else isHidden = '';

  return (
    <div
      className='w-80 h-min my-auto relative'
      ref={searchRef}
    >
      <button id='searchButton' className='text-sm text-black font-leagueSpartan float-right' onClick={showSearchBox}>
        <span>SEARCH</span>
      </button>
      <input
        id='searchInput'
        type='text'
        className={'w-full p-2 bg-black bg-opacity-5 text-sm text-black font-leagueSpartan h-min border border-black border-opacity-30 focus:ring-0 focus:border focus:border-black focus:border-opacity-30 focus:bg-white' + isHidden}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={hideSearchBox}
        placeholder='Search posts'
        value={query}
      />
      {active && results.length > 0 && (
        <ul className='z-10 absolute w-full bg-white bg-opacity-80 backdrop-blur-xl shadow-md shadow-gray-500 text-sm text-black font-leagueSpartan'>
          {results.map(({id, title, category, author}) => (
            <Link href='/[category]/[id]' as={`/${category}/${id}`} key={id}>
              <a>
                <li className='w-full p-2 transition-all duration-300 hover:bg-black hover:bg-opacity-10'>
                  <span className='line-clamp-1'>{title}</span>
                  <div className='flex flex-row justify-between text-gray-500'>
                    <span>{author}</span><span>{category}</span>
                  </div>                  
                </li>
              </a>
            </Link>
            
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search;