import PageBraeadcrumb from "@/components/share/pageBraeadcrumb";
import ImageEffect from "@/components/ui/imageEffect";
import { IBraeadcrumb } from "@/type/type";


const pages: IBraeadcrumb[] = [
    {
        label: "Shop",
        href: "/shop"
    },
    {
        label: "Single Product"
    }
];

const images = [
    "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1634134755JdFHdb695965a744470b958f17251d4d277ew.jpg",
    "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1634134938VjgHcb62dec2d6a241fc90ce2bb04059684em.jpg"
]


export default function SingleProduct() {
    return (

        <>
            <PageBraeadcrumb pages={pages} />
            <div className="my-container grid lg:grid-cols-2 gap-4 py-10">
                <div>
                    <ImageEffect images={images} />
                </div>
            </div>
        </>

    )
}
