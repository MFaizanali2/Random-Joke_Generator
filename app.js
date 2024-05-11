function randomjokeGenerator() {

    let pakistani_Memes = [
        "Mujha Kyun Nikala",
        "Lahore da lawa Akhter Pawa",
        "Ma nahi batao ga",
        "Ufffff......",
        "1 2 3 4 Pilla",
        "Billo rani",
        "Program to wargaya",
        "Ma mangna nahi aya magar majbori ha",
        "Ma na kabhi haram ka niwala nahi khaya",
        "Saye to Saye Saye ka kutta bhi Saye"
      ];

    let faizi = Math.random() * pakistani_Memes.length;
    let roundjoke = Math.floor(faizi);
    let jokeGen = pakistani_Memes[roundjoke];

    let joke = document.querySelector("#jokes");
    joke.innerText = `" ${jokeGen} "`;
}