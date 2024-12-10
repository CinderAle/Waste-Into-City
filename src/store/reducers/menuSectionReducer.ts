import { MenuSectionAction, MenuSections, MenuSectionState } from '@/types/menuSection';

const initialState: MenuSectionState = {
    section: null,
    trashcan: null,
};

export const menuSectionReducer = (
    state: MenuSectionState = initialState,
    action: MenuSectionAction
): MenuSectionState => {
    switch (action.type) {
        case MenuSections.NoSection:
            return initialState;
        case MenuSections.AddTrashcanSection:
        case MenuSections.FilterTrashcansSection:
        case MenuSections.TrashcanInfoSection:
        case MenuSections.SignInSection:
        case MenuSections.SignUpSection:
            return { ...state, section: action.payload.component };
        case MenuSections.UpdateTrashcanSection:
            return { ...state, section: action.payload.component, trashcan: action.payload.props };
        default:
            return state;
    }
};
