import React from 'react';

const Header = ({pseudo}) => {
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d' ${pseudo}`: `de ${pseudo}`

    return (
        <div>
            
            <header>

                <h1>La boite à recette {formatPseudo(pseudo)}</h1>

            </header>

        </div>
    );
};

export default Header;