import { Search } from "lucide-react";

function ProductSearchForm() {
    return (
        <div className="px-6 flex-1">
            <div className="relative">
                <input className="border w-full p-2" type="text" />
                <button className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:text-primary">
                    <Search />
                </button>
            </div>
        </div>
    );
}

export default ProductSearchForm;