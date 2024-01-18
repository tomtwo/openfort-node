/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PlayerTransferOwnershipRequest {
    /**
    * ID of the Policy that defines the gas sponsorship strategy (starts with `pol_`). If no Policy is provided, the own Account native token funds will be used to pay for gas.
    */
    'policy': string;
    /**
    * The chain ID. Must be a [supported chain](/chains).
    */
    'chainId': number;
    /**
    * The address of the new owner
    */
    'newOwnerAddress': string;
    /**
    * ID of the Player that has the Account you want to transfer ownership from (starts with `pla_`).
    */
    'player'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "newOwnerAddress",
            "baseName": "newOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerTransferOwnershipRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

