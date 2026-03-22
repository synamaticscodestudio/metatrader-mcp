# Gateways (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases")/ Gateways | [](webapi_messenger_send.md "Send Message") [](webapi_gateway_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Gateways
The following requests are provided for operations with gateway configurations in the trading platform:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/gateway/restart](webapi_gateway_restart.md "Restart") | Restart all gateways in the platform. |
| [/api/gateway/add](webapi_gateway_add.md "Add") | Add or update a gateway configuration in the trading platform. |
| [/api/gateway/delete](webapi_gateway_delete.md "Delete") | Delete a gateway configuration from the trading platform. |
| [/api/gateway/shift](webapi_gateway_shift.md "Shift") | Change the position of a gateway configuration in the list. |
| [/api/gateway/total](webapi_gateway_total.md "Get Total") | Get the total number of gateway configurations available in the platform. |
| [/api/gateway/next](webapi_gateway_next.md "Get by Index") | Get the configuration of one or more gateways by index in the list. |
| [/api/gateway/get](webapi_gateway_get.md "Get by Name") | Get a gateway configuration by the name. |
| [/api/gateway/get_all](webapi_gateway_get_all.md "Get All") | Get all existing gateway configurations. |
| [/api/gateway/module/total](webapi_gateway_module_total.md "Get Total Modules") | Get the number of gateway modules available in the platform. |
| [/api/gateway/module/next](webapi_gateway_module_next.md "Get Module by Index") | Get a gateway module description by the index in the list. |
| [/api/gateway/module/get](webapi_gateway_module_get.md "Get Module by Name") | Get the description of a gateway module by its name. |
| [/api/gateway/get_position](webapi_gateway_position_get.md "Get Positions") | Get the current state of positions on trading accounts which are used by the gateway in an external system. |