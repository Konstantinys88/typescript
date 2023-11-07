import { error } from 'console';
import './map.scss';

const TestTS = () => {


    type Config = { protocol: 'htttp' | 'https', port: 3000 | 3001 };
    type Role = {
        role: string;
    };

    type ConfigWithRole = Config & Role;



    const serverConfig: ConfigWithRole = {
        protocol: 'https',
        port: 3001,
        role: 'admin',
    }

    const backupConfig: ConfigWithRole = {
        protocol: 'htttp',
        port: 3000,
        role: 'sisadmib',
    }

    const start: (protocol: 'htttp' | 'https', port: 3000 | 3001) => string = (
        protocol: 'htttp' | 'https',
        port: 3000 | 3001):
        'Server started' => {
        console.log(`Server started on ${protocol}://server:${port}://port`);
        return "Server started"
    }

    start(serverConfig.protocol, serverConfig.port)



    return (
        <div>
            <h1>Hrllo</h1>
            <div className="map" id="map"></div>

        </div>
    )
}

export default TestTS;