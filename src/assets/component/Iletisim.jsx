import React from 'react'
import "../style/iletisim.scss"
const Iletisim = () => {
  return (
    <>
    <div className="main">
        <h2>Bize ulaşın</h2>
        <div className="iletisim">
        <form>
            <input type="text" placeholder='Ad-Soyad' />
            <input type="email" placeholder='E-mail adresinizi girin'/>
            <textarea className='aciklama' placeholder='Mesajınızı yazın'></textarea>
            <input type="submit" value={"gönder"} />

        </form>
    </div>
        <div className="harita">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.3177091878147!2d-0.4201713233689383!3d51.69063087185552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876402f2fe350ad%3A0x6944cdcc4c412ec8!2sWarner%20Bros.%20Studio%20Tour%20London!5e0!3m2!1str!2str!4v1704278178244!5m2!1str!2str" width="600" height="450" ></iframe>
    </div>
    </div>
    </>
  )
}

export default Iletisim