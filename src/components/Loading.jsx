import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className='loader'>
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="success" />
    </div>
  )
}

export default Loading