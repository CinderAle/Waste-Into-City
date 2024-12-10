import { ChangeEvent, FormEvent, useState } from 'react';

import { signUp } from '@/api/signUp';

type Credentials = {
    login: string;
    password: string;
};

const SIGN_UP_SUCCESS = 'Sign up successful';
const SIGN_UP_FAIL = 'Sign up failed! Check credentials';
const SIGN_UP_BUTTON_LABEL = 'Sign Up';

export const SignUpSection = () => {
    const [credentials, setCredentials] = useState<Credentials>({ login: '', password: '' });
    const [signUpMessage, setSignUpMessage] = useState('');

    const handleCredentialsChange = (field: keyof Credentials) => (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials((credentials) => ({ ...credentials, [field]: event.target.value }));
    };

    const handleSignUpAction = (event: FormEvent) => {
        event.preventDefault();
        signUp(credentials.login, credentials.password).then((isSignedUp) =>
            setSignUpMessage(isSignedUp ? SIGN_UP_SUCCESS : SIGN_UP_FAIL)
        );
    };

    return (
        <form onSubmit={handleSignUpAction}>
            <input type="text" value={credentials.login} onChange={handleCredentialsChange('login')} />
            <input type="password" value={credentials.password} onChange={handleCredentialsChange('password')} />
            {signUpMessage && <p>{signUpMessage}</p>}
            <button>{SIGN_UP_BUTTON_LABEL}</button>
        </form>
    );
};
