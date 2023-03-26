class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculadora = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "*",
      dividir: "/",
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  agregarNumero(numero) {
    //Se verifica que no haya más de un punto decimal
    if (numero === "." && this.valorActual.includes(".")) return;
    //Se agregan los números ingresados al valor actual
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    //Se asigna el valor actual
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    /*Convertimos los valores en float */
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    /*Si alguno de los valores no es un numero, se devuelve*/
    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    /*Se calcula con el tipo de operación pasado y los valores anterior y actual */
    this.valorActual = this.calculadora[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
    this.imprimirValores();
  }

  computar(tipo) {
    /*Comprobamos si la operación anterior es distinto del operador igual y calculamos*/
    this.tipoOperacion !== "igual" && this.calcular();
    /*Se asigna el tipo de operador seleccionado*/
    this.tipoOperacion = tipo;
    //Asigna el valor anterior como el valor actual si el valor actual es nulo o vacio
    this.valorAnterior = this.valorActual || this.valorAnterior;
    //Reiniciamos el valor actual
    this.valorActual = "";
    this.imprimirValores();
  }
}
