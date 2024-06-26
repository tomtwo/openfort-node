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

import { ThirdPartyOAuthProviderCUSTOM } from '../models/ThirdPartyOAuthProviderCUSTOM';
import { HttpFile } from '../http/http';

export class CustomAuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': ThirdPartyOAuthProviderCUSTOM;
    /**
    * Headers to send with the request
    */
    'headers'?: string;
    /**
    * URL to send the request to to verify the payload
    */
    'authenticationUrl': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ThirdPartyOAuthProviderCUSTOM",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "string",
            "format": ""
        },
        {
            "name": "authenticationUrl",
            "baseName": "authenticationUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



