# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Flags | [](imtconfund_manager.md "Manager") [](imtconfund_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Flags
Get additional fund properties.
C++
UINT IMTConFund::Flags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.Flags()  
---  
Return Value
Additional fund properties as flags from the [IMTConFund::EnFlags](imtconfund_enum.htm#enflags) enumeration.
IMTConFund::Flags
Set additional fund properties.
C++
MTAPIRES IMTConFund::Flags( const UINT flags // Flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Flags( uint flags // Flags )  
---  
Parameters
flags
[in] Additional fund properties as flags from the [IMTConFund::EnFlags](imtconfund_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.