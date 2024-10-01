import { Dispatch } from 'redux';

import TrashcanEditor from '@/components/TrashcanEditor';
import { MenuSectionAction, MenuSections } from '@/types/menuSection';

export const addTrashcan = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.AddTrashcanSection, payload: TrashcanEditor });
    };
};

export const hideSection = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.NoSection });
    };
};
