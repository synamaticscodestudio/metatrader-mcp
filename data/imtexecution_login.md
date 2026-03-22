# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Login | [](imtexecution_datetimemsc.md "DatetimeMsc") [](imtexecution_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Login
Gets a client login in the MetaTrader 5 platform.
C++
UINT64 IMTExecution::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.Login()  
---  
Return Value
The login of a client in the MetaTrader 5 platform.
Note
This field in a trade execution is optional.
IMTExecution::Login
Sets a client login in the MetaTrader 5 platform.
C++
MTAPIRES IMTExecution::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Login( ulong login // Login )  
---  
Parameters
login
[in] The login of a client in the MetaTrader 5 platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This field in a trade execution is optional.