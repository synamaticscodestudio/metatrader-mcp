# MTManagerCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Exported Functions ](managerapi_exported.md "Exported Functions")/ MTManagerCreate | [](mtmanagerversion.md "MTManagerVersion") [](mtmanagercreateext.md "MTManagerCreateExt") |
| --- | --- | --- |
| --- | --- |

MTManagerCreate
The MTManagerCreate exported function creates a new instance of the [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface and returns a pointer to it.
MTAPIRES MTManagerCreate( UINT api_version // API version IMTManagerAPI** manager // A pointer to the pointer to the interface )  
---  
Parameters
api_version
[out] The current version of Manager API supported by the server is passed in this parameter.
manager
[out] A pointer to the pointer of the created [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The Manager API application can use separate data directories for each manager and administrator interface (to store the local data cache). However, the application log is always written to only one data directory, which is specified during creation of the first interface (no matter whether it is a manager or an administrator interface).
For example, the first interface is created via MTManagerCreate. The path to the data directory is not specified in this function, so the application log will be stored in the default directory, i.e. in the Logs folder of the directory, in which MT5APIManager.dll is located. The log storage location will not be changed even if you explicitly specify a custom data directory when creating the second interface via [MTAdminCreateExt](mtadmincreateext.md "MTAdminCreateExt").
Calling MTMangerCreate is equivalent to calling [MTMangerCreateExt](mtmanagercreateext.md "MTManagerCreateExt") with the parameter datapath=NULL.