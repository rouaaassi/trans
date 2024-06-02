import { createContext } from "react";
import { Socket, io } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_SERVER as string);
export const WebsocketContext = createContext<Socket>(socket);

export const WebsocketProvider = WebsocketContext.Provider;
