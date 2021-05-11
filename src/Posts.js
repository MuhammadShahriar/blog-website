import React, { useEffect, useState } from 'react';
import axios from './axios';
import { Pagination } from "baseui/pagination";

function Posts() {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('3');
            console.log(request)
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {/* <Pagination
                numPages={20}
                currentPage={currentPage}
                onPageChange={({ nextPage }) => {
                    setCurrentPage(
                    Math.min(Math.max(nextPage, 1), 20)
                    );
                }}
            /> */}
        </div>
    )
}

export default Posts
