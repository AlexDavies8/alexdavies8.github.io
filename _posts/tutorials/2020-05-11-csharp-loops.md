---
title: "C# Loops"
date:   2020-05-11 11:49 +0100
categories: tutorials csharp
order: 3
---
Loops are a way of repeating the same block of code multiple times. They are very useful, and are used frequently
in almost all programs.

There are two types of loops in C#:
* Indeterminate
* Determinate

### Indeterminate Loops
Indeterminate Loops are loops that will repeat an unknown number of times; the number of repeats cannot
be calculated before the loop starts.

In C#, While loops are indeterminate. 

They have the following syntax:
```c#
while (condition)
{
    //Code
}
```
The condition is a boolean statement, the same as in an if statement.

A while loop repeats the code inside it *while* the condition is true,
and therefore exits when the condition becomes false.

Here is an example:
```c#
while (guess != answer)
{
    Console.WriteLine("Wrong!");
    Console.WriteLine("Enter a guess:");
    guess = Console.ReadLine();
}
```
This will keep saying "Wrong!" and asking for a guess until the guess is equal to the answer.

It's that simple!

### Determinate Loops
Determinate loops are loops that will repeat a known number of times; the number of repeats can be calculated
before the loop starts.

In C#, For loops are determinate. They are substantially more complex than while loops.

They have the following syntax:
```c#
for (initializer; condition; iterator)
{
    //Code
}
```

Here is an example:
```c#
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
```

There are three important parts of a for loop:
* The initializer
* The condition
* The iterator

A for loop works by 'initializing' a variable in the 'initializer', checking to see if the 'condition' it true,
running the code inside the for loop, then running the 'iterator' code.

#### The Initializer
The initializer is where the variable is defined and initialized. Here's an example:
```c#
int i = 0
```
Simple, right? It is written exaclty like how a normal variable would be.

The variable initialized here can only be accessed inside the loop. More about this when we talk about Accessors and Scope.

It doesn't have to be an integer either: it can be any variable, or, you can have no initializer at all
(this is usually not a good idea, but is useful in certain circumstances).

#### The Condition
The condition is what the loop checks against before every time it repeats. It is a boolean statement,
and works like in an if statement.

If it evaluates to true, the loop will repeat again, but if it evaluates to false, the loop will exit.

Here's an example:
```c#
i < 10
```
As you can see, it's identical to the condition you would see in an if statement.

#### The Iterator
The iterator is a code statement that is run after every loop. It is run after the code inside the loop,
but before the condition is checked.

Here's an example:
```c#
i++
```
That's all it is! Even easier than the other two parts.

Note: 
    'i++' is a shorthand way of writing 'i = i + 1'
    'i--' is shorthand for 'i = i - 1'
    'i += myInt' is shorthand for 'i = i + myInt'
    'i -= myInt' is shorthand for 'i = i - myInt'
    'i *= myInt' is shorthand for 'i = i * myInt'
    'i /= myInt' is shorthand for 'i = i / myInt'

#### Understanding Common Loops
This all may seem confusing and overcomplicated at first, and to some degree it is,
but it allows for loops to be an extremely powerful tool - it can technically do everything that other loops can.

However, it's useful to know some common uses and 'templates' to use when working with for loops.
I'll be covering two main 'templates':
* Ascending Counting
* Descending Counting

##### Ascending Counting
Ascending counting is just counting up from a start number to an end number, increasing by a 'step' number each time.

The 'template' has 3 values:
```
start - The number to start at (inclusive)
end - The number to end at (exclusive)
step - The number to increase by each repeat
```
In the template, these can be replaced with either variables, or values.

The template is structured like this:
```c#
for (int i = start; i < end; i += step)
{
    //Code goes here
}
```
This will set the variable 'i' to the start value, then check if 'i' is less than the end value.
If it is, it will run the loop's code, then increase 'i' by the step value. The loop will then repeat,
and when 'i' no longer less than the end value, the loop will end.

Here's an example:
```c#
for (int i = 2; i < 11; i += 2)
{
    Console.WriteLine(i);
}
```
This example will output the numbers '2, 4, 6, 8, 10' to the console.

Here's why:
1. 'i' is set to 2 ('i' = 2)
2. 'i' is less than 11, so the code runs and outputs 'i', which is 2
3. 'i' is increased by 2 ('i' = 4)
4. 'i' is less than 11, so the code runs and outputs 'i', which is 4
5. 'i' is increased by 2 ('i' = 6)
6. 'i' is less than 11, so the code runs and outputs 'i', which is 6
7. 'i' is increased by 2 ('i' = 8)
8. 'i' is less than 11, so the code runs and outputs 'i', which is 8
9. 'i' is increased by 2 ('i' = 10)
10. 'i' is less than 11, so the code runs and outputs 'i', which is 10
11. 'i' is increased by 2 ('i' = 12)
12. 'i' is not less than 11, so the loop exits

An even more common use of this 'template' is to count from 0 up to a number:
```c#
for (int i = 0; i < end; i++)
{
    //Code goes here
}
```
This will count up to 'end', starting at zero (the last value will be 'end' - 1).

##### Descending Counting
Descending counting is similar to ascending counting - it counts from the start value to the end value, but
it goes down, instead of up.

The 'template' has 3 values:
```
start - The number to start at (inclusive)
end - The number to end at (exclusive)
step - The number to decrease by each repeat
```
In the template, these can be replaced with either variables, or values.

The template is structured like this:
```c#
for (int i = start; i > end; i -= step)
{
    //Code goes here
}
```

Here's an example:
```c#
for (int i = 10; i > 1; i -= 2)
{
    Console.WriteLine(i);
}
```
This will do the same as the example for ascending counting, but in reverse.

There is another common use of this 'template':
The template is structured like this:
```c#
for (int i = start; i > 0; i--)
{
    //Code goes here
}
```

### Let's 'continue' after a Little 'break'
In C#, there are 2 keywords that can only be used inside loops:
* break
* continue

'break' will instantly exit the loop, and 'continue' will skip the rest of that repeat, and go to the next one:

```c#
int i = 0;
while (true) // true is always equal to true, so the loop will never normally exit
{
    if (i == 5)
    {
        break;
    }
    i++;
}
```
The loop above will exit once 'i' reaches 5.

```c#
for (int i = 0; i < 4; i++)
{
    if (i % 2 == 0) //Check if i is even
    {
        continue;
    }
    Console.WriteLine(i);
}
```
This loop will only write 1 and 3 to the console, because if 'i' is even, 
it skips the rest of the code in the loop, and goes to the next repeat.

