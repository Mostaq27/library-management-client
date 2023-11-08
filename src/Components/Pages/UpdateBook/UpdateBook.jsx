

import { Helmet } from 'react-helmet';

const UpdateBook = () => {
    const handleUpdateBook = e => {
        e.preventDefault();

        const form = e.target;

        const photo = form.photo.value;
        const book = form.book.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const updateBook = { photo, book, author, category, rating }
        console.log(updateBook)
    }
  return (
    <>
         <Helmet>
                <title>UpdateBook | SUSIS Library</title>
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

                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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

                            <input type="text" name="book" placeholder="Book Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
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
                            >
                                <option value="history">History</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                                <option value="Science fiction">Science fiction</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Include (1-5)" className="input input-bordered w-full" />
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