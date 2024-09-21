import styled from 'styled-components';

export const SectionContainer = styled.div<{ $hidden?: boolean }>`
    transition: 0.3s linear;
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$hidden ? '0' : '450px')};
    padding: ${(props) => (props.$hidden ? '0' : '20px')};
`;
