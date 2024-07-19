import { Link } from 'react-router-dom';
import { Carousel, Image ,Row, Col } from 'react-bootstrap';
import Message from './Message';
import Loader from './Loader';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? <Loader/> : error ? 
    <Message variant='danger'>{error}</Message>
   : (
    <Carousel pause='hover' className='mb-4 navy-navbar'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
          <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid style={{
                    height: '500px', // set a fixed height
                    width: '100%' // set the width to 100% of the column
                  }} className='img-fluid'/>
              </Col>
              <Col md={6} className='d-flex align-items-center'>
                <div className='carousel-text'>
                  <p className='text-white'>{product.description}</p>
                </div>
              </Col>
            </Row>
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;