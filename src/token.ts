export enum TokenType {
    ILLEGAL = "ILLEGAL",
    EOF = "EOF",

    // types
    INT = "INT",
    FLOAT = "FLOAT",
    STRING = "STRING",

    // vars
    IDENTIFIER = "IDENTIFIER",

    // operators
    ADD = "ADD",
    SUB = "SUB",
    MUL = "MUL",
    DIV = "DIV",
    MOD = "MOD",
    ASSIGN = "ASSIGN",

    // punctuations
    COMMA = "COMMA",
    NEWLINE = "NEWLINE",
    LPAREN = "LPAREN",
    RPAREN = "RPAREN",
    LBRACE = "LBRACE",
    RBRACE = "RBRACE",

    // keywords
    FUNCTION = "FUNCTION",
    LET = "LET",
    CONST = "CONST",
}

type TokenTable = { [index: string] : TokenType }

export const OPERATORS: TokenTable = {
    "+": TokenType.ADD,
    "-": TokenType.SUB,
    "*": TokenType.MUL,
    "/": TokenType.DIV,
    "%": TokenType.MOD,
    "=": TokenType.ASSIGN,
}

export const PUNCTUATIONS: TokenTable = {
    ",": TokenType.COMMA,
    "\n": TokenType.NEWLINE,
    "(": TokenType.LPAREN,
    ")": TokenType.RPAREN,
    "{": TokenType.LBRACE,
    "}": TokenType.RBRACE

}

export const KEYWORDS: TokenTable = {
    "fn": TokenType.FUNCTION,
    "let": TokenType.LET,
    "const": TokenType.CONST
}

export class Token {
    type: TokenType
    literal: string
    
    constructor(literal: string, type: TokenType) {
        this.literal = literal
        this.type = type
    }

    // detects and constructs a token based on the literal being passed.
    static fromLiteral(literal: string) {

            if(literal === "") {
                return new Token("EOF", TokenType.EOF)
            }

            const ops = OPERATORS[literal]
            if(ops) {
                return new Token(literal, ops)
            }

            const p = PUNCTUATIONS[literal]
            if(p) {
                return new Token(literal, p)
            }
            const kw = KEYWORDS[literal]
            if (kw) {
                return new Token(literal, kw)
            }
            
            if(/^\d*[.]\d+$/.test(literal)) {
                return new Token(literal, TokenType.FLOAT)
            }

            if(/^\d+$/.test(literal)) {
                return new Token(literal, TokenType.INT)
            }

            if(/^[a-z][a-zA-Z0-9_]*$/.test(literal)) {
                return new Token(literal, TokenType.IDENTIFIER)
            }
            return new Token(literal, TokenType.ILLEGAL)
        // }
    }
}
