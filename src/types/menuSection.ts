export enum MenuSections {
    AddTrashcanSection = 'AddTrashcanSection',
    UpdateTrashcanSection = 'UpdateTrashcanSection',
    FilterTrashcansSection = 'FilterTrashcansSection',
    TrashcanInfoSection = 'TrashcanInfoSection',
    NoSection = 'NoSection',
}

export type MenuSectionState = {
    section: ((...args: any[]) => JSX.Element) | undefined;
};

type AddTrashcan = {
    type: MenuSections.AddTrashcanSection;
    payload: (...args: any[]) => JSX.Element;
};

type UpdateTrashcan = {
    type: MenuSections.UpdateTrashcanSection;
    payload: (...args: any[]) => JSX.Element;
};

type FilterTrashcans = {
    type: MenuSections.FilterTrashcansSection;
    payload: (...args: any[]) => JSX.Element;
};

type ShowTrashcanInfo = {
    type: MenuSections.TrashcanInfoSection;
    payload: (...args: any[]) => JSX.Element;
};

type HideSection = {
    type: MenuSections.NoSection;
};

export type MenuSectionAction = AddTrashcan | UpdateTrashcan | FilterTrashcans | ShowTrashcanInfo | HideSection;
