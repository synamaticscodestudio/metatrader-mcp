# GeoCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Geo Services ](imtreportapi_geo.md "Geo Services")/ GeoCreate | [](imtreportapi_geo.md "Geo Services") [](imtreportapi_georesolve.md "GeoResolve") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GeoCreate
Create an IP address description object.
IMTGeo* IMTReportAPI::GeoCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTGeo](imtgeo.md "IMTGeo") interface. NULL is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object.