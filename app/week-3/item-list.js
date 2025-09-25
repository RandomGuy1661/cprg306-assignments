import Item from "./item";

export default function ItemList(){
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };
    
    const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };
    
    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    };
    
    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };
    
    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };
    
    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };
    
    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };
    
    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    };
    
    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };
    
    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    };
    
    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    };
    
    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };

    return(
        <ul className="bg-amber-950 rounded-2xl m-3 p-4">
            <li><Item i = {item1}/></li>
            <li><Item i = {item2}/></li>
            <li><Item i = {item3}/></li>
            <li><Item i = {item4}/></li>
            <li><Item i = {item5}/></li>
            <li><Item i = {item6}/></li>
            <li><Item i = {item7}/></li>
            <li><Item i = {item8}/></li>
            <li><Item i = {item9}/></li>
            <li><Item i = {item10}/></li>
            <li><Item i = {item11}/></li>
            <li><Item i = {item12}/></li>
        </ul>
    )
};