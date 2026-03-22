# Currency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundAccount ](imtconfundaccount.md "IMTConFundAccount")/ Currency | [](imtconfundaccount_equity.md "Equity") [](imtconfundaccount_currencydigits.md "CurrencyDigits") |
| --- | --- | --- |
| --- | --- |

IMTConFundAccount::Currency
Get the currency in which manager account [balance](imtconfundaccount_balance.md "Balance") and [equity](imtconfundaccount_equity.md "Equity") are specified.
C++
LPCWSTR IMTConFundAccount::Currency() const  
---  
.NET (Gateway/Manager API)
string CIMTConFundAccount.Currency()  
---  
Return Value
If successful, the method returns a pointer to a string with the currency name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFundAccount](imtconfundaccount.md "IMTConFundAccount") object.
To use the string after the object removal (call of the [IMTConFund::Release](imtconfundaccount_release.md "Release") method of this object), a copy of it should be created.