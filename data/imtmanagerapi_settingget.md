# SettingGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Settings Files ](imtmanagerapi_setting.md "Settings Files")/ SettingGet | [](imtmanagerapi_setting.md "Settings Files") [](imtmanagerapi_settingset.md "SettingSet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SettingGet
Receives the settings file from the trade server.
C++
MTAPIRES IMTManagerAPI::SettingGet( LPCWSTR section, // directory name LPCWSTR key, // file name LPVOID& outdata, // return data UINT& outdata_len // the size of the return data )  
---  
.NET
MTRetCode CIMTManagerAPI.SettingGet( string section, // directory name string key, // file name byte[] outdata // return data )  
---  
Python
ManagerAPI.SettingGet( section, # directory name key # file name )  
---  
Parameters
section
[in] The name of the subfolder in the manager account directory, from which you want to receive the settings file.
key
[in] The name of the settings file.
outdata
[out] A reference to the data returned in response to the request.
outdata_len
[out] A reference to the size of data returned in response to the request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code. For example:
  * [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") — invalid parameters, for example the name of the folder or file.
  * [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") — the requested file is not found.
  * [MT_RET_ERR_MEM](retcodes_common.md "Common errors") — not enough memory to receive the file.

Note
The path to the settings file is formed as follows: [trade server directory]\settings\\[manager login]\section\key. section and key — the first and the second parameters of the IMTManagerAPI::SettingGet method, manager login is the manager's account, using which the application is [connected to the trade server](imtmanagerapi_connect.md "Connect").
The format of the settings file and its parsing methods are determined by the file creator. IMTManagerAPI::Setting* methods work with arbitrary data.
After the use, the outdata data array must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.