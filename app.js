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
function caso3(){
  let net, decimales=[], password ='';
  net = " ElPassEs: 01110010_01101001_01110111_01101001";
  net = net.trim().split(' ')[1];
  net= net.split('_');
  function binaryToDecimal(value){
    let decimal=0, values;
    values = value.split('').reverse()
    for (let index = 0; index < values.length; index++) {
      decimal+=parseFloat(values[index])*(2**(index))
    }
    return decimal;
  }
  net.forEach(element => {
    decimales.push(binaryToDecimal(element));
  });
  decimales.forEach(element=>{
    password+=`${String.fromCharCode(element)}`;
  });
  hildebrandoCash-=50000;
  console.log(`Son las 2 am y tu vuelo hacia Macondo sale a las 3 am. Te vas a conectar a la red del aeropuesto: \n\nElPassEs: 01110010_01101001_01110111_01101001 \n\nLa cual tiene la clave codificada en binarios \n\nComo asistente paso los binarios a decimales y obtengo: ${decimales}, codificandolo a ACSII la clave del wifi es: ${password}`);
  console.log(`El aeropuerto te ha cobrado $50.000 por el tiempo de conexión wifi. \n\nTu saldo actual es ${hildebrandoCash}`);
  alert(`Son las 2 am y tu vuelo hacia Macondo sale a las 3 am. Te vas a conectar a la red del aeropuesto: \n\nElPassEs: 01110010_01101001_01110111_01101001 \n\nLa cual tiene la clave codificada en binarios \n\nComo asistente paso los binarios a decimales y obtengo: ${decimales}, codificandolo a ACSII la clave del wifi es: ${password}`)
  alert(`El aeropuerto te ha cobrado $50.000 por el tiempo de conexión wifi. \n\nTu saldo actual es ${hildebrandoCash}`)
  return hildebrandoCash;
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
  } else {
    alert(`El juego ha finalizado. Recarga la pàgina para volver a iniciar`);
  }
}
menu();
