import React from 'react';
import BookClass from "./BookClass";
// import Book from "./components/Book";
// import img from './img/1.jpg'
// import img2 from './img/2.jpg'



function BookApp()
{
    return(
        <div style={{ margin: "10px", padding:"10px", color:"orange"}}>
            <h1>Book Store</h1>
            <div className="App">
            <header className="App-header">
                <table border={2}>
                    <tr>
                        <th>Sunday</th>
                        <td>AAD</td>
                        <td>WAF</td>
                    </tr>
                    <tr>
                        <th>Sunday</th>
                        <td>AAD</td>
                        <td>WAF</td>
                    </tr>
                </table>

            </header>
        </div>
            {/*<BookClass*/} 
{/* 
            <Book title="React Basics" author="Dan Abramov" price= {499} image={img} ></Book>
            <Book title="ADA" author="Michael Mickey" price= {950} image={img2}></Book>
            <Book title="DCN" author="John Wick" price= {480} image={img2}></Book>
            <Book title="Python Prgrms" author="Nicolie Jayne" price= {699} image={img2}></Book> */}
            

        </div>
    )
}
export default BookApp;