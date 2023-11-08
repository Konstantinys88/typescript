
import { strict } from 'assert';
import './map.scss';

const TestTS = () => {

    interface User {
        readonly login: string;
        password: string;
        age: number;
        addr: string | undefined;
        parents?: {
            mother?: string;
            father?: string;
        }
    }

    const user: User = {
        login: 'egor',
        password: 'torop',
        age: 3,
        addr: 'asdas'
    }

    let bdName: string;

    setUserData(user, 'ewdfsdf');
    console.log(bdName!)

    function setUserData(obj: User, bd?: string): void {
        bdName = '12345'
        console.log(obj.parents?.father?.toLowerCase(), bd?.toLocaleLowerCase());
    }

    const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];



    return (
        <div>
            <h1>Hello</h1>
            <div className="map" id="map"></div>
        </div>
    );
}

export default TestTS;