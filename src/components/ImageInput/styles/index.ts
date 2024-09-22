import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const InputContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border: 5px solid ${COLORS.GREEN};
    border-radius: 15px;
    overflow: hidden;
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
`;

export { UploadButton } from './input';
