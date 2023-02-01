import React from 'react';
import Card from '../card/Card';
import './list.css';

const List = ({ list }) => (
    <div className='list-wrap'>
        {list.map((item) => (
            <Card key={item.id} item={item} />
        ))}
    </div>
);

export default List;