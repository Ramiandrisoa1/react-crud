import React, { Component } from 'react';
import './App.css';
import Table from './component/table/table';
import Form from './component/form/form';
import Modal from 'react-modal';

Modal.setAppElement('#root');
class App extends Component {
  state = {
    characters: [],
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className='container'>
        <button onClick={this.openModal}>Ajout</button>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayClassName={{
            base: 'overlay-base',
            afterOpen: 'overlay-after',
            beforeClose: 'overlay-before',
          }}
          className={{
            base: 'content-base',
            afterOpen: 'content-after',
            beforeClose: 'content-before',
          }}
          closeTimeoutMS={500}
        >
          <button onClick={this.closeModal}>close</button>
          <Form handleSubmit={this.handleSubmit} closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
}

export default App;
