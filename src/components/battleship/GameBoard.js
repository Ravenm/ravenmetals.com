export function GameBoard() {
    return (
        <div className="grid grid-cols-10 grid-rows-10 gap-0.5">
            {Array(100).map(() => <div className="w-2 h-2 bg-amber-100"></div>)}
        </div>
    )
}