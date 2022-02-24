import { useState } from "react";

export function useInput () {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const YOUR_CLIENT_ID = 'mon3223231';

    return {userEmail, setUserEmail, password, setPassword, YOUR_CLIENT_ID};
}