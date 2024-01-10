import {useState} from "react";

export function GameBoard() {
    const [selectedSquare, setSelectedSquare] = useState([])

    function handleSquareClick(index) {
        setSelectedSquare(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(square => square !== index);
            } else {
                return [...prevState, index];
            }
        });
    }

    return (
        <div className="grid grid-cols-10 grid-rows-10 gap-0.5 min-w-[250px]">
            {Array(100).fill(0).map((x, index) =>
                <div className={`w-10 h-10 hover:bg-amber-300 ${selectedSquare.includes(index)? "bg-amber-50": "bg-amber-100"}`}
                   onClick={() => handleSquareClick(index)}>
            </div>)}
        </div>
    )
}