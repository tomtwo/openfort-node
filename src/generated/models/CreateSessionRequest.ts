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

export class CreateSessionRequest {
    /**
    * The address of the session key.
    */
    'address': string;
    /**
    * The chain ID. Must be a [supported chain](/chains).
    */
    'chainId': number;
    /**
    * If no account exists for a given player, create one with this address.
    */
    'externalOwnerAddress'?: string;
    /**
    * Maximum number of times the session key can be used.
    */
    'limit'?: number;
    /**
    * Set to `true` to indicate that the transactionIntent request should be resolved as soon as possible, after the transactionIntent is created and simulated and before it arrives on chain.
    */
    'optimistic'?: boolean;
    /**
    * ID of the Policy that defines the gas sponsorship strategy (starts with `pol_`). If no Policy is provided, the own Account native token funds will be used to pay for gas.
    */
    'policy'?: string;
    /**
    * The unix timestamp in seconds when the session key becomes valid.
    */
    'validAfter': number;
    /**
    * The unix timestamp in seconds when the session key expires.
    */
    'validUntil': number;
    /**
    * The list of whitelisted addresses (contracts the session key can interact with).
    */
    'whitelist'?: Array<string>;
    /**
    * The player ID (starts with pla_).
    */
    'player': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
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
            "name": "externalOwnerAddress",
            "baseName": "externalOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "optimistic",
            "baseName": "optimistic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        },
        {
            "name": "validAfter",
            "baseName": "validAfter",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "validUntil",
            "baseName": "validUntil",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "whitelist",
            "baseName": "whitelist",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateSessionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

