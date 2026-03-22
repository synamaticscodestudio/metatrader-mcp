# Region (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ Region | [](imtgeo_city.md "City") [](imtgeo_province.md "Province") |
| --- | --- | --- |
| --- | --- |

IMTGeo::Region
Get the region where an IP address is located.
C++
LPCWSTR IMTGeo::Region() const  
---  
.NET (Gateway/Manager API)
string CIMTGeo.Region()  
---  
Return Value
The region where an IP address is located.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTGeo](imtgeo.md "IMTGeo") object.
If you need to use the string after deleting the object (by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object), you should create its copy.