# DealAction (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ DealAction | [](imtexecution_dealexternalid.md "DealExternalID") [](imtexecution_dealvolume.md "DealVolume") |
| --- | --- | --- |
| --- | --- |

IMTExecution::DealAction
Get the type (direction) of a deal.
C++
UINT IMTExecution::DealAction() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.DealAction()  
---  
Return Value
Deal direction - IMTDeal::DEAL_BUY or IMTDeal::DEAL_SELL.
IMTExecution::DealAction
Set the type (direction) of a deal.
C++
MTAPIRES IMTExecution::DealAction( const UINT action // Deal type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.DealAction( uint action // Deal type )  
---  
Parameters
action
[in] Deal type (direction) - IMTDeal::DEAL_BUY or IMTDeal::DEAL_SELL
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.