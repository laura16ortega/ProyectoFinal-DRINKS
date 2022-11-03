import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Ingresos </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward  className="featuredIcon negative"/>
                    </span>
            </div>
            <span className="featuredSub">Comparación con el mes pasado</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Ventas </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,415</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
            </div>
            <span className="featuredSub">Comparación con el mes pasado</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Costo </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$7,415</span>
                <span className="featuredMoneyRate">
                    +2.4 <ArrowUpward className="featuredIcon "/>
                    </span>
            </div>
            <span className="featuredSub">Comparación con el mes pasado</span>
        </div>
    </div>
  )
}
