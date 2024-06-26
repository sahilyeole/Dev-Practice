
exports.Category = {
  products : (parent, args, {db}) => {
    const {products, reviews} = db
    // const {products, reviews} = context //context is used to provide data to the resolvers
    const categoryId = parent.id //parent is used as this is a nested query in the category query (parent), so we need to get the id of the  parent
    const filteredCategoryProducts = products.filter((product) => { //filter is used instead of find as we are looking for multiple products not just one
      return product.categoryId === categoryId
    })
    if (args.filter) {
      // filter by onSale
      if (args.filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter((prod) => {
          return prod.onSale;
        });
    }
    // filter by avgRating
    if ([1,2,3,4,5].includes(args.filter.avgRating)) {
        filteredCategoryProducts = filteredCategoryProducts.filter((prod)=>{
          let sumRating = 0;
          let totalReviews = 0;
          
          reviews.forEach((rev)=>{
            if (rev.productId === prod.id){
              sumRating += rev.rating;
              totalReviews++;
            }
          })
          const avgRating = sumRating / totalReviews;
          return avgRating >= args.filter.avgRating; // if this is true, the product will be included in the filteredProducts array 
        } )
    }

  }
  return filteredCategoryProducts
}}