import React from 'react'

export default class NewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            textValue: 12312,
            selectValue: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleTextChange(event) {
        this.setState({
            textValue: event.target.value
        })
    }
    handleSelectChange(event) {
        this.setState({
            selectValue: event.target.value
        })
    }

    handleSubmit(event) {
        alert("submit value:"+this.state.value)
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    <textarea value={this.state.textValue} onChange={this.handleTextChange}/>
                </label>
                <label>
                    <select select value = {
                        this.state.selectValue
                    }
                    onChange = {
                        this.handleSelectChange
                    } >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>

                    </select>
                </label>
                <input type="submit" value="newForm" />
            </form>
        )
    }
}

