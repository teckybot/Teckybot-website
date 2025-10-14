import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL.replace("/api", ""); 
export const socket = io(SOCKET_URL, { transports: ["websocket"] });

export const subscribeToJobUpdates = (callbacks) => {
  if (callbacks.onJobCreated) socket.on("jobCreated", callbacks.onJobCreated);
  if (callbacks.onJobUpdated) socket.on("jobUpdated", callbacks.onJobUpdated);
  if (callbacks.onJobDeleted) socket.on("jobDeleted", callbacks.onJobDeleted);

  return () => {
    socket.off("jobCreated");
    socket.off("jobUpdated");
    socket.off("jobDeleted");
  };
};
