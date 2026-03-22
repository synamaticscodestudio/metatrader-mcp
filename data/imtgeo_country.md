# Country (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ Country | [](imtgeo_continent.md "Continent") [](imtgeo_city.md "City") |
| --- | --- | --- |
| --- | --- |

IMTGeo::Country
Get the country where an IP address is located.
C++
LPCWSTR IMTGeo::Country() const  
---  
.NET (Gateway/Manager API)
string CIMTGeo.Country()  
---  
Return Value
The country where an IP address is located.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTGeo](imtgeo.md "IMTGeo") object.
If you need to use the string after deleting the object (by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object), you should create its copy.