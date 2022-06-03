import Link from 'next/link';

export default function Header() {
  return (
    <header>
        <div>
            <Link href="/">
                <img  
                   className='w-44 object container cursor-pointer'
                   src="https://links.papareact.com/yvf"/>

            </Link>
        </div>
        <div></div>
        
    </header>
  );
}
