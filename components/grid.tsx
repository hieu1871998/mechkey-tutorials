const Grid = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
      {children}
    </div>
  );  
}

export default Grid;