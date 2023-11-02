

const TestTS = () => {

    let numberTest: number = 23;
    let stringTest: string = `TypeScript ${numberTest}`;
    console.log(typeof stringTest);

    const isBirthday: boolean = true;
    const age: number = 40;
    const userName: string = 'Egor';

    if (isBirthday) {
        console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
    }


    return (
        <div>
            <h1>{stringTest}</h1>
        </div>

    )
}

export default TestTS;