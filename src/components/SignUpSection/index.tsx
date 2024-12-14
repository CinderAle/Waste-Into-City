import { ChangeEvent, FormEvent, useState } from 'react';

import { signUp } from '@/api/signUp';

import { config, Credentials, SignUpMessage } from './config';
import * as S from './styled';

const {
    LOGIN_HAS_SPACES,
    LOGIN_IS_SHORT,
    MIN_LOGIN,
    MIN_PASSWORD,
    PASSWORDS_DONT_MATCH,
    PASSWORD_IS_SHORT,
    SIGN_UP_BUTTON_LABEL,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
} = config;

export const SignUpSection = () => {
    const [{ login, password, repeatPassword }, setCredentials] = useState<Credentials>({
        login: '',
        password: '',
        repeatPassword: '',
    });
    const [{ message, isError }, setSignUpMessage] = useState<SignUpMessage>({ message: '', isError: false });
    const [isLoading, setLoading] = useState(false);

    const handleCredentialsChange = (field: keyof Credentials) => (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials((credentials) => ({ ...credentials, [field]: event.target.value }));
        setSignUpMessage({ message: '', isError: false });
    };

    const handleSignUpAction = (event: FormEvent) => {
        event.preventDefault();
        if (password !== repeatPassword) {
            setSignUpMessage({ message: PASSWORDS_DONT_MATCH, isError: true });
            return;
        }

        if (password.length < MIN_PASSWORD) {
            setSignUpMessage({ message: PASSWORD_IS_SHORT, isError: true });
            return;
        }

        if (login.length < MIN_LOGIN) {
            setSignUpMessage({ message: LOGIN_IS_SHORT, isError: true });
            return;
        }

        if (login.includes(' ')) {
            setSignUpMessage({ message: LOGIN_HAS_SPACES, isError: true });
            return;
        }

        setLoading(true);
        signUp(login, password)
            .then((isSignedUp) =>
                setSignUpMessage(
                    isSignedUp ? { message: SIGN_UP_SUCCESS, isError: false } : { message: SIGN_UP_FAIL, isError: true }
                )
            )
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <S.Form onSubmit={handleSignUpAction}>
            <S.SectionTitle>Sign Up</S.SectionTitle>
            <S.CredentialInput type="text" value={login} onChange={handleCredentialsChange('login')} label="Login" />
            <S.CredentialInput
                type="password"
                value={password}
                onChange={handleCredentialsChange('password')}
                label="Password"
            />
            <S.CredentialInput
                type="password"
                label="Repeat Password"
                value={repeatPassword}
                onChange={handleCredentialsChange('repeatPassword')}
            />
            {isError && <S.ErrorMessage>{message}</S.ErrorMessage>}
            <S.SubmitButton>{SIGN_UP_BUTTON_LABEL}</S.SubmitButton>
            {!isError && <S.SuccessMessage>{message}</S.SuccessMessage>}
            {isLoading && <S.LoadingCircle />}
        </S.Form>
    );
};
