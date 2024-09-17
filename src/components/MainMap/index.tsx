import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

const MainMap = () => {
    return (
        <YMaps>
            <Map defaultState={{ center: [53.9108842, 27.5947648], zoom: 18 }} width="100%" height="100vh">
                <Placemark geometry={[53.9108842, 27.5947648]} />
            </Map>
        </YMaps>
    );
};

export default MainMap;
