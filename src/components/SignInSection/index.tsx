import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type Credentials = {
    login: string;
    password: string;
};

export const SignInSection = () => {
    const [credentials, setCredentials] = useState<Credentials>({ login: '', password: '' });
    const { followSignUp, signIntoUserAccount, popupErrorMessage, hideSection, popupBasicMessage } = useAction();
    const { isError, login } = useTypedSelector((state) => state.user);

    useEffect(() => {
        if (isError) {
            popupErrorMessage('Failed to authorize');
        } else if (login) {
            popupBasicMessage('You have logged in!');
            hideSection();
        }
    }, [isError, login]);

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
