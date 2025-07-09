const fs = require("fs");
const syntaxes = {
    name: "Elex",
    scopeName: "source.elex",
    patterns: [
        // 匹配注释
        {
            name: "comment.line.double-slash.elex",
            match: "//.*$"
        },
        {
            name: "comment.block.elex",
            begin: "/\\*",
            end: "\\*/"
        },
        // 匹配关键字
        {
            name: "keyword.control.elex",
            match: "\\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|let|new|null|return|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\\b"
        },
        // 匹配字符串
        {
            name: "string.quoted.double.elex",
            begin: "\"",
            end: "\"",
            patterns: [
                {
                    name: "constant.character.escape.elex",
                    match: "\\\\."
                }
            ]
        },
        {
            name: "string.quoted.single.elex",
            begin: "'",
            end: "'",
            patterns: [
                {
                    name: "constant.character.escape.elex",
                    match: "\\\\."
                }
            ]
        },
        {
            name: "string.quoted.backtick.elex",
            begin: "`",
            end: "`",
            patterns: [
                {
                    name: "constant.character.escape.elex",
                    match: "\\\\."
                },
                {
                    name: "meta.embedded.expression.elex",
                    begin: "\\$\\{",
                    end: "\\}",
                    patterns: [
                        { include: "$self" }
                    ]
                }
            ]
        },
        // 匹配数字
        {
            name: "constant.numeric.elex",
            match: "\\b(0[xX][0-9a-fA-F]+|0[oO][0-7]+|0[bB][01]+|\\d*\\.?\\d+([eE][+-]?\\d+)?)\\b"
        },
        // 匹配布尔值和 null
        {
            name: "constant.language.elex",
            match: "\\b(true|false|null)\\b"
        },
        // 匹配正则表达式
        {
            name: "string.regexp.elex",
            begin: "/(?![\\s\\*])",
            end: "/[gimyu]*",
            patterns: [
                {
                    name: "constant.character.escape.elex",
                    match: "\\\\."
                }
            ]
        }
    ]
};

fs.writeFileSync("syntaxes/elex.tmLanguage.json",JSON.stringify(syntaxes));