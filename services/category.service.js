import categories from '../db/categories.js';

class CategoryService {
    static getAllCategories() {
        return categories;
    }
}

export default CategoryService;
