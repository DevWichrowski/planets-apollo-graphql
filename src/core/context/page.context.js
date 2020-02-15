import React from 'react';

export const Context = React.createContext({
    data: 'elo dupa',
    setData: (value) => {
        this.data = value;
    }
}); 