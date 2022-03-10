import Link from "next/link";

const NavItem = ({
    link,
    children,
    isFirst
  } : {
    link: string,
    children: React.ReactNode,
    isFirst?: boolean
  }) => {
  return (
    <Link href={link}>
      {isFirst ? (
        <a>
          <span className='text-base font-leagueSpartan font-thin hover:border-b hover:border-b-black hover:border-opacity-30 transition-all duration-300 py-1 tracking-widest'>{children}</span>
        </a>
      ) : (
        <a className='py-1 ml-12'>
          <span className='text-base font-leagueSpartan font-thin hover:border-b hover:border-b-black hover:border-opacity-30 transition-all duration-300 py-1 tracking-widest'>{children}</span>
        </a>
      )}
    </Link>
  )
};

export default NavItem;