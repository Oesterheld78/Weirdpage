/*
  Event-driven programming is my trigger.
*/

//DOM elements
var qoute, source, prayer, slayer, next, acknowledgements;
//Score variables
var start   =  0, //Which quote did this round begin with?
    current =  0, //Which quote are we on?
    total   = 10, //How many quotes should we go through in total?
    correct =  0; //How many correct answers has the user got so far?

/* 
  The quotes:
  Total (40)
  - Prayer (20)
  --- Bible (15)
  --- Qu'ran (5)
  - Slayer (20)
*/
var quotes = [
  //Prayer - Old Testament
  {
    content:  "As I sharpen my flashing sword and my hand grasps it in judgment, I will take vengeance on my adversaries and repay those who hate me.",
    source:   "Deuteronomy 32:41",
    isPrayer: true
  },
  {
    content:  "Show them no pity. Do not spare them or shield them. Your hand must be the first in putting them to death.",
    source:   "Deuteronomy 13:8-9",
    isPrayer: true
  },
  {
    content:  "I will destroy all life under the heavens, every creature that has the breath of life in it. Everything on earth will perish.",
    source:   "Genesis 6:17",
    isPrayer: true
  },
  {
    content: "My anger will burn, and I will kill you with the sword, then your wives will be widows and your children fatherless.",
    source:  "Exodus 22:24",
    isPrayer: true
  },
  {
    content:  "He will completely destroy them, dooming them to slaughter. Their dead will be left unburied, the stench of rotting bodies will fill the land, and the mountains will flow with their blood.",
    source:   "Isaiah 34:2-3",
    isPrayer: true
  },
  {
    content:  "Their flesh will rot while they are still standing on their feet, their eyes will rot in their sockets, and their tongues will rot in their mouths.",
    source:   "Zechariah 14:12",
    isPrayer: true
  },
  {
    content:  "I will bring such distress on mankind that they will walk like the blind. Your blood will be poured into the dust, and your bodies will lie rotting on the ground.",
    source:   "Zephaniah 1:17",
    isPrayer: true
  },
  {
    content:  "I will fill your mountains with the dead. Your hills, your valleys, and your streams will be filled with people slaughtered by the sword. I will make you desolate forever. Your cities will never be rebuilt.", 
    source:   "Ezekiel 35:8-9",
    isPrayer: true
  },    
  {
    content:  "I will avenge your bloody deeds with furious rage.", 
    source:   "Ezekiel 16:38",
    isPrayer: true
  },
  {
    content:  "You will be destroyed. Happy is the one who pays you back for what you have done to us. Happy is the one who takes your babies and smashes them against the rocks!",
    source:   "Psalm 137:9",
    isPrayer: true
  },
  {
    content: "They will fall by the sword, their little ones will be dashed to the ground, their pregnant women ripped open.",
    source: "Hosea 13:16",
    isPrayer: true
  },  
  {
    content:  "I will destroy your pagan shrines, knock down your places of worship and leave your lifeless corpses piled on the remains of your idols.", 
    source:   "Leviticus 26:30",
    isPrayer: true
  },
  //Prayer - New Testament
  {
    content:  "During those days men will seek death, but will not find it. They will long to die, but death will flee from them.",
    source:   "Revelation 9:6",
    isPrayer: true
  },
  {
    content:  "I stood upon the sand of the sea, and saw a beast rise up out of the sea, having seven heads and ten horns, and upon his horns ten crowns, and upon his heads the name of blasphemy.",
    source:   "Revelation 13:1",
    isPrayer: true
  },
  {
    content:  "I looked, and behold, an ashen horse. Its rider was named Death, and his companion was the Grave. They were given authority over a fourth of the earth, to kill with sword and with famine and with pestilence and by wild beasts of the earth.",
    source:   "Revelation 6:8",
    isPrayer: true
  },
  //Prayer - The Qur’an
  {
    content: "Slay them wherever you find them, and drive them out from wherever they drove you out. If they fight you, then kill them - such is the recompense of the disbelievers.",
    source:   "Qur’an 2:191",
    isPrayer: true
  },
  {
    content:  "Those who disbelieved, I will punish them with terrible agony in this world and the Hereafter.",
    source:   "Qur’an 3:56",
    isPrayer: true
  },
  {
    content:  "So when they roused our wrath, we took vengeance on them and drowned them all. Thus we made them the vanguard and an example for posterity.",
    source:   "Qur’an 43:55-56",
    isPrayer: true
  },
  {
    content:  "I will cast terror into the hearts of those who disbelieved, so strike upon the necks and strike from them every fingertip.",
    source:   "Qur’an 8:12",
    isPrayer: true
  },
  {
    content:  "Their refuge is Hell, and wretched is the destination.",
    source:   "Qur’an 9:73",
    isPrayer: true
  },
  //Slayer, Show No Mercy
  {
    content:  "Satan watches all of us - smiles as some do his bidding. Try to escape the grasp of my hand and your life will no longer exist. Hear our cry, save us from the Hell in which we live.",
    source:   "Slayer, Die By The Sword (Show No Mercy)",
    isPrayer: false
  },
  {
    content:  "Cursed are the souls who defy His will, all of which are tortured and ruthlessly slaughtered.",
    source:   "Slayer, The Final Command (Show No Mercy)",
    isPrayer: false
  },
  //Slayer, Hell Awaits
  {
   content: "Sacrifice the lives of all. I know they soon shall die, their souls are damned to rot in Hell and keep the fire growing deep within.",
   source:  "Slayer, Hell Awaits (Hell Awaits)",
   isPrayer: false
  },
  //Slayer, Reign in Blood 
  {
    content:  "Trapped in purgatory, a lifeless object, alive. Awaiting reprisal, death will be their acquittance.",
    source:   "Slayer, Raining Blood (Reign in Blood)",
    isPrayer: false
  },
  //Slayer, South of Heaven
  {
    content:  "Judgment Day, the second coming arrives. Before you see the light, you must perish.",
    source:   "Slayer, South Of Heaven (South Of Heaven)",
    isPrayer: false
  },
  {
    content:  "The root of all evil is the heart of a black soul, a force that has lived all eternity.",
    source:   "Slayer, South Of Heaven (South Of Heaven)",
    isPrayer: false
  },
  {
    content:  "You say you'll help us find the Lord. Tell me preacher, how do you know a simple quest for a visible savior to lead us through our final prayer?",
    source:   "Slayer, Read Between The Lies (South Of Heaven)",
    isPrayer: false
  },
  //Slayer, Seasons In The Abyss
  {
    content:  "Hear the piercing cries of all who found that Hell awaits.",
    source:   "Slayer, Spirit In Black (Seasons In The Abyss)",
    isPrayer: false
  },
  {
    content: "Have you ever danced with the Devil? Has his temptation ever summoned you, ever penned your name in blood?",
    source:  "Slayer, Temptation (Seasons In The Abyss)",
    isPrayer: false
  },
  //Slayer, Diabolus In Musica
  {
    content:  "No one could ever doubt my rapture, as you too will soon discover. No one will ever cross my love. Deadly consequence will rise from beyond.",
    source:   "Slayer, Desire (Diabolus In Musica)",
    isPrayer: false
  },
  //Slayer, God Hates Us All
  {
    content:  "Mankind, in his insatiable search for divine knowledge, has discarded all sacred teachings.",
    source:   "Slayer, Darkness Of Christ (God Hates Us All)",
    isPrayer: false
  },
  {
    content:  "Pray for life - know in time you'll pray for death.",
    source:   "Slayer, New Faith (God Hates Us All)",
    isPrayer: false
  },
  {
    content: "I am the new Hell on earth, the Lord of agony divine. I am brutality, the face of everlasting pain.",
    source:  "Slayer, Here Comes The Pain (God Hates Us All)",
    isPrayer: false
  },
  {
    content: "I only want vengeance to come shining down on me. I don't want you to die before I get the chance to kill you myself.",
    source:  "Slayer, Payback (God Hates Us All)",
    isPrayer: false
  },
  //Slayer, Christ Illusion
  {
    content:  "On splintered bones I walk, shifting through the blood, besieged in fear. Await the coming of the God.",
    source:   "Slayer, Jihad (Christ Illusion)",
    isPrayer: false
  },
  {
    content:  "Holy warriors, your patience will be justified. Everything is for Him. You must not comfort the animal before you kill it. Strike as champions at the heart of the nonbelievers! Strike above the neck and at all extremities! For it is a point of no return for Almighty God. God will give victory to His faithful servant.",
    source:   "Slayer, Jihad (Christ Illusion)",
    isPrayer: false
  },
  //Slayer, World Painted Blood
  {
    content:  "Satan's hand begins the end and frees the world forever.",
    source:   "Slayer, World Painted Blood (World Painted Blood)",
    isPrayer: false
  },
  {
    content:  "You are the tainted, I am the pure. You are the sickness, I am the antidote.",
    source:   "Slayer, Not Of This God (World Painted Blood)",
    isPrayer: false
  },
  {
  content:  "Pestilence is here, death awaits. Your body is not of Christ, it is my altar.",
    source:   "Slayer, Playing With Dolls (World Painted Blood)",
    isPrayer: false
  },
  {
    content:  "Burning in your own Hell, which now binds you to me infinitely. Spirits of angels don't weep for you enticing me.",  
    source:   "Slayer, Beauty Through Order (World Painted Blood)",
    isPrayer: false
  }
];

window.onload = init;

function init(){
  //Load the relevant DOM elements
  instructions     = document.getElementById("instructions");
  score            = document.getElementById("score");
  qoute            = document.getElementById("quote");
  source           = document.getElementById("source");
  prayer           = document.getElementById("prayer");
  slayer           = document.getElementById("slayer");
  next             = document.getElementById("next");
  acknowledgements = document.getElementById("acknowledgements");
  //Shuffle the quotes array
  do{shuffle(quotes);}
  while(!isShuffled());
  //Hide the game elements
  acknowledgements.style.display = "none";
             score.style.display = "none";
            prayer.style.display = "none";
            slayer.style.display = "none";
             quote.style.display = "none";
  //Wait for the user to start the game
  next.textContent = "Start";
  next.onclick = newGame;
}

function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function shuffle(array){
  //Shuffle the array using the Fisher-Yates algorithm 
  for(var i = array.length-1; i>0; i--){
    var j = Math.floor(Math.random()*(i + 1));
    swap(array, i, j);
  }
  return array;
}

function isShuffled(){
  //Checks that each round has an even distribution of prayer and Slayer quotes
  var prayerCount;
  for(var i=0; i<4; i++){
    prayerCount = 0;
    for(var j=0; j<10; j++){
      if(quotes[j].isPrayer){
        //1 like = 1 prayer
        prayerCount++;
      }
    }
    if(prayerCount < 4 || prayerCount > 6){
      //Uneven distribution, shuffle again
      return false;
    }
  }
  //Even distribution, ready to go
  return true;
}

function newGame(){
  //Reset
  acknowledgements.style.display = "none";
  correct = 0;
  //Show the game elements
  instructions.style.display = "none";
         score.style.display = "block";
        prayer.style.display = "inline-block";
        slayer.style.display = "inline-block";
         quote.style.display = "block";
  score.textContent = "Score: 0/0";
  next.textContent  = "Next";
  next.onclick = nextQuote;
  //Display the first quote
  nextQuote();
}

function nextQuote(){
  //Reset options
  slayer.style.border = "5px solid white";
  prayer.style.border = "5px solid white";
  prayer.onclick = choosePrayer;
  slayer.onclick = chooseSlayer;
  //Load the next quote
  current++;
   qoute.textContent = "\""+quotes[current-1].content+"\"";
  source.textContent =      quotes[current-1].source;
  //Hide the source and next button until the user selects an option
  source.style.display = "none";
    next.style.display = "none";
}

function choosePrayer(){
  if(quotes[current-1].isPrayer){prayer.style.border = "5px solid green";}
  else{                          prayer.style.border = "5px solid red";}
  choose(true);
}

function chooseSlayer(){
  if(!quotes[current-1].isPrayer){slayer.style.border = "5px solid green";}
  else{                           slayer.style.border = "5px solid red";}
  choose(false);
}

function choose(guessedPrayer){
  if(quotes[current-1].isPrayer == guessedPrayer){
    //Correct answer, increment the user's score
    correct++;
  }
  score.textContent = "Score: "+correct+"/"+(current-start);
  //Disable the option buttons so the user can't change their answer
  prayer.onclick = undefined;
  slayer.onclick = undefined;
  //Reveal the quote source, and display the next button
  source.style.display = "block";
    next.style.display = "block";
  if(current == start+total){
    //If this was the last question, change next to finish
    next.textContent = "Finish";
    next.onclick = displayFinalScore;
  }
}

function displayFinalScore(){
  //Display the user's final score.
   score.textContent = "Final score: "+correct+"/"+total;
  source.textContent = "Restart the game to try again with a new set of random quotes.";
  //Hide all the game elements
  slayer.style.display = "none";
  prayer.style.display = "none";
   quote.style.display = "none";
  //Display the acknowledgements
  acknowledgements.style.display = "block";
  //Wait for the user to (re)start the game
  next.textContent = "Restart";
  next.onclick = newGame;
  //If we've run out of quotes, re-shuffle the array
  start += total;
  if(start >= quotes.length){
    current = 0;
    start   = 0;
    shuffle(quotes);
  }
}

//RIP JH