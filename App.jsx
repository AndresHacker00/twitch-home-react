import CardThumbnail from './cardThumbnail';

export default function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2 className="recommendedChannels">RECOMMENDED CHANNELS</h2>
        
        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>WeritoPlays</p>
          
          <div className ="subUser">
          <p className='subUserText'>Minecraft</p>
          </div>
        </div>

        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>Cookie123</p>
          <p className='subUserText'>Minecraft</p>

        </div>
        
        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>ElAbochornado</p>
          <p className='subUserText'>Minecraft</p>

        </div>
        
        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>Tengosueñito</p>
          <p className='subUserText'>Minecraft</p>

        </div>
        
        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>Mariojuega18</p>
          <p className='subUserText'>Minecraft</p>

        </div>
        
        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>MexicanoyAmericana</p>
          <p className='subUserText'>Minecraft</p>

        </div>
        
        <div className="user">
          <img src="src/assets/user1.png" alt="user" className="userName" />
          <p className='userText'>LuisVlogs</p>
          <p className='subUserText'>Minecraft</p>

        </div>
        
      
      </div>

    <div className="contentStreams">
     <div className="card">
     <CardThumbnail />
     </div>
   </div>
</div>
  
);
}
