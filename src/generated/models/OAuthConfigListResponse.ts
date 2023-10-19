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

import { AccelbyteOauthConfig } from '../models/AccelbyteOauthConfig';
import { HttpFile } from '../http/http';

/**
* Response for the OAuth config list method.
*/
export class OAuthConfigListResponse {
    /**
    * List of the OAuth providers configurations
    */
    'data': Array<AccelbyteOauthConfig>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AccelbyteOauthConfig>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OAuthConfigListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

