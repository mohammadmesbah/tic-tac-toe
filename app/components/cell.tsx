type Props = {
    id: number;
    cells: string[];
    cell: string;
    setCells: React.Dispatch<React.SetStateAction<string[]>>;
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
    winningMessage: string;
}
const Cell= ({
    id,
    cells,
    cell,
    setCells,
    currentPlayer,
    setCurrentPlayer,
    winningMessage
}: Props) =>{
    const handleClick = () => {
        const cellTaken = !!cells[id];
        if(winningMessage){return;} 

        if (!cellTaken) {
            if(currentPlayer === "circle"){
                handleCellChange("circle");
                setCurrentPlayer("cross");
            } else if(currentPlayer === "cross"){
                handleCellChange("cross");
                setCurrentPlayer("circle");
            }
        }
        
    };

    const handleCellChange = (cellToChange: string) => {
        let newCells = [...cells];
        newCells[id] = cellToChange;
        setCells(newCells);
    };
    
    return(
        <div className="square" onClick={handleClick}>
            <div className={cell}>
                {cell && (cell === "circle" ? "O" : "X")}
            </div>
        </div>
    )
};

export default Cell