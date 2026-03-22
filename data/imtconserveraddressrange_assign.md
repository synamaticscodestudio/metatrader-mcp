# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAddressRange ](imtconserveraddressrange.md "IMTConServerAddressRange")/ Assign | [](imtconserveraddressrange_release.md "Release") [](imtconserveraddressrange_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAddressRange::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerAddressRange::Assign( const IMTConServerAddressRange* param // The source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAddressRange.Assign( CIMTConServerAddressRange param // The source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.