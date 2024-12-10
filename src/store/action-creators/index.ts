import * as UserActionCreators from '../thunks/user';
import * as MapClickActionCreators from './mapClick';
import * as MenuSectionActionCreators from './menuSection';

export default {
    ...MapClickActionCreators,
    ...MenuSectionActionCreators,
    ...UserActionCreators,
};
