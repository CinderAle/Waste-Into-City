import { ChangeEvent, FormEvent, useState } from 'react';

import { useAction } from '@/hooks/useAction';

type Credentials = {
    login: string;
    password: string;
};

export const SignInSection = () => {
    const [credentials, setCredentials] = useState<Credentials>({ login: '', password: '' });
    const { followSignUp, signIntoUserAccount } = useAction();

    const handleFieldChange = (field: keyof Credentials) => (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials((credentials) => ({ ...credentials, [field]: event.target.value }));
    };

    const handleSignInAction = (event: FormEvent) => {
        event.preventDefault();
        signIntoUserAccount(credentials);
    };

    const handleSignUpFollow = () => {
        followSignUp();
    };

    return (
        <form onSubmit={handleSignInAction}>
            <input type="text" value={credentials.login} onChange={handleFieldChange('login')} />
            <input type="password" value={credentials.password} onChange={handleFieldChange('password')} />
            <button type="submit">Sign In</button>
            <p>
                No account yet?{' '}
                <a href="#" onClick={handleSignUpFollow}>
                    Sign Up!
                </a>
            </p>
        </form>
    );
};
