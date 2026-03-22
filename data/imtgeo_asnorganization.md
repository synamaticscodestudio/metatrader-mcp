# ASNOrganization (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services") / [ IMTGeo ](imtgeo.md "IMTGeo")/ ASNOrganization | [](imtgeo_asn.md "ASN") [](imtgeo_isp.md "ISP") |
| --- | --- | --- |
| --- | --- |

IMTGeo::Province
Get the name of the [autonomous system](https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_\(%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82\)) to which an IP address belongs.
C++
LPCWSTR IMTGeo::Province() const  
---  
.NET (Gateway/Manager API)
string CIMTGeo.Province()  
---  
Return Value
The name of the autonomous system to which an IP address belongs.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTGeo](imtgeo.md "IMTGeo") object.
If you need to use the string after deleting the object (by calling the [IMTGeo::Release](imtgeo_release.md "Release") method of this object), you should create its copy.