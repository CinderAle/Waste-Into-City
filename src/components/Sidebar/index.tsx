import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { UserRoles } from '@/types/userRoles';

import { AddButton, FilterButton, SidebarContainer, SignButton } from './styles';

const Sidebar = () => {
    const { addTrashcan, specifyFilters, followSignIn, signOutUserAccount, hideSection } = useAction();
    const userRole = useTypedSelector((state) => state.user.role);
    const handleAddButtonClick = () => {
        addTrashcan();
    };

    const handleFilterButtonClick = () => {
        specifyFilters();
    };

    const handleSignInButtonClick = () => {
        followSignIn();
    };

    const handleSignOutClick = () => {
        signOutUserAccount();
        hideSection();
    };

    return (
        <SidebarContainer>
            {userRole === UserRoles.Admin && <AddButton onClick={handleAddButtonClick} />}
            <FilterButton onClick={handleFilterButtonClick} />
            {userRole === UserRoles.Guest ? (
                <SignButton onClick={handleSignInButtonClick} />
            ) : (
                <SignButton onClick={handleSignOutClick} />
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
