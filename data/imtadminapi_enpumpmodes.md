# Pumping Mode (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Connection to the Server ](imtadminapi_connection.md "Connecting to the Server")/ Pumping Modes | [](imtadminapi_connection.md "Connecting to the Server") [](imtadminapi_connect.md "Connect") |
| --- | --- | --- |
| --- | --- |

Pumping Mode
Enabled pumping mode means that the application will synchronize the appropriate server database with a locally created database. Possible pumping modes are enumerated in IMTAdminAPI::EnPumpModes. The pumping mode in which we want to connect is specified in the pump_mode parameter of the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PUMP_MODE_MAIL | 0x00000004 | Mail pumping. |
| PUMP_MODE_NEWS | 0x00000020 | News pumping. |
| PUMP_MODE_FULL | 0xffffffff | News and mail pumping. |

The pumping mode does not affect the operation of those methods, which request data directly from the server (such as [IMTAdminAPI::UserRequest](imtadminapi_userrequest.md "UserRequest"), [IMTAdminAPI::OrderRequest](imtadminapi_orderrequest.md "OrderRequest") etc.). Such methods can be used in any pumping mode.  
---