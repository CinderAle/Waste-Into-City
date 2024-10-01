import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const TrashcanMarkerCircle = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${COLORS.WHITE};
    border-radius: 15px;
    cursor: pointer;
    border: 2px solid ${COLORS.GRAY};
`;

export const FocusedTrashcanMarkerCircle = styled(TrashcanMarkerCircle)`
    background-color: ${COLORS.NEUTRAL_GRAY};
`;
