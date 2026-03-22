# MTManagerVersion (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Exported Functions ](managerapi_exported.md "Exported Functions")/ MTManagerVersion | [](managerapi_exported.md "Exported Functions") [](mtmanagercreate.md "MTManagerCreate") |
| --- | --- | --- |
| --- | --- |

MTManagerVersion
The exported function MTManagerVersion returns the version of the Manager API library.
MTAPIRES MTManagerVersion( UINT& version // Reference to the version of the Manager API )  
---  
Parameters
version
[in] A reference to the version of the Manager API library.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.