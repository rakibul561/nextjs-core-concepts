import React from 'react';

const DynamicBlogPage =  async({params}) => {
    console.log(await params)
    return (
        <div>
            <h1 className='text-5xl'>Dynamic Blog Page BlogId : 1</h1>
            
        </div>
    );
};

export default DynamicBlogPage;