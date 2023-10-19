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

export class StartRecoveryRequest {
    /**
    * Address of the new owner
    */
    'newOwnerAddress': string;
    /**
    * The policy ID (starts with pol_)
    */
    'policy': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "newOwnerAddress",
            "baseName": "newOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StartRecoveryRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

