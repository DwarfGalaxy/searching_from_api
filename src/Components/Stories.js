import React  from 'react';
import { useGlobalContext } from './ContextApi/Context';

function Stories() {
    const { isLoading, hits,RemoveItem } = useGlobalContext();
    if(isLoading){
        return <h1 className='text-center'>Loading...</h1>
    }
    return (
        <>
            {hits.map((currElem) => {
                return <div className="container" key={currElem.objectID}>
                    <div className="row">
                        <div className="col-6 mx-auto my-2">
                            <div className="card border-0 rounded-0">
                                <div className="card-body">
                                    <p className="card-text fw-bold">{currElem.title}</p>
                                    <p className='text-muted'>By {currElem.author} | {currElem.num_comments} comments</p>
                                    <div className="d-flex justify-content-between">
                                        <a href={currElem.url} target="_blank" rel="noreferrer">Read More</a>
                                        <button className='border-0 bg-white text-danger' onClick={()=>RemoveItem(currElem.objectID)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </>
    )
}

export default Stories
