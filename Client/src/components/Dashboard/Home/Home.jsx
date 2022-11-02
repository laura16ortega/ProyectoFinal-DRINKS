import FeaturedInfo from "../featuredInfo/FeaturedInfo"
import Chart from "../Chart/Chart"

const Home = () => {
    return (
      <div style={{flex: 4}}>
          <FeaturedInfo/>
          <Chart/>  
      </div>
    )
  }
  
  export default Home