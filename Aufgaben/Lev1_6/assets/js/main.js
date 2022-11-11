let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];


myMusic.push({
    artist: "Michael Sparks",
    title: "Juggernaut",
    release_year: 2021,
    medium: ["Download"],
    gold: false
});

console.log(myMusic[0].artist);
console.log("Von " + myMusic[1].artist + " " + myMusic[1].medium[3]);
console.log("Von " + myMusic[1].artist + " " + myMusic[1].gold);
console.log(+ myMusic[2].release_year + " " + myMusic[3].release_year);
console.log("Von " + myMusic[3].artist + " " + myMusic[3].medium[2]);
console.log("Von " + myMusic[3].artist + " das Wort " + myMusic[3].title.slice(16, 21));
console.log("Von " + myMusic[2].artist + " das Wort " + myMusic[2].title.slice(13));
console.log("Von " + myMusic[1].artist + " das Wort " + myMusic[1].artist.slice(5));

console.log(myMusic[4]);

// console.log(myMusic);


