import { useState } from 'react';
import Buttons from "./Buttons";
import './index.scss';

const calculate = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "=": (a, b) => b,
}
const buttonData = ["c", "\xB1", "%", "+", 7, 8, 9, "-", 4, 5, 6, "*", 1, 2, 3, "/", 0, ".", "="]

const Calculator = () => {
    const [newValue, setNewValue] = useState("0");
    const [prevValue, setPrevValue] = useState(null);
    const [calcOperation, setCalcOperation] = useState(null);

    //update newValue value with current value
    const handleNum = (number) => {
        setNewValue(newValue === "0" ? String(number) : newValue + number);
        console.log('number', number)
    }
    //This will clear the input field
    const clearInputField = () => {
        setNewValue("0");
        setPrevValue(0);
    }
    //reverse the sign
    const reverseSign = () => {
        setNewValue(parseFloat(newValue) * -1);
    };

    // add dot to the number
    const addDot = () => {
        if (!/\./.test(newValue)) {
            setNewValue(newValue + ".");
        }
    }

    //convert into percentage.
    const PercentageValue = () => {
        setNewValue(parseFloat(newValue) / 100);
        if (prevValue && newValue === "") {
            setPrevValue(parseFloat(prevValue) / 100);
        }
    }

    // perform operation to find the result
    const findOutValue = () => {
        let temp = calculate[calcOperation](
            parseFloat(prevValue),
            parseFloat(newValue),
        );
        setCalcOperation(null);
        setNewValue(String(temp));
        setPrevValue(null);
    };

    // identify the number and operation type.
    const handleOperation = (value) => {
        console.log('value', value)
        console.log('calcOperation', calcOperation)
        if (Number.isInteger(value)) {
            console.log('value', value)
            handleNum(parseInt(value, 10));
        } else if (value in calculate) {
            if (calcOperation === null) {
                setCalcOperation(value);
                setPrevValue(newValue);
                setNewValue("");
            }
            if (calcOperation) {
                setCalcOperation(value);
            }
            if (prevValue && calcOperation && newValue) {
                findOutValue();
            }
        } else if (value === "c") {
            clearInputField();
        } else if (value === "\xB1") {
            reverseSign();
        } else if (value === ".") {
            addDot();
        } else if (value === "%") {
            PercentageValue();
        }
    };

    return (
        <div className="calculatorWrap">
            <div className="inputWrap">
                <div className="resultWrap">
                    {newValue}
                </div>
            </div>
            <div className="buttonsWrap">
                {
                    buttonData.map((item, index) => (
                        <Buttons
                            key={index}
                            keyValue={item}
                            classNameK={item === 0 ? "zero" : ""}
                            operation={handleOperation}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Calculator;