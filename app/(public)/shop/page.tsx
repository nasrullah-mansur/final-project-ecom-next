import ProductFilterTop from '@/components/pages/shop/productFilterTop';
import PageBraeadcrumb from '@/components/share/pageBraeadcrumb'
import { IBraeadcrumb } from '@/type/type';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ filter: string }> }) {

    const { filter } = await searchParams


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

            <div className="grid grid-cols-4 my-container">
                <div className="col-span-1">
                    <div className="bg-white p-4">
                        <h3 className="font-semibold text-xl border-b-2 pb-2">Shop Categories</h3>

                        <ul className="mt-4">
                            <li>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Women Clothing" } }}><ChevronRight size={16} className="mt-1" /> Women Clothing</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Men Clothing" } }}><ChevronRight size={16} className="mt-1" /> Men Clothing</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Electronics" } }}><ChevronRight size={16} className="mt-1" /> Electronics</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Vehicles & Accessories" } }}><ChevronRight size={16} className="mt-1" /> Vehicles & Accessories</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Beauty & Personal Care" } }}><ChevronRight size={16} className="mt-1" /> Beauty & Personal Care</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Sports & Entertainment" } }}><ChevronRight size={16} className="mt-1" /> Sports & Entertainment</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Home & Garden" } }}><ChevronRight size={16} className="mt-1" /> Home & Garden</Link>
                                <Link className="flex items-center gap-x-1 hover:text-primary py-1 text-black/70" href={{ pathname: "/shop", query: { category: "Medicine & Health Care" } }}><ChevronRight size={16} className="mt-1" /> Medicine & Health Care</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-3">

                </div>
            </div>
        </>
    )
}
