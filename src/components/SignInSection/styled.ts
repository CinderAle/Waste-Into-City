import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { Input } from '@/styles/input';
import { Loader } from '@/styles/loader';

export const Form = styled.form`
    width: 100%;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    margin: 5px 0 20px;
    color: ${COLORS.GREEN};
    font-size: 36px;
`;

export const Credentials = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubmitButton = styled.button`
    margin: 15px 0;
    width: 100%;
    background-color: ${COLORS.GREEN};
    color: ${COLORS.WHITE};
    cursor: pointer;
    padding: 5px 7px;
    font-size: 22px;
    border: 2px solid ${COLORS.GREEN};
    border-radius: 10px;
    transition: 0.1s linear;

    &:hover {
        background-color: ${COLORS.TRANSPARENT};
        color: ${COLORS.GREEN};
    }
`;

export const CredentialField = styled(Input)`
    width: 100%;
`;

export const SignUpLink = styled.p`
    font-size: 18px;
    text-align: center;
    color: ${COLORS.GRAY};

    a {
        text-decoration: none;
        color: ${COLORS.GREEN};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const LoadingCircle = styled(Loader)`
    margin: 20px auto;
`;
