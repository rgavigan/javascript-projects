/* Gameboard Module - Stores Gameboard information
Want to return: Getting Field, Setting Field, Empty Fields Id, 
Clearing Board */
const gameBoard = (() => {
    let _board = new Array(9);

    const getField = (num) => _board[num];

    const setField = (num, person) => {
        const field = document.querySelector('.board button:nth-child(${num + 1}) p');
        field.textContent = 'X';
    }
})();

gameBoard.getField
gameBoard.setField

/* Players Factory - Want to return: Retrieving Sign, Setting Sign [X/O] */
const Player = (sign) => {

};

/* Game Controller Module
Want to return: Retrieve Players [Human/AI?], Check Win, Check Draw,
Change Sign [X/O], Player Step [Setting Field], End Game, Restart Game */
const gameController = (() => {

})();

/* Display Controller Module
Want to return: Deactivate Board, Activate Board, Clear Board, Restart Board */
const displayController = (() => {

})();