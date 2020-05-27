import {
  ForwarderFactory,
  ChainID,
  ReplayProtectionType,
  RelayHubForwarder,
} from "../..";
import { Signer } from "ethers";
import { RELAY_HUB_ADDRESS } from "../../deployment/addresses";
import { ForwarderType } from "./forwarderFactory";

export class RelayHubForwarderFactory extends ForwarderFactory<
  RelayHubForwarder
> {
  public constructor() {
    super(ForwarderType.RelayHub);
  }

  /**
   * Create a new instance of the forwarder
   * @param chainid MAINNET or ROPSTEN
   * @param replayProtectionType Bitflip, Multinonce or Nonce
   * @param signer Signer's wallet
   */
  protected async createInternal(
    chainid: ChainID,
    replayProtectionType: ReplayProtectionType,
    signer: Signer
  ): Promise<RelayHubForwarder> {
    return new RelayHubForwarder(
      chainid,
      signer,
      RELAY_HUB_ADDRESS,
      this.getReplayProtection(signer, RELAY_HUB_ADDRESS, replayProtectionType)
    );
  }
}
