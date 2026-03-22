# SettingDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Settings Files ](imtmanagerapi_setting.md "Settings Files")/ SettingDelete | [](imtmanagerapi_settingset.md "SettingSet") [](imtmanagerapi_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SettingDelete
Deletes the settings file on the trade server.
C++
MTAPIRES IMTManagerAPI::SettingDelete( LPCWSTR section, // directory name LPCWSTR key // file name )  
---  
.NET
MTRetCode CIMTManagerAPI.SettingDelete( string section, // directory name string key // file name )  
---  
Python
ManagerAPI.SettingDelete( section, # directory name key # file name )  
---  
Parameters
section
[in] The name of the subfolder in the manager account directory, from which you want to delete the settings file.
key
[in] The name of the settings file.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") response code means that invalid parameters were passed: the name of the folder or the file.