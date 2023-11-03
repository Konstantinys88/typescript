

const TestTS = () => {


    const createError = (msg: string): never => {
        throw new Error(msg);
    }

    const isBirthdayData: boolean = true;
    const ageData: number = 40;
    const userNameData: string = 'Egor';

    const logBtrMsg = (isBirthday: boolean, userName: string, age: number): string => {
        if (isBirthday === true) {
            return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
        } else if (isBirthday === false) {
            return createError("Error");
        }
        return createError("Error");
    }

    let message = logBtrMsg(isBirthdayData, userNameData, ageData);



    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default TestTS;