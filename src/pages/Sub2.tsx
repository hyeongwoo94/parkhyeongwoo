import { useState } from "react"

function Sub2 () {
    const [open,setOpen] = useState(false);
    
    return(
        <>

            <button type="button" className={`menu_btn_wrap ${open ? "open" : ""}`} onClick={() => setOpen(open => !open)}>
                <div className="menu_btn_line">
                    <div className="menu_btn_item"></div>
                    <div className="menu_btn_item"></div>
                </div>
                <div className="menu_btn_line">
                    <div className="menu_btn_item"></div>
                    <div className="menu_btn_item"></div>
                </div>
                <div className="menu_btn_line">
                    <div className="menu_btn_item"></div>
                    <div className="menu_btn_item"></div>
                </div>
            </button>
        </>
    )
}


export default Sub2