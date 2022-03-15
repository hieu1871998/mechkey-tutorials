const Grid = ({
  children,
  isHome
}: {
  children: React.ReactNode,
  isHome?: boolean
}) => {
  let classStr: string = '';
  isHome ?
    classStr = 'grid grid-cols-2 gap-12'
      :
    classStr = 'grid grid-cols-1 gap-12'
  return (
    <div className={classStr}>
      {children}
    </div>
  );  
}

export default Grid;