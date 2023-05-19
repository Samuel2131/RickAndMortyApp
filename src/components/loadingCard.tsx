
import React from 'react';
import "../css/card.css"

export const LoadingCard = () => {
    return(
        <div className="card is-loading">
            <div className="image"></div>
                <div className="content">
                    <p style={{height: "2.1rem"}}></p>
                    <p style={{height: "2.1rem"}}></p>
                    <p style={{height: "2.1rem"}}></p>
                    <p style={{height: "2.1rem"}}></p>
            </div>
        </div>
    )
}

type LoaderCardContainerType = {
    count: number
}

export const LoaderCardContainer = (props: LoaderCardContainerType) => {
    const { count } = props;
    return( <>{React.Children.toArray(Array.from({length: count}, () => <LoadingCard />))}</>);
}