import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
    return (
        <div className="w-100 h-100 top-0 left-0 position-fixed d-flex align-items-center justify-content-center z-index-3 bg-primary opacity-50 ">

            <Button variant="primary" disabled className='color-white d-flex gap-2 align-items-center'>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>

        </div>
    )
}
