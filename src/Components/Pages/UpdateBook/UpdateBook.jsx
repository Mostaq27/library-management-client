

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateBook = () => {

    const navitate = useNavigate()

    const books = useLoaderData();
    const { photo, author, book, rating, category, _id, description, quantity } = books;
    console.log(books)
    

    
    const handleUpdateBook = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const photo = form.photo.value;
        const book = form.book.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
    
        const updateBook = { photo, book, author, category, rating };
    
        axios.put(`https://library-management-system-server-bay.vercel.app/books/${_id}`, updateBook)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    toast.success("update book successfully.")
                    // navitate("/all_books")
                }
                console.log("Updated book:", res.data);
                // Handle any further actions or updates after a successful update
            })
            .catch(error => {
                console.error("Error updating book:", error);
                // Handle error cases
            });
    };
    
        return (
            <>
            <Toaster />
                <Helmet>
                    <title>UpdateBook | RMSTU Central Library</title>
                </Helmet>
                <div className="bg-base-200 p-24">
                    <h2 className="text-3xl font-extrabold text-center">Update a Book</h2>
                    <form onSubmit={handleUpdateBook}>
                        {/* form Photo url row */}
                        <div className="mb-8">
                            <div className="form-control w-full mx-4">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form name and author  row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Book Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="book" defaultValue={book} placeholder="Book Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="author" defaultValue={author} placeholder="Author Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* form category  and rating row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">
                                    <select
                                        className="input input-bordered w-full"
                                        name="category"
                                        defaultValue={category}
                                    >
                                        <option value="history">History</option>
                                        <option value="horror">Horror</option>
                                        <option value="computers & tech">Computers & Tech</option>
                                        <option value="Science fiction">Science fiction</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="rating" defaultValue={rating} placeholder="Include (1-5)" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update Book" className="btn btn-block  btn-outline btn-primary capitalize font-semibold text-xl mx-4" />
                    </form>
                </div>
            </>

        );
    };

    export default UpdateBook;