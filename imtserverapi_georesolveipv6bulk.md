# GeoResolveIPv6Bulk (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Geo Services ](serverapi_geo.md "Geo Services")/ GeoResolveIPv6Bulk | [](imtserverapi_georesolveipv6.md "GeoResolveIPv6") [](serverapi_dataset.md "Dataset") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GeoResolveIPv6Bulk
Resolve multiple IPv6 addresses.
MTAPIRES IMTServerAPI::GeoResolveIPv6Bulk( const IN6_ADDR* ip_list, // Array of IP addresses const UINT  ip_list_len, // Array size LPWSTR result, // Result of resolving const UINT result_len, // Result size const UINT flags // Flags )  
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