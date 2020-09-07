import createStore from "unistore";
import devtools from "unistore/devtools";


import { Device, Dictionary, DeviceState, BridgeConfig, BridgeInfo, TouchLinkDevice } from "./types";
import { GraphI } from "./components/map/types";

export interface GroupAddress {
    endpoint: number;
    ieee_address: string;
}

export interface Group {
    id: number;
    friendly_name: string;
    members: GroupAddress[];
}

export interface LogMessage {
    level: "error" | "info" | "warning";
    message: string;
}

export interface GlobalState {
    forceRender: number;
    isLoading: boolean;
    isError: boolean | string;
    devices: Device[];
    deviceStates: Dictionary<DeviceState>;
    touchlinkDevices: TouchLinkDevice[];
    networkGraph: GraphI;
    groups: Group[];
    bridgeConfig: BridgeConfig;
    bridgeInfo: BridgeInfo;
    logs: LogMessage[];
}

const initialState: GlobalState = {
    forceRender: Date.now(),
    isLoading: false,
    isError: false,
    devices: [],
    deviceStates: {},
    touchlinkDevices: [],
    networkGraph: {
        links: [],
        nodes: []
    },
    groups: [],
    bridgeConfig: {} as BridgeConfig,
    bridgeInfo: {} as BridgeInfo,
    logs: []
};

const store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

export default store;