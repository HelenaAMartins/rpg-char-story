const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log();
  const char = document.querySelector("#name").value;
  const species = document.querySelector("#species").value;
  let images = [];
  let hSpecies = "";
  let strSpeciesFull = "";

  switch (species) {
    case "zumbi":
      hSpecies = "Zumbi";
      strSpeciesFull = "Zumbis, criaturas amantes de churrasco fresco (preferem vivos, ainda se mexendo)";
      images.push(
        "./img/zumbi1.jpg"
      );
      images.push("./img/zumbi2.jpg");
      images.push("./img/zumbi3.jpg");
      images.push("./img/zumbi4.jpg");
      images.push(
        "./img/zumbi5.jpg"
      );

      break;
    case "orc":
      hSpecies = "Orc";
      strSpeciesFull = "Orcs, criaturas fortes, mas leais.";
      images.push("./img/orc1.jpg");
      images.push(
        "./img/orc2.jpg"
      );
      images.push(
        "./img/orc3.jpg"
      );
      images.push(
        "./img/orc4.jpg"
      );
      images.push("./img/orc5.jpg");
      break;
    case "human":
      hSpecies = "Humano";
      strSpeciesFull = "Humanos, as mais gananciosas criaturas já vistas.";
      images.push(
        "./img/human1.jpg"
      );
      images.push(
        "./img/human2.jpg"
      );
      images.push("./img/human3.jpg");
      images.push(
        "./img/human4"
      );
      images.push("./img/human5.jpg");
      break;
    case "goblin":
      hSpecies = "Goblin";
      strSpeciesFull = "Goblins, criaturinhas perspicazes";
      images.push(
        "./img/goblin1.jpg"
      );
      images.push("./img/goblin2.jpg");
      images.push(
        "./img/goblin3.jpg"
      );
      images.push(
        "./img/goblin4.jpg"
      );
      images.push(
        "./img/goblin5.jpg"
      );
      break;
  }
  const classes = document.querySelector("#classes").value;
  let hClasses = "";
  let strClassesFull = "";

  switch (classes) {
    case "priest":
      hClasses = "Padre";
      strClassesFull = "um padre que adora um vinhozinho com pão Sírio";
      break;
    case "cang":
      hClasses = "Cangaceiro";
      strClassesFull = "Cangaceiro, cabra valente";
      break;
    case "rogue":
      hClasses = "Afanador";
      strClassesFull = "Afanador que adora uma muvuca";
      break;
    case "shaman":
      hClasses = "Pajé";
      strClassesFull = "Pajé, com suas mandingas";
      break;
  }

  const weapon = document.querySelector("#weapon").value;
  let hWeapon = "";
  let strWeaponFull = "";

  switch (weapon) {
    case "knife":
      hWeapon = "Amansa Bicho";
      strWeaponFull =
        "A Pexeira mais enferrujada já vista. Se não matar do corte, mata de tétano";
      break;
    case "slingshot":
      hWeapon = "Toma de longe";
      strWeaponFull = "Um Slingshot";
      break;
    case "axe":
      hWeapon = "Vai de Novo";
      strWeaponFull = "Um machado herdado do seu pai, explorador de minas";
      break;
    case "wand":
      hWeapon = "Cambito";
      strWeaponFull = "Uma varinha feita de bambu e pena de Urubu";
      break;
  }

  const place = document.querySelector("#place").value;
  let hPlace = "";
  let strPlaceFull = "";

  switch (place) {
    case "january":
      hPlace = "January River";
      strPlaceFull = "January River, onde o perigo está sempre à espreita";
      break;
    case "underworld":
      hPlace = "Submundo";
      strPlaceFull =
        "Frog Hole, onde todas parecem hipnotizados pelas relíquias ali expostas";
      break;
    case "sobral":
      hPlace = "Sobral";
      strPlaceFull = "Sobral, onde há um sol para cada um";
      break;
    case "piripiri":
      hPlace = "Piripiri";
      strPlaceFull =
        "Piripiri, Grande produtor de hidromel, poção que dava super força aos seus habitantes";
      break;
  }

  const accident = document.querySelector("#accident").value;
  let hAccident = "";
  let strAccidentFull = "";

  switch (accident) {
    case "eclipse":
      hAccident = "Eclipse Eterno";
      strAccidentFull = "O Eclipse eterno, quando o sol sumiu de vez";
      break;
    case "eruption":
      hAccident = "Erupção Vulcânica";
      strAccidentFull = "A Maior Erupção vulcânica que destruiu parte de seu mundo";
      break;
    case "timeFissure":
      hAccident = "Fissura no Tempo";
      strAccidentFull =
        "Uma fissura que permitiu locomoção no passado e futuro";
      break;
    case "worldFissure":
      hAccident = "Fissura nos Mundos";
      strAccidentFull =
        "Uma fissura que permitiu locomoção de seres em diferentes mundos";
      break;
  }
  const today = new Date();
  const year = today.getFullYear();
  document.querySelector(".form").setAttribute("style", "display:none");
  const txt = `Senta que lá vem a história: Vou contar-lhes como começou a história de ${char}, 
  mais ilustre  ${hClasses} de todos os mundos conhecidos até agora. Em ${year} houve um terrível acidente 
  que mudou pra sempre a vida dos seres dos 7 mundos. Na verdade, houve ${strAccidentFull}. Da relativa paz em que ${char}, 
  vivia, seu destino começava aí a mudar, trazendo a primeira de muitas aventuras (e desventuras). ${char}, ${hSpecies}, 
  acreditava ser o último de sua espécie. Na verdade, a partir do acidente, conheceu muitos outros ${strSpeciesFull}. 
  Se juntou a eles para explorar o que lhe foi negado. O primeiro passo foi conseguir lutar com sua nova arma, ${strWeaponFull}. 
  Logo deu um apelido a sua nova arma: ${hWeapon}. O primeiro lugar explorado foi ${strPlaceFull}. 
  Lá, ${char} virou  ${strClassesFull}, e começou a explorar e conhecer novos lugares. Fim! Hora de dormir!`;
  changeBG(images);
  setInterval(function () {
    changeBG(images);
  }, 5000);
  let i = 0;
  const speed = 50; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("storyText").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});

function changeBG(images) {
  var randomBack = Math.floor(Math.random() * images.length);
  if (randomBack == 0) {
    randomBack = 1;
  }
  document.body.style.backgroundImage = `url('${images[randomBack]}')`;
}