function SearchBar(props) {

    const handleFormSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
};

export default SearchBar;