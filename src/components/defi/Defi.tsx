import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Goerli } from "@usedapp/core";

// const config = {
//   readOnlyChainId: Goerli.chainId,
//   readOnlyUrls: {
//     [Goerli.chainId]:
//       "https://goerli.infura.io/v3/49dc5ad52f5a45c58f1d0dc18f069198",
//   },
// };

type EthereumAddresses = string[];

const Defi = (): JSX.Element => {
  const [metamaskDetected, setMetamaskDetected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  const requestAccount = async () => {
    if (window.ethereum) {
      setMetamaskDetected(true);
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: EthereumAddresses) => {
          setWalletAddress(res[0]);
        });
      // .then(() => {
      //   window.ethereum.request({
      //     method: "eth_getBalance",
      //     params: [address, "latest"],
      //   });
      // });
    } else {
      console.log("nothing");
    }
  };

  useEffect(() => {
    requestAccount();
  }, []);

  useEffect(() => {
    console.log("doing");
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // console.log(ethers.getDefaultProvider());
    // console.log(ethers.getDefaultProvider(Goerli.chainId));
  }, []);
  //   useEffect(() => {
  //     const getBalance = async () => {
  //       if (walletAddress.length > 0) {
  //         console.log("getting balance");
  //         await window.ethereum
  //           .request({
  //             method: "eth_getBalance",
  //             params: [walletAddress, "latest"],
  //           })
  //           .then((res: any) => {
  //             // Return string value to convert it into int balance

  //             console.log(ethers.get);

  //             // Yarn add ethers for using ethers utils or
  //             // npm install ethers
  //             // console.log(ethers.utils.formatEther(balance));
  //             // Format the string into main latest balance
  //           });
  //       } else {
  //         console.log("wallet not populated");
  //       }
  //     };
  //     getBalance();
  //   }, [walletAddress]);

  return (
    // <DAppProvider config={config}>
    <>
      {metamaskDetected ? (
        <>
          <button className="btn" onClick={() => {}}>
            Defi
          </button>
          <div>{walletAddress}</div>
        </>
      ) : (
        <div>You must connect</div>
      )}
    </>
    // </DAppProvider>
  );
};

export default Defi;
