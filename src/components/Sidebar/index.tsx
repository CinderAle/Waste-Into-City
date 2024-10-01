import { useAction } from '@/hooks/useAction';

import { AddButton, FilterButton, SidebarContainer } from './styles';

const Sidebar = () => {
    const { addTrashcan, specifyFilters } = useAction();

    const handleAddButtonClick = () => {
        addTrashcan();
    };

    const handleFilterButtonClick = () => {
        specifyFilters();
    };

    return (
        <SidebarContainer>
            <AddButton onClick={handleAddButtonClick} />
            <FilterButton onClick={handleFilterButtonClick} />
        </SidebarContainer>
    );
};

export default Sidebar;
