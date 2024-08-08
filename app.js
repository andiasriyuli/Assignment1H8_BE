const express = require('express');
const app = express();
const books = require('./data.json');

app.set('view engine', 'ejs');

// 1. Menampilkan semua buku dalam bentuk JSON
app.get('/books', (req, res) => {
    res.json(books);
});

// 2. Menampilkan satu buku berdasarkan id
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ message: 'Buku tidak ditemukan' });
    }
});

// 3. Menampilkan semua buku dalam bentuk tabel menggunakan EJS
app.get('/ejs/books', (req, res) => {
    res.render('books', { books });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
