
import Lottie from 'lottie-react';
import animatino from '../../public/Animation/notfound.json'


const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
           <Lottie animationData={animatino} />
           
        </div>
    );
};

export default NotFound;
