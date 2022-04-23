import { Component } from 'react';

import NavBar from '../navbar/navbar';
import CategorieTab from '../cetegories/categorie-tab';
import HistoryTab from '../history/histrory-tab';
import BudgetTab from '../budget/budget-tab';
import ProfileTab from '../profile/profile-tab';
import PageName from '../pages-name/pages-name';
import ButtonGreen from '../buttons/buttons';

import './App.css';
import Buttons from '../buttons/buttons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name:'Покупки', img: 'bi bi-bag-fill', sum: 5000, id: 1, history: []},
        {name: 'Здоровье', img: 'bi bi-heart-pulse-fill', sum: 3340, id: 2, history: []},
        {name: 'Транспорт', img: 'bi bi-basket2-fill', sum: 1150, id: 3, history: []},
        {name: 'Жилье', img: 'bi bi-basket2-fill', sum: 3000, id: 4, history: []},
        {name: 'Развлечения', img: 'bi bi-basket2-fill', sum: 3000, id: 5, history: []},
      ],
      money: null,
      tab: {
        index: 0,
        name: 'Категории'
      }
    }
    this.maxId = 6;
  }

  addItem = () => {
    if (this.maxId <= 12) {
      const newItem = {
        name: 'Новая категория',
        img: 'bi bi-basket2-fill',
        sum: 0,
        id: Date.now(),
        history: []
      }

      this.maxId++;

      this.setState(({data}) => {
        const newArr = [...data, newItem];

        return {
          data: newArr
        }
      })
      console.log(this.maxId)
    }
  }

  openModal = (id) => {
    this.setState(({data}) => {
      const index = data.find(elem => elem.id === id);
      console.log('Open  ',index);
    })
  }

  changeNameAndSum = (id, value, name) => {
    console.log('на вход ', id, ' ', value);

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
            return {...item, [name]: value}
        };
        return item;
      })
    }))
  }

  deleteCard = (id) => {
    this.setState(({data}) => {
      return {
          data: data.filter(item => item.id !== id)
      }
    })
    --this.maxId
    console.log(this.maxId)
  }

  onToggleTab = (index, name) => {
    this.setState({
      tab: 
        {index, name}
    })
  }
  
  
  render() {
    const {data} = this.state;
    const {index, name} = this.state.tab;

    return (
      <div className="App">
        <PageName 
                namePage={name}
                onAdd={this.addItem}/>
        <CategorieTab
          data={data} 
          openModal={this.openModal}
          deleteCard={this.deleteCard}
          changeNameAndSum={this.changeNameAndSum}
          tabIndex={index}/>
        <HistoryTab
          tabIndex={index}/>
        <BudgetTab
          tabIndex={index}/>
        <ProfileTab
          tabIndex={index}/>
        <NavBar
          onToggleTab={this.onToggleTab}
          tabIndex={index} />
        <ButtonGreen
          name={'Пополение'}
          index={index} />
      </div>
    );
    }
}

export default App;
