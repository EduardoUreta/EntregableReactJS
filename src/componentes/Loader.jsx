import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
    return(
        <div className='text-center'>
            <Spinner animation="grow" variant="primary"/>
            <Spinner animation="grow" variant="success"/>
            <Spinner animation="grow" variant="danger"/>
            <Spinner animation="grow" variant="warning"/>
        </div>
    )
}