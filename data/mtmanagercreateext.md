# MTManagerCreateExt (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Exported Functions ](managerapi_exported.md "Exported Functions")/ MTManagerCreateExt | [](mtmanagercreate.md "MTManagerCreate") [](mtadmincreate.md "MTAdminCreate") |
| --- | --- | --- |
| --- | --- |

MTManagerCreateExt
The MTManagerCreateExt exported function creates a new [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface instance and returns a pointer to it. The directory where Manager API is to store its data is additionally specified.
MTAPIRES MTManagerCreateExt( UINT api_version // API version LPCWSTR datapath, // data folder IMTManagerAPI** manager // pointer to the pointer to the interface )  
---  
Parameters
api_version
[out] The current version of Manager API supported by the server is passed in this parameter.
datapath
[in] The absolute path to the directory where Manager API is to store its data (local cache, journals, etc.) is additionally specified. If NULL, the application stores data in the directory it is launched from.
manager
[out] A pointer to the pointer to the created [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
By default, Manager API stores its data in the directory it is launched from. In some cases, the need arises to re-define the data folder, for example, if the application is installed to Program Files of MS Windows Vista or higher. By default, applications installed to Program Files are not allowed to write their data to the installation folder in these systems. In this case, use a special directory in [system disk letter]:\Users\\[account name in OS]\AppData\Roaming\\[application data folder], for example, C:\Users\JohnSmith\AppData\Roaming\ManagerAPIApp.
The Manager API application can use separate data directories for each manager and administrator interface (to store the local data cache). However, the application log is always written to only one data directory, which is specified during creation of the first interface (no matter whether it is a manager or an administrator interface).
For example, the first interface is created via [MTManagerCreate](mtmanagercreate.md "MTManagerCreate"). The path to the data directory is not specified in this function, so the application log will be stored in the default directory, i.e. in the Logs folder of the directory, in which MT5APIManager.dll is located. The log storage location will not be changed even if you explicitly specify a custom data directory when creating the second interface via [MTAdminCreateExt](mtadmincreateext.md "MTAdminCreateExt").