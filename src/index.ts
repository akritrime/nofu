import { Lexer } from "./lexer"


function main() {
    const input = `   5.25    `
    // const expectedTk = new Token("5.25", TokenType.FLOAT)
    const tk = (new Lexer(input)).next()
    console.log(tk)
}

main()