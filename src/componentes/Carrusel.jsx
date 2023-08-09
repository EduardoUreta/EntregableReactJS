import React from 'react';
import { Carousel } from 'react-bootstrap';

export function CarouselComponent() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://entrerios.cl/wp-content/uploads/2021/09/2.jpg"
                alt="Primera imagen"
                />
                <Carousel.Caption>
                <h2>Encuentra las mejores carnes</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.cpdonline.co.uk/wp-content/uploads/2023/02/17161322/All-about-low-alcohol-and-alcohol-free-drinks-1200x300.jpg"
                alt="Segunda imagen"
                />
                <Carousel.Caption>
                <h2 className='text-black'>Variedad en Alcohol</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://proveedoreshosteleria.com/images/frutas-verduras.jpg"
                alt="Segunda imagen"
                />
                <Carousel.Caption>
                <h2>Todas las frutas y verduras</h2>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}