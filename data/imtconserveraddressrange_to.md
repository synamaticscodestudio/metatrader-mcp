# To (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAddressRange ](imtconserveraddressrange.md "IMTConServerAddressRange")/ To | [](imtconserveraddressrange_from.md "From") [](imtconserversink.md "IMTConServerSink") |
| --- | --- | --- |
| --- | --- |

IMTConServerAddressRange::To
Get the end of the range of IP addresses.
C++
LPCWSTR IMTConServerAddressRange::To() const  
---  
.NET (Gateway/Manager API)
string CIMTConServerAddressRange.To()  
---  
Return Value
The end of the range of IP addresses.
IMTConServerAddressRange::To
Set the end of the range of IP addresses.
C++
MTAPIRES IMTConServerAddressRange::To( LPCWSTR to // The end of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAddressRange.To( string to // The end of the range )  
---  
Parameters
to
[in] The end of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.