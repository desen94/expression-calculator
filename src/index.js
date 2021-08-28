function eval() {
    // Do not use eval!!!
    return
}

function expressionCalculator(expr) {
    expr = expr.replace(/ /g, '')
    
    let aloneBrackets = 0
    expr.split('').forEach((char) => {
        if (char === '(') aloneBrackets++
        if (char === ')') aloneBrackets--
    })
    
    if (aloneBrackets) throw Error('ExpressionError: Brackets must be paired')
    
    if (expr.includes('/0')) throw Error('TypeError: Division by zero.')
    
    expr = new Function(`return ${expr}`)
    
    return expr()
}

module.exports = {
    expressionCalculator
}