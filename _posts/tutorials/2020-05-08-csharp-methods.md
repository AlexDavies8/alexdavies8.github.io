---
title: "C# Methods"
date:   2020-05-08 11:50 +0100
categories: tutorials csharp
order: 4
---
In C#, a Method is a code block containing a series of statements. This Method can then be 'called',
to run the code inside that block. Methods can also have 'parameters', and a 'return Type'.

Methods are one of the fundamental parts of programming, and allow for cleaner, more easily readable code,
and reusability - the same code can be used many times, instead of typing it out every time.

Generally, it is good practice to have each Method only carry out one procedure or function, and separate
your code into Methods as much as is (reasonably) possible.

### Basic Method Syntax
Methods have a specific syntax that needs to be followed. You can declare a method as follows:
```c#
static void MethodName()
{
    //Code goes here
}
```
First, we use the 'static' keyword. This will be explained in Accessors and Scope, but for now we
need it so we can access the method from Main. 

Next comes the 'return Type' of the Method.

Then, we have the Method Name. This is the name you give the Method, so that you can call it by that name later.

Next there is the parameters - they are placed within the two parentheses, but since this Method has no parameters,
the parentheses are empty.

Finally, we surround all of the code inside the Method with a pair of curly brackets.

#### Calling Methods
Calling Methods is very easy. In fact, if you have ever used Console.WriteLine() or Console.ReadLine(), you've
done it already!

To call a Method, you type it's name, followed by parenthesis containing all the parameters you wish to pass in.

For example, if we define this Method:
```c#
static void MyMethod()
{
    Console.WriteLine("This was called from a Method!");
}
```
We can then call it as follows:
```c#
MyMethod();
```

### Return Types
Return Types are very important for Methods, as they allow the Method to pass data back to where is was called.
For the Return Type, you just use the Type of the value that you want to recieve; the same Type you would use for
declaring a variable.

'void' is a special keyword for the Return Type that means the Method doesn't return a value.

If the Return Type is something other than 'void', you need to use 'return' at the end of the Method to return the
value:
```c#
static int ReadInteger()
{
    Console.WriteLine("Enter an Integer:");
    string myString = Console.ReadLine();
    int myInt = int.Parse(myString);
    return myInt;
}
```
The returned value can then be accessed when called:
```c#
int chosenInt = ReadInteger();
```

### Parameters
Parameters are also extremely important, as they allow us to pass data into the Method.
Parameters are placed between the parentheses of the Method, after the name.

When declaring a parameter, it needs a Type and a Name:
```c#
static void FirstMethod(string username)
{
    Console.WriteLine(username);
}
```
In the example above, a parameter of Type string, named 'username' is declared for the Method.
Once it is declared, the parameter can be used like a normal variable inside the Method.

Parameters are then passed in when the Method is called:
```c#
FirstMethod("Dave");
```

## Exercises
Below are some exercises to try out Methods with. Try not to peak at the solution unless you're stuck.

### Area Method
Create a Method that takes a width and height as parameters (both integers),
and returns another integer for the area. You can modify your code from the C# Basics tutorial, if you
did that exercise.

You can use this example code to get started, so you only need to write the Method (this code goes in Main):
```c#
Console.WriteLine("Enter Width:");
int width = int.Parse(Console.ReadLine());
Console.WriteLine("Enter Height:");
int height = int.Parse(Console.ReadLine());

int area = CalculateArea(width, height);

Console.WriteLine("Area: " + area);
```
You just need to create the CalculateArea Method (you can rename it if you want).

Example:
```
Enter Width: 
> 7
Enter Height: 
> 3
Area: 21
```

<details>
    <summary>Hint</summary>
Your Method needs two parameters, both an int,
and needs an int as it's Return Type.
</details>

<details>
    <summary>Solution</summary>

```c#
static int CalculateArea(int width, int height)
{
    int area = width * height;
    return area;
}
```
</details>
<br>

### Input Message
Create a Method with one parameter of a message, that it writes to the console. Then, it returns
the inputted string.

You can use this example code to get started, so you only need to write the Method (this code goes in Main):
```c#
string username = ReadWithMessage("What's your name?");
Console.WriteLine("Hi, " + username);
string favouriteColour = ReadWithMessage("What's your favourite colour?");
Console.WriteLine(favouriteColour + "? Mine too!");
```
You just need to create the ReadWithMessage Method (you can rename it if you want).

Example:
```
What's your name?
> Chris
Hi, Chris
What's your favourite colour?
> Yellow
Yellow? Mine too!
```

<details>
    <summary>Hint</summary>
Your method needs a string parameter, and it's Return Type should also be a string.
</details>

<details>
    <summary>Solution</summary>

```c#
static string ReadWithMessage(string message)
{
    Console.WriteLine(message);
    string response = Console.ReadLine();
    return response;
}
```
</details>
<br>