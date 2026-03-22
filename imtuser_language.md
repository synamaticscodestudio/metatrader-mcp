# Language (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Language | [](imtuser_country.md "Country") [](imtuser_city.md "City") |
| --- | --- | --- |
| --- | --- |

IMTUser::Language
Get the user's language.
C++
UINT IMTUser::Language() const  
---  
.NET (Gateway/Manager API)
uint CIMTUser.Language()  
---  
Return Value
User's language.
IMTUser::Language
Set the user's language.
C++
MTAPIRES IMTUser::Language( const UINT language // Language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Language( uint language // Language )  
---  
Parameters
language
[in] The user's language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) (value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.