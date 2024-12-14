import { Component, ReactNode } from 'react';

import * as S from './styled';

type Props = {
    children?: ReactNode;
};
type State = {
    isError: boolean;
};

const COMMON_ERROR_TITLE = 'An error has occurred!';
const COMMON_ERROR_DESCRIPTION = 'This window is displayed because some error has occurred. Try to reload the page.';

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isError: false };
    }

    static getDerivedStateFromError(): State {
        return { isError: true };
    }

    componentDidCatch(): void {
        localStorage.clear();
    }

    render() {
        if (!this.state.isError) {
            return this.props.children;
        }
        return (
            <S.Container>
                <S.ErrorBlock>
                    <S.ErrorTitle>{COMMON_ERROR_TITLE}</S.ErrorTitle>
                    <S.ErrorDescription>{COMMON_ERROR_DESCRIPTION}</S.ErrorDescription>
                </S.ErrorBlock>
            </S.Container>
        );
    }
}
