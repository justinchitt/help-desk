function Error({ children }) {
    return (
        <div class="alert alert-warning" role="alert">
            {children}
        </div>
    );
}

export default Error