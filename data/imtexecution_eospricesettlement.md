# EOSPriceSettlement (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSPriceSettlement | [](imtexecution_eossessionend.md "EOSSessionEnd") [](imtexecution_eosprorfitratebuy.md "EOSProrfitRateBuy") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSPriceSettlement
Get the settlement (clearing) price of the session.
C++
double IMTExecution::EOSPriceSettlement() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.EOSPriceSettlement()  
---  
Return Value
The settlement price of the session.
IMTExecution::EOSPriceSettlement
Set the settlement (clearing) price of the session.
C++
MTAPIRES IMTExecution::EOSPriceSettlement( const double price // The settlement price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.EOSPriceSettlement( double price // The settlement price )  
---  
Parameters
price
[in] The settlement price of the session.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The settlement price of the session is used for generating a trade execution for the event of variation margin calculation and locking in daily returns ([IMTExecution::EOS_CALC_VARMARGIN](imtexecution_enum.htm#entradeexecutions)).