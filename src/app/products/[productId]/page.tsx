const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  console.log("isSeverComp");
  return (
    <div>
      <h3>Product Details</h3>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetails;
