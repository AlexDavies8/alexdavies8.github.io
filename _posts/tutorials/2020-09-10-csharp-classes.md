---
title: "C# Classes"
date:   2020-09-10 16:54
categories: tutorials csharp
order: 4
---
A class is a definition for an object type - it is a blueprint of sorts for an object, and can be 'instantiated'
via a custom type. They are integral to any program larger than a single file, and are the core of 'Object Oriented
Programming'.

A class is a collection of members, which include fields, properties, methods, to name but a few. Let's go over the
basic syntax for a class, and then touch upon the different types of members, and how to use them.

### Basic Syntax

```c#
public class MyClass
{
    // A Field
    public string myField;

    // A Property
    public int MyProperty { get; private set; }

    // A Method
    public void MyMethod()
    {
        Console.WriteLine("The value of 'myField' is {0}. The value of MyProperty is {1}", MyField, MyProperty);
    }
}
```
That's it!
The class itself is really simple - just a couple of keywords and a name. It follows the following structure:
```c#
public class ClassName
{
    // Members go here
}
```
We'll look at how to use the class shortly, but before that, I'll explain more about members.

### Members
#### Fields
A field is just the name for a variable within a class, and is therefore used exactly the same way, with one exception.
It also optionally has an 'access modifier', or 'scope'. This will be elaborated on further when we learn about Accessors
and Scope, but for now, just know that `public` allows you to access the field from outside of the class, while
`private` (the default if no scope is given) only allows you to access it from inside the class.

#### Properties
Properties act similarly to fields, but have more control over scope and access, and therefore will be treated the same for now,
but will be properly explained in Accessors and Scope.

#### Methods
Methods are no different here when you have already used them, but don't require the `static` keyword at the start. `public` and `private` work the same way with methods as with fields.

Now that we understand the three most common types of member, let's move on to actually using a class.

### Instantiation
Once you have created a class, you can access it using it's name as a type. Here is an example of declaration, using the class from earlier:
```c#
MyClass myClassObject;
```
So far, this works the same as declaring any other variable.
Next comes assignment:
```c#
myClassObject = new MyClass();
```
Now, this is different. The keywork `new` is required to show that you want to create a new 'instance' of the class. You also need to state which class you want to make
an 'instance', which in this case is `MyClass`. Finally, you need brackets after the class name. These may seem useless now, but will be important later.

Note: 
You can declare and assign an instance of a class on the same line, just like with any other variable.
```c#
MyClass myClassObject = new MyClass();
```

### Using an Instance
Now that we have an instance of the class, we can access and manipulate it's members - it is essentially a 
variable, with our own custom type.

You can access members using a `.`, for example:
```c#
myClassObject.myField = "Hello World!";
myClassObject.MyProperty = 8;
myClassObject.MyMethod();
```

### The Constructor
There is a special method on a class called a 'Constructor', and it is the method run when you instantiate the class.
It appears to be an unnamed method, but in reality, it has the same signature as when you use `new MyClass()`.
```c#
public class MyClass
{
    public MyClass()
    {
        // Run code in here
    }
}
```
Any code in the constructor will be run when the class is instantiated.
You can also pass parameters to the constructor.
```c#
public class MyClass
{
    public int number;

    public MyClass(string numberAsString)
    {
        name = int.Parse(numberAsString);
    }
}
```
This can then be used as follows:
```c#
MyClass myClassObject = new MyClass("15");
Console.WriteLine(myClassObject.number);
```
Giving the output `15`.

### Potential Uses
Classes are useful in countless situations, but many common ones include to separate logic and code into neat,
self-contained chunks, to carry multiple values between methods, instead of using a lot of parameters, handling multiple
instances of the same type of data, for example products in a store.

### A Worked Example
We will now build a simple class for a product within a store.

```c#
public class Product
{
    // Fields
    public float price;
    public string label;
    public int stock;

    // Constructor
    public Product(float _price, string _label, int _stock)
    {
        price = _price;
        label = _label;
        stock = _stock;
    }

    // Get Combined Price for all remaining stock
    public float GetPriceForAll()
    {
        float priceForAll = price * stock;
        return priceForAll;
    }

    public float GetPriceFor(int amount)
    {
        // If requesting more than is in stock, give price for all remaining stock
        if (amount > stock)
        {
            return GetPriceForAll();
        }

        int priceFor = amount * price;
        return priceFor;
    }
}

// Inside Main()

// Set up products
Product cookies = new Product(0.49f, "Freshly Baked Cookies", 14);
Product cake = new Product(2.99f, "Delicious Cakes", 2);

// Ask to buy cookies
Console.WriteLine("How many {0} would you like?", cookies.label);
int cookieCount = int.Parse(Console.ReadLine());
float cookiePrice = cookies.GetPriceFor(cookieCount);
Console.WriteLine("That will be £{0}.", cookiePrice);

// Ask to buy cookies
Console.WriteLine("How many {1} would you like?", cake.label);
int cakeCount = int.Parse(Console.ReadLine());
float cakePrice = cake.GetPriceFor(cookieCount);
Console.WriteLine("That will be £{0}.", cakePrice);

// Output Total
float total = cookiePrice + cakePrice;
Console.WriteLine("That will be £{0} in total.", total);
```
This program will ask the user how many cookies they wish to buy and output the cost, then
do the same for cake, and finally output a total cost.

Note how the products can calculate their own price, meaning you don't need to know how to do that from
the main program, because the class handles it.
Additionally, instead of having to keep track of three extra variables for each product - a price, label and stock,
we just keep track of the product itself, and it stores them internally, resulting in less work, and cleaner code.

## Exercises
Below are a couple of exercises to try out classes with.

### Travelling the Distance
Create a `Car` class that has a `speed` field, and a `journeyTime` field, and use them to calculate and output the distance travelled
by the `Car` class in a method called `OutputDistance()`.

Test the program with the following code (in `Main()`)
```c#
Car car1 = new Car();
car1.speed = 40.0f; // 40km/h
car1.journeyTime = 2.5f; // 2 hours and a half
car1.OutputDistance();

Car car2 = new Car();
car2.speed = 52.0f; // 25km/h
car2.journeyTime = 4.25f; // 4 hours and a quarter
car2.OutputDistance();
```
This should output:
```
Travelled 100km
Travelled 221km
```

<details>
    <summary>Solution</summary>

```c#
public class Car
{
    public float speed;
    public float journeyTime;

    public void OutputDistance()
    {
        float distance = speed * journeyTime;
        Console.WriteLine("Travelled {0}km", distance);
    }
}
```
</details>
<br>

### Busy Busses
Create a `Bus` class that can keep track of how many passengers are currently on board, the bus's total capacity, as well as the total money in fares.
The fare price and capacity should be set in the constructor, and it should have 4 methods: `GetOn(int amount)`, which allows an amount of people to board the bus, charging them the fare on the way on; `GetOff(int amount)`, 
which allows an amount of people to exit the bus; `GetPassengerCount()`, which should return the current number of passengers on board; and `GetTotalMoney()`, which returns the total money made from fares.

Test the program with the following code (in `Main()`)
```c#
Console.WriteLine("Double Decker:");
Bus doubleDecker = new Bus(1.40f, 80);
doubleDecker.GetOn(52);
doubleDecker.GetOff(23);
Console.WriteLine("Passegers: {0}", doubleDecker.GetPassengerCount());
doubleDecker.GetOn(7);
Console.WriteLine("Total Money: £{0}", doubleDecker.GetTotalMoney());

Console.WriteLine("Minibus:");
Bus minibus = new Bus(2.30f, 14);
minibus.GetOn(6);
minibus.GetOff(4);
minibus.GetOn(7);
minibus.GetOn(2);
minibus.GetOff(5);
Console.WriteLine("Total Money: £{0}", minibus.GetTotalMoney());
```
This should output:
```
Double Decker:
Passengers: 29
Total Money: £86.20
Minibus:
Total Money: £34.50
```

<details>
    <summary>Solution</summary>

```c#
public class Bus
{
    float fare;
    int capacity;

    float totalMoney;
    int passengerCount;

    public Bus(float _fare, int _capacity)
    {
        fare = _fare;
        capacity = _capacity;

        totalMoney = 0.00f;
        passengerCount = 0;
    }

    public void GetOn(int amount)
    {
        totalMoney += amount * fare;
        passengerCount += amount;
    }

    public void GetOff(int amount)
    {
        passengerCount -= amount;
    }

    public int GetPassengerCount()
    {
        return passengerCount;
    } 

    public int GetTotalMoney()
    {
        return totalMoney;
    } 
}
```
</details>
<br>