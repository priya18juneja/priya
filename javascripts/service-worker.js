/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/priya/javascripts/service-worker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
     document.getElementById('not-status').innerHTML = '<h4>mobiForge notifications</h4><input type="checkbox" name="pushStatus" id="pushStatus" value="false" /><label for="pushStatus">Receive push notifications for new content</label><div id="pushStatusMsg"></div>';
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}*/


var isPushEnabled = false;
window.addEventListener('load', function() {  
  var pushButton = document.querySelector('.js-push-button');  
  pushButton.addEventListener('click', function() {  
    if (isPushEnabled) {  
      unsubscribe();  
    } else {  
      subscribe();  
    }  
  });

  // Check that service workers are supported, if so, progressively  
  // enhance and add push messaging support, otherwise continue without it.  
  if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('/service-worker.js')  
    .then(initialiseState);  
  } else {  
    console.warn('Service workers aren\'t supported in this browser.');  
  }  
});
