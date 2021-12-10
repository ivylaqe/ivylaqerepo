function ivy(message) {
    if(message === undefined) throw new Error('No Message Found!');
    console.log('ivy', message)
};

module.exports = ivy

ivy('Nice')