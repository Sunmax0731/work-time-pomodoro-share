import sample from '../../samples/sample-telemetry.json' with { type: 'json' };
export function createMockDeviceFeed(){return sample.devices.map(d=>({...d,source:'mock-device',destructiveActions:'blocked'}));}
