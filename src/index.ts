import { Lexer } from "./lexer"


function main() {
    const input = `fn(a, b) {
        let a = a + 5
        let b = b + 5
        return a + b 
    }`
    // const expectedTk = new Token("5.25", TokenType.FLOAT)
    const l = new Lexer(input)
    for(let tk = l.next(); tk.literal !== "EOF"; tk = l.next()) {
        console.log(tk)
    }
    // console.log(l.next())
    // console.log(l.next())
}

main()