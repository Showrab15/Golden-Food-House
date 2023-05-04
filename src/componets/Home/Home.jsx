import React ,{useContext} from 'react';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import ClientReviews from '../ClientReviews/ClientReviews';
import Event from '../Event/Event';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext);

    // loader
      if(loading){
        return   <progress className="progress  flex justify-center progress-secondary mx-auto text-center w-96"></progress>
    }
    return (
        <div>
            {/* these component will shoed in home page */}
            <Header></Header>
            <Chef></Chef>
            <Event></Event>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;