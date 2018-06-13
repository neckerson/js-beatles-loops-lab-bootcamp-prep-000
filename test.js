Beatles Loops johnLennonFacts returns an array of strings with exclamationpoints:

      Error: Expected [ 'He was the last Beatle to learn to drive!!!', 'He was never a vegetarian!!!', 'He was a choir boy and boy scout!!!', 'He hated the sound of his own voice!!!' ] to equal [ 'foo!!!', 'bar!!!' ]
      + expected - actual

       [
      -  "He was the last Beatle to learn to drive!!!"
      -  "He was never a vegetarian!!!"
      -  "He was a choir boy and boy scout!!!"
      -  "He hated the sound of his own voice!!!"
      +  "foo!!!"
      +  "bar!!!"
       ]

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:21:11)

//code
function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}