import { LightningElement} from 'lwc';

export default class TestURLButton extends LightningElement {
    location = 'same';
    url = 'http://www.cnn.com';

    get options() {
        return [
            { label: 'Same Window', value: 'same' },
            { label: 'New Window', value: 'new' },
        ];
    }

    handleClick(event) {
        console.log('handle URL button click');
        console.log('url=' + this.url);

        // create custom event and fire up to Aura component
        const launchurlEvent = new CustomEvent('launchurl', {
            detail: { url: this.url, location: this.location },
        });

        this.dispatchEvent(launchurlEvent);
    }

    handleURLChange(event) {
        console.log('handle URL change');
        this.url = event.target.value;
    }

    handleLocationChange(event) {
        console.log('handle location change');
        this.location = event.target.value;
    }
}