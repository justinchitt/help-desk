function Error({ children }) {

    console.log(children)
    return (
        <div class="alert alert-warning" role="alert">
            {children.map((error) => <p>{error}</p>)}
        </div>
    );
}

export default Error