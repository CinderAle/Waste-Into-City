import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { Input } from '@/styles/input';
import { Loader } from '@/styles/loader';

export const Form = styled.form`
    width: 100%;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 36px;
    margin: 5px 0 15px;
    color: ${COLORS.GRAY};
`;

export const CredentialInput = styled(Input)``;

export const SubmitButton = styled.button`
    width: 100%;
    margin: 15px 0;
    background-color: ${COLORS.GRAY};
    color: ${COLORS.WHITE};
    border-radius: 10px;
    padding: 5px 7px;
    border: 2px solid ${COLORS.GRAY};
    font-size: 22px;
    transition: 0.1s linear;
    cursor: pointer;

    &:hover {
        color: ${COLORS.GRAY};
        background-color: ${COLORS.TRANSPARENT};
    }
`;

export const LoadingCircle = styled(Loader)`
    margin: 20px auto;
`;

const Message = `
    font-size: 18px;
    text-align: center;
    word-break: break-word;
    font-weight: bolder;
`;

export const SuccessMessage = styled.p`
    ${Message}
    color: ${COLORS.GREEN};
`;

export const ErrorMessage = styled.p`
    ${Message}
    color: ${COLORS.RED};
`;
