import ProductFilterTop from '@/components/pages/shop/productFilterTop';
import PageBraeadcrumb from '@/components/share/pageBraeadcrumb'
import { IBraeadcrumb } from '@/type/type';

export default function ShopPage() {

    const pages: IBraeadcrumb[] = [
        {
            label: "Shop",
            href: "/shop"
        }
    ];

    return (
        <>
            <PageBraeadcrumb pages={pages} />
            <ProductFilterTop />
        </>
    )
}
