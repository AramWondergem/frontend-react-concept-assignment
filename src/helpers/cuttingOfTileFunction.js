function cuttingOfTitle(title) {

    if (title.length > 100) {

        return `${title.substring(0, 100)}...`

    } else {
        return title;
    }
}

export default cuttingOfTitle;