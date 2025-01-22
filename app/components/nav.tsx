import Link from 'next/link'


//navItems is a object
const navItems = {
  '/': {   // '/' is the key, 
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/portfolio':{
    name: 'Portfolio'
  },
  '/connect':{
    name: 'Connect'
  }
} 



export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {//convert navItems to list of objects, and .map execute the "convert to link" fufnciton 
            //for each one of the item in the list. 
              return (
                <Link
                  key={path}    //attibute
                  href={path}   //relative url
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1" 
                >
                  {name} 
                </Link>  //name which was passed in as an argument
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
