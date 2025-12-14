import React from 'react'

export default function PopularCategorySlider({ categoryId }: { categoryId: string | null }) {

    return (
        <div className="my-container">
            category id is: {categoryId}
        </div>
    )
}
