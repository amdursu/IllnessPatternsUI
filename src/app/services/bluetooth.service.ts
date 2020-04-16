import { Injectable } from '@angular/core';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth/src/public_api';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor(public ble: BluetoothCore) { }

  getDevice() {
    return this.ble.getDevice$();
  }

  stream() {
    return this.ble.streamValues$().pipe(
      map((value: DataView) => value.getInt8(0))
    );
  }

  disconnectDevice() {
    this.ble.disconnectDevice();
  }

  value(form) {
    console.log('Sending data...');
    let encoder = new TextEncoder()
    let payload = encoder.encode(form);
    return this.ble.discover$({
      acceptAllDevices: true,
      optionalServices: ['00001234-0000-1000-8000-00805f9b34fb']
    })
    .pipe(
      mergeMap((gatt: BluetoothRemoteGATTServer) => {
        return this.ble.getPrimaryService$(gatt, '00001234-0000-1000-8000-00805f9b34fb');
      }),
      mergeMap((primaryService: BluetoothRemoteGATTService) => {
        return this.ble.getCharacteristic$(primaryService, '00001234-0000-1000-8000-00805f9b34fd');
      }),
      mergeMap((characteristic: BluetoothRemoteGATTCharacteristic) => {
        return this.ble.writeValue$(characteristic, payload);
      })
    )
  }
}
