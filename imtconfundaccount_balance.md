# Balance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundAccount ](imtconfundaccount.md "IMTConFundAccount")/ Balance | [](imtconfundaccount_name.md "Name") [](imtconfundaccount_equity.md "Equity") |
| --- | --- | --- |
| --- | --- |

IMTConFundAccount::Balance
Get the current balance of the account used for fund management.
C++
double IMTConFundAccount::Balance() const  
---  
.NET (Gateway/Manager API)
double CIMTConFundAccount.Balance()  
---  
Return Value
The current balance of the account used for fund management.
Note
The currency in which the value is specified, is determined by the [IMTConFundAccount::Currency](imtconfundaccount_currency.md "Currency") property.