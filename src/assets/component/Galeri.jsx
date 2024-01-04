import React from 'react'
import "../style/galeri.scss"
const Galeri = () => {
  return (
    <>
    <h3>Galerimize göz atın</h3>
    <div className='galeri'>
    <img src="https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-full-moon-i149376.jpg" alt="harry" />
    <img src="https://i.pinimg.com/originals/f9/bb/56/f9bb56d16bc7a40ccb9508ffbf38290d.jpg" alt="lotr" />
    <img src="https://wallpapercosmos.com/w/full/5/8/f/306074-2844x1767-desktop-hd-interstellar-wallpaper.jpg" alt="interstellar" />
    <img src="https://images3.alphacoders.com/661/661401.jpg" alt="aşk ve gurur" />
    </div>
    </>
  )
}

export default Galeri