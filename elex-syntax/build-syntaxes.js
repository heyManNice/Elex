const { match } = require("assert");
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
            match: "import|from|function|&|#|@|\\[|\\]"
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
            match: "[0-9]+"
        },
        // 匹配布尔值和 null
        {
            name: "constant.language.elex",
            match: "(true|false|null)"
        },
        //匹配函数
        {
            name: "entity.name.function.elex",
            // 仅匹配函数名，使用正向预查确保后面有左括号
            match: "[a-zA-Z_][a-zA-Z0-9_]*(?=\\()"
        },
        //匹配变量名
        {
            name: "variable.other.elex",
            // 匹配 # 或 & 后紧跟的合法变量名，不包含 # 和 &
            match: "(?<=#|&)[a-zA-Z_][a-zA-Z0-9_]*"
        },
        {
            name: "entity.name.tag.html",
            // 匹配 < 开头，> 结尾，中间包含任意字符的标签
            match: "<.+? |<.+?>|>"
        },
        {
            name: "entity.name.function.elex",
            match: "[a-zA-Z_][a-zA-Z0-9_]*:"
        },
        //占位符
        {
            name: "constant.other.placeholder.elex",
            match: "%[ds]"
        },
        //匹配括号
        {
            name: "punctuation.definition.bracket.elex",
            match: "\\(|\\)"
        }
    ]
};

fs.writeFileSync("syntaxes/elex.tmLanguage.json", JSON.stringify(syntaxes));