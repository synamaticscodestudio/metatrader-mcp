# From (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerRange ](imtconserverrange.md "IMTConServerRange")/ From | [](imtconserverrange_clear.md "Clear") [](imtconserverrange_to.md "To") |
| --- | --- | --- |
| --- | --- |

IMTConServerRange::From
Get the beginning of the range of accounts, orders or deals of a trade server.
C++
UINT64 IMTConServerRange::From() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConServerRange.From()  
---  
Python (Manager API)
MTConServerRange.From  
---  
Return Value
The beginning of the range of accounts, orders or deals of a trade server.
IMTConServerRange::From
Set the beginning of the range of accounts, orders or deals of a trade server.
C++
MTAPIRES IMTConServerRange::From( const UINT64 from // Beginning of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerRange.From( ulong from // Beginning of the range )  
---  
Python (Manager API)
MTConServerRange.From  
---  
Parameters
from
[in] Beginning of the range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.