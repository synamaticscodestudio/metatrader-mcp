# GeoResolveBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Geo Services ](imtadminapi_geo.md "Geo Services")/ GeoResolveBatch | [](imtadminapi_georesolve.md "GeoResolve") [](imtmanagerapi.md "Manager Interface") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GeoResolveAny
Resolve a list of IP addresses of any type: IPv4 or IPv6.
C++
MTAPIRES IMTAdminAPI::GeoResolveAny( LPCWSTR* addresses, // array of IP addresses const UINT addresses_total, // number of addresses const UINT flags, // flags IMTGeo** records, // description of IP addresses MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.GeoResolveAny( string[] addresses, // array of IP addresses CIMTGeo.EnGeoRequestFlags flags, // flags CIMTGeo[] records, // description of IP addresses MTRetCode[] retcodes // array of results )  
---  
Python
AdminAPI.GeoResolveAny( addresses, # list of IP addresses flags # flags )  
---  
Parameters
addresses
[in] Array of addresses of any type: IPv4 or IPv6.
addresses_total
[in] Number of addresses in the 'addresses' array.
flags
[in] Additional resolution parameters in the form of flags from the [IMTGeo::EnGeoRequestFlags](imtgeo_enum.htm#engeorequestflags) enumeration.
records
[out] Description of IP addresses as an array of [IMTGeo](imtgeo.md "IMTGeo") objects. The objects must be first created by the [IMTAdminAPI::GeoCreate](imtadminapi_geocreate.md "GeoCreate") method.
results
[out] Array with the address resolution results. The size of the 'results' array must not be less than that of 'addresses'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified addresses have been processed. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code indicates that resolution results are only available for some of the addresses. Analyze the 'results' array for more details on the execution results. It contains the result of processing of each address from the 'addresses' array. The result index corresponds to the address index in the source array.
Note
In 'addresses' you can simultaneously transfer IP addresses of both types.