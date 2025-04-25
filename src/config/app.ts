export default {
    errors:{
        databaseError:{
            code: 500,
            description: 'An error occurred while accessing the database. Please try again later or contact support if the issue persists.'
        },
        unauthorized:{
            code: 401,
            description: 'You are not authorized to access this resource. Please check your credentials and try again.'
        },
        notFound:{
            code: 404,
            description: 'The requested resource was not found. Please check the URL and try again.'
        },
        badRequest:{
            code: 400,
            description: 'The request was invalid. Please check the request parameters and try again.'
        },
        internalServerError:{
            code: 500,
            description: 'An internal server error occurred. Please try again later or contact support if the issue persists.'
        },
        forbidden:{
            code: 403,
            description: 'You do not have permission to access this resource. Please check your permissions and try again.'
        },
    }
}