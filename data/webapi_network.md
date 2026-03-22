# Network (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases")/ Network | [](webapi_common_set.md "Set") [](webapi_server_data_format.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Network
Network configuration features settings of the platform's server components, which include the main and ordinary trade servers, as well as history, access and backup servers. The following requests are provided for relevant operations:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/server/add](webapi_server_add.md "Add Server") | Add and update a server configuration in the trading platform. |
| [/api/server/delete](webapi_server_delete.md "Delete Server") | Delete a server configuration from the trading platform. |
| [/api/server/shift](webapi_server_shift.md "Shift Server") | Change the position of a server configuration in the list. |
| [/api/server/total](webapi_server_total.md "Get Number of Servers") | Get the total number of server configurations existing in the platform. |
| [/api/server/next](webapi_server_next.md "Get Server by Index") | Get the configuration of one or more servers by index in the list. |
| [/api/server/get](webapi_server_get.md "Get Server by Identifier") | Get server configurations by a list of IDs or indexes in a list. |
| [/api/server/restart](webapi_server_restart.md "Restart Server") | Restart the server to which the Web client is connected. |
| [/api/tls_certificate/add](webapi_tls_certificate_add.md "Add Certificate") | Add or update an SSL certificate on access servers. |
| [/api/tls_certificate/delete](webapi_tls_certificate_delete.md "Delete Certificate") | Delete an SSL certificate from access servers by position. |
| [/api/tls_certificate/shift](webapi_tls_certificate_shift.md "Shift Certificate") | Change the position of an SSL certificate in the list. |
| [/api/tls_certificate/total](webapi_tls_certificate_total.md "Get Total Certificates") | The total number of certificates installed for access servers. |
| [/api/tls_certificate/next](webapi_tls_certificate_next.md "Get Certificate by Index") | Get the data of a certificate installed for access servers, by index. |

The network configuration data format is described in the "[Data Structure](webapi_server_data_format.md "Data Structure")" section.