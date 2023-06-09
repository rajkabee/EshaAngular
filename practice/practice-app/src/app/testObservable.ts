// Create an Observable that will start listening to geolocation updates

import { Observable } from "rxjs";

// when a consumer subscribes.
const locations = new Observable((observer) => {
    let watchId: number;
  
    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
        observer.next(position);
      }, (error: GeolocationPositionError) => {
        observer.error(error);
      });
    } else {
      observer.error('Geolocation not available');
    }
  
    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });
  
  // Call subscribe() to start listening for updates.
  const locationsSubscription = locations.subscribe({
    next(position) {
      console.log('Current Position: ', position);
    },
    error(msg) {
      console.log('Error Getting Location: ', msg);
    }
  });
  
  // Stop listening for location after 10 seconds
  setTimeout(() => {
    locationsSubscription.unsubscribe();
  }, 10000);