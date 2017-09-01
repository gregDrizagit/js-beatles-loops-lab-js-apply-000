function theBeatlesPlay(musicians, instruments)
{
  var band = [];

  for(i = 0; i < musicians.length; i++)
  {

    band[i] = musicians[i]+" "+ +"plays"+" "+instruments[i];

  }

  return band;
}

function johnLennonFacts(facts)
{
  var newFacts = new Array[facts.length];
  while(i < facts.length)
  {
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
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
