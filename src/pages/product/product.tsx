import { useParams } from 'react-router';
import styles from './product.module.scss';
import { useEffect } from 'react';

import { Review } from '../../components/review/review';
import { Rating } from '../../components/rating/rating';
import { ProductType } from '../../types/product';
import { Button } from '../../components/button/button';
import { selectProduct, setProduct } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Product() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data: ProductType) => {
        dispatch(setProduct(data));
      });
  }, [id]);

  return (
    <>
      {product ? (
        <div className={styles.base}>
          <div className={styles.contanier}>
            <div className={styles.product}>
              <div className={styles.image}>
                <img src={product?.images[0]} alt="image" />
              </div>

              <div className={styles.mainInfo}>
                <div className={styles.title}>
                  <p>{product.title}</p>
                </div>

                <div className={styles.priceAndRating}>
                  <div className={styles.price}>
                    <p>₹ {product.price}</p>
                  </div>
                  <div className={styles.rating}>
                    <p className={styles.ratingTitle}>Essence </p>
                    <Rating />
                    <p className={styles.ratingValue}>{product.rating}</p>
                  </div>
                </div>

                <div className={styles.description}>
                  <p className={styles.descriptionTitle}>Description </p>
                  <p className={styles.descriptionInfo}>
                    {product.description}
                  </p>
                </div>

                <Button title="Add to Cart" className={styles.addButton} />
              </div>
            </div>
            <ul className={styles.review}>
              <div className={styles.reviewTitle}>
                <p>Review Lists</p>
              </div>
              {product.reviews.map((review, id) => (
                <li key={id}>
                  <Review
                    rating={review.rating}
                    comment={review.comment}
                    name={review.reviewerName}
                    date={review.date}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
