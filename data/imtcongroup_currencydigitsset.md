# CurrencyDigitsSet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CurrencyDigitsSet | [](imtcongroup_currencydigits.md "CurrencyDigits") [](imtcongroup_reportsmode.md "ReportsMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CurrencyDigitsSet
Set the number of digits after the decimal point in the group deposit currency.
C++
MTAPIRES IMTConGroup::CurrencyDigitsSet( UINT digits // accuracy of a deposit currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CurrencyDigitsSet( uint digits // accuracy of a deposit currency )  
---  
Python (Manager API)
MTConGroup.CurrencyDigits  
---  
Parameters
digits
[in] The number of digits after the decimal point in the group deposit currency. The valid values are 0-8.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The accuracy is predetermined for standard currencies, such as USD, EUR, GBP, JPY, CHF, RUR, etc. It cannot be changed. If attempting to do this, the server returns the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error. The method is intended for use with more exotic deposit currencies, like bitcoin (BTC).
This parameter affects the display (number of digits after the decimal point) of the accounts' trading status in the terminals, including the balance, equity, margin, etc.
Use the [IMTConGroup::CurrencyDigits](imtcongroup_currencydigits.md "CurrencyDigits") method to get the accuracy of a deposit currency.