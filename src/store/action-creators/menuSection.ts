import { Dispatch } from 'redux';

import FilterSection from '@/components/FilterSection';
import TrashcanEditor from '@/components/TrashcanEditor';
import { MenuSectionAction, MenuSections } from '@/types/menuSection';
import { Trashcan } from '@/types/trashcan';

export const addTrashcan = () => {
    return async (dispatch: Dispatch<MenuSectionAction>) => {
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
