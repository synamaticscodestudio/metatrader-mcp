# GeoResolveIPv4Bulk (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Geo Services ](serverapi_geo.md "Geo Services")/ GeoResolveIPv4Bulk | [](imtserverapi_georesolveipv4.md "GeoResolveIPv4") [](imtserverapi_georesolveipv6.md "GeoResolveIPv6") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GeoResolveIPv4Bulk
Resolve multiple IPv4 addresses.
MTAPIRES IMTServerAPI::GeoResolveIPv4Bulk( const ULONG* ip_list, // Array of IP addresses const UINT  ip_list_len, // Array size LPWSTR result, // Result of resolving const UINT result_len, // Result size const UINT flags // Flags )  
---  
Parameters
ip_list
[in] Array of IP addresses.
ip_list_len
[in] The ip_list array size in bytes.
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