# GeoResolveIPv6 (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Geo Services ](serverapi_geo.md "Geo Services")/ GeoResolveIPv6 | [](imtserverapi_georesolveipv4bulk.md "GeoResolveIPv4Bulk") [](imtserverapi_georesolveipv6bulk.md "GeoResolveIPv6Bulk") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GeoResolveIPv6
Resolve one IPv6 address.
MTAPIRES IMTServerAPI::GeoResolveIPv6( const IN6_ADDR ip, // IP address LPWSTR result, // Result of resolving const UINT result_len, // Result size const UINT flags // Flags )  
---  
Parameters
ip
[in] IP address.
result
[out] String array with resolving results: source IP address, region, country, city, province, zip code, providers and coordinates.
result_len
[in] The size of the 'result' array in bytes.
flags
[in] Additional resolving parameters in the form of flags. The parameter is currently not used, fill it with zero.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.