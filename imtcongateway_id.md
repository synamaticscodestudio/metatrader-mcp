# ID (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ ID | [](imtcongateway_name.md "Name") [](imtcongateway_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::ID
Gets the gateway identifier. This ID is specified in the [IMTDeal::Dealer](imtdeal_dealer.md "Dealer") fields of trades performed through the gateway. It is also used when creating [routing rules](config_route.md "Routing") for trade requests forwarded to the gateway.
C++
UINT64 IMTConGateway::ID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGateway.ID()  
---  
Python (Manager API)
MTConGateway.ID  
---  
Return Value
The gateway ID.
IMTConGateway::ID
Sets the gateway identifier. This ID is specified in the [IMTDeal::Dealer](imtdeal_dealer.md "Dealer") fields of trades performed through the gateway. It is also used when creating [routing rules](config_route.md "Routing") for trade requests forwarded to the gateway.
C++
MTAPIRES IMTConGateway::ID( UINT64 id // Gateway ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.ID( ulong id // Gateway ID )  
---  
Python (Manager API)
MTConGateway.ID  
---  
Parameters
name
[in] The identifier of a gateway.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The Gateway ID should be unique, it must not match any of existing [manager accounts](imtconmanager_login.md "Login"). When adding a new gateway or editing an existing one, the gateway ID is verified. If the ID value is invalid, gateway settings will not be added or updated accordingly.