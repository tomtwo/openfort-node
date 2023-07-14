/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class CreateSessionPlayerRequest {
    'address': string;
    'policy'?: string;
    'optimistic'?: boolean;
    'externalOwnerAddress'?: string;
    'chainId': number;
    'validUntil': number;
    'validAfter': number;
    'limit'?: number;
    'whitelist'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string"
        },
        {
            "name": "optimistic",
            "baseName": "optimistic",
            "type": "boolean"
        },
        {
            "name": "externalOwnerAddress",
            "baseName": "externalOwnerAddress",
            "type": "string"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "validUntil",
            "baseName": "validUntil",
            "type": "number"
        },
        {
            "name": "validAfter",
            "baseName": "validAfter",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "whitelist",
            "baseName": "whitelist",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CreateSessionPlayerRequest.attributeTypeMap;
    }
}

