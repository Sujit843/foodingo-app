import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const FinalPage = () => {
    const [loading, setLoading] = useState(true)
         useEffect(() => {
            setTimeout(() => {
              setLoading(false);
            }, 3000);
          }, []);
    return (
       <div className="flex flex-col items-center bg-rose-200 justify-center h-screen">
        {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
            <h2 className="text-[4rem]  font-semibold">Order Successful !</h2>
        <p className="text-center">Your Order has been successfully placed</p>
        </div>
      )}
       </div>
    )
}

export default FinalPage;