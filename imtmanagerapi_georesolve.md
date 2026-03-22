# GeoResolve (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Geo Services ](imtmanagerapi_geo.md "Geo Services")/ GeoResolve | [](imtmanagerapi_geocreate.md "GeoCreate") [](imtmanagerapi_georesolvebatch.md "GeoResolveBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GeoResolve
Resolve an IPv4 or IPv6 address.
C++
MTAPIRES IMTManagerAPI::GeoResolve( LPCWSTR address, // IP address const UINT flags, // flags IMTGeo record // IP address description )  
---  
.NET
MTRetCode CIMTManagerAPI.GeoResolve( string address, // IP address CIMTGeo.EnGeoRequestFlags flags, // flags CIMTGeo record // IP address description )  
---  
Python
ManagerAPI.GeoResolve( address, # IP address flags # flags )  
---  
Parameters
address
[in] IPv4 or IPv6 address.
flags
[in] Additional resolution parameters in the form of flags from the [IMTGeo::EnGeoRequestFlags](imtgeo_enum.htm#engeorequestflags) enumeration.
record
[out] IP address description as an [IMTGeo](imtgeo.md "IMTGeo") object. The object must be first created by the [IMTManagerAPI::GeoCreate](imtmanagerapi_geocreate.md "GeoCreate") method.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.