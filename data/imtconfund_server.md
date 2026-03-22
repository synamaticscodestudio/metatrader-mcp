# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Server | [](imtconfund_symbolassets.md "SymbolAssets") [](imtconfund_manager.md "Manager") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Server
Get the identifier of the trade server on which the fund is managed.
C++
UINT64 IMTConFund::Server() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.Server()  
---  
Return Value
The identifier of the trade server ([IMTConServer::ID](imtconserver_id.md "Id")) on which the fund is managed.
IMTConFund::Server
Set the identifier of the trade server on which the fund is managed.
C++
MTAPIRES IMTConFund::Server( const UINT64 server // Server ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Server( uint server // Server ID )  
---  
Parameters
server
[in] The identifier of the trade server ([IMTConServer::ID](imtconserver_id.md "Id")) on which the fund is managed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.