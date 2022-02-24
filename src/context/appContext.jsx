import React, { useState } from 'react';

const {Provider, Consumer} = React.createContext()

function ContextProvider({children}) {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [user_id, setUser_id] = useState('');

    const url = 'http://www.finpath.oyeapps.com/RestApiV1/get_profile';

    const u_id = 'user_id=' +  user_id; 

    
        fetch(url, {
            method: 'POST',
            body: u_id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        .then(res=> res.json())
        .then(data => {
            console.log('data', data);
            // const uid = data.user_id;

            
            for (const i in data) {
                console.log(data[i])
                setDate(data[i].cdate)
                setName(data[i].name);
                setEmail(data[i].email);
                setPhone(data[i].mobile);
            }
        })

    return (
        <Provider value={{date, name, email, phone,}}>
            {children}
        </Provider>
    )
}

export {ContextProvider, Consumer}