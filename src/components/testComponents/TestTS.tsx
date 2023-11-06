import { error } from 'console';
import './map.scss';

const TestTS = () => {

    // const electricityUserData = {
    //     readings: 95,
    //     units: "kWt",
    //     mode: "double",
    // };

    // const waterUserData = {
    //     readings: 3,
    //     units: "m3",
    // };

    // const elRate = 0.45;
    // const wRate = 2;

    // const monthPayments = [0, 0]; // [electricity, water]

    // const calculatePayments = (elData: {
    //     readings: number,
    //     mode: string,
    // }, wData: {
    //     readings: number
    // },
    //     elRate: number,
    //     wRate: number): void => {
    //     if (elData.mode === "double" && elData.readings < 50) {
    //         monthPayments[0] = elData.readings * elRate * 0.7;
    //     } else {
    //         monthPayments[0] = elData.readings * elRate;
    //     }

    //     monthPayments[1] = wData.readings * wRate;
    // };

    // calculatePayments(electricityUserData, waterUserData, elRate, wRate);

    // const sendInvoice = (monthPayments: number[],
    //     electricityUserData: {
    //         readings: number,
    //         units: string,
    //     },
    //     waterUserData: {
    //         readings: number,
    //         units: string
    //     }): string => {
    //     const text: string = `    Hello!
    //     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    //     It will cost: ${monthPayments[0]}€

    //     This month you used ${waterUserData.readings} ${waterUserData.units} of water
    //     It will cost: ${monthPayments[1]}€`;

    //     return text;
    // };

    // const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
    // console.log(invoice);

    // function printMsg(msg: string | number | boolean): void {
    //     if (typeof msg === 'string' || typeof msg === 'number') {
    //         console.log(msg.toString())
    //     } else {
    //         console.log(msg)
    //     }

    // }

    // printMsg(32)
    // printMsg('dasda')

    // const check = (readings: { system: number } | { user: number }): void => {
    //     if ('system' in readings) {
    //         console.log(readings.system)
    //     } else {
    //         console.log(readings.user)
    //     }
    // }

    // const logValue = (x: string | Date): void => {
    //     if (x instanceof Date) {
    //         console.log(x.getDay);
    //     } else {
    //         console.log(x.toUpperCase);
    //     }
    // }

    // const serverConfig: { protocol: 'htttp' | 'https', port: 3000 | 3001 } = {
    //     protocol: 'https',
    //     port: 3001
    // }

    // const start: (protocol: 'htttp' | 'https', port: 3000 | 3001) => string = (
    //     protocol: 'htttp' | 'https',
    //     port: 3000 | 3001):
    //     'Server started' => {
    //     console.log(`Server started on ${protocol}://server:${port}://port`);
    //     return "Server started"
    // }

    // start(serverConfig.protocol, serverConfig.port)

    // type AnimationTiming = "ease" | 'ease-out' | 'ease-in';
    // type AnimatuinId = string | number;

    // function createAninmation(
    //     id: AnimatuinId,
    //     animMane: string,
    //     timing: AnimationTiming = 'ease',
    //     duration: number,
    //     iterationCount: "infinit" | number,
    // ): void {
    //     const elem = document.querySelector(`#${id}`) as HTMLElement;
    //     if (elem) {
    //         elem.style.animation = `${animMane} ${timing} ${duration} ${iterationCount}`;
    //     } else {
    //         console.log(`${animMane} ${timing} ${duration} ${iterationCount}`)
    //     }
    // }

    // createAninmation('id', 'fade', 'ease-in', 6, 2)


    return (
        <div>
            <h1>Hrllo</h1>
            <div className="map" id="map"></div>

        </div>
    )
}

export default TestTS;