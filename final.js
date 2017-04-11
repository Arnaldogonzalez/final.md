1-What are the four steps of mergesort?

1-split array in 2
2-mergesort  left half
3-mergesort right half
4-Join the two arrays

2-Using JavaScript, generate a random number between 50 and 100.

Math.random()* 50 + 50;

3-Using Javascript, generate a random number between -100 and 100.

Math.random()* 200 - 100;

4-Write a coin flip function. It should return the string "heads" half the time and the string "tails" the other half

function coinFlip(){
return Math.random() >= 0.5 ?"heads" : "tails";
}

5-Re-state the following expression without using negation: !(10 > x)

    10 < x

6-Re-state the following expression without using negation: !(a > 10 && b <= 5)

    ! a < 10 || b > 5

7-Re-state the following expression without using negation: !(!isLegal || !isFelony)

    (!isLegal && !isFelony)

8-What is an Angular directive?

    //Es una extension de un HTML con nuevos atributos y elementos

9-Write a function which, given a 2-d array of strings, returns the concatenation of all the strings.

function twodconcat(arr){
    var result = [];
   for(var i = 0; i < arr.lenght;i++){
       for(var a = 0; a < arr[i].lenght;a++){
         result.push(arr[i][a]);
     }
 }
 return result;
}

10-Write a function which, given a 2-d array and another value x, returns true if x is present in the two d array, and false otherwise.

function containsElement(arr, x){
    for(var i = 0; i <= arr.length;i++){
    for(var num = 0; num < arr[i].lenght;num++){
          if(arr[i][num] === x) {
          return true;
          }

     }
    }
    return false;
}

11-What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).

// Relationships between them, you construct will manage the data of your application as part of a variable it will define, $scope,HTML vocabulary Angular provides is the use of Angular expressions.

12-Given the following edge list, draw the graph.

E = [[1,2], [2,3], [4,5], [2,4], [1,5]]

13-Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.

    //Directed
M = [
  [0,0,1,0,1],
  [0,0,0,0,1],
  [0,1,0,0,0],
  [0,1,0,0,0],
  [0,0,0,0,1],
]
14-For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?
    // O(n^2)
15-Make your Graph Theory Game nice-looking. Publish it to fvi-grad.
