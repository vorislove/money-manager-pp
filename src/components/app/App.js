import { Component } from 'react';

import NavBar from '../navbar/navbar';
import CategorieCardArea from '../cetegories/categorie-card-area';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name:'Покупки', img: 'bi bi-bag-fill', sum: 5000, id: 1},
        {name: 'Здоровье', img: 'bi bi-heart-pulse-fill', sum: 3340, id: 2},
        {name: 'Транспорт', img: 'bi bi-basket2-fill', sum: 1150, id: 3},
        {name: 'Жилье', img: 'bi bi-basket2-fill', sum: 3000, id: 4},
        {name: 'Развлечения', img: 'bi bi-basket2-fill', sum: 3000, id: 5},
      ]
    }
    this.maxId = 6;
  }

  addItem = () => {
    const newItem = {
      name: 'Новая категория',
      img: 'bi bi-basket2-fill',
      sum: 0,
      id: this.maxId++
    }

    this.setState(({data}) => {
      if (this.maxId <= 13) {
        const newArr = [...data, newItem];

        return {
          data: newArr
        }
      }
    })
  }

  openModal = (id) => {
    this.setState(({data}) => {
      const index = data.find(elem => elem.id === id);
      console.log('Open  ',index);
    })
  }

  rename = (id, name) => {
    console.log('на вход ', id, ' ', name);

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
            console.log('изменен  ', item);
            return {...item, name: name}
        };
        return item;
      })
    }))
  }

  changeSum = (id, sum) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
            console.log('изменен  ', item);
            return {...item, sum: sum}
        };
        return item;
      })
    }))
  }

  
  render() {
    const {data} = this.state;

    return (
      <div className="App">
        <CategorieCardArea data={data} 
          onAdd={this.addItem}
          openModal={this.openModal}
          rename={this.rename}
          changeSum={this.changeSum}
          incementing={this.incementing} />
        <NavBar/>
      </div>
    );
    }
}

export default App;
