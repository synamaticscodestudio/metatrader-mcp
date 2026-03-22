# IMTGeo (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Geo Services ](reference_geo.md "Geo Services")/ IMTGeo | [](reference_geo.md "Geo Services") [](imtgeo_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTGeo
This interface provides access to information about the IP address, including the owner, geographic location, and other details.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtgeo_release.md "Release") | Delete the current object. |
| [Assign](imtgeo_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtgeo_clear.md "Clear") | Clear an object. |
| [IPv4From](imtgeo_ipv4from.md "IPv4From") | Get the beginning of the range of IPv4 addresses. |
| [IPv4To](imtgeo_ipv4to.md "IPv4To") | Get the end of the range of IPv4 addresses. |
| [IPv6From](imtgeo_ipv6from.md "IPv6From") | Get the beginning of the range of IPv6 addresses. |
| [IPv6To](imtgeo_ipv6to.md "IPv6To") | Get the end of the range of IPv6 addresses. |
| [Continent](imtgeo_continent.md "Continent") | Get the continent where an IP address is located. |
| [Country](imtgeo_country.md "Country") | Get the country where an IP address is located. |
| [City](imtgeo_city.md "City") | Get the city where an IP address is located. |
| [Region](imtgeo_region.md "Region") | Get the region where an IP address is located. |
| [Province](imtgeo_province.md "Province") | Get the province/state where an IP address is located. |
| [ASN](imtgeo_asn.md "ASN") | Get the Autonomous System Number (ASN) to which an IP address belongs. |
| [ASNOrganization](imtgeo_asnorganization.md "ASNOrganization") | Get the name of the autonomous system to which an IP address belongs. |
| [ISP](imtgeo_isp.md "ISP") | Get the name of the internet service provider that owns an IP address. |
| [ISPOrganization](imtgeo_isporganization.md "ISPOrganization") | Get the organization that owns an IP address. |
| [Latitude](imtgeo_latitude.md "Latitude") | Get the latitude for an IP address. |
| [Longitude](imtgeo_longitude.md "Longitude") | Getting longitude for an IP address. |
| [Details](imtgeo_details.md "Details") | Get more information about an IP address. |

The IMTGeo class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnGeoRequestFlags](imtgeo_enum.htm#engeorequestflags) | Types of data requested about an IP address. |
| [EnGeoRecordDetails](imtgeo_enum.htm#engeorecorddetails) | Flags for transmitting additional information about an IP address. |