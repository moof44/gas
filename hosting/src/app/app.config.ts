import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth,  } from '@angular/fire/auth';
import { connectFirestoreEmulator, enableIndexedDbPersistence, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
// import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
// import { USE_EMULATOR as USE_DATABASE_EMULATOR } from '@angular/fire/compat/database';
// import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
// import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => 
      initializeApp({
        "projectId":"general-accounting-system",
        "appId":"1:326250189555:web:bd03793e123882e74c1d86",
        "storageBucket":"general-accounting-system.appspot.com",
        //"locationId":"asia-southeast1",
        "apiKey":"AIzaSyCpf_KcSC4o_SqnGnXV1zJ59uLmyZOciQg",
        "authDomain":"general-accounting-system.firebaseapp.com",
        "messagingSenderId":"326250189555",
        "measurementId":"G-HM592ZYX9C"})
      )
    ), 
    importProvidersFrom(provideAuth(() => {
      const auth = getAuth();
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      return auth;
    })), 
    importProvidersFrom(provideFirestore(() => {
      const firestore = getFirestore();
      connectFirestoreEmulator(firestore, 'localhost', 8080);
      enableIndexedDbPersistence(firestore);
      return firestore;
    })), 
    importProvidersFrom(provideFunctions(() => {
      const func = getFunctions();
      connectFunctionsEmulator(func, 'localhost', 5001);
      return func;
    })), 
    importProvidersFrom(provideStorage(() => {
      const storage = getStorage()
      connectStorageEmulator(storage, 'localhost', 9199);
      return storage;
    })), 
    // { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['localhost', 9099] : undefined },
    // { provide: USE_DATABASE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 9000] : undefined },
    // { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 8080] : undefined },
    // { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined },
  ],
};
