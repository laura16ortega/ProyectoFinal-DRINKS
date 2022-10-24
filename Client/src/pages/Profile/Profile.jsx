import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import s from './Profile.module.css';
import Footer from '../../components/Footer/Footer';

function Profile(props) {
    const { isAuthenticated, user } = useAuth0();
    console.log(user);
    return (
     <>
        { isAuthenticated ? (
            <>
            <div className={s.container}>
                <div className={s.background}>
                <div>
                {user?.picture && <img className={s.img} src={user.picture} alt={user?.name} />}
                </div>
                <div>
                    @{user?.nickname}
                </div>
                <div>
                    <h2>
                        {user?.name}
                    </h2>
                </div>
                </div>
                
               
{/*                 {user?.picture && <img className={s.img} src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}> {objKey}:{user[objKey]} </li>)}
                </ul> */}
                
            </div>
            <Footer />
            </>
            
        ) : (<div><h1>Not found</h1></div>)
        
        }
        </>
        

    );
}

export default Profile;