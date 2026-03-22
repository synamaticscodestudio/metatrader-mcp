# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Network | [](imtadminapi_commonset.md "CommonSet") [](imtadminapi_netservercreate.md "NetServerCreate") |
| --- | --- | --- |
| --- | --- |

Network Configuration
The functions manage platform component configurations, as well subscribe to and unsubscribe from events associated with configuration changes.
To manage the configuration of components, the following functions are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [NetServerCreate](imtadminapi_netservercreate.md "NetServerCreate") | Create an object of the network configuration. |
| [NetServerRangeCreate](imtadminapi_netserverrangecreate.md "NetServerRangeCreate") | Create an object of the range of orders, deals or accounts. |
| [NetServerAddressRangeCreate](imtadminapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") | Create an object of the range of IP addresses. |
| [NetServerClusterStateCreate](imtadminapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") | Create a network connection status object. |
| [NetServerBackupFolderCreate](imtadminapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") | Create an object describing the user directory to back up. |
| [NetServerSubscribe](imtadminapi_netserversubscribe.md "NetServerSubscribe") | Subscribe to events associated with the network configuration. |
| [NetServerUnsubscribe](imtadminapi_netserverunsubscribe.md "NetServerUnsubscribe") | Unsubscribe from events associated with the network configuration. |
| [NetServerRestart](imtadminapi_netserverrestart.md "NetServerRestart") | Restart a server by an ID. |
| [NetServerUpdate](imtadminapi_netserverupdate.md "NetServerUpdate") | Add and update a server configuration. |
| [NetServerUpdateBatch](imtadminapi_netserverupdatebatch.md "NetServerUpdateBatch") | Add or edit multiple server configurations. |
| [NetServerDelete](imtadminapi_netserverdelete.md "NetServerDelete") | Delete a server configuration by the index. |
| [NetServerDeleteBatch](imtadminapi_netserverdeletebatch.md "NetServerDeleteBatch") | Delete multiple server configurations. |
| [NetServerShift](imtadminapi_netservershift.md "NetServerShift") | Change the position of a server configuration in the list. |
| [NetServerTotal](imtadminapi_netservertotal.md "NetServerTotal") | The total number of server configurations available in the platform. |
| [NetServerNext](imtadminapi_netservernext.md "NetServerNext") | Get a server configuration by the index. |
| [NetServerGet](imtadminapi_netserverget.md "NetServerGet") | Get a server configuration by the ID. |
| [TLSCertificateUpdate](imtadminapi_tlscertificateupdate.md "TLSCertificateUpdate") | Add or update an SSL certificate on access servers. |
| [TLSCertificateDelete](imtadminapi_tlscertificatedelete.md "TLSCertificateDelete") | Delete an SSL certificate from access servers by position. |
| [TLSCertificateShift](imtadminapi_tlscertificateshift.md "TLSCertificateShift") | Change the position of an SSL certificate in the list. |
| [TLSCertificateTotal](imtadminapi_tlscertificatetotal.md "TLSCertificateTotal") | The total number of certificates installed for access servers. |
| [TLSCertificateNext](imtadminapi_tlscertificatenext.md "TLSCertificateNext") | Get the data of a certificate installed for access servers, by index. |