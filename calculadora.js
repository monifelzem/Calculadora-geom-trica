function calcular_area_triangulo() {
  const base = prompt("Insira a base do triangulo abaixo: ");
  const altura = prompt("Insira a altura do triangulo abaixo: ");
  return (base * altura) / 2;
}
function calcular_area_retangulo() {
  const base = prompt("Insira a base do retangulo abaixo: ");
  const altura = prompt("Insira a altura do retangulo abaixo: ");
  return base * altura;
}
function calcular_area_quadrado() {
  const lado = prompt("Insira o tamanho do lado do quadrado abaixo: ");
  return lado * lado;
}
function calcular_area_trapezio() {
  const baseMaior = parsefloat(
    prompt("Insira a base maior do trapezio abaixo: ")
  );
  const baseMenor = parseFloat(
    prompt("Insira a base menor do trapezio abaixo: ")
  );
  return ((baseMaior + baseMenor) * altura) / 2;
}
function calcular_area_circulo() {
  const raio = prompt("Insira o raio do círculo abaixo: ");
  return 3.14 * raio * raio;
}
function exibir_menu() {
  return prompt(
    "Calculadora Geométrica: \n" +
      "1.Calcular area do triangulo\n" +
      "2.Calcular area do retangulo\n" +
      "3. Calcular area do quandrado\n" +
      "4.Calcular area do trapezio\n" +
      "5. Calcular area do circulo\n" +
      "6. Sair"
  );
}

function executar() {
  opcao = "";
  do {
    opcao = exibir_menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcular_area_triangulo();
        break;
      case "2":
        resultado = calcular_area_retangulo();
        break;
      case "3":
        resultado = calcular_area_quadrado();
        break;
      case "4":
        resultado = calcular_area_trapezio();
        break;
      case "5":
        resultado = calcular_area_circulo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida");
        break;
    }
    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== 6);
}

executar();
