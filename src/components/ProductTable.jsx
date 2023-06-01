import { useState } from "react";
import ProductRow from "./ProductRow";

function ProductTable(prop){

    const [pro, proP] = useState(prop.pro)
    return(
        <table>
            <tr>
                <th>NAME</th>
                <th>PRICE</th>
            </tr>
            <tr>
                {pro.map((p) => (
          <ProductRow product ={p}/>
                ))}
            </tr>
        </table>
    )

}

export default ProductTable