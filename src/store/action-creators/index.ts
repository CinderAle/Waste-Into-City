import * as TrashcanFilterActionCreators from '../thunks/trashcanFilter';
import * as UserActionCreators from '../thunks/user';
import * as MapClickActionCreators from './mapClick';
import * as MenuSectionActionCreators from './menuSection';
import * as PopupMessageActionCreators from './popupMessage';

export default {
    ...MapClickActionCreators,
    ...MenuSectionActionCreators,
    ...PopupMessageActionCreators,
    ...UserActionCreators,
    ...TrashcanFilterActionCreators,
};
