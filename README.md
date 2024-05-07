[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


From the code the base case is:
T(0)=1
T(1)=1

It's a recursive call if 'n' is greater then 1. Then it makes 3 recursive calls on the array to divide it into 3 equal sizes equaling
n/3. So, T(n)=3*T(n/3) + C. T(n/3) is the recursive calls made, (n/3) is the size of the array.

$\ T(n)=3 \cdot T\left(\frac{n}{3}\right) + C $
$\ T\left(\frac{n}{3}\right) = 3\cdot \left(3\cdot T \left(\frac{n}{9}\right)+c\right) + c $

$\ T\left(\frac{n}{3}\right) =3^{2} \cdot T\left(\frac{n}{9}\right) + 3c + C $
$\ T\left(\frac{n}{9}\right) = 3^{3} \cdot T\left){n}{27}\right) + 3^{2}c + 3c + C $

So the pattern is:
$\ T(n) = 3^{k} \cdot T(\frac{n}{3^{k}}) + c\cdot \sum_{i=0}^{k-1} 3^{i} $

The finding the value for K:
$\ \frac{n}{3^{k}} = 1 $

That gives you:
$\ k= \log_3 n $

Putting k back into the pattern:
$\ T\left(n\right) = 3^{\log_3 n} \cdot T \left(1\right) + c\cdot \sum_{i=0}^{\log_3 n-1} 3^{i} $

The geometric series from the summation is:

$\ \frac{n-1}{2} $

So, $\ T \left(n\right) = n \cdot{T\left(1\right)} + C \cdot\frac{n-1}{2} $

We know  $\ T\left(1\right) $ is constant 

So, $\ \frac {n-1}{2} $ the domanate term is n.

Then $\ T\left(n\right) \in \Theta\left(n\right) $ 

I used this to help me understand:
https://github.com/COSC3020/divide-and-conquer-sum-ziyuWang6666/blob/e538a1b529472e4def078ba3504390b532f6027f/code.js
