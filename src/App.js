import React from 'react';
import Header from './Header'
import Options from './Options'
import Action from './Action'
import AddOption from './AddOption'
import PropTypes from 'prop-types'

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
        options: props.options
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillMount() {
    console.log('ComponentWillmount');
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  // handleAddOptions
  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid Value to Add Item';
    } else if (this.state.options.indexOf(option) > - 1) {
      return 'This Option already exists';
    }

    // we use concat to copy the array into a new array. Like spread O. We cant directly manipulate state

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  //handlePick - pass down to Action and setup 
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }


render() {
  const title = 'Malolwane';
  const subtitle = 'Ive never known love like these';

    return (
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
