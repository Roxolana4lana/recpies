import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Navigation = () => {
    return (
        <div className="NavBar">
            <ul>
                <li><Link to='/'>Main page</Link></li>
                <li><Link to='/add'>Add recipe</Link></li>
                <li><Link to='/seemore'>Find more</Link></li>
                <li><Link to='/seemine'>Your List</Link></li>
            </ul>
        </div>
    )
}
export default withRouter(Navigation)