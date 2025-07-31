import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Payment from "./Payment";

const Success = () => {
  const [loading, setLoading] = useState(true);
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
        <Payment loading={loading} setLoading={setLoading} />
      )}
    </div>
  );
};

export default Success;
