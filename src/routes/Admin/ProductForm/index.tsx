import { useParams } from "react-router-dom";

export default function ProductForm(){
    
    const params = useParams();
    
    return (
        <h1>Produto selecionado com id {params.productId}</h1>
    );
}