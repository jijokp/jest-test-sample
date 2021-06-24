import React, { useEffect, useState } from 'react';
import { getNameCollection } from '../fetch';

export const List = () => {
    const [nameCollection, setNameCollection] = useState([]);

    useEffect(() => {
        getNameCollection().then(names => {
            setNameCollection(names);
        });
    }, []);

    return (
        <ul>
            {nameCollection.map(name => (
                <li key={name} data-testid="name">
                    {name}
                </li>
            ))}
        </ul>
    );
};