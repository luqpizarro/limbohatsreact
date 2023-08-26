const withLoading = (Component) => {
    function withLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <h2>Loading ...</h2>
        }
        return <Component {...props} />
    }

    return withLoadingComponent
}

export default withLoading;