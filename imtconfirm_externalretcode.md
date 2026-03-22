# ExternalRetcode (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ ExternalRetcode | [](imtconfirm_actiongateway.md "ActionGateway") [](imtexecution.md "IMTExecution") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::ExternalRetcode
Gets the code of response from an external trading system.
C++
int IMTConfirm::ExternalRetcode() const  
---  
.NET (Gateway/Manager API)
int CIMTConfirm.ExternalRetcode()  
---  
Return Value
Response code.
Note
It is used to provide extended information about the operation execution result on the exchange. For example, it allows you to find out the reason for order rejection. On the client terminal side, the response code can be obtained using MqlTradeResult.external_retcode in MQL5.
Each trading system uses its own response codes.
IMTConfirm::ExternalRetcode
Sets the code of response from an external trading system.
C++
MTAPIRES IMTConfirm::ExternalRetcode( const int retcode // Response code )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.ExternalRetcode( int retcode // Response code )  
---  
Parameters
id
[in] Response code.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
It is used to provide extended information about the operation execution result on the exchange. For example, it allows you to find out the reason for order rejection. On the client terminal side, the response code can be obtained using MqlTradeResult.external_retcode in MQL5.
Each trading system uses its own response codes.