({
  handleLaunchURL: function (component, event) {
    const url = event.getParam ('url');
    const loc = event.getParam ('location');

    console.log ('aura url=' + url);
    console.log ('aura location=' + loc);

    if (loc == 'same')
    {
      window.open(url,"_self");
    }
    else
    {
      var urlEvent = $A.get ('e.force:navigateToURL');
      urlEvent.setParams ({
        url: url
      });
      urlEvent.fire ();
   }

  }
});