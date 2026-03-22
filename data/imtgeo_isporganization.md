# ISPOrganization (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ ISPOrganization | [](imtgeo_isp.md "ISP") [](imtgeo_latitude.md "Latitude") |
| --- | --- | --- |
| --- | --- |

IMTGeo::ISPOrganization
Get the organization that owns an IP address.
C++
LPCWSTR IMTGeo::ISPOrganization() const  
---  
.NET (Gateway/Manager API)
string CIMTGeo.ISPOrganization()  
---  
Return Value
The organization that owns an IP address.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTGeo](imtgeo.md "IMTGeo") object.
If you need to use the string after deleting the object (by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object), you should create its copy.