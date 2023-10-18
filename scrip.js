
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clica no botão, rola suavemente para o topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores da web
  document.documentElement.scrollTop = 0; // Para navegadores modernos
}


