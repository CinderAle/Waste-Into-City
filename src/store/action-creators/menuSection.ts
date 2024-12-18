import { Dispatch } from 'redux';

import FilterSection from '@/components/FilterSection';
import { SignInSection } from '@/components/SignInSection';
import { SignUpSection } from '@/components/SignUpSection';
import TrashcanEditor from '@/components/TrashcanEditor';
import { MenuSectionAction, MenuSections } from '@/types/menuSection';
import { Trashcan } from '@/types/trashcan';

export const addTrashcan = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.ClearTrashcan });
        dispatch({ type: MenuSections.AddTrashcanSection, payload: { component: TrashcanEditor } });
    };
};

export const editTrashcan = (trashcan: Trashcan) => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.UpdateTrashcanSection, payload: { component: TrashcanEditor, props: trashcan } });
    };
};

export const specifyFilters = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.FilterTrashcansSection, payload: { component: FilterSection } });
    };
};

export const hideSection = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.NoSection });
    };
};

export const followSignIn = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.SignInSection, payload: { component: SignInSection } });
    };
};

export const followSignUp = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.SignUpSection, payload: { component: SignUpSection } });
    };
};

export const clearSelectedTrashcan = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
        dispatch({ type: MenuSections.ClearTrashcan });
    };
};
