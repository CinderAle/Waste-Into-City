import { useEffect } from 'react';

import closeIcon from '@/assets/icons/svg/close-icon.svg';
import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import * as S from './styled';

type Props = {
    className?: string;
};

const POPUP_MESSAGE_AGE = 3000;

export const PopupMessageBox = ({ className }: Props) => {
    const { isDisplayed, isError, message } = useTypedSelector((state) => state.popupMessage);
    const { hidePopupMessage } = useAction();

    useEffect(() => {
        let timeoutHandle: NodeJS.Timeout | undefined;
        if (isDisplayed) {
            timeoutHandle = setTimeout(() => hidePopupMessage(), POPUP_MESSAGE_AGE);
        }
        return () => {
            clearTimeout(timeoutHandle);
        };
    }, [message, isError, isDisplayed]);

    const handleCloseButtonClick = () => {
        hidePopupMessage();
    };

    return (
        isDisplayed && (
            <S.Container className={className}>
                <S.CloseButton onClick={handleCloseButtonClick}>
                    <img src={closeIcon} />
                </S.CloseButton>
                {isError ? <S.ErrorMessage>{message}</S.ErrorMessage> : <S.BaseMessage>{message}</S.BaseMessage>}
            </S.Container>
        )
    );
};
