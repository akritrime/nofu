import { Token, TokenType } from "./token"


export class Lexer {
    private input: string
    private pos = 0
    private readPos = 0
    private ch = ""

    constructor(txt: string) {
        this.input = txt
        this.readChar()
    }

    // reads the current character as per readPos
    private readChar() {
        if (this.readPos >= this.input.length) {
            this.ch = ""
        } else {
            this.ch = this.input[this.readPos]
        }
        this.pos = this.readPos
        this.readPos += 1
    }

    // peeks ahead to see what's the next character
    private peekChar() {
        return this.input[this.readPos]
    }

    // consumes all the space
    private eatSpace() {
        while(this.ch === " ") this.readChar()
        // this.readChar()
    }

    // main method, advances the lexer to produce the next avaialable token till EOF, tokens are separated by space,
    // a string of character is read as a token if it contains any alphanumerics or '_' or '.'
    next(): Token {
        this.eatSpace()
        let literal = this.ch
        while(/^[A-Za-z0-9_.]$/.test(this.peekChar())){
            this.readChar()
            literal += this.ch
        }
        this.readChar()
        return Token.fromLiteral(literal)
    }
}
