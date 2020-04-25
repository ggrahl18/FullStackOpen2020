import React from 'react';

const Languages = ({ languages }) => {
    const list = languages.map(country => country.languages)
    console.log('language details: ', list)

    const langList = list[0]

    return (
        <div>
            {langList.map(lang => (
                <li key={lang.name}>
                    {lang.name}
                </li>
            ))}
        </div>
    )
}

export default Languages