import React ,{useContext} from 'react';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import ClientReviews from '../ClientReviews/ClientReviews';
import Event from '../Event/Event';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext)
      if(loading){
        return   <progress className="progress  flex justify-center progress-secondary mx-auto text-center w-96"></progress>
    }
    return (
        <div>
            <Header></Header>
            <Chef></Chef>
            <Event></Event>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;