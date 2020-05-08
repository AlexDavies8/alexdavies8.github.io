---
title: "C# Selection"
date:   2020-05-08 11:49 +0100
categories: tutorials csharp
---
Selection is a decision made by the program, and depending upon certain criteria, it will
run different sections of code.

### Boolean Statements
Selection always requires some kind of criteria. In C#, this is something called a
Boolean Statement. A Boolean Statement is an expression that will result in a true or false
when computed.

Here's a very simple example:
```c#
5 < 3
```
This is a boolean statement, and it asks if 5 is less than 3.
Obviously, it isn't so this statement always evaluates to false.

However, you can also create boolean statements that involve variables:
```c#
myInt < 3
```
This statement might evaluate to either true or false, depending on the value of
'myInt'.

Below is a table of boolean operators to use in statements:
|      Name      |   Operator   |
| -------------- | ------------ |
| Equal To | == |
| Not Equal To | != |
| Less Than | < |
| Greater Than | > |
| Less Than or Equal To | <= |
| Greater Than or Equal To | >= |

You can also invert the value of a statement with an !.

Furthermore, it is possible to combine statements.

There are two main operators used to combine statements:
* And - &&
* Or - ||
&& will evaluate to true only if both sides are true.
|| will evaluate to true if either of the sides are true.

Parenthesis are used to show precedence.

```c#
(myInt <= 5 && myInt > 1) || myInt == 10
```
This statement will evaluate to true if 'myInt' is both less than or equal to 5, AND 
greater than 1, OR if 'myInt' is equal to 10.

### If Statements
If Statements are by far the most straightforward example of selection. They allow us
to run certain blocks of code depending upon whether a Boolean Statement is true or not.

If Statements require the 'if' keyword, followed by a pair of parentheses containing a
Boolean Statement. Then, any code inside it is enclosed in curly brackets.

Here is an example of an If Statement:
```c#
if (myInt < 10)
{
    Console.WriteLine("Small");
}
```
The code inside the curly brackets will only be run if the Boolean Expression in the
parentheses is true.

But what if you want to run some other code if the condition isn't true? That's where
'else' comes in.

An Else Statement must come after the end of an If Statement, and it uses the keyword 'else'.
```c#
if (myInt < 10)
{
    Console.WriteLine("Small");
}
else
{
    Console.WriteLine("Large");
}
```

You can also chain If Statements and Else Statements:
```c#
if (myInt < 10)
{
    Console.WriteLine("Small");
}
else if (myInt < 20)
{
    Console.WriteLine("Medium");
}
else
{
    Console.WriteLine("Large");
}
```
This example will output "Small" if 'myInt' is less than 10.
Otherwise, it will output "Medium" if 'myInt' is less than 20.
Otherwise, it will output "Large".

### Switch Statements
Switch Statements are not as commonly used as If Statements,
can't do anything that If Statements cannot do, but are much more compact in certain
situations. (And can be faster, but it's unlikely to ever matter).

Switch Statements don't work based on Boolean Statements. Instead, they work on 'Cases'.
A Switch Statement starts with the keyword 'switch', followed by a pair of parentheses
containing a variable (or value). All of the cases are then enclosed within curly braces.

A Case defines code to be run if the variable is equal to a specific value, and uses the keyword
'case', followed by the value of the case, then a ':' and then case's code.

The case's code must also end in 'break;', to 'break' out of that case.

```c#
switch (dayNumber)
{
    case 1 : Console.WriteLine("Monday"); break;
    case 2 : Console.WriteLine("Tuesday"); break;
    case 3 : Console.WriteLine("Wednesday"); break;
    case 4 : Console.WriteLine("Thursday"); break;
    case 5 : Console.WriteLine("Friday"); break;
    case 6 : Console.WriteLine("Saturday"); break;
    case 7 : Console.WriteLine("Sunday"); break;

    default: Console.WriteLine("Day Invalid"); break;
}
```
Quite complicated compared to If Statements, isn't it, but much smaller and more easily readable.
The 'default' case is a special case that only runs if no other case does.

## Exercises
Below are some exercises to try out Selection with. Try not to peak at the solution unless you're stuck.

### Test Grades
Create a program that allows the user to enter their percentage (as an integer) on a test, and then outputs a grade based on the
following boundaries:
* A - 80
* B - 70
* C - 55
* D - <55

Example:
```
Enter Percentage: 
> 78
Your Grade: B
```

<details>
    <summary>Hint</summary>
You can chain if and else statements, and check if the percentage is greater than or equal to each boundary.
Start with the highest boundary in your first If Statement, then go down in order of size.
</details>

<details>
    <summary>Solution</summary>

```c#
Console.WriteLine("Enter Percentage:");
int percentage = int.Parse(Console.ReadLine());

if (percentage >= 80)
{
    Console.WriteLine("Your Grade: A");
}
else if (percentage >= 70)
{
    Console.WriteLine("Your Grade: B");
}
else if (percentage >= 55)
{
    Console.WriteLine("Your Grade: C");
}
else
{
    Console.WriteLine("Your Grade: D");
}
```
</details>
<br>

### Fruit Colours
Create a program that lets the user enter a colour, and then output a fruit of that colour.
You can use these fruits to get started:
* Yellow - Banana
* Red - Strawberry
* Green - Apple
* Purple - Grape
* Orange - Orange
If not fruit has that colour, output "I don't know a fruit with that colour!".

Example:
```
Enter a Colour:
> Green
An Apple is Green!
```

<details>
    <summary>Hint</summary>
You should use a switch statement, as all of the possibilities are discrete: you're only
checking if something is equal.
</details>

<details>
    <summary>Solution</summary>

```c#
string colour = Console.ReadLine();
switch (colour)
{
    case "Yellow": Console.WriteLine("A Banana is Yellow"); break;
    case "Red": Console.WriteLine("A Strawberry is Red"); break;
    case "Green": Console.WriteLine("An Apple is Green"); break;
    case "Purple": Console.WriteLine("A Grape is Purple"); break;
    case "Orange": Console.WriteLine("An Orange is Orange"); break;
}
```
</details>
<br>