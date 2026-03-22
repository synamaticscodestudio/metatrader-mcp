# Network (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Network | [](imtserverapi_commonset.md "CommonSet") [](imtserverapi_netservercreate.md "NetServerCreate") |
| --- | --- | --- |
| --- | --- |

Network Configuration
Network configuration means the management of settings of the the server components of the platform: main and ordinary trade servers, history and access servers, backup servers.
Functions described in this section allow managing the configuration of the platform components, as well subscribe and unsubscribe from events associated with its change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [NetServerCreate](imtserverapi_netservercreate.md "NetServerCreate") | Create an object of the network configuration. |
| [NetServerClusterStateCreate](imtserverapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") | Create the network connection status object. |
| [NetServerRangeCreate](imtserverapi_netserverrangecreate.md "NetServerRangeCreate") | Create an object of the range of orders, deals or accounts. |
| [NetServerAddressRangeCreate](imtserverapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") | Create an object of the range of IP addresses. |
| [NetServerBackupFolderCreate](imtserverapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") | Create an object describing the user directory to back up. |
| [NetServerSubscribe](imtserverapi_netserversubscribe.md "NetServerSubscribe") | Subscribe to events and hooks associated with the network configuration. |
| [NetServerUnsubscribe](imtserverapi_netserverunsubscribe.md "NetServerUnsubscribe") | Unsubscribe from events and hooks associated with the network configuration. |
| [NetServerAdd](imtserverapi_netserveradd.md "NetServerAdd") | Add or update a server configuration. |
| [NetServerDelete](imtserverapi_netserverdelete.md "NetServerDelete") | Delete a server configuration by the index. |
| [NetServerShift](imtserverapi_netservershift.md "NetServerShift") | Change the position of a server configuration in the list. |
| [NetServerTotal](imtserverapi_netservertotal.md "NetServerTotal") | The total number of server configurations available in the platform. |
| [NetServerNext](imtserverapi_netservernext.md "NetServerNext") | Get a server configuration by the index. |
| [NetServerGet](imtserverapi_netserverget.md "NetServerGet") | Get a server configuration by the ID. |
| [TLSCertificateUpdate](imtserverapi_tlscertificateupdate.md "TLSCertificateUpdate") | Add or update an SSL certificate on access servers. |
| [TLSCertificateDelete](imtserverapi_tlscertificatedelete.md "TLSCertificateDelete") | Delete an SSL certificate from access servers by position. |
| [TLSCertificateShift](imtserverapi_tlscertificateshift.md "TLSCertificateShift") | Change the position of an SSL certificate in the list. |
| [TLSCertificateTotal](imtserverapi_tlscertificatetotal.md "TLSCertificateTotal") | The total number of certificates installed for access servers. |
| [TLSCertificateNext](imtserverapi_tlscertificatenext.md "TLSCertificateNext") | Get the data of a certificate installed for access servers, by index. |
| [TLSCertificatePfx](imtserverapi_tlscertificatepfx.md "TLSCertificatePfx") | Get the file of a certificate installed for access servers, by index. |