import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar'


class AddRecip extends Component {
    state = {
        title: '',
        components: [{ name: '', amount: '' }],
        directions: ''
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            components: [...prevState.components, { name: "", amount: "" }],
        }));
    }

    handleChangeIngredients = e => {
        let components = [...this.state.components]
        components[e.target.dataset.id][e.target.name] = e.target.value
        this.setState({
            components
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRemove = index => {
        this.state.components.splice(index, 1)
        this.setState({ components: this.state.components })
    }

    handleSubmit = e => {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            components: this.state.components,
            directions: this.state.directions
        }

        axios.post(`http://127.0.0.1:8000/recipes/`, obj)
            .then(res =>
                console.log(res.data)
            )
        this.setState({
            title: '',
            components: [{ name: '', amount: '' }],
            directions: ''
        })
    }

    render() {
        return (
            <div className='addNew'>
                <NavBar/>
                <form onSubmit={this.handleSubmit} className='addForm'>
                    <div className='ElementForm'>
                        <label> The title </label>
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange}
                            name='title'
                            className='title'/>
                    </div>
                    <div className='ElementForm'>
                        <label style={{color: 'white'}}> <h4>Ingredients:</h4> </label> 
                        {this.state.components.map((component, index) => {
                            return (
                                <span key={index}>
                                   <div>
                                    <label > Name </label>

                                        <input
                                            type='text'
                                            value={this.state.components[index].name}
                                            onChange={this.handleChangeIngredients}
                                            name="name"
                                            className="name"
                                            id={index}
                                            data-id={index}/>
                                    </div>   
                                    <div className='ElementForm'>
                                        <label >Amount </label>

                                        <input
                                            type='text'
                                            value={this.state.components[index].amount}
                                            onChange={this.handleChangeIngredients}
                                            name="amount"
                                            className="amount"
                                            id={index}
                                            data-id={index}/>
                                
                                        <button className='one' onClick={() => this.handleRemove(index)}>X</button>
                                        <button onClick={(e) => { this.handleAdd(e) }}>Add</button>
                                    </div>
                                </span> 
                            )
                        })}
                    </div>
                    <div className='ElementForm'>
                        <label> Directions </label>

                        <input
                            type='text'
                            value={this.state.directions}
                            onChange={this.handleChange}
                            name='directions'
                            className='directions'/>
                    </div>
                    <button style={{float:'left'}}>Save</button>
                </form>
            </div>
        )
    }
}

export default AddRecip;