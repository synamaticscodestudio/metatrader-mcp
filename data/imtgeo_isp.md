# ISP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ ISP | [](imtgeo_asnorganization.md "ASNOrganization") [](imtgeo_isporganization.md "ISPOrganization") |
| --- | --- | --- |
| --- | --- |

IMTGeo::ISP
Get the name of the internet service provider that owns an IP address.
C++
LPCWSTR IMTGeo::ISP() const  
---  
.NET (Gateway/Manager API)
string CIMTGeo.ISP()  
---  
Return Value
The name of the internet service provider that owns an IP address.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTGeo](imtgeo.md "IMTGeo") object.
If you need to use the string after deleting the object (by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object), you should create its copy.