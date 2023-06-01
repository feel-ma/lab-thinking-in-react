function ProductRow(prop){
 const p = prop.product
    return(
        <tr>
            {p.inStock ? (  <td>{p.name}</td>) : (  <td style={{ color: "red" }} >{p.name}</td>)}
              
            <td>{p.price}</td>
        </tr>
        )
}

export default ProductRow