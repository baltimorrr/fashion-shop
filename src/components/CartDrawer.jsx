import React, { useRef } from "react";

const CartDrawer = ({ isVisible, handleVisibleCartDrawer }) => {
    const ref = useRef(null);
    console.log({ ref });

    const visible = isVisible ? "" : "hidden";

    const handleClickOut = (e) => {
        console.log(e.target);
        console.log(ref.current);
        if(e.target !== ref.current) {
            handleVisibleCartDrawer()
        }
    }

    return (
        <div className={`drawer-wrapper ${visible}`} onClick={handleClickOut}>
            <div className={`drawer ${visible}`} ref={ref} >
                cart drawer
            </div>
        </div>
    );
};

export default CartDrawer;
