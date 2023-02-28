import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "../aboutCard/AboutCard";

const About = () => {
  return (
    <div className="about">
      <h2>A Growing Protocol Ecosystem</h2>
      <p>
        The Defi protocol system empowers users, developers, and participants in
        the defi market to access an open and powerful marketplace.
      </p>
      <div className="card-container">
        <div className="card">
          <AboutCard
            icon={<SiHiveBlockchain />}
            heading={"Reliable Tamper Proof Network"}
            text={
              "Use decentrilization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract"
            }
          />
        </div>
        <div className="card">
          <AboutCard
            icon={<SiStrapi />}
            heading={"Seamless connection to APIs"}
            text={
              "Build on a flexible framework that can retrieve data from any API, connect with existing systems and integrate with any current or future blockchain"
            }
          />
        </div>
        <div className="card">
          <AboutCard
            icon={<SiFsecure />}
            heading={"Proven, ready-made solutions"}
            text={
              "Integrate pre-built oracle solutions that already secure tens of billions in smart contract value for mearket-leading decentralized applications."
            }
          />
        </div>
        <div className="card">
          <AboutCard
            icon={<VscServerProcess  />}
            heading={"Secure off-chain computation"}
            text={
              "Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risks of manual interventions and centralized servers."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
