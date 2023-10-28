import { checkWin, isFill, isRightMove } from "./board"

// Текущее состояние доски
let board: string[] = []

// Ссылка на html элемент для вывода сообщений
let info = <HTMLDivElement>document.getElementById("info")

// Кнопки игрового поля и их инициализация
let buttons: HTMLButtonElement[] = []
for (let i = 0; i < 9; i++) {
    let b = <HTMLButtonElement>document.getElementById("f" + i)
    b.onclick = function (): void { step(i) }
    buttons.push(b)
    let f = b.textContent
    if (f == null) { f = "_" };
    board.push(f)
}

// Начальная поизиция, используется при сбросе
let zeroBoard = board.slice()

// После окончании игры - true.
// Используется для того, что-бы не делать ходов после окончания игры
let gameOver = false

// Хранит символ, который выставляется на доску при ходе.
let turn = "X"

// Возвращает текущий символ и меняет его для следующего хода.
function getTurn(): "X" | "0" {
    if (turn == "X") {
        turn = "0"
        return ("X")
    } else {
        turn = "X"
        return ("0")
    }
}

// Кнопка для перехода к начальной позиции
let resetButton = <HTMLButtonElement>document.getElementById("reset")
const reset = function (this: GlobalEventHandlers): void {
    // TODO
    // Функция  должна установить в начальное состояние переменные
    //  board, turn и gameOver, и установить в начальное состояние 
    //  свойство textContent html элементов buttons и info
}
resetButton.onclick = reset

function step(cell: number): void {
    // TODO
    // В случае, если игра не окончена и в клетку cell возможен ход,
    //  должна выполнить ход.
    // При выполнении хода нужно заполнить соответствующие элементы 
    //  массивов board и buttons, затем проверить, на закончилась ли игра 
    //  и, если игра закончилась, обновить переменные gameOver и info.
}
