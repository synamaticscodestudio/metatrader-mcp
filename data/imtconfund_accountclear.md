# AccountClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ AccountClear | [](imtconfund_accountdelete.md "AccountDelete") [](imtconfund_accountshift.md "AccountShift") |
| --- | --- | --- |
| --- | --- |

IMTConFund::AccountClear
Clear the list of fund managers.
C++
MTAPIRES IMTConFund::AccountClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.AccountClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all managers from the fund.