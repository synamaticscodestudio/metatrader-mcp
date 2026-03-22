# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReport ](imtconreport.md "IMTConReport")/ Server | [](imtconreport_name.md "Name") [](imtconreport_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConReport::Server
Get the ID of the server on which the report is installed.
C++
UINT64 IMTConReport::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConReport.Server()  
---  
Python (Manager API)
MTConReport.Server  
---  
Return Value
The ID of the server on which the report is installed.
IMTConReport::Server
Set the ID of the server.
C++
MTAPIRES IMTConReport::Server( const UINT64 server // Server ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReport.Server( ulong server // Server ID )  
---  
Python (Manager API)
MTConReport.Server  
---  
Parameters
server
[in] Server ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.