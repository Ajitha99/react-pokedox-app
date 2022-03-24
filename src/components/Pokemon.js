
const Pokemon = ({ name, url }) => {
    return(
            <li className="collection-item">
                <a href = {url}> {name}</a>
            </li>  
    )
}

export default Pokemon