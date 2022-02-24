const toast = store => next => action => {
    if (action.type === 'error') 
        console.log('testify', action.payload.message)
    else
        next(action);
}

export default toast;