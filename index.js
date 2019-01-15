//SUM OF THE FIRST NTH TERM OF SERIES
//Your task is to write a function which returns the sum of following series upto nth term(parameter).

//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// - You need to round the answer to 2 decimal places and return it as String.
// - If the given value is 0 then it should return 0.00
// - You will only be given Natural Numbers as arguments.

// Examples

// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"


function SeriesSum(n) {
    var sum = 0
    for (i = 0; i < n; i++) {
      sum += 1 / (1 + i * 3)
    }
    return sum.toFixed(2)
  }


//DUBSTEP
// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Example

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
    return song.split("WUB").filter((el)=>el).join(' ');
  }


//CATEGORIZE NEW MEMBER
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    let output = [];
    for (let i = 0; i < data.length; i++){
      if ((data[i][0] >= 55) && (data[i][1] > 7)){
        output.push('Senior')
      }else{
        output.push('Open')
      }
    }
    return output
  }
  
  let newData = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
  
  openOrSenior(newData)


//EQUAL SIDES OF AN ARRAY
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.
// An empty array should be treated like a 0 in this problem.

function getSum(total, num){
  return total + num
}

function findEvenIndex(arr){
  let index = -1;
  for (let i = 0; i < arr.length; i++){
    // for (let j = arr.length; j > 0; j--){
  if ((arr.slice(0,[i + 1])).reduce(getSum) === (arr.slice([i],arr.length)).reduceRight(getSum)){
    index = i
    }
  }
  return index
}


// NUMBER OF PEOPLE IN THE BUS
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  let sleepers = 0;
  for (i = 0; i < busStops.length; i++){
    sleepers = (sleepers + busStops[i][0]) - busStops[i][1]
  }
  return sleepers
}

number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);


//UNIQUE IN ORDER
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements

var uniqueInOrder=function(iterable){
  let last;
  let arr = []
  for (let i = 0; i < iterable.length; i++){
    if(iterable[i] !== last){
      arr.push(last = iterable[i])
    }
  }
  return arr
}

uniqueInOrder('AAAABBBCCDAABBB')


//GIVE ME A DIAMOND
// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// ###Task:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

// Please see provided test case(s) for examples.

// Python Note
// Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

// JS Note
// JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

function diamond(n){
    if (n % 2 == 0 || n < 1){
      return null
    }
    let x = 0;
    let add;
    let diam = newLine(x, n);
    while((x += 2) < n){
      add = newLine(x / 2, n - x);
      diam = add + diam + add;
    }
    return diam;
  }
  
  function numOf(str, amount){
    return Array(amount + 1).join(str);
  }
  
  function newLine(space, star){
    return numOf(' ', space) + numOf('*', star) + '\n';
  }