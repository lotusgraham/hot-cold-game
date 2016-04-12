
$(document).ready(function () {

  // $('#startbutton').click(function(){
  //   // alert('testing');
    var iching = window.iching = new Iching();
    var num = iching.generateNumber();
    console.log(iching);
});

function Iching(){
  this.buttonToss = $('#startbutton');
  this.buttonToss.click(this.onButtonClick.bind(this));

  this.buttonReset = $('#resetbutton');
  this.buttonReset.click(this.onResetClick.bind(this));

  this.counter = 6;

  this.lines = {
    line1: {
      value: null,
      element: $('#line1')
    },
    line2: {
      value: null,
      element: $('#line2')
    },
    line3: {
      value: null,
      element: $('#line3')
    },
    line4: {
      value: null,
      element: $('#line4')
    },
    line5: {
      value: null,
      element: $('#line5')
    },
    line6: {
      value: null,
      element: $('#line6')
    },
  };

  this.templates = [
    [//twobrokenlines
      '<div class="lines">',
      '<div class="linebreak"></div>',
      '</div>',
      '<div class="changingdot-hidden"></div>',
      '<div class="lines">',
      '<div class="linebreak"></div>',
      '</div>',
    ].join('\n'),

    //twoSolidLines:
     [
      '<div class="lines"></div>',
      '<div class="changingdot-hidden"></div>',
      '<div class="lines"></div>',
    ].join('\n'),

  //  solidLeftBrokenRight:
    [
    '  <div class="lines left"></div>',
    '<div class="changingdot"></div>',
    '<div class="lines right">',
        '<div class="linebreak"></div>',
      '</div>',
    ].join('\n'),

  //  brokenLeftSolidRight:
    [
      '<div class="lines left">',
        '<div class="linebreak"></div>',
      '</div>',
      '<div class="changingdot"></div>',
      '<div class="lines right"></div>',
    ].join('\n'),
  ];

}

Iching.prototype.onButtonClick = function(){

  if(this.counter < 1) return; // reading complete

  var num = this.generateNumber();
  console.log(num);

  var line = this.lines['line' + this.counter];

  line.element.html(this.templates[num]);
  line.value = num;

  this.counter--;
};

Iching.prototype.onResetClick = function(){
  this.counter = 6;

  for (var i in this.lines) {

    this.lines[i].element.empty();
    this.lines[i].value = null;
  }
};

Iching.prototype.generateLine = function(){

};

Iching.prototype.generateNumber = function(){
  return Math.floor(Math.random() * 4);
};





var iChing =

  [
  {
    "Generated Number": 111111,
    "Hexagram Symbol": 1,
    "Number": 1,
    "Name": "Ch'ien / The Creative",
    "Reading": "The first hexagram is made up of six unbroken lines. These unbroken lines stand for the primal power, which is light-giving, active, strong, and of the spirit. The hexagram is consistently strong in character, and since it is without weakness, its essence is power or energy. Its image is heaven. Its energy is represented as unrestricted by any fixed conditions in space and is therefore conceived of as motion. Time is regarded as the basis of this motion. Thus the hexagram includes also the power of time and the power of persisting in time, that is, duration. The power represented by the hexagram is to be interpreted in a dual sense in terms of its action on the universe and of its action on the world of men. In relation to the universe, the hexagram expresses the strong, creative action of the Deity. In relation to the human world, it denotes the creative action of the holy man or sage, of the ruler or leader of men, who through his power awakens and develops their higher nature."
  },
  {
    "Generated Number": 212222,
    "Hexagram Symbol": 2,
    "Number": 2,
    "Name": "K'un / The Receptive",
    "Reading": "This hexagram is made up of broken lines only. The broken lines represents the dark, yielding, receptive primal power of yin. The attribute of the hexagram is devotion; its image is the earth. It is the perfect complement of The Creative the complement, not the opposite, for the Receptive does not combat the Creative but completes it . It represents nature in contrast to spirit, earth in contrast to heaven, space as against time, the female-maternal as against the male-paternal. However, as applied to human affairs, the principle of this complementary relationship is found not only in the relation between man and woman, but also in that between prince and minister and between father and son. Indeed, even in the individual this duality appears in the coexistence of the spiritual world and the world of the senses. But strictly speaking there is no real dualism here, because there is a clearly defined hierarchic relationship between the two principles. In itself of course the Receptive is just as important as the Creative, but the attribute of devotion defines the place occupied by this primal power in relation to the Creative. For the Receptive must be activated and led by the Creative; then it is productive of good. Only when it abandons this position and tries to stand as an equal side by side with the Creative, does it become evil. The result then is opposition to and struggle against the Creative, which is productive of evil to both."
  },
  {
    "Generated Number": 333333,
    "Hexagram Symbol": 3,
    "Number": 3,
    "Name": "Chun / Difficulty at the Beginning",
    "Reading": "The name of the hexagram, Chun, really connotes a blade of grass pushing against an obstacle as it sprouts out of the earth--hence the meaning,"
  },
  {
    "Generated Number": 444444,
    "Hexagram Symbol": 4,
    "Number": 4,
    "Name": "Meng / Youthful Folly",
    "Reading": "In this hexagram we are reminded of youth and folly in two different ways. The image of the upper trigram, Ken, is the mountain, that of the lower, K'an, is water; the spring rising at the foot of the mountain is the image of inexperienced youth. Keeping still is the attribute of the upper trigram; that of the lower is the abyss, danger. Stopping in perplexity on the brink of a dangerous abyss is a symbol of the folly of youth. However, the two trigrams also show the way of overcoming the follies of youth. Water is something that of necessity flows on. When the spring gushes forth, it does not know at first where it will go. But its steady flow fills up the deep place blocking its progress, and success is attained."
  },
  {
    "Generated Number": 555555,
    "Hexagram Symbol": 5,
    "Number": 5,
    "Name": "Hsu / Waiting (Nourishment)",
    "Reading": "All beings have need of nourishment from above. But the gift of food comes in its own time, and for this one must wait. This hexagram shows the clouds in the heavens, giving rain to refresh all that grows and to provide mankind with food and drink. The rain will come in its own time. We cannot make it come; we have to wait for it. The idea of waiting is further suggested by the attributes of the two trigrams--strength within, danger in from. Strength in the face of danger does not plunge ahead but bides its time, whereas weakness in the face of danger grows agitated and has not the patience to wait."
  },
  {
    "Generated Number": 555444,
    "Hexagram Symbol": 6,
    "Number": 6,
    "Name": "Sung / Conflict",
    "Reading": "The upper trigram, whose image is heaven, has an upward movement; the lower trigram, water, in accordance with its nature tends downward. Thus the two halves move away from each other, giving rise to the idea of conflict. The attribute of the Creative is strength, that of the Abysmal is danger, guile. Where cunning has force before it, there is conflict. A third indication of conflict, in terms of character, is presented by the combination of deep cunning within and fixed determination outwardly. A person of this character will certainly be quarrelsome."
  },
  {
    "Generated Number": 555533,
    "Hexagram Symbol": 7,
    "Number": 7,
    "Name": "Shih / The Army",
    "Reading": "This hexagram is made up of the trigrams K'an, water, and K'un, earth, and thus it symbolizes the ground water stored up in the earth. In the same way military strength is stored up in the mass of the people--invisible in times of peace but always ready for use as a source of power. The attributes of the two trig rams are danger inside and obedience must prevail outside. Of the individual lines, the one that controls the hexagram is the strong nine in the second place, to which the other lines, all yielding, are subordinate. This line indicates a commander, because it stands in the middle of one of the two trigrams. But since it is in the lower rather than the upper trigram, it represents not the ruler but the efficient general, who maintains obedience in the army by his authority."
  }
];



function findSymbol(sym) {
  var result = iChing.filter(function(obj) {
     return obj["Generated Number"] == sym;
  });

  return result;
}

console.log(findSymbol(555444));

var arr = [1, 2, 4, 2, 4,];

arr.push(num);
arr.join('');

console.log(arr);
