
function toggleSidebar() {
        
    document.getElementById("toggleButton").addEventListener("click", function() {
        var iframe = document.getElementById("myIframe");
        iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
      });
    }      