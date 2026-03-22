# GeoResolveAny (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Geo Services ](serverapi_geo.md "Geo Services")/ GeoResolveAny | [](imtserverapi_georesolvebatch.md "GeoResolveBatch") [](imtserverapi_georesolveipv4.md "GeoResolveIPv4") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GeoResolveAny
Resolve a list of IP addresses of any type: IPv4 or IPv6.
MTAPIRES IMTServerAPI::GeoResolveAny( LPCWSTR ip_list, // List of IP addresses LPWSTR result, // Result of resolving const UINT result_len, // Result size const UINT flags // Flags )  
---  
Parameters
ip_list
[in] A list of IP addresses separated by commas, spaces or line breaks (\n). Addresses of both types can be simultaneously passed in the list.
result
[out] String array with resolving results: source IP address, region, country, city, province, zip code, providers and coordinates.
result_len
[in] The size of the 'result' array in bytes.
flags
[in] Additional resolving parameters in the form of flags. The parameter is currently not used, fill it with zero.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
IP addresses of both types can be simultaneously passed in ip_list.
If you know the types of addresses in advance, it is recommended to use the appropriate resolving methods: GeoResolveIPv4* or * GeoResolveIPv6*.
The method is obsolete and is no longer used.
Example
| //+---------------------------------+ // | Resolve IP address | //+---------------------------------+ MTAPIRES CPluginInstance::ResolveIP(LPCWSTR ip_list) { //--- check if(!m_api) { m_api->LoggerOut(MTLogErr, L"Failed to resolve IP address, api internface not found"); return(MT_RET_ERROR); } MTAPIRES retcode; wchar_t result[8192]; //--- resolve address if(retcode=m_api->GeoResolveAny(ip_list, result, _countof(result), 0) != MT_RET_OK) { m_api->LoggerOut(MTLogErr, L"Failed to resolve IP address"); return(retcode); } else { m_api->LoggerOut(MTLogOK, L"Resolving result: %s", result); return(MT_RET_OK); } if(result) delete(result); } //+---------------------------------+ |
| --- | --- | --- |

---