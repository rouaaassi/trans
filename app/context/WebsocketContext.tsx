import { createContext } from "react";
import { Socket, io } from "socket.io-client";

export const socket = io("https://5c9d-24-40-157-2.ngrok-free.app"); // TODO: add env variable
export const WebsocketContext = createContext<Socket>(socket);

export const WebsocketProvider = WebsocketContext.Provider;
