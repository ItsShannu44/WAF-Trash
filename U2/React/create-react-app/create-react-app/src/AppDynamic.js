import React from 'react';
import  BookTable from './components/BookTable';

function App()
{
    const books=[
        {
            isbn: '978-715-938-833-33',
            title: "new book",
            author: "Vaibhav",
            price: 499,
            published: new Date('2017-11-30')
        },
        {
            isbn: '978-715-938-833-33',
            title: "Hell or Heaven",
            author: "Aniston",
            price: 569,
            published: new Date('2019-08-25')
        },
        {
            isbn: '978-715-938-833-33',
            title: "Fairy Tales",
            author: "Martin Ross",
            price: 999,
            published: new Date('2020-07-16')
        }
    ];
    return(
        <div className='App'>
            <header className='App-header'>
                <h3 style={{textAlign:"center", fontSize:"40px", color:"green"}}>Book Store</h3>
            </header>
            <BookTable books={books}/>
        </div>
    )
}
export default App;