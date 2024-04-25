/*Workshop in JavaScript
by Juan Camilo Rojas Barrientos
a proud member of Clan Ritchie
*/

let hildebrandoDecision, hildebrandoCash;
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
        hildebrandoCash -= 23000;
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
  let factorDeReduccion;
  const altoPermitido = 55;
  const largoPermitido = 40;
  const anchoPermitido = 20;
  const altoOriginal = 60;
  const largoOriginal = 40;
  const anchoOriginal = 20;
  factorDeReduccion = [
    altoPermitido / altoOriginal,
    largoPermitido / largoOriginal,
    anchoPermitido / anchoOriginal,
  ];
  factorDeReduccion = Math.min(...factorDeReduccion);
  const nuevoAlto = altoOriginal * factorDeReduccion;
  const nuevoLargo = largoOriginal * factorDeReduccion;
  const nuevoAncho = anchoOriginal * factorDeReduccion;
  console.log(
    `Al llegar a la sala de espera en Medellin te das cuenta que la aerolinea que viaja a ⭐ 🛩 Macondo 🛩 ⭐ tiene una politica de equipaje de ${altoPermitido}cm (alto), ${largoPermitido}cm (largo) y ${anchoPermitido}cm (ancho) \n\n-Tu equipaje mide ${altoOriginal}cm (alto), ${largoOriginal}cm (largo) y ${anchoOriginal}cm (ancho) \n\n-Tuvimos que determinar un factor de reducciòn de ${factorDeReduccion.toFixed(
      2
    )} para que tu maleta cumpla con las politicas de equipaje de la aerolinea \n\n-Tus nuevas medidas de equipaje son ${nuevoAlto.toFixed(
      2
    )}cm (alto), ${nuevoLargo.toFixed(2)}cm (largo) y ${nuevoAncho.toFixed(
      2
    )}cm (ancho) \n\n-Tuviste que sacar de tu maleta ${(
      altoOriginal * anchoOriginal * largoOriginal -
      nuevoAlto * nuevoAncho * nuevoLargo
    ).toFixed(2)}cm³ equivalente a 2 sacos que te pusiste encima`
  );
  alert(
    `Al llegar a la sala de espera en Medellin te das cuenta que la aerolinea que viaja a ⭐ 🛩 Macondo 🛩 ⭐ tiene una politica de equipaje de ${altoPermitido}cm (alto), ${largoPermitido}cm (largo) y ${anchoPermitido}cm (ancho) \n\n-Tu equipaje mide ${altoOriginal}cm (alto), ${largoOriginal}cm (largo) y ${anchoOriginal}cm (ancho) \n\n-Tuvimos que determinar un factor de reducciòn de ${factorDeReduccion.toFixed(
      2
    )} para que tu maleta cumpla con las politicas de equipaje de la aerolinea \n\n-Tus nuevas medidas de equipaje son ${nuevoAlto.toFixed(
      2
    )}cm (alto), ${nuevoLargo.toFixed(2)}cm (largo) y ${nuevoAncho.toFixed(
      2
    )}cm (ancho) \n\n-Tuviste que sacar de tu maleta ${(
      altoOriginal * anchoOriginal * largoOriginal -
      nuevoAlto * nuevoAncho * nuevoLargo
    ).toFixed(2)}cm³ equivalente a 6 sacos que te pusiste encima`
  );
}
function caso3() {
  let net,
    decimales = [],
    password = "";
  net = " ElPassEs: 01110010_01101001_01110111_01101001";
  net = net.trim().split(" ")[1];
  net = net.split("_");
  function binaryToDecimal(value) {
    let decimal = 0,
      values;
    values = value.split("").reverse();
    for (let index = 0; index < values.length; index++) {
      decimal += parseFloat(values[index]) * 2 ** index;
    }
    return decimal;
  }
  net.forEach((element) => {
    decimales.push(binaryToDecimal(element));
  });
  decimales.forEach((element) => {
    password += `${String.fromCharCode(element)}`;
  });
  hildebrandoCash -= 50000;
  console.log(
    `Son las 2 am y tu vuelo hacia Macondo sale a las 3 am. Te vas a conectar a la red del aeropuesto: \n\nElPassEs: 01110010_01101001_01110111_01101001 \n\nLa cual tiene la clave codificada en binarios \n\nComo asistente paso los binarios a decimales y obtengo: ${decimales}, codificandolo a ACSII la clave del wifi es: ${password}`
  );
  console.log(
    `El aeropuerto te ha cobrado $50.000 por el tiempo de conexión wifi. \n\nTu saldo actual es $${hildebrandoCash}`
  );
  alert(
    `Son las 2 am y tu vuelo hacia Macondo sale a las 3 am. Te vas a conectar a la red del aeropuesto: \n\nElPassEs: 01110010_01101001_01110111_01101001 \n\nLa cual tiene la clave codificada en binarios \n\nComo asistente paso los binarios a decimales y obtengo: ${decimales}, codificandolo a ACSII la clave del wifi es: ${password}`
  );
  alert(
    `El aeropuerto te ha cobrado $50.000 por el tiempo de conexión wifi. \n\nTu saldo actual es $${hildebrandoCash}`
  );
  return hildebrandoCash;
}
function caso4() {
  const originalExpresion = "Taxi me puede llevar al hotel mariposas amarillas";
  const traslateExpresion = originalExpresion.replace(/[aeiou]/g, "i");
  console.log(
    `Acabas de llegar a Macondo y te das cuenta que todos hablan diferente y necesitas pedir un taxi. \n\nLa expresión \n"${originalExpresion}" \n\nTraducida al Macondiano es \n"${traslateExpresion}"`
  );
  alert(
    `Acabas de llegar a Macondo y te das cuenta que todos hablan diferente y necesitas pedir un taxi. \n\nLa expresión \n"${originalExpresion}" \n\nTraducida al Macondiano es \n"${traslateExpresion}"`
  );
}
function caso5() {
  const game = ["piedra", "papel", "tijera"];
  let message;
  let hildebrandoPlayer = game[Math.floor(Math.random() * 3)];
  let taxistaPlayer = game[Math.floor(Math.random() * 3)];
  switch (true) {
    case hildebrandoPlayer == "piedra" && taxistaPlayer == "tijera":
      message = `Ganaste, no debes de pagar $300.000`;
      break;
    case hildebrandoPlayer == "piedra" && taxistaPlayer == "papel":
      message = `Perdiste, debes de pagar $300.000`;
      hildebrandoCash -= 300000;
      break;
    case hildebrandoPlayer == "papel" && taxistaPlayer == "tijera":
      message = `Perdiste, debes de pagar $300.000`;
      hildebrandoCash -= 300000;
      break;
    case hildebrandoPlayer == "papel" && taxistaPlayer == "piedra":
      message = `Ganaste, no debes de pagar $300.000`;
      break;
    case hildebrandoPlayer == "tijera" && taxistaPlayer == "piedra":
      message = `Perdiste, debes de pagar $300.000`;
      hildebrandoCash -= 300000;
      break;
    case hildebrandoPlayer == "tijera" && taxistaPlayer == "papel":
      message = `Ganaste, no debes de pagar $300.000`;
      break;
    default:
      message = `Empataste, entonces no pasa nada`;
      break;
  }
  alert(
    `Al llegar al hotel el taxista te cobra $300.000. Quedas impresionado y decides jugar piedra, papel o tijera con el taxista. En caso de que ganes o empates no pagaras la carrera.\n\nSorpresa! Tu sacaste: ${hildebrandoPlayer} y el taxista saco: ${taxistaPlayer}.\n\n${message}. Tu saldo es $${hildebrandoCash}`
  );
  console.log(
    `Al llegar al hotel el taxista te cobra $300.000. Quedas impresionado y decides jugar piedra, papel o tijera con el taxista. En caso de que ganes o empates no pagaras la carrera.\n\nSorpresa! Tu sacaste: ${hildebrandoPlayer} y el taxista saco: ${taxistaPlayer}.\n\n${message}. Tu saldo es $${hildebrandoCash}`
  );
  return hildebrandoCash;
}
function caso6() {
  let activitiesDecision,
    message,
    daysOnVacation = 0,
    flag1 = true,
    flag2,
    expense = 2500000 - hildebrandoCash;
  while (flag1 && daysOnVacation < 4) {
    hildebrandoDecision = prompt(
      "En el hotel notas que hay una codigo de vestimenta para cada actividad \n\n1. Amarillo para ir a la piscina \n2. Verde para caminatas \n3. Rojo para actividades de playa \n4. Azul para actividades dentro del hotel \n\n¿Còmo deseas vestir hoy? Escribe 1, 2, 3, o 4: "
    );
    switch (hildebrandoDecision) {
      case "1":
        flag2 = true;
        while (flag2) {
          activitiesDecision = prompt(
            "Felicidades! Decidiste vestir amarillo para ir a la pisicina. Puedes decidir entre las siguientes actividades: \n\n1. Meterte a la piscina \n2. Broncearte y no meterte a la piscina \n\n¿Que deseas hacer? Escribe 1 o 2:"
          );
          switch (activitiesDecision) {
            case "1":
              message = `Lo sentimos, al meterte a la piscina comenzaste a sentirte ahogado por el exceso de cloro y moriste. Las vacaciones han terminado`;
              daysOnVacation++;
              flag1 = false;
              flag2 = false;
              break;
            case "2":
              message = `La pasaste super bien en tu dia de piscina`;
              daysOnVacation++;
              flag2 = false;
              break;

            default:
              alert(`Opciòn invàlida, porfavor ingresa una opciòn vàlida`);
              break;
          }
        }
        alert(
          `${message}\n\nDìas en Macondo: ${daysOnVacation} \n\nTu saldo es: $${hildebrandoCash}\n\n Tus gastos son: $${
            2500000 - hildebrandoCash
          }`
        );
        break;
      case "2":
        flag2 = true;
        while (flag2) {
          activitiesDecision = prompt(
            "Felicidades! Decidiste vestir verde para ir a la caminata. Mientras caminabas te sentiste cansado. Puedes decidir entre las siguientes actividades: \n\n1. Devolverte para el hotel \n2. Continuar con la caminara \n\n¿Que deseas hacer? Escribe 1 o 2:"
          );
          switch (activitiesDecision) {
            case "1":
              message = `Lo sentimos, al devolverte para el hotel solo, te perdiste de noche. Las vacaiones no finalizan pero pierdes este dìa regresando al hotel. La caminata te costo $120.000`;
              daysOnVacation++;
              expense += 120000;
              hildebrandoCash -= expense;
              flag2 = false;
              break;
            case "2":
              message = `La pasaste super bien, llegaste a una cascada y te tomaste fotos divinas! La caminata te costo $120.000`;
              daysOnVacation++;
              expense += 120000;
              hildebrandoCash -= expense;
              flag2 = false;
              break;

            default:
              alert(`Opciòn invàlida, porfavor ingresa una opciòn vàlida`);
              break;
          }
        }
        alert(
          `${message}\n\nDìas en Macondo: ${daysOnVacation} \n\nTu saldo es: $${hildebrandoCash}\n\n Tus gastos son: $${expense}`
        );
        break;
      case "3":
        flag2 = true;
        while (flag2) {
          activitiesDecision = prompt(
            "Felicidades! Decidiste vestir de rojo para ir a la playa. Puedes decidir entre las siguientes actividades: \n\n1. Voleibol \n2. Nadar en el mar \n3. Tomar cocteles \n\n¿Que deseas hacer? Escribe 1, 2 o 3:"
          );
          switch (activitiesDecision) {
            case "1":
              message = `Felicidades, la pasaste super rico jugando voleibol. El alquiler de la malla te costo $80.000`;
              daysOnVacation++;
              expense += 80000;
              hildebrandoCash -= expense;
              flag2 = false;
              break;
            case "2":
              message = `Felicidades! La pasaste super rico nadando en el mar y ademàs montaste en moto. El alquiler de la moto te costo $200.000`;
              daysOnVacation++;
              expense += 200000;
              hildebrandoCash -= expense;
              flag2 = false;
              break;
            case "3":
              message = `Los cocteles costaron $60.000 \n\nLo sentimos, al tomar los cocteles te dio un fuerte dolor de cabeza y comienzas a perder la visiòn ¡Chirrinchi adulterado!. Te devolviste para Bogotà de emergencia y las vacaciones han terminado 😞`;
              daysOnVacation++;
              expense += 60000;
              hildebrandoCash -= expense;
              flag1 = false;
              flag2 = false;
              break;

            default:
              alert(`Opciòn invàlida, porfavor ingresa una opciòn vàlida`);
              break;
          }
        }
        alert(
          `${message}\n\nDìas en Macondo: ${daysOnVacation} \n\nTu saldo es: $${hildebrandoCash}\n\n Tus gastos son: $${expense}`
        );
        break;
      case "4":
        flag2 = true;
        while (flag2) {
          activitiesDecision = prompt(
            "Felicidades! Decidiste vestir de azul para realizar actividades dentro del hotel. Puedes decidir entre las siguientes actividades: \n\n1. Bingo \n2. Bailar \n3. Casino y apuesta \n\n¿Que deseas hacer? Escribe 1, 2 o 3:"
          );
          switch (activitiesDecision) {
            case "1":
              message = `Felicidades, ganaste $1'000.000 en el bingo.`;
              hildebrandoCash += 1000000;
              daysOnVacation++;
              flag2 = false;
              break;
            case "2":
              message = `Felicidades! Bailaste y la pasaste muy bien`;
              daysOnVacation++;
              flag2 = false;
              break;
            case "3":
              expense = hildebrandoCash * 0.9;
              hildebrandoCash -= expense;
              message = `Lo sentimos, perdiste $${expense} solo te quedò para el pasaje de regeso. Las vacaciones han terminado`;
              daysOnVacation++;
              flag1 = false;
              flag2 = false;
              break;

            default:
              alert(`Opciòn invàlida, porfavor ingresa una opciòn vàlida`);
              break;
          }
        }
        alert(
          `${message}\n\nDìas en Macondo: ${daysOnVacation} \n\nTu saldo es: $${hildebrandoCash}\n\n Tus gastos son: $${expense}`
        );
        break;
      default:
        alert("Opciòn invàlida, porfavor ingresa una opciòn vàlida");
        break;
    }
  }
  if (daysOnVacation == 4) {
    alert(
      `Han pasado 4 dìas y tus vacaciones han terminado\n\nTu saldo es: $${hildebrandoCash}\n\n Tus gastos son: $${expense} \n\nFin del juego!!`
    );
  } else {
    alert(
      `Fin del juego!!! \n\nDìas en Macondo: ${daysOnVacation} \n\nTu saldo es: $${hildebrandoCash}\n\n Tus gastos son: $${expense}`
    );
  }
}
function menu() {
  hildebrandoCash = 2500000; // dinero que Hildebrando puede utilizar en su viaje
  hildebrandoDecision = confirm(
    `Hola Hildebrando, soy tu asistente y te acompañarè durante tu viaje y estancia en Macondo.\n\nAcabas de recibir tu salario por $${hildebrandoCash}, ten en cuenta que esto es lo ùnico que puedes gastar durante tu viaje. \n\n¿Deseas iniciar tu viaje?`
  );
  if (hildebrandoDecision) {
    caso1();
    caso2();
    caso3();
    caso4();
    caso5();
    caso6();
  } else {
    alert(`El juego ha finalizado. Recarga la pàgina para volver a iniciar`);
  }
}

menu();
