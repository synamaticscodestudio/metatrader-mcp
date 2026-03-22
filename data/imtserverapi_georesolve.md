# GeoResolve (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Geo Services ](serverapi_geo.md "Geo Services")/ GeoResolve | [](imtserverapi_geocreate.md "GeoCreate") [](imtserverapi_georesolvebatch.md "GeoResolveBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GeoResolve
Resolve an IPv4 or IPv6 address.
MTAPIRES IMTServerAPI::GeoResolve( LPCWSTR address, // IP address const UINT flags, // flags IMTGeo record // IP address description )  
---  
Parameters
address
[in] IPv4 or IPv6 address.
flags
[in] Additional resolution parameters in the form of flags from the [IMTGeo::EnGeoRequestFlags](imtgeo_enum.htm#engeorequestflags) enumeration.
record
[out] IP address description as an [IMTGeo](imtgeo.md "IMTGeo") object. The object must be first created by the [IMTReportAPI::GeoCreate](imtserverapi_geocreate.md "GeoCreate") method.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.