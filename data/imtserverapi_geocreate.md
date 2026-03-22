# GeoCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Geo Services ](serverapi_geo.md "Geo Services")/ GeoCreate | [](serverapi_geo.md "Geo Services") [](imtserverapi_georesolve.md "GeoResolve") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GeoCreate
Create an IP address description object.
IMTGeo* IMTServerAPI::GeoCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTGeo](imtgeo.md "IMTGeo") interface. NULL is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object.