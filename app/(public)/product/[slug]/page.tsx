
import SingleProductDetails from "@/components/pages/product/singleProduct";
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


const product = {
    id: 1,
    title: "Mini Electric Silicone Face Brush Massager Cepillo Facial Beautiful Silicone Facial Cleansing Brush",
    slug: "Mini Electric Silicone Face Brush Massager Cepillo Facial Beautiful Silicone Facial Cleansing Brush",
    ratting: 4,
    prev_price: 1893,
    current_price: 1362,
    short_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molestias voluptates maiores repudiandae, velit quaerat error! Dolor alias voluptates rerum vitae illum officiis laboriosam, eos fugiat necessitatibus iste quasi vero porro at asperiores atque numquam adipisci esse perferendis hic dolore dolores facere quidem? Voluptatum, nemo voluptates. Qui, animi odit voluptatem velit nostrum rem maiores. Qui esse magnam enim natus numquam ab adipisci nihil mollitia odio ducimus architecto unde harum saepe illum, ipsa hic dicta alias cumque et minus veritatis assumenda a quo.",
    categories: [
        {
            id: 1,
            title: "Beauty & Personal Care",
            slug: "Beauty & Personal Care"
        },
        {
            id: 2,
            title: "Personal Care",
            slug: "Personal Care"
        }
    ],
    galleries: [
        "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1634134755JdFHdb695965a744470b958f17251d4d277ew.jpg",
        "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1634134938VjgHcb62dec2d6a241fc90ce2bb04059684em.jpg"
    ],
    specifications: {
        "Product Type": "Velvet elegant sleeveless evening dress",
        "Material": "Polyester / Spandex",
        "Lining Material": "Polyester",
        "Fabric Type": "Fleece"
    }
}


export default function SingleProduct() {


    const { long_description, galleries, specifications, ...othersProductData } = product;


    return (

        <>
            <PageBraeadcrumb pages={pages} />
            <div className="my-container grid lg:grid-cols-2 gap-4 py-10">
                <div>
                    <ImageEffect images={galleries} />
                </div>
                <div>
                    <SingleProductDetails product={othersProductData} />
                </div>
            </div>
        </>

    )
}
