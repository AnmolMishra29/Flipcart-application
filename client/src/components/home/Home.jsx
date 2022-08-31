import { Box ,styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector} from "react-redux";
//components

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slides from "./Slides";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Container= styled(Box)`
     padding: 10px;
     background:#F2F2F2;
`
const Home = ()=> {

    const { products } = useSelector(state => state.getProducts)
    
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getProducts())
    }, [dispatch])
    return(
        <>
            <NavBar/>
            <Container>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection/>
                <Slides products={products} title="Discounts for You" timer={false} />
                <Slides products={products} title="Suggesting Items" timer={false} />
                <Slides products={products} title="Top Selection" timer={false} />
                <Slides products={products} title="Recommended Items" timer={false} />
                <Slides products={products} title="Trending Items" timer={false} />
                <Slides products={products} title="Season's top pick" timer={false} />
                <Slides products={products} title="Top Deals on Accessories" timer={false} />

            </Container>
        </>
    )
}

export default Home;