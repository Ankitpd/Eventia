import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>EVENTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/signup'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/signup'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/signup'
            />
            </ul>
            <ul className='cards__items'>
             <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/signup'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/signup'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/signup'
            />
            
            </ul>
        </div> 
      </div>
    </div>
  );
}

export default Cards;