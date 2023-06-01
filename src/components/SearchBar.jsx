function SearchBar(prop){
    const products=prop.pro

    function search(digits){
        products.filter((p) => {
            return p.include(digits)
        })

    }

    return (
        <input type="text" onChange="" />

    )
}

export default SearchBar