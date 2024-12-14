export type Credentials = {
    login: string;
    password: string;
    repeatPassword: string;
};

export type SignUpMessage = {
    message: string;
    isError: boolean;
};

export const config = {
    SIGN_UP_SUCCESS: 'Sign up successful',
    SIGN_UP_FAIL: 'Sign up failed! Check credentials',
    PASSWORDS_DONT_MATCH: 'Specified passwords must match!',
    PASSWORD_IS_SHORT: 'Minimal password length is 8 characters!',
    LOGIN_IS_SHORT: 'Minimal login length is 6 characters!',
    LOGIN_HAS_SPACES: 'Login must not contain any spaces!',
    SIGN_UP_BUTTON_LABEL: 'Sign Up',
    MIN_PASSWORD: 8,
    MIN_LOGIN: 6,
};
