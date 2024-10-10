import MemberNav from "../../components/MemberNav";
import OrderHistory from "../../components/OrderHistory";

function OrderRecord (){
    return (
        <div className="container mt-5 w-75">
        <MemberNav />
        <OrderHistory />
    </div>
    );

}

export default OrderRecord;