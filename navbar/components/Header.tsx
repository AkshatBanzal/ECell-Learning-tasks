import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Header(){
return(
    <header>
        <nav>
            {/*Desktop Menu*/}
            <div className=''>
                <Link href='/'>
                <Image src="https://playbook-at.ghost.io/content/images/2021/02/Playbook_Wordmark.png" alt='PlayBook' width={205} height={75} className='cursor-pointer'></Image></Link>
            </div>
            {/*Mobile Menu*/}
            {/*Social Media Links */}
        </nav>
    </header>
)
}

export default Header;