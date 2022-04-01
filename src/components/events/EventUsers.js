import React, {useState} from 'react';
import './eventusers.css';
import UserFavourites from './UserFavourites';
import UserEventOrder from './UserEventOrder';
import UserStatus from './UserStatus';
import UserOrganizeEvent from './UserOrganizeEvent';

const ListSideBars = () =>{
    const [ischoose,setchoose]=useState(0);
    return(
        <div>
        <div className='maineventbox'>
            <div className='side-bar'>
                <ul>
                <li className='list-ass' onClick={()=>setchoose(1)}>Favourites</li>
                <li className='list-ass' onClick={()=>setchoose(2)}>Event Orders</li>
                <li className='list-ass' onClick={()=>setchoose(3)}>Organize My event</li>
                <li className='list-ass'onClick={()=>setchoose(4)}>My Status</li>
                </ul>
            </div>
            {(()=>{
                if(ischoose===1){
                    return(
                        <UserFavourites/>
                    )
                }
                else if(ischoose===2){
                    return(
                        <UserEventOrder/>
                    )       
                }
                else if(ischoose===3){
                    return(
                        <UserOrganizeEvent/>
                    )       
                }
                else{
                    return(
                        <UserStatus/>
                    )
                }
            })()}
        </div>
    </div>
    )
}

const EventUsers = (props) => {
  return (
      <div>
          <ListSideBars/>
      </div> 
  )
}

export default EventUsers
