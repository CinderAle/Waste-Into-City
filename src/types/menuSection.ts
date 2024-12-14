import { Trashcan } from './trashcan';

export enum MenuSections {
    AddTrashcanSection = 'AddTrashcanSection',
    UpdateTrashcanSection = 'UpdateTrashcanSection',
    FilterTrashcansSection = 'FilterTrashcansSection',
    TrashcanInfoSection = 'TrashcanInfoSection',
    SignInSection = 'SignInSection',
    SignUpSection = 'SignUpSection',
    NoSection = 'NoSection',
    ClearTrashcan = 'ClearTrashcan',
}

export type MenuSectionState = {
    section: ((...args: any[]) => JSX.Element) | null;
    trashcan: Trashcan | null;
};

type MenuSectionActionPayload = { component: (...args: any[]) => JSX.Element; props?: Trashcan };

type AddTrashcan = {
    type: MenuSections.AddTrashcanSection;
    payload: MenuSectionActionPayload;
};

type UpdateTrashcan = {
    type: MenuSections.UpdateTrashcanSection;
    payload: Required<MenuSectionActionPayload>;
};

type FilterTrashcans = {
    type: MenuSections.FilterTrashcansSection;
    payload: MenuSectionActionPayload;
};

type ShowTrashcanInfo = {
    type: MenuSections.TrashcanInfoSection;
    payload: MenuSectionActionPayload;
};

type SignInSection = {
    type: MenuSections.SignInSection;
    payload: MenuSectionActionPayload;
};

type SignUpSection = {
    type: MenuSections.SignUpSection;
    payload: MenuSectionActionPayload;
};

type HideSection = {
    type: MenuSections.NoSection;
};

type ClearTrashcan = {
    type: MenuSections.ClearTrashcan;
};

export type MenuSectionAction =
    | AddTrashcan
    | UpdateTrashcan
    | FilterTrashcans
    | ShowTrashcanInfo
    | HideSection
    | SignInSection
    | SignUpSection
    | ClearTrashcan;
