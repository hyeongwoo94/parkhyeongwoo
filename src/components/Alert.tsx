import React, { useEffect }from 'react'

interface AlertProps{
    children: React.ReactNode;
     onClose?: () => void;
}

function Alert({children, onClose}:AlertProps){
    useEffect(() => {
        const timer = setTimeout(() => {
        onClose?.();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return(
        <>
            <div className='alert'>
                <p>
                    {children}
                </p>
            </div>
        </>
    )
}

export default React.memo(Alert)