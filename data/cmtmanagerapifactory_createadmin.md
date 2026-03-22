# CreateAdmin (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ CMTManagerAPIFactory ](cmtmanagerapifactory.md "CMTManagerAPIFactory")/ CreateAdmin | [](cmtmanagerapifactory_createmanager.md "CreateManager") [](cmtmanagerapifactory_version.md "Version") |
| --- | --- | --- |
| --- | --- |

CMTManagerAPIFactory::CreateAdmin
Create the administrator interface [IMTAdminAPI](imtadminapi.md "Administrator Interface").
C++
MTAPIRES CMTManagerAPIFactory::CreateAdmin( UINT version, // Version IMTAdminAPI** admin // A pointer to the administrator interface )  
---  
.NET
CIMTAdminAPI SMTManagerAPIFactory.CreateAdmin( uint version, // Version out MTRetCode res // Response code )  
---  
Parameters
version
[in] Version of the MT5APIManager.h header file
admin
[out] A pointer to the administrator interface [IMTAdminAPI](imtadminapi.md "Administrator Interface").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The Manager API application can use separate data directories for each manager and administrator interface (to store the local data cache). However, the application log is always written to only one data directory, which is specified during creation of the first interface (no matter whether it is a manager or an administrator interface).
For example, the first interface is created through the first version of CMTManagerAPIFactory::CreateAdmin, in which the path to the data directory is not specified. The application log will be stored in the default directory, i.e. in the Logs folder of the directory, in which MT5APIManager.dll is located. The log storage location will not be changed even if you explicitly specify a custom data directory when creating the second interface.
CMTManagerAPIFactory::CreateAdmin
Creating the [IMTAdminAPI](imtadminapi.md "Administrator Interface") administrator interface specifying the directory where Manager API application data are to be stored.
C++
MTAPIRES CMTManagerAPIFactory::CreateAdmin( UINT version, // version LPCWSTR datapath, // data folder IMTAdminAPI** admin // pointer to the administrator interface )  
---  
.NET
CIMTAdminAPI SMTManagerAPIFactory.CreateAdmin( uint version, // version string datapath, // data folder out MTRetCode res // response code )  
---  
Parameters
version
[in] Version of the MT5APIManager.h header file
datapath
[in] The absolute path to the directory where Manager API is to store its data (local cache, journals, etc.) is additionally specified. If NULL, the application stores data in the directory it is launched from.
admin
[out] A pointer to the administrator interface [IMTAdminAPI](imtadminapi.md "Administrator Interface").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
By default, Manager API stores its data in the directory it is launched from. In some cases, the need arises to re-define the data folder, for example, if the application is installed to Program Files of MS Windows Vista or higher. By default, applications installed to Program Files are not allowed to write their data to the installation folder in these systems. In this case, use a special directory in [system disk letter]:\Users\\[account name in OS]\AppData\Roaming\\[application data folder], for example, C:\Users\JohnSmith\AppData\Roaming\ManagerAPIApp.
The Manager API application can use separate data directories for each manager and administrator interface (to store the local data cache). However, the application log is always written to only one data directory, which is specified during creation of the first interface (no matter whether it is a manager or an administrator interface).
For example, the first interface is created through the first version of CMTManagerAPIFactory::CreateAdmin, in which the path to the data directory is not specified. The application log will be stored in the default directory, i.e. in the Logs folder of the directory, in which MT5APIManager.dll is located. The log storage location will not be changed even if you explicitly specify a custom data directory when creating the second interface.