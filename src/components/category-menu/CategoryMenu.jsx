import CategoryItem from "../category-item/CategoryItem";
import './CategoryMenu.styles.scss'

const CategoryMenu = ({categories}) => {

    return(
        <div className="categories-container">
            {
                categories.map(({title, id, imageUrl}) => {
                    return (<CategoryItem key={id} title={title} imageUrl={imageUrl}/>
                )})
            }
        </div>
    )
}

export default CategoryMenu