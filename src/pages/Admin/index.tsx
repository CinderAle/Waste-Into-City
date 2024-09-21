import MainMap from '@/components/MainMap';
import Section from '@/components/Section';
import Sidebar from '@/components/Sidebar';

import { Controls } from './styles';

const Admin = () => {
    return (
        <>
            <Controls>
                <Sidebar />
                <Section />
            </Controls>
            <MainMap />
        </>
    );
};

export default Admin;
