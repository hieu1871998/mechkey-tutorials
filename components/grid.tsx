const Grid = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-12'>
      {children}
    </div>
  );  
}

export default Grid;