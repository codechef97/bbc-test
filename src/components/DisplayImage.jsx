import React, { useState } from 'react';
import data from '../data.json';

function DisplayImage() {

    const [imageId, setImageId] = useState();

    return (
        <div role="root" className="flex items-center justify-center h-screen w-screen bg-black">
            <div itemID="container" className="grid xs:grid-cols-1 grid-cols-2 content-center self-center p-4 w-2/3 bg-orange-100 absolute border-gray-300 rounded-md border-2 border-solid  ">
                <div testID="list" className="w-20 px-6 self-center">
                    <ul className="list-disc">
                        {data.sort((a, b) => a.name.localeCompare(b.name)).map(img =>
                            <>
                                <li key={img.id} className="text-left text-lg cursor-pointer text-md text-black" onClick={() => setImageId(img.id)}>{img.name}</li>
                                <br />
                            </>)}
                    </ul>
                </div>
                <div testId="image" className="w-auto h-auto  xs:row-start-2 xs:col-start-1">
                    {imageId && <img className="rounded-lg" src={"/Images/" + imageId + ".jpg"} alt="" />}
                </div>
            </div>
        </div>
    );
}

export default DisplayImage;