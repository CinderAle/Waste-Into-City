import { MenuSectionAction, MenuSections, MenuSectionState } from '@/types/menuSection';

const initialState: MenuSectionState = {
    section: undefined,
};

export const menuSectionReducer = (
    state: MenuSectionState = initialState,
    action: MenuSectionAction
): MenuSectionState => {
    switch (action.type) {
        case MenuSections.NoSection:
            return { ...state, section: undefined };
        case MenuSections.AddTrashcanSection:
        case MenuSections.FilterTrashcansSection:
        case MenuSections.TrashcanInfoSection:
        case MenuSections.UpdateTrashcanSection:
            return { ...state, section: action.payload };
        default:
            return state;
    }
};
