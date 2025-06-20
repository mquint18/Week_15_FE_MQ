//Brings the DefaultItems array into a React component

interface DefaultItemsProps {
    
    Name: string;
    Quantity: number;
    Picture: string;
    
}

const ListItems: React.FC<DefaultItemsProps> = ({ Name, Quantity, Picture}) => {
    return(
        <div className ='item-card' >
            <div className ='text-center' >
                <h2 className = 'mb-0'><strong>{Name}</strong></h2>
                <h4 className = 'mb-0'>Amount: {Quantity}</h4>
                <img src= {Picture} />
                <p className = 'mb-0'>Ref#: {Id}</p>
            </div>
        </div>
    )
}


export default ListItems