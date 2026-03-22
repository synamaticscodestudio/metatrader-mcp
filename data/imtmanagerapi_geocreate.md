# GeoCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Geo Services ](imtmanagerapi_geo.md "Geo Services")/ GeoCreate | [](imtmanagerapi_geo.md "Geo Services") [](imtmanagerapi_georesolve.md "GeoResolve") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GeoCreate
Create an IP address description object.
C++
IMTGeo* IMTManagerAPI::GeoCreate()  
---  
.NET
CIMTGeo CIMTManagerAPI.GeoCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTGeo](imtgeo.md "IMTGeo") interface. NULL is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object.