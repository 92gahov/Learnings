const DBError = (error) => {
    const errorCode = error.message.split(' ')[0];
    console.log(errorCode);
    switch (errorCode) {
        case 'E11000':
            error.message = 'This user already exists'
            return error
        case 'E50':
            error.message = 'Request timed out'
            return error
        default:
            error.message = 'Database error.Please try again later...'
            return error
    }
};

module.exports = DBError;