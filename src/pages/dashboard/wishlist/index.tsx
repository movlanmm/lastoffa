import WishlistItem from "../../../components/WishlistItem";
import EmptyView from "../../../components/EmptyView";
import { useAppSelector } from "../../../redux/store";
import { wishlistSelector } from "../../../redux/lib/wishlistSlice";

export default function Wishlist() {
  const wishlist = useAppSelector(wishlistSelector).wishlist;

  return (
    <>
      <div className="col-lg-9">
        <div className="page-content my-account__wishlist">
          <div
            className="products-grid row row-cols-2 row-cols-lg-3"
            id="products-grid"
          >
            {wishlist.length > 0 ? (
              wishlist.map((product, index) => {
                return <WishlistItem key={index} product={product} />;
              })
            ) : (
              <EmptyView text={'Wishlist'} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
