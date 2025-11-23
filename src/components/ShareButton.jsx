import React from 'react';

function ShareButton({ producto }) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`🔥 Mira este producto: ${producto.nombre} en Level-Up Gamer`);

  const compartir = (red) => {
    let shareUrl = '';
    if (red === 'twitter')
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    if (red === 'facebook')
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (red === 'whatsapp')
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="share-container">
      <h4 className="share-title">Compartir:</h4>
      <button onClick={() => compartir('twitter')} className="btn-share btn-share-twitter">
        <span role="img" aria-label="X">🐦</span> X
      </button>
      <button onClick={() => compartir('facebook')} className="btn-share btn-share-facebook">
        <span role="img" aria-label="Facebook">📘</span> Facebook
      </button>
      <button onClick={() => compartir('whatsapp')} className="btn-share btn-share-whatsapp">
        <span role="img" aria-label="WhatsApp">💬</span> WhatsApp
      </button>
    </div>
  );
}

export default ShareButton;
