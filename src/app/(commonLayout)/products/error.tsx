'use client'

const ErrorPage = ({error, reset}) => {
    return (
        <div>
             <p className="text-center text-red-600 text-5xl"> Something Went Wrong </p>
             <p className="text-center text-red-600 text-5xl"> {error?.message} </p>
        </div>
    );
};

export default ErrorPage;