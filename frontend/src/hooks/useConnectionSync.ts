import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useIsomorphicLayoutEffect } from "@react-spring/web";

export function useConnectionSync() {
  const [isConnected, setIsConnected] = useState(false);
  const { isConnected: wagmiIsConnected } = useAccount();

  useIsomorphicLayoutEffect(() => {
    setIsConnected(wagmiIsConnected);
  }, [wagmiIsConnected]);

  return isConnected;
}
