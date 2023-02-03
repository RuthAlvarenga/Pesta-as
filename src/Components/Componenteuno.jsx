import React, { useState } from 'react'


const Componenteuno = () => {

  const [tabs, setTabs] = useState([{
    content: 'Tab 1 content is showing here.',
    title: 'Tab1',
    state: '',
  },
  {
    content: 'Tab 2 content is showing here.',
    title: 'Tab2',
    state: 'active'

  },
  {
    content: 'Tab 3 content is showing here.',
    title: 'Tab3',
    state: ''

  }]
  );

  const changeActive = ( i) => {

    let newTabs = tabs.map(tab => { //muestra el titulo de todas las posibles pestañas, la función recibe, index, que determinala posición de la pestaña que debe quedar activada

      tab.title === tabs[i].title ? tab.state = 'active' : tab.state = ''; 
      return tab;
    });

    setTabs(newTabs);

  }
  return (

    <div className='tabcontainer'> 
      <div className="titulo">

        {tabs.map((item, i) =>

          <button key={i} className='btn' onClick={() => changeActive( i)} >
            {item.title} 
          </button> //con el envento onclick se dispara la función changeActive, 
          
        )}

      </div> 
      <div className="contenido"> 

        {tabs.filter(item => item.state === 'active').map((item, i) => <p key={i}> {item.content} </p>)}   

      </div>

    </div>
  )
}

export default Componenteuno;
// Con filter se filtra para tener unicamente el estado activo y luego map crea el elemento a rednerizar que es lo que se muestra