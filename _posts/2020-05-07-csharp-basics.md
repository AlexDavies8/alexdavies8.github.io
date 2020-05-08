---
title: "C# Basics"
date:   2020-05-07 +0100
categories: tutorials csharp
---
In this first tutorial about the C# programming language, I hope to explain some of the basics of C#, as well as some basic programming concepts.

## Basic Syntax
In C#, there are a couple of basic syntax rules to follow:
* Lines of coding statements must end in a semicolon (';')
* Blocks of code are enclosed within curly brackets

In C#, mathematical expressions work as you would expect - brackets are processed first, then multiplication
and division, then finally addition and subtraction.
However, the multiply sign is *, and the divide sign is /.

Examples: 
* (3 + 5) * 10 / 2 = 40
* 3 + 5 * 10 / 2 = 28

There is also another operator called modulo (or modulus), which will give you the remainder of the left number when divided by the right one.
It looks like this: %

Example: 10 % 3 = 1, because 10 / 3 = 3 r 1

When creating a Console App in Visual Studio Community, it will automatically generate some code for you:

```c#
using System;

namespace AppName
{
    class Program
    {
        static void Main(string[] args)
        {
            //All code goes here (for now)
        }
    }
}
```

The AppName after 'namespace' will be the name that you gave to your app.
For now, none of this needs to make sense, but all of your program's code should go inside Main.

<details>
    <summary>What does it mean? (Advanced)</summary>

<br>

The following is not something you need to understand at this point, but I'm including it for anyone who is interested.

```c#
using System;
```
This is an import statement, that says you would like to use a built-in package of code named 'System'.
This allows you to access Methods like Console.WriteLine() and Console.ReadLine().

```c#
namespace AppName
```
A namespace is essentially just a way to separate out code into different named sections.
This is not essential, but is good practice, and you can only access other code
from within the same namespace (with some exceptions). This will be explored in further detail
when we learn about Scopes and Accessors.

```c#
class Program
```
This creates a new 'class' of object, called Program. This class can then be accessed (from outside of itself)
by it's 'Type', which for classes is it's name. This will be explained in further detail when talking about Classes.

```c#
static void Main(string[] args)
```
Above is the main function for the class 'Program'. This is run automatically, as it is a special case of a Method,
and it is static, so it doesn't require an instance of Program to run. This will be explained when we learn about Scopes and Accessors, 
as well as partially in Classes.

</details>
<br>

## Built-In Methods
A Built-In Method is a pre-written block of code that can be run within your own program.
These are often used for basic input and output, and other very common procedures.
The two most important Built-In Methods for now are Console.WriteLine() and Console.ReadLine().
Console.WriteLine() allows you to output text to the console.
Console.ReadLine() allows you to get text input from the console.
Below is an example of both:
```c#
Console.WriteLine("Hello World!");
Console.WriteLine("Enter your name:");
string name = Console.ReadLine()
```
This code would output the following:
```
Hello World!
Enter your name:

```
Console.WriteLine() takes one 'parameter' - a piece of data that you can pass in to the Method.
For this Method, the parameter is the text we want to output. (We can also pass in other Types, and it will output them as text)

Console.ReadLine() doesn't take any 'parameters', but 'returns' a value, which we store in a variable called name.
More about that in the following section:

## Variables
'A variable is a named location in memory used to store a value.'

That's the 'standard' definition of a variable, but what does it actually mean?
Well, a variable can be thought of a a piece of data that you can store and give a name to, so you can use it later.

A variable has three main components:
* A Type
* A Name
* A Value

C# is a strongly typed language, which means that you need to explicitly tell the program what type
every variable is. This is very different compared to some other languages such as Python or Javascript, where you don't need
to tell the program what Type something is.

In C#, you can declare a variable as follows:
```c#
int numberOfSides;
```
In the above example, a variable of type integer (whole number), called 'numberOfSides' is declared, but
it isn't set to anything: we haven't given it a value yet.

You can assign a value to a variable as follows:
```c#
numberOfSides = 5;
```
Here, we are setting the value of 'numberOfSides' to 5. Note that we need to have run the previous example first:
A variable cannot be assigned until it is declared.

We can, however, assign the variable a value when it is declared:
```c#
int numberOfSides = 5;
```
This time, we are declaring a variable called 'numberOfSides', and assigning it the value of 5, all in one line - Neat!

### More about Types
C# is an object oriented language, which means that everything (almost) is an 'object'.

Each of these 'objects' can be accessed by a Type - the name of what 'Type' of object it is:
For integers, the Type is an 'int', for single characters of text, the Type is a 'char', and so on.

Below is a table of common Types in C#:

| Type of object | Type Keyword |
| -------------- | ------------ |
| Boolean (True/False) | bool |
| Integer (Whole Number) | int |
| Float (Decimal Number) | float |
| Double (Decimal Number - Precise) | double |
| Character | char |
| String (Text) | string |

There are other types as well, but these are by far the most common.

Notes: 
* Float values are followed by an 'f' - e.g. 2.16f
* String values are enclosed in quotation marks (" ") - e.g. "Hello"
* Boolean values are lower case - true/false

<details>
    <summary>Even More about Types (Advanced)</summary>

<br>

There are actually two categories of Types:
* Value Types
* Reference Types

Value Types are copied every time they are changed or passed around, so they are usually used to store small amounts
of data, such as an integer or float.

Reference Types are passed around via a 'reference', which is a piece of data that points to the stored 'value'.
These 'references' are then passed around and copied, which is faster and easier than copying the entire 'value'
around, but only for larger amounts of data, such as strings.

This difference isn't massively important now, but it will be when we talk about Methods and Classes.

</details>
<br>

### Type Casting
In C#, you can convert between different types using Type Casting.

There are two types of Type Casting in C#:
* Implicit Casting
* Explicit Casting

#### Implicit Casting
Implicit casting is done automatically, when trying to convert from a less precise type to a more precise type, for example an integer to a float.
```c#
int myInt = 5;
float myFloat = myInt;
```
The above code will work perfectly fine - myFloat will be assigned the value 5.

However, when converting to less precise types, Implicit casting won't work.
The above code will result in an error. Here, we need Explicit Casting.

#### Explicit Casting
Explicit casting is manual, and used when converting from a more precise type to a less precise type, such as a float to an integer.

An example of explicit casting can be seen below:
```c#
float myFloat = 5.7f; //The 'f' denotes that this is a float, rather than a double
int myInt = (int)myFloat;
```
Now it will run fine!

To Explicitly Cast a value (or variable), you just put the Type you want to cast to in parantheses infront of it. It's that simple!

Note that the result of the cast is generally rounded down, so myInt is set to 5, not 6.

#### String Casting
For strings, casting works a little bit different. To convert to a string from another Type, you need to call .ToString() on the variable:
```c#
float myFloat = 6.73f; //The 'f' denotes that this is a float, rather than a double
string myString = myFloat.ToString();
```
This works for all types.

Converting from a string is more complicated. You need to call the 'Parse' (or 'TryParse') method of a Type, passing the string as a parameter:
```c#
string myString = "3.241";
float myFloat = float.Parse(myString);
```
This may not make much sense for now, but it will be explained in more depth when we learn about Methods in more detail.

#### String Concatenation
To combine strings in C#, in most cases you can simple add them together as follows (even if they're different types):
```c#
string firstString = "Hello, ";
string name = "Dave! ";
int myInt = 7;
Console.WriteLine(firstString + name + myInt);
```
This will output
```
Hello, Dave! 7
```
If this doesn't work, you can explicitly cast any other types (like an integer) to a string as
described above.

## Exercises

Below are some exercises to try out your newfound knowledge. Each of them has the solution below it,
but try not to peek unless you get stuck.

### Hello Message
See if you can create a program that asks the user to enter their name, and then says hello back to them.

Example:
```
What's your name?
> Sarah
Hello Sarah!
```

<details>
    <summary>Hint</summary>
You can use Console.WriteLine() to output a string, and Console.ReadLine() to input a string.
</details>

<details>
    <summary>Solution</summary>

```c#
Console.WriteLine("What's your name?");
string name = Console.ReadLine();
Console.WriteLine("Hello " + name);
```
</details>
<br>

### Area Calculator
Create a program that asks for the width and height of a rectangle, then outputs it's area. (Assume the lengths are integers)

Example:
```
Enter Width:
> 6
Enter Height:
> 3
Area: 18
```

<details>
    <summary>Hint</summary>
Try using int.Parse() to convert the input to an integer.
</details>

<details>
    <summary>Solution</summary>

```c#
Console.WriteLine("Enter Width:");
string widthString = Console.ReadLine();
int width = int.Parse(widthString);

Console.WriteLine("Enter Height:");
string heightString = Console.ReadLine();
int height = int.Parse(heightString);

int area = width * height;

Console.WriteLine("Area: " + area);
```
</details>
<br>