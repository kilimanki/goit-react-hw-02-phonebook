import { Component } from 'react';
import Form from './Form/Form';
import { List } from './List/List';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';
class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  addContacts = ({ name, number }) => {
    if (this.alreadyAdded({ name })) {
      alert(`${name} is already added`);
      return;
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return { contacts: [...contacts, newContact] };
    });
  };
  alreadyAdded = ({ name }) => {
    const { contacts } = this.state;

    const filtered = contacts.find(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    return filtered;
  };

  deleteContacts = id => {
    this.setState(prevState => {
      const newItems = prevState.contacts.filter(item => item.id !== id);
      return {
        contacts: newItems,
      };
    });
  };

  filteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const result = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    return result;
  }
  render() {
    const items = this.filteredContacts();
    return (
      <>
        <Form onSubmit={this.addContacts} />
        <h2 className={css.title}>Contacts</h2>
        <div className={css.block}>
          <input type="text" name="filter" onChange={this.handleChange} />
          <List items={items} onclick={this.deleteContacts} />
        </div>
      </>
    );
  }
}
export default Contacts;
