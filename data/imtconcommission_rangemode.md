# RangeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ RangeMode | [](imtconcommission_mode.md "Mode") [](imtconcommission_chargemode.md "ChargeMode") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::RangeMode
Get the type of commission ranges - by trade volume or turnover.
C++
UINT IMTConCommission::RangeMode() const  
---  
.NET (Gateway/Manager API)
EnCommRangeMode CIMTConCommission.RangeMode()  
---  
Python (Manager API)
MTConCommission.RangeMode  
---  
Return Value
One of the values of the [IMTConCommission::EnCommRangeMode](imtconcommission_enum.htm#encommrangemode) enumeration.
IMTConCommission::RangeMode
Set the type of commission ranges - by trade volume or turnover.
C++
MTAPIRES IMTConCommission::RangeMode( const UINT mode // Type of commission ranges )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.RangeMode( EnCommRangeMode mode // Type of commission ranges )  
---  
Python (Manager API)
MTConCommission.RangeMode  
---  
Parameters
mode
[in] Type of commission ranges. The [IMTConCommission::EnCommRangeMode](imtconcommission_enum.htm#encommrangemode) enumeration is used to pass the commission ranges..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.