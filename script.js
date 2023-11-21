function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function calcularPrecoOperadoraA(idade, imc) {
    return {
        basico: 100 + (idade * 10 * (imc / 10)),
        standard: (150 + (idade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10)
    };
}

function calcularPrecoOperadoraB(idade, imc) {
    let fatorComorbidade;
    if (imc < 18.5) fatorComorbidade = 10;
    else if (imc >= 18.5 && imc <= 24.9) fatorComorbidade = 1;
    else if (imc >= 25 && imc <= 29.9) fatorComorbidade = 6;
    else if (imc >= 30 && imc <= 39.9) fatorComorbidade = 10;
    else if (imc >= 40 && imc <= 49.9) fatorComorbidade = 20;
    else fatorComorbidade = 30;

    return {
        basico: 100 + (fatorComorbidade * 10 * (imc / 10)),
        standard: (150 + (fatorComorbidade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10)
    };
}

function calcularPlanos() {
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = calcularIMC(peso, altura);
    const precosA = calcularPrecoOperadoraA(idade, imc);
    const precosB = calcularPrecoOperadoraB(idade, imc);

    const resultadoHTML = `
        <h2>Resultados</h2>
        <table>
            <tr>
                <th>Plano</th>
                <th>Operadora A</th>
                <th>Operadora B</th>
            </tr>
            <tr>
                <td>Básico</td>  
                <td>${precosA.basico.toFixed(2)}</td>
                <td>${precosB.basico.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Standard</td>
                <td>${precosA.standard.toFixed(2)}</td>
                <td>${precosB.standard.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Premium</td>
                <td>${precosA.premium.toFixed(2)}</td>
                <td>${precosB.premium.toFixed(2)}</td>
            </tr>
        </table>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}