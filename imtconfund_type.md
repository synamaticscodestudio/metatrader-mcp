# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Type | [](imtconfund_flags.md "Flags") [](imtconfund_recalculation.md "Recalculation") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Type
Get the fund type.
C++
UINT IMTConFund::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.Type()  
---  
Return Value
Fund type as a value of the [IMTConFund::EnType](imtconfund_enum.htm#entype) enumeration.
IMTConFund::Type
Set the fund type.
C++
MTAPIRES IMTConFund::Type( const UINT type // Fund type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Type( uint type // Fund type )  
---  
Parameters
type
[in] Fund type as a value of the [IMTConFund::EnType](imtconfund_enum.htm#entype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.