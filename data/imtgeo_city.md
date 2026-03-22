# City (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ City | [](imtgeo_country.md "Country") [](imtgeo_region.md "Region") |
| --- | --- | --- |
| --- | --- |

IMTGeo::City
Get the city where an IP address is located.
C++
LPCWSTR IMTGeo::City() const  
---  
.NET (Gateway/Manager API)
string CIMTGeo.City()  
---  
Return Value
The city where an IP address is located.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTGeo](imtgeo.md "IMTGeo") object.
If you need to use the string after deleting the object (by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object), you should create its copy.