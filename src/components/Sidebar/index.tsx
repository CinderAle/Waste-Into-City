import { useAction } from '@/hooks/useAction';

import { AddButton, FilterButton, SidebarContainer } from './styles';

const Sidebar = () => {
    const { addTrashcan } = useAction();
    const handleAddButtonClick = () => {
        addTrashcan();
    };

    return (
        <SidebarContainer>
            <AddButton onClick={handleAddButtonClick} />
            <FilterButton />
        </SidebarContainer>
    );
};

export default Sidebar;
