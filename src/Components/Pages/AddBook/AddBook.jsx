import axios from "axios";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";


const AddBook = () => {

    const handleAddBook = e => {
        e.preventDefault();

        const form = e.target;

        const photo = form.photo.value;
        const book = form.book.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const newBook = { book, quantity, author, rating, category, description, photo }
        axios.post("https://library-management-system-server-bay.vercel.app/books",newBook)
        .then(res=>{
            if(res.data.insertedId){
                toast.success("Book added successfully.")
                form.reset();
            }
            console.log(res.data)
        })
    }
  return (
    
        <>
        <Toaster />
         <Helmet>
                <title>Addbook | RMSTU Central Library</title>
            </Helmet>
        <div className="bg-base-200 p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Book</h2>
            <form onSubmit={handleAddBook}>
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
                     {/* form name and quantity row */}
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
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Quantity of Book" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                {/* form author and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
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
                {/* form category and details row */}
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
                                <option value="management">Management</option>
                                <option value="fisheries">Fisheries</option>
                                <option value="horror">Horror</option>
                                <option value="computers & tech">Computers & Tech</option>
                                <option value="science fiction">Science fiction</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
           

                <input type="submit" value="Add Book" className="btn btn-block  btn-outline btn-primary capitalize font-semibold text-xl mx-4" />
            </form>
        </div>
        </>
    
  );
};

export default AddBook;