
import categories from './mockCategories'








export const fetchCategoriesApi = async () => {
  return new Promise(resolve => {
    resolve(categories)
  })
}