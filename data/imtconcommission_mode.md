# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ Mode | [](imtconcommission_path.md "Path") [](imtconcommission_rangemode.md "RangeMode") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::Mode
Get the type of commission.
C++
UINT IMTConCommission::Mode() const  
---  
.NET (Gateway/Manager API)
EnCommMode CIMTConCommission.Mode()  
---  
Python (Manager API)
MTConCommission.Mode  
---  
Return Value
One of the values of the [IMTConCommission::EnCommMode](imtconcommission_enum.htm#encommmode) enumeration.
IMTConCommission::Mode
Set the commission type.
C++
MTAPIRES IMTConCommission::Mode( const UINT mode // Type of commission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.Mode( EnCommMode mode // Type of commission )  
---  
Python (Manager API)
MTConCommission.Mode  
---  
Parameters
mode
[in] Type of commission. The [IMTConCommission::EnCommMode](imtconcommission_enum.htm#encommmode) enumeration is used to pass the commission type..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.