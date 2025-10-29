export default function Item( {i} ){

    //let {name, quantity, category} = props;
    
    return(
        <div className="p-4 m-4 bg-amber-800 font-sans rounded-4xl">
            <ul>
                <li className="font-bold">Name: {i.name}</li>
                <li>Quantity: {i.quantity}</li>
                <li>Category: {i.category}</li>
            </ul>
        </div>
    )
};