# Geo Services (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Geo Services | [](imtmanagerapi_ecnrequesthistorybytickets.md "ECNRequestHistoryByTickets") [](imtmanagerapi_geocreate.md "GeoCreate") |
| --- | --- | --- |
| --- | --- |

Geo-services
The methods described in this section provide access to the GeoIP database information on the trading server. These methods enable access to the information about visitors' country, city, coordinates and Internet providers, based on their IP addresses. The database is automatically updated on the server once a week, keeping the relevant information up to date.
By using these methods, you can generate user activity reports and create maps, among others.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [GeoCreate](imtmanagerapi_geocreate.md "GeoCreate") | Create an IP address description object. |
| [GeoResolve](imtmanagerapi_georesolve.md "GeoResolve") | Resolve an IPv4 or IPv6 address. |
| [GeoResolveBatch](imtmanagerapi_georesolvebatch.md "GeoResolveBatch") | Resolve a list of IP addresses of any type: IPv4 or IPv6. |