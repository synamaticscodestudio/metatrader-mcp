# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Name | [](imtconfund_clear.md "Clear") [](imtconfund_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Name
Get the fund name.
C++
LPCWSTR IMTConFund::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConFund.Name()  
---  
Return Value
If successful, it returns a pointer to a string with the configuration name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFund](imtconfund.md "IMTConFund") object.
To use the string after the object removal (call of the [IMTConFund::Release](imtconfund_release.md "Release") method of this object), a copy of it should be created.
IMTConFund::Name
Set the fund name.
C++
MTAPIRES IMTConFund::Name( LPCWSTR name // Fund name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Name( srting name // Fund name )  
---  
Parameters
name
[in] Fund name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.