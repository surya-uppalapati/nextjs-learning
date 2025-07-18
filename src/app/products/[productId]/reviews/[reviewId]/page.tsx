const ProductReview = ({ params }: { params: { productId: string; reviewId: string } }) => {
  const { productId, reviewId } = params;
  return (
    <div>
      <h3>Product Reviews</h3>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
};

export default ProductReview;
