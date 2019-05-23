# testURLButton
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

This repo shows how a LWC component can send an event up to a wrapper Aura component which will then navigate to a user specified URL. The LWC component has input options to specify the URL string and whether to open URL in new browser window/tab or same window/tab. The component looks like following:

![alt text](https://github.com/thedges/testURLButton/blob/master/testURLButton.gif "Sample Image")

When the "Launch URL From LWC" button is pressed, the LWC component sends an event up to the Aura component to launch the URL. The Aura component uses the force:navigateToURL event as defined [here](https://developer.salesforce.com/docs/component-library/bundle/force:navigateToURL/documentation). I found that this Aura event can only launch to a new window/tab. To stay within same window/tab, I just used the standard window.open() javascript method. You will see that in the Aura code.

Here is documentation to look at:
* [Wrapping an LWC component inside Aura component](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.interop_aura_composition)
* [Send event from LWC component to Aura component](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_sending_to_aura_components)
