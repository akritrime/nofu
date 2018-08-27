import { Token, TokenType} from "../src/token"
import { Lexer } from "../src/lexer"

test("tests that `=+(){},\\n` gets tokenized properly", () => {
    const input = "=+(){},\n"
    const expectedOutput = [
        new Token("=", TokenType.ASSIGN),
        new Token("+", TokenType.ADD),
        new Token("(", TokenType.LPAREN),
        new Token(")", TokenType.RPAREN),
        new Token("{", TokenType.LBRACE),
        new Token("}", TokenType.RBRACE),
        new Token(",", TokenType.COMMA),
        new Token("\n", TokenType.NEWLINE),
        new Token("EOF", TokenType.EOF)
    ]

    const output = new Lexer(input)
    for(let expTk of expectedOutput) {
        let tk = output.next()
        // console.log(tk)
        expect(tk.literal).toBe(expTk.literal)
        expect(tk.type).toBe(expTk.type)

    }
})

test("tests that `= +  ( ){ } , \\n` gets tokenized properly", () => {
    const input = "= +  ( ){ } , \n"
    const expectedOutput = [
        new Token("=", TokenType.ASSIGN),
        new Token("+", TokenType.ADD),
        new Token("(", TokenType.LPAREN),
        new Token(")", TokenType.RPAREN),
        new Token("{", TokenType.LBRACE),
        new Token("}", TokenType.RBRACE),
        new Token(",", TokenType.COMMA),
        new Token("\n", TokenType.NEWLINE),
        new Token("EOF", TokenType.EOF)
    ]

    const output = new Lexer(input)
    for(let expTk of expectedOutput) {
        let tk = output.next()
        // console.log(tk)
        expect(tk.literal).toBe(expTk.literal)
        expect(tk.type).toBe(expTk.type)

    }
})

test("tests that `a_new` gets identified as identifier", () => {
    const input = `   a_new    `
    const expectedTk = new Token("a_new", TokenType.IDENTIFIER)
    const tk = (new Lexer(input)).next()
    expect(tk.literal).toBe(expectedTk.literal)
    expect(tk.type).toBe(expectedTk.type)
})

test("tests that `5` gets identified as int", () => {
    const input = `   5    `
    const expectedTk = new Token("5", TokenType.INT)
    const tk = (new Lexer(input)).next()
    expect(tk.literal).toBe(expectedTk.literal)
    expect(tk.type).toBe(expectedTk.type)
})

test("tests that `5.25` gets identified as int", () => {
    const input = `   5.25    `
    const expectedTk = new Token("5.25", TokenType.FLOAT)
    const tk = (new Lexer(input)).next()
    expect(tk.literal).toBe(expectedTk.literal)
    expect(tk.type).toBe(expectedTk.type)
})

test("tests that `let a = 5\\n` gets tokenized properly", () => {
    const input = "let a = 5\n"
    const expectedOutput = [
        new Token("let", TokenType.LET),
        new Token("a", TokenType.IDENTIFIER),
        new Token("=", TokenType.ASSIGN),
        new Token("5", TokenType.INT),
        new Token("\n", TokenType.NEWLINE),
        new Token("EOF", TokenType.EOF)
    ]

    const output = new Lexer(input)
    for(let expTk of expectedOutput) {
        let tk = output.next()
        // console.log(tk)
        expect(tk.literal).toBe(expTk.literal)
        expect(tk.type).toBe(expTk.type)

    }
})

