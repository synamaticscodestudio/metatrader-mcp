# Equity (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundAccount ](imtconfundaccount.md "IMTConFundAccount")/ Equity | [](imtconfundaccount_balance.md "Balance") [](imtconfundaccount_currency.md "Currency") |
| --- | --- | --- |
| --- | --- |

IMTConFundAccount::Equity
Get the current equity of the account used for fund management.
C++
double IMTConFundAccount::Equity() const  
---  
.NET (Gateway/Manager API)
double CIMTConFundAccount.Equity()  
---  
Return Value
The current equity of the account used for fund management.
Note
The currency in which the value is specified, is determined by the [IMTConFundAccount::Currency](imtconfundaccount_currency.md "Currency") property.