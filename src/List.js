import React, {useState} from 'react'

function List ({people, setPeople}) {

    function handleClear (id) {
        console.log(id)
        const newPeople = people.filter((person => person.id !== id))
        setPeople(newPeople)
    }
    

    return (
        <div className="list">
        {people.map((person) => {
            const {id, name, age, image} = person;
            return (<article key={id} className="person">
            <img src={image} alt={name} />
            <div>
                <h3 className='person-text'>{name}</h3>
                <p className='person-text'>{age} years</p>
            </div>
            
                <div className="btn">
                <img className='clear-btn' src="bin-icon.png" key={id} onClick={() => handleClear(id)} />
                </div>
            </article>
                )
        } )}
        </div>
    )



}

export default List 