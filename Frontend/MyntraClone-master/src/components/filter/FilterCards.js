
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { fullArr } from './filter';
// Import useHistory instead of useNavigate
import { useHistory } from 'react-router-dom';

function FilterCards({ brandFilter, priceFilter, discFilter }) {

    // Initialize the useHistory hook
    const history = useHistory();

    const handleImageClick = (id) => {
        // Navigate to product details page with product id
        history.push(`/productdetails/${id}`);
    };

    // Filtering logic
    const arr = fullArr.filter((val) => {
        if (!brandFilter) {
            return val;
        } else if (val.brand === brandFilter) {
            return val;
        } else {
            return null;
        }
    });

    return (
        <div className='row'>
            <div className='p-3 col ms-5 position-relative justify-content-start'>
                {arr.map((val, ind) => {
                    return (
                        <Card
                            sx={{ maxWidth: 345 }}
                            className='d-inline-block m-4 col-3'
                            key={ind}
                        >
                            {/* Add onClick to CardActionArea */}
                            <CardActionArea onClick={() => handleImageClick(val.id)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={val.img}
                                    alt={val.brand}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'left' }}>
                                        {val.brand}
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'left' }}>
                                        <span className='text-secondary'>{val.size}</span>
                                        <span style={{ fontWeight: 'bold', fontSize: '15px', marginRight: '2px' }}>{`Rs.${val.offerPrice}`}</span>
                                        <strike className='text-secondary'>{` Rs.${val.actualPrice}`}</strike>
                                        <span style={{ color: '#FF6633', marginLeft: '2px' }}>{`(${val.offerPer}% OFF)`}</span>
                                        <div>
                                            <button type="button" className="btn btn-success">Add to Cart</button>
                                            <button type="button" className="btn btn-warning">Add to Wishlist</button>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default FilterCards;
