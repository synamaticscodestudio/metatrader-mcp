# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ Flags | [](imtconaccountallocation_description.md "Description") [](imtconaccountallocation_leverages.md "Leverages") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::Flags
Get additional account allocation settings for the group.
C++
UINT IMTConAccountAllocation::Flags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAccountAllocation.Flags()  
---  
Return Value
[IMTConAccountAllocation::EnFlags](imtconaccountallocation_enum.htm#enflags) enumeration value.
IMTConAccountAllocation::Flags
Set additional account allocation settings for the group.
C++
MTAPIRES IMTConAccountAllocation::Flags( const UINT flags // Account allocation settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.Flags( uint flags // Account allocation settings )  
---  
Parameters
flags
[in] Account allocation settings are passed using the [IMTConAccountAllocation::EnFlags](imtconaccountallocation_enum.htm#enflags) enumeration.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.