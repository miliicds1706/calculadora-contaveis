function calcularIR() {
    const salarioBase = parseFloat(document.getElementById("salario").value)
    let ir = 0

    if (salarioBase < 5000) {
        ir = 0
    } else if (salarioBase >= 5000 && salarioBase <= 7350) {
        let reducao = 978.62 - (0.13314 * salarioBase)
        ir = salarioBase * 0.275 - 908.73 - reducao
    } else {
        ir = salarioBase * 0.275 - 908.73
    }

    document.getElementById("resultado").textContent = "IR: R$ " + ir.toFixed(2)
}

button.addEventListener("click", calcularIR)