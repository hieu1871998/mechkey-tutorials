import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@fluentui/react';
import { iconClass } from './layout';

const SearchVertical = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

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
    searchRef.current?.classList.add('ring-2');
    window.addEventListener('click', onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  const hideSearchBox = () => {
    if (!query) {
      searchRef.current?.classList.remove('ring-2');
    }    
  }

  return (
    <div
      className='px-4 h-full'
    >
      <div
        className='w-full bg-white h-full flex flex-row rounded ring-neutral-500 relative'
        ref={searchRef}
      >
        <div className='px-2 py-1'>
          <Icon iconName='Search' className={iconClass} />
        </div>
        <input
          ref={searchInputRef}
          type='text'
          className='w-60 h-full p-2.5 bg-inherit text-sm text-black font-sans border-0 border-black border-opacity-30 focus:ring-0 focus:border-0 focus:border-black focus:border-opacity-50 rounded relative'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={hideSearchBox}
          placeholder='Search posts'
          value={query}
        />
        {active && results.length > 0 && (
        <ul className='z-10 absolute w-full max-h-72 mt-10 bg-white backdrop-blur-xl shadow-md shadow-gray-500 text-sm text-black font-leagueSpartan overflow-auto'>
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
      
    </div>
  )
}

export default SearchVertical;