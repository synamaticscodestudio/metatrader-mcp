# Currency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ Currency | [](imtcongroup_companywithdrawalpage.md "CompanyWithdrawalPage") [](imtcongroup_currencydigits.md "CurrencyDigits") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::Currency
Get the deposit currency of the group.
C++
LPCWSTR IMTConGroup::Currency() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.Currency()  
---  
Python (Manager API)
MTConGroup.Currency  
---  
Return Value
If successful, it returns a pointer to a string with the group deposit currency. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::Currency
Set the deposit currency of the group.
C++
MTAPIRES IMTConGroup::Currency( LPCWSTR currency // Deposit currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.Currency( string currency // Deposit currency )  
---  
Python (Manager API)
MTConGroup.Currency  
---  
Parameters
currency
[in] The group deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the currency name is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.