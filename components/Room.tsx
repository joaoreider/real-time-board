"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children, roomId, fallback }: { children: ReactNode, roomId: string, fallback: NonNullable<ReactNode> | null}) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_LIPQBvmfJPyWgSVpR3WWlcKK4id686RzvjAN6-M8CpOYBi0r7C_GVdaICV2C_Cgl"}>
      <RoomProvider id={roomId} initialPresence={{fallback}}>
        <ClientSideSuspense fallback={fallback}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}