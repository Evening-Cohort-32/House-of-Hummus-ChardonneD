# Events and State Self-Assessment

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

1. Make sure you are in your `workspace` directory
1. `git clone {github repo SSH string}`
1. `cd` into the directory it creates
1. `code .` to open the project code
1. Use the `serve` command to start the web server
1. Open the URL provided in Chrome

## Requirements

### Initial Render

1. All 10 base dishes should be displayed as radio input options.
1. All 9 vegetables should be displayed as radio input options.
1. All 6 side dishes should be displayed as radio input options.
1. All previously purchases meals should be displayed below the meal options. Each purchase should display the primary key and the total cost of the purcahsed meal.

### State Management

1. When the user selects an item in any of the three columns, the choice should be stored as transient state.
1. When a user makes a choice for all three kinds of food, and then clicks the "Purchase Combo" button, a new sales object should be...
    1. Stored as permanent state in your local API.
    1. Represented as HTML below the **Monthly Sales** header in the following format **_exactly_**. Your output will not have zeroes, but the actual amount.
        ```html
        Receipt #1 = $00.00
        ```
   1. The user's choices should be cleared from transient state once the purchase is made.

## Design

Given the description and animation above...

1. Create an ERD for this application before you begin.
1. Make a list of what modules need to be created to make your application as modular as possible. Create a **Dependency Graph** for the project to be reviewed once you are complete with the assessment.
1. Create a **Sequence Diagram** that visualizes what your algorithm is for this project. We'll give you a minimal starting point.

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Should transient state be represented in a database diagram? Why, or why not?
   > Transient state shouldn't be represented in a ERD for its sole purpose of representing the structure of permenant data storage, structured. Due to transient state being temporary data held in the RAM during the UX, the only time the data becomes permanaent is when the clicking of the Purchase Combo is selected- sending the formatted data to match the database diagram and send to the API. 

2. In the **FoodTruck** module, you are **await**ing the invocataion of all of the component functions _(e.g. sales, veggie options, etc.)_. Why must you use the `await` keyword there? Explain what happens if you remove it.
   > Await is used b/c all the other components are functions that utilise fetch(), as they are asynchronous functions. The await tells the JS to pause and wait for the APO to send the data back before moving forward. 

   If removed, the JS will not wait for the data, returning a pending promise rather that the HTML components set up to render.

3. When the user is making choices by selecting radio buttons, explain how that data is retained so that the **Purchase Combo** button works correctly.
   > Data is retained through the transientState as a temporary holding area, continually updating. As a user clicks a readio button the document.addEventListener catches the 'change' event and capturaes the ID of the selected item. This ID is passed to a setter fuction, and held as temporary data called transientState object(s). 'When the user finally clicks the "Purchase Combo" button, that transientState object(s) is updated and turned into a JSON string, thus sending it to the API in a POST request. 

4. You used the `map()` array method in the self assessment _(at least, you should have since it is a learning objective)_. Explain why that function is helpful as a replacement for a `for..of` loop.
   > The .map() method is a simpler iteration tool without the additional code required in a for..of loop. FOr example you have to manually .push() each modified intem into an empty array. Where as a .map() method automatically iterates over an array and automatically reurns the raw data object into HTML strings, inside of a brand new array.

## Complete Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant Main
    participant FoodTruck
    participant Components as Entrees / Veggies / Sides
    participant Sales
    participant TransientState
    participant API

    Note over Main, API: 1. Initial Render
    Main->>FoodTruck: renderAllHTML() / FoodTruck()
    
    par Fetching Data
        FoodTruck->>Sales: Sales()
        Sales->>API: GET /purchases?_expand...
        API-->>Sales: purchases data
        Sales-->>FoodTruck: sales HTML string
    and
        FoodTruck->>Components: Entrees(), Veggies(), SideDishes()
        Components->>API: GET /entrees, /vegetables, /sideDishes
        API-->>Components: array data
        Components-->>FoodTruck: radio buttons HTML strings
    end
    
    FoodTruck-->>Main: Combined complete HTML
    Main->>User: Update DOM (Show app to user)

    Note over User, TransientState: 2. State Management
    User->>Components: Clicks a radio button
    Components->>TransientState: setEntree(), setVegetable(), or setSideDish()
    TransientState-->>TransientState: Update transient state object

    Note over User, Main: 3. Making a Purchase
    User->>Main: Clicks "Purchase Combo"
    Main->>TransientState: placeOrder()
    
    TransientState->>API: POST /purchases (Send transient state)
    API-->>TransientState: 201 Created (Order saved)
    
    TransientState->>Main: dispatchEvent "orderPlaced"
    
    Note over Main, User: 4. Re-render
    Main->>Main: Listens for "orderPlaced"
    Main->>FoodTruck: renderAllHTML() / FoodTruck()
    Note right of Main: The fetching process repeats, getting the new purchase!
```

## Dependency Graph

```mermaid
graph TD
    main.js --> FoodTruck.js
    main.js --> TransientState.js
    FoodTruck.js --> Sales.js
    FoodTruck.js --> Entrees.js
    FoodTruck.js --> Vegetables.js
    FoodTruck.js --> SideDishes.js
    Entrees.js --> TransientState.js
    Vegetables.js --> TransientState.js
    SideDishes.js --> TransientState.js
``` 
