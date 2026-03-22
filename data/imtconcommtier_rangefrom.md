# RangeFrom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ RangeFrom | [](imtconcommtier_maximal.md "Maximal") [](imtconcommtier_rangeto.md "RangeTo") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::RangeFrom
Get the minimum trade volume (turnover) from which the commission will be charged.
C++
double IMTConCommTier::RangeFrom() const  
---  
.NET (Gateway/Manager API)
double CIMTConCommTier.RangeFrom()  
---  
Python (Manager API)
MTConCommTier.RangeFrom  
---  
Return Value
The minimum trade volume or turnover from which the commission will be charged. The type of range (trade volume or turnover) is defined using the [IMTConCommission::RangeMode](imtconcommission_rangemode.md "RangeMode") method.
IMTConCommTier::RangeFrom
Set the minimum trade volume (turnover) from which the commission will be charged.
C++
MTAPIRES IMTConCommTier::RangeFrom( const double value // Minimum volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.RangeFrom( double value // Minimum volume )  
---  
Python (Manager API)
MTConCommTier.RangeFrom  
---  
Parameters
value
[in] The minimum trade volume or turnover from which the commission will be charged. The type of range (trade volume or turnover) is defined using the [IMTConCommission::RangeMode](imtconcommission_rangemode.md "RangeMode") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.