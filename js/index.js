function onLoad() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EXGXFW4MLP');

  // default display is already none, so we don't need to do anything if it's okayed
  if(!localStorage.getItem('privacyOK')){
    document.getElementById("disclaimer").style.display = "flex";
  }
}

function privacyOkayed(){
  localStorage.setItem('privacyOK', true);
  document.getElementById("disclaimer").style.display = "none";
}