export class Token {
    type: TokenType
    literal: string
    
    constructor(literal: string, type: TokenType) {
        this.literal = literal
        this.type = type
    }

    // detects and constructs a token based on the literal being passed.
    static fromLiteral(literal: string) {
        switch (literal) {
            case '=':
                return new Token(literal, TokenType.ASSIGN)
            case '\n':
                return new Token(literal, TokenType.NEWLINE)
            case '(':
                return new Token(literal, TokenType.LPAREN)
            case ')':
                return new Token(literal, TokenType.RPAREN)
            case ',':
                return new Token(literal, TokenType.COMMA)
            case '+':
                return new Token(literal, TokenType.ADD)
            case '-':
                return new Token(literal, TokenType.SUB)
            case '*':
                return new Token(literal, TokenType.MUL)
             case '/':
                return new Token(literal, TokenType.DIV)
            case '%':
                return new Token(literal, TokenType.MOD)
            case '{':
                return new Token(literal, TokenType.LBRACE)
            case '}':
                return new Token(literal, TokenType.RBRACE)
            case '':
                return new Token("EOF", TokenType.EOF)
            default:
                if(literal === 'let') {
                    return new Token(literal, TokenType.LET)
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
        }
    }
}

export enum TokenType {
    ILLEGAL = "ILLEGAL",
    EOF = "EOF",
    INT = "INT",
    FLOAT = "FLOAT",
    STRING = "STRING",
    IDENTIFIER = "IDENTIFIER",
    ADD = "ADD",
    SUB = "SUB",
    MUL = "MUL",
    DIV = "DIV",
    MOD = "MOD",
    ASSIGN = "ASSIGN",
    COMMA = "COMMA",
    NEWLINE = "NEWLINE",
    LPAREN = "LPAREN",
    RPAREN = "RPAREN",
    LBRACE = "LBRACE",
    RBRACE = "RBRACE",
    FUNCTION = "FUNCTION",
    LET = "LET",
    CONST = "CONST",
}