# GeoResolve (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Geo Services ](imtreportapi_geo.md "Geo Services")/ GeoResolve | [](imtreportapi_geocreate.md "GeoCreate") [](imtreportapi_georesolvebatch.md "GeoResolveBatch") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GeoResolve
Resolve an IPv4 or IPv6 address.
MTAPIRES IMTReportAPI::GeoResolve( LPCWSTR address, // IP address const UINT flags, // flags IMTGeo record // IP address description )  
---  
Parameters
address
[in] IPv4 or IPv6 address.
flags
[in] Additional resolution parameters in the form of flags from the [IMTGeo::EnGeoRequestFlags](imtgeo_enum.htm#engeorequestflags) enumeration.
record
[out] IP address description as an [IMTGeo](imtgeo.md "IMTGeo") object. The object must be first created by the [IMTReportAPI::GeoCreate](imtreportapi_geocreate.md "GeoCreate") method.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.