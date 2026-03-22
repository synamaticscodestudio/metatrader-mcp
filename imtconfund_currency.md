# Currency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Currency | [](imtconfund_maxcapital.md "MaxCapital") [](imtconfund_maxinvestors.md "MaxInvestors") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Currency
Get the currency in which the [maximum fund investment amount](imtconfund_maxcapital.md "MaxCapital") is specified.
C++
LPCWSTR IMTConFund::Currency() const  
---  
.NET (Gateway/Manager API)
string CIMTConFund.Currency()  
---  
Return Value
If successful, the method returns a pointer to a string with the currency name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFund](imtconfund.md "IMTConFund") object.
To use the string after the object removal (call of the [IMTConFund::Release](imtconfund_release.md "Release") method of this object), a copy of it should be created.
IMTConFund::Name
Set the currency in which the [maximum fund investment amount](imtconfund_maxcapital.md "MaxCapital") is specified.
C++
MTAPIRES IMTConFund::Currency( LPCWSTR currency // Currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Currency( srting currency // Currency )  
---  
Parameters
currency
[in] The currency in which the maximum fund investment amount is specified.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 16 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.