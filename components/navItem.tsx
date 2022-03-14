import Link from "next/link";

const NavItem = ({
  link,
  linkAs,
  children
} : {
  link: string,
  linkAs: string,
  children: React.ReactNode
}) => {
    
  return (
    <Link href={link} as={linkAs}>
        <a>
          <div className='float-left w-24 py-4 xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs text-center font-leagueSpartan tracking-widest transition-all duration-300 hover:bg-gray-300'>
            <span>{children}</span>
          </div>
        </a>
    </Link>
  )
};

export default NavItem;