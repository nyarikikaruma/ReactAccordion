import { useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function generateRandomColor() {
        console.log(typeOfColor);
        setTypeOfColor(typeOfColor);
        if (typeOfColor === 'hex') {
            let values = []
            for (let i = 1; i <= 6; i++) {
                values.push(Math.floor(Math.random() * 10))
            }
            console.log(values.join(""));
            const hexColor = values.join("");
            setColor(`#${hexColor}`)
        } else {
            let values = [];
            for (let i = 1; i <= 3; i++) {
                values.push(Math.floor(Math.random() * 255))
            }
            const rgbColor = values.join();
            setColor(`rgb(${rgbColor})`)
        }
    }
    return (
        <div style={{ width: '100vh', height: '100vh', backgroundColor: color }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={() => generateRandomColor()}>Generate random color</button>
            <div>
                {color}
            </div>
        </div>

    )
}   