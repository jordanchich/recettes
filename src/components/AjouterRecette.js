import React, { Component } from 'react';

class AjouterRecette extends Component {
    state = {
        nom:'',
        image:'',
        ingredients:'',
        instructions:''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]:value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const recette = {...this.state}
        this.props.ajouterRecette(recette)
        //Reset les champs du form
        Object.keys(recette).forEach(item => {
            recette[item] =''
        })
        this.setState({...recette})
    }


    render() {
        return (

            <div className="cards">

                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>

                    <input value={this.state.nom} onChange={this.handleChange} name="nom" type="text" placeholder="Nom de la recette"/>

                    <input value={this.state.image} onChange={this.handleChange} name="image" type="text" placeholder="Nom de l'image"/>

                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="5" placeholder="Liste des ingrédients"/>

                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="5" placeholder="Instructions"/>

                    <button type="submit">+ Ajouter une recette</button>
                    
                </form>
            </div>
        );
    }
}

export default AjouterRecette;