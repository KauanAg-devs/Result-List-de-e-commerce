import productImage from '../../images/image 1.svg'
import { ProductType } from './Product'

const productTest: ProductType[] = []
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M','N', 'O', 'P', 'Q', 'R','S','U','W','X','Y','Z']
for (let i = 0; i < alphabet.length; i++) {
    productTest.push({
        image: productImage,
        name: `${alphabet[i]} ${i+1}`,
        title: `Descrição do Produto ${i+1}`,
        price: (Math.random() * 1000).toFixed(3), 
    })
}

export default productTest
