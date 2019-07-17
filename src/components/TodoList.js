import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({ items }) {
    return items.map((item, index) => <TodoItem key={index} {...item} />);
}
