# Geo Services (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Geo Services | [](imtserverapi_serverunsubscribe.md "ServerUnsubscribe") [](imtserverapi_geocreate.md "GeoCreate") |
| --- | --- | --- |
| --- | --- |

Geo-services
The methods described in this section provide access to the GeoIP database information on the trading server. These methods enable access to the information about visitors' country, city, coordinates and Internet providers, based on their IP addresses. The database is automatically updated on the server once a week, keeping the relevant information up to date.
By using these methods, you can generate user activity reports and create maps, among others.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [GeoCreate](imtserverapi_geocreate.md "GeoCreate") | Create an IP address description object. |
| [GeoResolve](imtserverapi_georesolve.md "GeoResolve") | Resolve an IPv4 or IPv6 address. |
| [GeoResolveBatch](imtserverapi_georesolvebatch.md "GeoResolveBatch") | Resolve a list of IP addresses of any type: IPv4 or IPv6. |
| [GeoResolveAny](imtserverapi_georesolveany.md "GeoResolveAny") | Resolve a list of IP addresses of any type: IPv4 or IPv6. The method is obsolete and is no longer used. |
| [GeoResolveIPv4](imtserverapi_georesolveipv4.md "GeoResolveIPv4") | Resolve one IPv4 address. The method is obsolete and is no longer used. |
| [GeoResolveIPv4Bulk](imtserverapi_georesolveipv4bulk.md "GeoResolveIPv4Bulk") | Resolve multiple IPv4 addresses. The method is obsolete and is no longer used. |
| [GeoResolveIPv6](imtserverapi_georesolveipv6.md "GeoResolveIPv6") | Resolve one IPv6 address. The method is obsolete and is no longer used. |
| [GeoResolveIPv6Bulk](imtserverapi_georesolveipv6bulk.md "GeoResolveIPv6Bulk") | Resolve multiple IPv6 addresses. The method is obsolete and is no longer used. |