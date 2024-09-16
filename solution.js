const jsonString = `{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}`;

const jsonData = JSON.parse(jsonString);

function decodeYValue(base, value) {
    let decimalValue = 0;
    let power = 0;
    for (let i = value.length - 1; i >= 0; i--) {
        decimalValue += parseInt(value[i]) * Math.pow(parseInt(base), power);
        power++;
    }
    return decimalValue;
}

const roots = [];
for (const key in jsonData) {
    if (key !== "keys") {
        const x = parseInt(key);
        const base = jsonData[key].base;
        const value = jsonData[key].value;
        const y = decodeYValue(base, value);
        roots.push([x, y]);
    }
}

function lagrangeInterpolation(roots) {
    const n = roots.length;
    const polynomial = [];
    for (let i = 0; i < n; i++) {
        let numerator = 1;
        let denominator = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                numerator *= `x - ${roots[j][0]}`;
                denominator *= roots[i][0] - roots[j][0];
            }
        }
        polynomial.push(`${numerator} / ${denominator}`);
    }
    return polynomial;
}

const polynomial = lagrangeInterpolation(roots);

function evaluatePolynomial(polynomial, x) {
    let result = 0;
    for (let i = 0; i < polynomial.length; i++) {
        let term = polynomial[i].replace(/x/g, `*${x}`);
        result += eval(term);
    }
    return result;
}

const c = evaluatePolynomial(polynomial, 0);
console.log(`The constant term c is: ${c}`);
