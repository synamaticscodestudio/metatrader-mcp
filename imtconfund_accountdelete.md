# AccountDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ AccountDelete | [](imtconfund_accountupdate.md "AccountUpdate") [](imtconfund_accountclear.md "AccountClear") |
| --- | --- | --- |
| --- | --- |

IMTConFund::AccountDelete
Delete a fund manager account.
C++
MTAPIRES IMTConFund::AccountDelete( const UINT pos // Manager position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.AccountDelete( uint pos // Manager position )  
---  
Parameters
pos
[in] Manager position in the list, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.