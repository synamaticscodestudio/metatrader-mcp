# From (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAddressRange ](imtconserveraddressrange.md "IMTConServerAddressRange")/ From | [](imtconserveraddressrange_clear.md "Clear") [](imtconserveraddressrange_to.md "To") |
| --- | --- | --- |
| --- | --- |

IMTConServerAddressRange::From
Get the beginning of the range of IP addresses.
C++
LPCWSTR IMTConServerAddressRange::From() const  
---  
.NET (Gateway/Manager API)
string CIMTConServerAddressRange.From()  
---  
Return Value
The beginning of the range of IP addresses.
IMTConServerAddressRange::From
Set the beginning of the range of IP addresses.
C++
MTAPIRES IMTConServerAddressRange::From( LPCWSTR from // The beginning of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAddressRange.From( string from // The beginning of the range )  
---  
Parameters
from
[in] The beginning of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.