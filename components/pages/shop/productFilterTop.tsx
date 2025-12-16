"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Funnel, Grid2x2, List } from "lucide-react";
import { useState } from "react";

export default function ProductFilterTop() {
    const [view, setView] = useState("grid");


    const viewHandler = (text: string) => {
        // task for zustand;
        setView(text);
    }

    return (
        <div className="my-container pt-12 pb-6">
            <div className="bg-white p-4 flex">
                <DropdownMenu>
                    <DropdownMenuTrigger className="border py-2 px-4 flex items-center gap-x-1 text-black/70"><Funnel size={16} /> Quick filter</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>All products</DropdownMenuLabel>
                        <DropdownMenuItem>Featured products</DropdownMenuItem>
                        <DropdownMenuItem>Best sellers</DropdownMenuItem>
                        <DropdownMenuItem>Top rated</DropdownMenuItem>
                        <DropdownMenuItem>New Arrival</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center">
                    <span className="pl-5 pr-2">Sort by: </span>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border py-2 px-4 flex justify-between items-center gap-x-1 text-black/70">
                            All Products
                            <ChevronDown className="mt-1" size={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>All products</DropdownMenuLabel>
                            <DropdownMenuItem>Low - High price</DropdownMenuItem>
                            <DropdownMenuItem>High - Low price</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="ml-auto">
                    <ButtonGroup>
                        <Button onClick={() => viewHandler("grid")} variant={view == "grid" ? "default" : "outline"} className="cursor-pointer">
                            <Grid2x2 />
                        </Button>
                        <Button onClick={() => viewHandler("list")} variant={view == "list" ? "default" : "outline"} className="cursor-pointer"><List /></Button>
                    </ButtonGroup>
                </div>







            </div>
        </div>
    )
}
