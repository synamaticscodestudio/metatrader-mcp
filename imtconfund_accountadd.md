# AccountAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ AccountAdd | [](imtconfund_statecurrentcaptital.md "StateCurrentCaptital") [](imtconfund_accountupdate.md "AccountUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::AccountAdd
Add a fund manager account.
C++
MTAPIRES IMTConSubscription::AccountAdd( IMTConFundAccount* account // Manager description )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.AccountAdd( CIMTConFundAccount account // Manager description )  
---  
Parameters
account
[in] The [IMTConFundAccount](imtconfundaccount.md "IMTConFundAccount") manager account object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.