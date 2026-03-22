# Leverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Leverage | [](imtuser_otpsecret.md "OTPSecret") [](imtuser_leadsource.md "LeadSource") |
| --- | --- | --- |
| --- | --- |

IMTUser::Leverage
Get the size of a client's leverage.
C++
UINT IMTUser::Leverage() const  
---  
.NET (Gateway/Manager API)
uint CIMTUser.Leverage()  
---  
Return Value
Client's leverage.
IMTUser::Leverage
Set the size of a client's leverage.
C++
MTAPIRES IMTUser::Leverage( const UINT leverage // Leverage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Leverage( uint leverage // Leverage )  
---  
Parameters
leverage
[in] The size of a client's leverage in the range from 1 to 5000.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.