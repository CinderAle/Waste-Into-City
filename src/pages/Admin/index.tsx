import MainMap from '@/components/MainMap';
import Section from '@/components/Section';
import Sidebar from '@/components/Sidebar';

import { Controls, PopupMessage } from './styles';

const Admin = () => {
    return (
        <>
            <Controls>
                <Sidebar />
                <Section />
            </Controls>
            <PopupMessage />
            <MainMap />
        </>
    );
};

export default Admin;
