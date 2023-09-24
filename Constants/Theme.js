import { Dimensions } from "react-native"

const {height, width} = Dimensions.get('window');

const SIZES = {
        xl: height*0.04,
        large: height*0.03,
        small: height*0.02,
        xs: height*0.01
}

export {SIZES}