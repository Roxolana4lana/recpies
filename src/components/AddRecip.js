import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar'
import posed from 'react-pose';

const MyForn = posed.div({
    exit: {
        x: '-300%'
    },
    enter: {
        x: '0'
    }
});

class AddRecip extends Component {
    state = {
        title: '',
        components: [{ name: '', amount: '' }],
        directions: '',
        titleError:'',
        directionsError: ''
    }

    handleAdd = e => {
        e.preventDefault()
        this.setState((prevState) => ({
            components: [...prevState.components, { name: "", amount: "" }]
        }))
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
    Validate = () => {
        let titleError = ''
        let directionsError = ''
        if (this.state.title === '') {
            titleError = 'can not be empty'
        }
        if (this.state.directions === '') {
            directionsError = 'can not be empty'
        }
        if (titleError || directionsError) {
            this.setState({
                titleError, directionsError
            })
            return false
        }
        return true
    }
    handleSubmit = e => {
        e.preventDefault()
        const obj = {
            title: this.state.title,
            components: this.state.components,
            directions: this.state.directions
        }
        if (this.Validate()) {
        axios.post(`http://127.0.0.1:8000/recipes/`, obj)
       
            .then(res =>
                console.log(res.data)
            )
            .then(this.props.history.push("/seemine"))
            .catch((err) => {
                console.log(err)
            })
           
        } else{
            console.log('not valid')
        }
    }

    render() {
        return (
            <div className='addNew'>
                <NavBar/>
                <MyForn className='addForm' initialPose="exit" pose="enter">
                <form onSubmit={this.handleSubmit} >
                    <div className='ElementForm'>
                        <label> The title </label>
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange}
                            name='title'
                            className='title'/>
                        <p className='error'>{this.state.titleError}</p>  
                    </div>
                    <div className='ElementForm'>
                        <label > <h4>Ingredients:</h4> </label> 
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
                                
                                        <button className='one' type='button' onClick={() => this.handleRemove(index)} style={{ marginTop: '1rem' }}>X</button>
                                        <button type='button' onClick={(e) => { this.handleAdd(e) }} style={{ marginTop: '1rem' }}>Add</button>
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
                        <p className='error'>{this.state.directionsError}</p>  
                    </div>
                    <button style={{ marginTop:'1rem'}}>Save</button>
               </form>
                    </MyForn>
            </div>
        )
    }
}

export default AddRecip;
