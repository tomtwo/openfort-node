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

import { ChargeCustomTokenPolicyStrategy } from '../models/ChargeCustomTokenPolicyStrategy';
import { FixedRateTokenPolicyStrategy } from '../models/FixedRateTokenPolicyStrategy';
import { PayForUserPolicyStrategy } from '../models/PayForUserPolicyStrategy';
import { SponsorSchemaFIXEDRATE } from '../models/SponsorSchemaFIXEDRATE';
import { HttpFile } from '../http/http';

export class PolicyStrategy {
    'sponsorSchema': SponsorSchemaFIXEDRATE;
    'depositor'?: string | null;
    'tokenContract': string;
    'tokenContractAmount': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sponsorSchema",
            "baseName": "sponsorSchema",
            "type": "SponsorSchemaFIXEDRATE",
            "format": ""
        },
        {
            "name": "depositor",
            "baseName": "depositor",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenContract",
            "baseName": "tokenContract",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenContractAmount",
            "baseName": "tokenContractAmount",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyStrategy.attributeTypeMap;
    }

    public constructor() {
    }
}



