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


//ROMAN NUMERALS DECODER
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

function solution(roman){
	let numerals = {
	I : 1,
	V : 5,
	X : 10,
	L : 50,
	C : 100,
	D : 500,
	M : 1000
	}
	let arr = roman.split('');
	let num = 0;
  for (let i = 0; i < arr.length; i++){
	let letter = numerals[arr[i]];
	let nextLet = numerals[arr[i + 1]];
		if (letter === undefined){
			return null
		}else{
			if (letter < nextLet){
        num += nextLet - letter
        i++
			}else{
				num += letter
			}
		}
	}
	return num;
}

solution('XXI')


//YOU'RE A SQUARE
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
	if ((Math.sqrt(n)) % 1 === 0){
		return true
	}else{
  	return false;
	}
}

isSquare(25)


// SUM OF ALL THE MULTIPLES OF 3 OR 5
// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
	let sum = 0;
for (let i = 0; i <= n; i++){
	let fives = i % 5 === 0;
	let threes = i % 3 === 0;
	if (fives || threes){
		sum += i
		}
	}
	return sum
}

findSum(10)


//INTEGERS: RECREATION ONE
// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

function listSquared(m, n) {
	let squareDivis = [];
for(let i = m; i <= n; i++){
	let sum = divis(i).reduce((sum, num) => sum + num * num, 0);
	if(Number.isInteger(Math.sqrt(sum))){
			squareDivis.push([i, sum])
		}
	}
	return squareDivis
}

function divis(n){
	let square = [];
	for (let i = 1; i <= n; i++){
		if(n % i){
			continue
		}
		square.push(i)
	}
	return square
}


// COUNT THE NUMBER OF DUPLICATES

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  var duplicates = [];
  text.toLowerCase().split('').forEach(function(val, i, arr){
		if(i != arr.lastIndexOf(val) && duplicates.indexOf(val) == -1){
			duplicates.push(val)
			}
		}
	);
  return duplicates.length;
}


//VASYA - CLERK
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(arr){
	let bill25 = 0
	let bill50 = 0
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 25){
				bill25++
		}
		if(arr[i] === 50){
				bill25--
				bill50++
		}
		if(arr[i] === 100){
				if(bill50 === 0){
					bill25 -= 3
				}else{
					bill50--
					bill25--
				}
			}
		if(bill25 < 0 || bill50 < 0){
			return 'NO'
		}
	}
	return 'YES'
}


//EXTRACT THE DOMAIN NAME FROM A URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  let domain = url.replace(/http:\/\/|www.|https:\/\//gi, '')
	return domain.slice(0, domain.indexOf('.'))
}


//TWO SUM
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

function twoSum(numbers, target) {
	let indices = []
	for(let i = 0; i < numbers.length; i++){
		for(let j = 0; j < i; j++){
			if(numbers[i] + numbers[j] === target){
				indices.push(j, i)
			}
		}
	}
	return indices
}


// FIND THE SMALLEST
// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another place in the number.

// Doing so, find the smallest number you can get.

// #Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.
// Example:

// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

function smallest(n) {
	let row = String(n).split("");
	let min = [n, 0, 0],
			test = [];
	
	for (var i = 0, length = row.length; i < length; i++) {
		for (var j = 0; j < length; j++) {
			test = row.slice(0, i).concat(row.slice(i + 1));
			
			if (Number(test.slice(0, j).concat(row[i], test.slice(j)).join("")) < min[0]) {
				min = [Number(test.slice(0, j).concat(row[i], test.slice(j)).join("")), i, j];
			}
		}
	}
	
	return min;
}


// MAZE RUNNER
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

function mazeRunner(maze, directions) {
	let position = []
	for(let i = 0; i < maze.length; i++){
		if (maze[i].indexOf(2) !== -1) {
      position.push(i, maze[i].indexOf(2))
    }
	};
  for(let i = 0; i < directions.length; i++){
		if(directions[i] === 'N'){
			position[0] -= 1
		}else if(directions[i] === 'E'){
			position[1] += 1
		}else if(directions[i] === 'S'){
			position[0] += 1
		}else if(directions[i] === 'W'){
			position[1] -= 1
		}
		if (position[0] === maze.length || position[0] < 0) {
      return 'Dead'
    }
		if(maze[position[0]] === undefined || maze[position[1]] === undefined){
			return 'Dead';
		}
		if(maze[position[0]][position[1]] === 1){
			return 'Dead';
		}else if(maze[position[0]][position[1]] === 3){
			return 'Finish';
		}
	}
	return 'Lost';
}


//CONSONANT VALUE
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

function solve(s) {
	let charArray = {};
	let highest = 0;
	let total = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u']
	let consonant = s.split('')
	for(let i = 1; i <= 26; i++){
		charArray[String.fromCharCode(97 + (i - 1))] = i
	}
	consonant.forEach((elem, i) => {
		if(!vowels.includes(elem)){
			total += charArray[elem]
			prevVowel = false
		}else{
			prevVowel = true;
			if(highest < total){
				highest = total
			}
			total = 0
		}
	})
	return highest
}


//DUPLICATE ENCODER
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
	let str = '';
	let lowCase = word.toLowerCase();
	for (let i = 0; i < lowCase.length; i++){
		if(lowCase.indexOf(lowCase[i]) === lowCase.lastIndexOf(lowCase[i])){
			str += '('
		}else {
			str += ')'
		}
	}
	return str
}


//GETTING ALONG WITH INTEGER PARTITIONS
//In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

// unable to solve


//ALPHABET WAR - AIRSTRIKE - LETTERS MASSACRE
// Write a function that accepts "fight" string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return "Left side wins!", when the right side wins return "Right side wins!", in other case return "Let's fight again!".

function alphabetWar(fight) {
	let letters = {
		'w': 4,
		'p': 3,
		'b': 2,
		's': 1,
		'm': -4,
		'q': -3,
		'd': -2,
		'z': -1
	};
	let fightArr = fight.split('');
	let arr = [];
	for (let i = 0; i < fightArr.length; i++) {
		if (fightArr[i] !== '*' && fightArr[i + 1] !== '*' && fightArr[i - 1] !== '*') {
			arr.push(fightArr[i])
		}
	}
	let sum = arr.reduce((total, curr) => total + (letters[curr] ? letters[curr] : 0), 0);
	return sum < 0
		? "Right side wins!"
		: sum > 0
		? "Left side wins!"
		: "Let's fight again!";
}


//THE SHELL GAME
//Your task is as follows. Given the shell that the ball starts under, and list of swaps, return the location of the ball at the end. All shells are indexed by the position they are in at the time.

function find_the_ball(start, swaps) {
	return swaps.reduce((ball, arr) => {
		if (arr[0] === ball) {
			ball = arr[1]
		} else if (
			arr[1] === ball
		){
			ball = arr[0]
		}
		return ball;
	}, start)
}

swaps = [[0, 1], [1, 2], [1, 0]]
find_the_ball(0, swaps)


//LOWEST PRODUCT OF 4 CONSECUTIVE NUMBERS
//Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

function lowestProduct(input) {
	let arr = input.split('').map(num => parseInt(num));
	let lowest = [];
	if (input.length < 4) {
		return 'Number is too small'
	} else {
		for (let i = 0; i < arr.length; i++) {
			lowest.push(arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3])
		}
		return lowest.sort((a, b) => a - b)[0]
	}
}


//MEETING
//Could you make a program that
// - makes this string uppercase
// - gives it sorted in alphabetical order by last name.

function meeting(s){
	return '(' + s.toUpperCase().split(';').map(elem => elem.split(':').reverse().join(', ')).sort().join(')(') + ')';
}


//up AND down
// You are given a string s made up of substring s(1), s(2), ..., s(n) separated by whitespaces. Example: "after be arrived two My so"
// #Task Return a string t having the following property:
// length t(O) <= length t(1) >= length t(2) <= length t(3) >= length t(4) .... (P)
// where the t(i) are the substring of s; you must respect the following rule:
// at each step from left to right, you can only move either already consecutive strings or strings that became consecutive after a previous move. The number of moves should be minimum.

function arrange(strng) {
	let t = strng.split(' ')
	let i = -1
	let comp = i => (t[i + i % 2].length) > (t[i + 1 - i % 2].length);
	while (++i < t.length - 1) {
		if (comp(i)) {
			[t[i], t[i + 1]] = [t[i + 1], t[i]]
		}
	}
	return t.map((word, index) => word[`to${index % 2 ? 'Upper' : 'Lower'}Case`]()).join(' ');
}


//MULTIPLICATION TABLES
// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
// Example:
// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]
// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

function multiplicationTable(row, col) {
	let table = [];
	for (let i = 1; i <= row; i++) {
		let arr = [i];
		for (let j = 2; j <= col; j++) {
			arr.push(i * j)
		}
		table.push(arr)
	}
	return table
}


//ENGLISH BEGGARS
// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggers will of course take nothing (0).