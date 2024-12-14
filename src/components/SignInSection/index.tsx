import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import * as S from './styled';

type Credentials = {
    login: string;
    password: string;
};

export const SignInSection = () => {
    const [credentials, setCredentials] = useState<Credentials>({ login: '', password: '' });
    const { followSignUp, signIntoUserAccount, popupErrorMessage, hideSection, popupBasicMessage } = useAction();
    const { isError, login, isLoading } = useTypedSelector((state) => state.user);

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
        <S.Form onSubmit={handleSignInAction}>
            <S.SectionTitle>Sign In</S.SectionTitle>
            <S.Credentials>
                <S.CredentialField
                    type="text"
                    value={credentials.login}
                    onChange={handleFieldChange('login')}
                    label="Login"
                />
                <S.CredentialField
                    type="password"
                    value={credentials.password}
                    onChange={handleFieldChange('password')}
                    label="Password"
                />
            </S.Credentials>
            <S.SubmitButton type="submit">Sign In</S.SubmitButton>
            <S.SignUpLink>
                No account yet?{' '}
                <a href="#" onClick={handleSignUpFollow}>
                    Sign Up!
                </a>
            </S.SignUpLink>
            {isLoading && <S.LoadingCircle />}
        </S.Form>
    );
};
