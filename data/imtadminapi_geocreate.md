# GeoCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Geo Services ](imtadminapi_geo.md "Geo Services")/ GeoCreate | [](imtadminapi_geo.md "Geo Services") [](imtadminapi_georesolve.md "GeoResolve") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GeoCreate
Create an IP address description object.
C++
IMTGeo* IMTAdminAPI::GeoCreate()  
---  
.NET
CIMTGeo CIMTAdminAPI.GeoCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTGeo](imtgeo.md "IMTGeo") interface. NULL is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object.