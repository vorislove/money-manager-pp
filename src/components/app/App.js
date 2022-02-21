import { Component, useState } from 'react';

import NavBar from '../navbar/navbar';
import CategorieCardArea from '../cetegories/categorie-card-area';
import Modal from '../modal/modal';

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
        {name: 'Жилье', img: 'bi bi-basket2-fill', sum: 3000, id: 5},
        {name: 'Жилье', img: 'bi bi-basket2-fill', sum: 3000, id: 6},
        {name: 'Жилье', img: 'bi bi-basket2-fill', sum: 3000, id: 7},
        {name: 'Продукты', img: 'bi bi-basket2-fill', sum: 5000, id: 8}
      ]
    }
    this.maxId = 9;
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
      const index = data.findIndex(elem => elem.id == id);
      console.log(index);
    })
  }

  
  render() {
    const {data} = this.state;

    return (
      <div className="App">
        <CategorieCardArea data={data} 
          onAdd={this.addItem}
          openModal={this.openModal}/>
        <NavBar/>
      </div>
    );
    }
}

export default App;
