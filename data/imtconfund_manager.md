# Manager (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Manager | [](imtconfund_server.md "Server") [](imtconfund_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Manager
Get the login of the manager responsible for the fund.
C++
UINT64 IMTConFund::Manager() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.Manager()  
---  
Return Value
The login of the manager ([IMTConManager::Login](imtconmanager_login.md "Login")) responsible for the fund.
IMTConFund::Manager
Set the login of the manager responsible for the fund.
C++
MTAPIRES IMTConFund::Manager( const UINT64 manager // Manager login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Manager( uint manager // Manager login )  
---  
Parameters
manager
[in] The login of the manager ([IMTConManager::Login](imtconmanager_login.md "Login")) responsible for the fund.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.