# ID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ ID | [](imtconfirm_print.md "Print") [](imtconfirm_retcode.md "Retcode") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::ID
Get the ID of a trade request.
C++
UINT IMTConfirm::ID() const  
---  
.NET (Gateway/Manager API)
uint CIMTConfirm.ID()  
---  
Return Value
The ID of a trade request.
IMTConfirm::ID
Set the ID of a trade request.
C++
MTAPIRES IMTConfirm::ID( const UINT id // Request ID ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.ID( uint id // Request ID )  
---  
Parameters
id
[in] Trade request ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.