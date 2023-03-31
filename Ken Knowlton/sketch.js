let fontArray = [];
let Obama;
let lines = [
  "If there is anyone out there who still doubts that America is",
  "a place where all things are possible; who still wonders if the",
  "dream of our founders is alive in our time; who still question",
  "-s the power of our democracy, tonight is your answer. It's t",
  "-he answer spoken by young and old, rich and poor, Democrat",
  "and Republican, black, white, Latino, Asian, Native American,",
  "gay, straight, disabled and not disabled — Americans who sent a",
  "message to the world that we have never been a collection",
  "of red states and blue states; we are, and always will be, the",
  "United States of America. It's been a long time coming, but",
  "tonight, because of what we did on this day, in this election",
  ", at this defining moment, change has come to America. Th",
  "-e road ahead will be long. Our climb will be steep. We ma",
  "-y not get there in one year, or even one term, but America, I",
  "have never been more hopeful than I am tonight that we will",
  "get there. I promise you: We as a people will get there. I will",
  "always be honest with you about the challenges we face.I",
  "will listen to you, especially when we disagree. And, above",
  "all, I will ask you join in the work of remaking this nation the",
  "only way it's been done in America for 221 years, block by b",
  "-lock, brick by brick, callused hand by callused hand. Let us",
  "summon a new spirit of patriotism, where each of us resol",
  "ves to look after not only ourselves, but each other. Let us r",
  "-emember that in this country we rise or fall as One nation",
  ", as one people. Let us resist the temptation to fall back on",
  "the same partisanship and pettiness and immaturity that h",
  "-as poisoned our politics for so long. Let us remember that",
  "it was a man from this state who first carried the banner o",
  "-f the Republican Party to the White House — a party founded",
  "on the values of self-reliance, individual liberty and national",
  "unity. Those are values we all share, and while the Democ",
  "-ratic Party has won a great victory tonight, we do so with",
  "a measure of humility and determination to heal the divides",
  "that have held back our progress. As Lincoln said to a nation",
  "far more divided than ours, 'We are not enemies, but friends,",
  "Though passion may have strained, it must not break our bonds",
  "of affection.' And, to those Americans whose support I have yet",
  "to earn, I may not have won your vote, but I hear your voices,",
  "I need your help, and I will be your president, too. And to all",
  "those who have wondered if America's beacon still burns as",
  "bright: Tonight, we proved once more that the true strength of",
  "our nation comes not from the might of our arms or the sc",
  "ale of our wealth, but from the enduring power of our ideals:",
  "democracy, liberty, opportunity and unyielding hope. This i",
  "s our moment. This is our time — to put our people back to",
  "work and open doors of opportunity for our kids; to restore",
  "prosperity and promote the cause of peace; to reclaim the",
  "American Dream and reaffirm that fundamental truth that out of,",
  "many we are one; that while we breathe, we hope, and whe",
  "-re we are met with cynicism, and doubt, and those who tell us",
  "that we can't, we will respond with that timeless creed that",
  "sums up the spirit of a people: Yes, we can. Thank you, God",
  "bless you, and may God bless the United States of America.",
  "(from Barack Obama’s November 4, 2008 acceptance speech)"
];


function preload() {
  fontArray[0] = loadFont("Quatro-ExtraLight.ttf");
  fontArray[1] = loadFont("Quatro-Light.ttf");
  fontArray[2] = loadFont("Quatro-Book.ttf");
  fontArray[3] = loadFont("Quatro-Regular.ttf");
  fontArray[4] = loadFont("Quatro-Medium.ttf");
  fontArray[5] = loadFont("Quatro-SemiBold.ttf");
  fontArray[6] = loadFont("Quatro-Bold.ttf");
  fontArray[7] = loadFont("Quatro-Black.ttf");
  fontArray[8] = loadFont("Quatro-UltraBlack.ttf");
  Obama = loadImage('Barack-Obama.jpg');
}

function setup() {
  createCanvas(421, 579);
  background(0);
  //image(Obama, 0, 0);
  filter(GRAY);
  textSize(15);
  fill(255);
  noLoop();
  
  
  let y = 0;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let x = 0;
    for (let j = 0; j < line.length; j++) {
      if (x < Obama.width) {
        let c = Obama.get(x, y);
        let bri = brightness(c);
        let index = floor(map(bri, 0, 100, 0, fontArray.length));
        index = constrain(index, 0, fontArray.length - 1);
        let letter = line[j];
        textFont(fontArray[index]);
        let w = textWidth(letter);
        text(letter, x, y + 12.5);
        x += w;
      }
    }
    y += 10.64;
  }
 
  
  
//  for (let i = 0; i < Obama.width; i += 10) {
//    for (let j = 0; j < Obama.height; j += 10) {
//      let c = Obama.get(i, j);
//      let bri = brightness(c);
//      let index = floor(map(bri, 0, 100, 0, fontArray.length));
//      index = constrain(index, 0, fontArray.length);
//      textFont(fontArray[index]);
//      text("B", i, j);
//    }
//  }
}
  
  
  
  
  
  
  
  
  
  
