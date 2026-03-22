# CurrencyDigits (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CurrencyDigits | [](imtcongroup_currency.md "Currency") [](imtcongroup_currencydigitsset.md "CurrencyDigitsSet") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CurrencyDigits
Get the number of digits after the decimal point in the group deposit currency.
C++
UINT IMTConGroup::CurrencyDigits() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroup.CurrencyDigits()  
---  
Python (Manager API)
MTConGroup.CurrencyDigits  
---  
Return Value
The number of digits after the decimal point in the group deposit currency.
Note
This parameter affects the display (number of digits after the decimal point) of the accounts' trading status in the terminals, including the balance, equity, margin, etc.
Use the [IMTConGroup::CurrencyDigitsSet](imtcongroup_currencydigitsset.md "CurrencyDigitsSet") method to set the accuracy of a deposit currency.