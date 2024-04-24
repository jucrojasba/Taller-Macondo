/*Workshop in JavaScript
by Juan Camilo Rojas Barrientos
a proud member of Clan Ritchie
*/

let hildebrandoDecision, hildebrandoCash;

function validateNumber(hildebrandoDecision) {
  const validateNumber = /\d/;
  return validateNumber.test(hildebrandoDecision);
}
function caso1() {
  while (true) {
    hildebrandoDecision = prompt(
      `Acabas de llegar al aereopuerto el Dorado, tu vuelo hacia Macondo tiene una escala en Medellin. \n\n¿Deseas comprar algo para comer? \n\n1. Comprar una almohabana con gaseosa (precio $15.000) \n\n2. Comprar un subway con gaseosa (precio $23.000) \n\n3. No compras nada \n\nEscribe 1, 2 o 3 para selecionar una opciòn`
    );
    switch (hildebrandoDecision) {
      case "1":
        hildebrandoCash -= 15000;
        console.log(
          `Lo sentimos la almohabana te cayo mal. \n\nTu saldo actual es $${hildebrandoCash} \n\nGastaste $15000`
        );
        alert(
          `Lo sentimos la almohabana te cayo mal. \n\nTu saldo actual es $${hildebrandoCash} \n\nGastaste $15000`
        );
        return hildebrandoCash;
      case "2":
        hildebrandoCash = -23000;
        console.log(
          `El subway te dejo llenito y bien. \n\nTu saldo actual es $${hildebrandoCash} \n\nGastaste $23000`
        );
        alert(
          `El subway te dejo llenito y bien. \n\nTu saldo actual es $${hildebrandoCash} \n\nGastaste $23000`
        );
        return hildebrandoCash;
      case "3":
        hildebrandoCash -= 18000;
        console.log(
          `Tuviste que comprar algo al llegar a Medellìn porque no aguantaste el hambre. \n\nTu saldo actual es $${hildebrandoCash} \n\nGastaste $18000`
        );
        alert(
          `Tuviste que comprar algo al llegar a Medellìn porque no aguantaste el hambre. \n\nTu saldo actual es $${hildebrandoCash} \n\nGastaste $18000`
        );
        return hildebrandoCash;
      default:
        alert(`Opciòn invàilda. Porfavor ingresa una opciòn vàlida`);
        continue;
    }
  }
}
function caso2() {
}
function menu() {
  hildebrandoCash = 2500000; // dinero que Hildebrando puede utilizar en su viaje
  hildebrandoDecision = confirm(
    `Hola Hildebrando, soy tu asistente y te acompañarè durante tu viaje y estancia en Macondo.\n\nAcabas de recibir tu salario por $${hildebrandoCash}, ten en cuenta que esto es lo ùnico que puedes gastar durante tu viaje. \n\n¿Deseas iniciar tu viaje?`
  );
  if (hildebrandoDecision) {
    caso1();
  } else {
    alert(`El juego ha finalizado. Recarga la pàgina para volver a iniciar`);
  }
}
menu();
