
import axios from 'axios';
import './map.scss';
import { type } from 'os';


const TestTS = () => {

    const test12 = () => {

        // Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

        // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

        // Описание интерфейса, в котором:
        // name - строка
        // type - один из перечисления выше
        // format = один из перечисления выше
        // subtitles - необязательное поле типа строка
        // marks - необязательное поле неизвестного типа

        enum TypesOfMedia {
            video = 'video',
            audio = 'audio',
        }

        enum FormatsOfMedia {
            videoMP4 = '.mp4',
            videoMOV = '.mov',
            videoMKV = '.mkv',
            videoFLV = '.flv',
            videoWEBM = '.webM',
        }

        interface playMediaData {
            name: string;
            type: TypesOfMedia.video;
            format: FormatsOfMedia.videoFLV;
            subtitles?: string;
            marks?: unknown;

        }

        function playMedia(
            { name, type, format, subtitles, marks }: playMediaData = {
                name: "example",
                type: TypesOfMedia.video,
                format: FormatsOfMedia.videoFLV,
            }
        ): string {
            let marksLog: string;

            if (Array.isArray(marks)) {
                marksLog = marks.join('-')
            } else if (typeof marks === 'string') {
                marksLog = marks;
            } else {
                marksLog = "Unsupported type of marks"
            }


            // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
            // Если это строка, то просто поместить её в marksLog
            // Если что-то другое - то marksLog = "Unsupported type of marks"
            // Не допускайте any!

            console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
            // помните что это за оператор ??

            return "Media started";
        }

        playMedia({
            name: "WoW",
            format: FormatsOfMedia.videoFLV,
            type: TypesOfMedia.video,
            subtitles: "hmhmhm hmhmhm doh",
            marks: ["4:30", "5:40"],
        });
    }

    const test13 = () => {

        const FetcData = (url: string, method: 'GET' | 'POST'): void => {
            console.log("Fetched!")
        }

        const reqOptions = {
            url: 'http://someurl.com',
            method: 'GET',
        } as const;

        let a = 'value' as const;

        FetcData('qqq', 'GET')
        FetcData(reqOptions.url, reqOptions.method)

    }

    const test14 = () => {

        // let num: Number = new Number(3);
        // let num2: number = 3;
        // num = num2;

        const num = 5;
        const strNum: string = num.toString();

        const str = '3';
        const numStr: number = +str;

        interface Department {
            name: string,
            budjet: number,
        }

        const department: Department = {
            name: 'web-dev',
            budjet: 5000,
        }

        interface Project {
            name: string,
            projectButget: number,
        }


        function transformDepartment(department: Department, amount: number): Project {
            return {
                name: department.name,
                projectButget: amount
            }
        }

        const mainProgect: Project = transformDepartment(department, 4000);


    }

    const test15 = () => {

        interface Car {
            name: 'car'
            engine: string;
            wheels: {
                number: number;
                type: string;
            };
        }

        interface Ship {
            name: 'ship';
            engine: string;
            sail: string;
        }

        interface Airplane {
            name: 'airplane'
            engine: string;
            wings: string;
        }

        interface SupoerAirplane {
            name: 'smth';
            engine: string;
            wings: string;
        }

        type Vehicle = Car | Ship | Airplane | SupoerAirplane;

        function isCar(car: Vehicle): car is Car {
            return (car as Car).wheels.number !== undefined;
        }

        function isShip(ship: Vehicle): ship is Ship {
            return "sail" in ship;
        }

        function repairVehicle(vehicle: Vehicle) {
            // if (isCar(vehicle)) {
            //     console.log(vehicle.wheels);
            // } else if (isShip(vehicle)) {
            //     console.log(vehicle.sail);
            // } else {
            //     console.log(vehicle.)
            // }

            switch (vehicle.name) {
                case 'car':
                    console.log(vehicle.wheels);
                    break;
                case 'ship':
                    console.log(vehicle.sail);
                    break;
                case 'airplane':
                    console.log(vehicle.wings);
                    break;
                case 'smth':
                    console.log(vehicle.name);
                    break;
                default:
                    const smth: never = vehicle;
                    console.log('error')
            }
        }

    }






    return (
        <div>

            <div className="map" id="map"><h1>Hello</h1></div>
        </div>
    );
}

export default TestTS;