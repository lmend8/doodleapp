import React from 'react'


interface HeaderProps {
    headerText: string; 
}
export default function Header(props: HeaderProps){
    return(
        <div>
            <h2>Doodle drawing app</h2>
        </div>
    )
}