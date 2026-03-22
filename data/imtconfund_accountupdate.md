# AccountUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ AccountUpdate | [](imtconfund_accountadd.md "AccountAdd") [](imtconfund_accountdelete.md "AccountDelete") |
| --- | --- | --- |
| --- | --- |

IMTConFund::AccountUpdate
Update a fund manager account.
C++
MTAPIRES IMTConFund::AccountUpdate( const UINT pos, // Manager position const IMTConFundAccount* symbol // Manager description )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.AccountUpdate( uint pos, // Manager position CIMTConFundAccount symbol // Manager description )  
---  
Parameters
pos
[in] Position of a manager account in the list, starting at 0.
news
[in] Symbol object [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.