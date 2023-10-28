const React = require('react')
const Default = require('./layouts/Default')

function Show ({ bread, index }) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
            </form>
            <h3>{bread.name}</h3>
            <p> 
                and it { bread.hasGluten ? <span> does </span> : <span> does NOT </span>} have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <div className="backButton">
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
} 

module.exports = Show
