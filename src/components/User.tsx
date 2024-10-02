import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

type LoaderType = {
    id: any;
    userId: any;
    title: any;
}
const User = () => {
    const loaderData = useLoaderData() as LoaderType[];
    return (
        <>
            <div className='flex justify-center items-center mt-52 mb-8'>User</div>
            {
                loaderData.map((elem: LoaderType) => (
                    <div key={elem.id} className="my-2 border shadow">
                        <p>userId: {elem.id}</p>
                        <p>userId: {elem.userId}</p>
                        <p>userId: {elem.title}</p>
                    </div>
                ))
            }
        </>
    )
}

export default User;