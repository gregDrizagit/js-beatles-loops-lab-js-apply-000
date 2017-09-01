function theBeatlesPlay(musicians, instruments)
{
  var band = [];

  for(var i = 0; i < musicians.length; i++)
  {

    band[i] = musicians[i]+" "+"plays"+" "+instruments[i];

  }

  return band;
}

function johnLennonFacts(facts)
{
  //var newFacts = new Array(facts.length);
  var i = 0;
  var exclamation = '!!!';
  while(i < facts.length)
  {
    //newFacts[i] =
    facts[i] += exclamation;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number)
{
  var emptyArray = [];
  do
  {
    emptyArray[number] = "I love the Beatles!";
    number++;
  }
  while (number < 15)

  return emptyArray;

}
