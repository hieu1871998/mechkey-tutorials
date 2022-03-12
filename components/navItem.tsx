import Link from "next/link";

const NavItem = ({
  link,
  linkAs,
  children,
  isFirst
} : {
  link: string,
  linkAs: string,
  children: React.ReactNode,
  isFirst?: boolean
}) => {
  let classStr: string = '';
  isFirst ? classStr = '' : classStr = 'py-1 ml-12'
    
  return (
    <Link href={link} as={linkAs}>
        <a className={classStr}>
          <span className='text-base font-leagueSpartan font-thin hover:border-b hover:border-b-black hover:border-opacity-30 transition-all duration-300 py-1 tracking-widest'>{children}</span>
        </a>
    </Link>
  )
};

export default NavItem;