import { isFill, isRightMove, checkWin, boardFromString, boardToString } from "./board"

test("Преобразования", () => {
    let source = "00__xx___"
    let board = boardFromString(source)
    let recover = boardToString(board)
    expect(recover).toBe(source)
})

test("isFill", () => {
    expect(
        isFill(boardFromString("000XXX00_")))
        .toBe(false)
    expect(
        isFill(boardFromString("000XXX000")))
        .toBe(true)
})

test("isRightMove", () => {
    expect(
        isRightMove(0, boardFromString("000XXX00_")))
        .toBe(false)
    expect(
        isRightMove(8, boardFromString("000XXX00_")))
        .toBe(true)
})

test("checkWin", () => {
    expect(
        checkWin(boardFromString("000XXX00_")))
        .toBe("0")
    expect(
        checkWin(boardFromString("__X_X_X___")))
        .toBe("X")
    expect(
        checkWin(boardFromString("_________")))
        .toBe("_")
})