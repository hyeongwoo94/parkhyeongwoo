import  React from 'react';



function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="main_cont_w">
            <h3>
                © {year} ParkHyeongWoo. All rights reserved.
            </h3>
        </div>
    </footer>
  );
}


export default React.memo(Footer)