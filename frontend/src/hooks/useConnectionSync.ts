import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

export function useConnectionSync() {
  const [isConnected, setIsConnected] = useState(false);
  const { isConnected: wagmiIsConnected } = useAccount();

  useEffect(() => {
    setIsConnected(wagmiIsConnected);
  }, [wagmiIsConnected]);

  return isConnected;
}
